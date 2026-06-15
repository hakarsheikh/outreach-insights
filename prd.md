## Overview

### Problem Statement

Agency managers have no visibility into Outreach Insights renewal email activity: who's sending, what's being delivered, and what's sitting unactioned as effective dates approach.

This data exists across Databricks and internal tooling, but today only reaches a handful of customers as a weekly Slack digest hand-built by CSM and product. It isn't self-serve and doesn't scale.

**Why it matters**

- **Customer blocker:** McLean & Dickey won't go live until they can see delivery failures — an undelivered renewal email they can't detect is a direct E&O liability.
- **Retention risk:** Manager trust in the platform depends on proof it's working. One skeptical manager, unsupported by data, can result in churn.
- **Operational risk:** No visibility into user adoption or unactioned renewals means managers can't intervene before a renewal is missed.
- **CSM toil:** The manual weekly report doesn't scale.

### Proposed Work

**Outreach Insights** is a new tab in the Dashboard page, next to Policy Renewal and Requoting, that gives managers visibility into email delivery metrics and team performance. It has two areas:

- A **KPI row** at the top with six metric tiles: Active Users, Send Rate, Time to Complete, Delivery Rate, Undelivered Rate, and Open Rate.
- A **Team Insights** section with a Performance table (per-user), an Outreach Activity Status chart (stacked bar), and an Activity table (per-policy drill-down).

Manager is the first persona; a dedicated user insights view is future work.

Two dimensions of data are tracked:

- **Policy action** — what the user did: **Review** (not yet actioned) or **Completed** (Email Sent · Called · Mailed · SMS · No Action Required)
- **Email delivery** — what happened to a sent email: Delivered · Undelivered · Opened (via Mailgun)

All metrics are attributed to the **actual sender** (the Quandri user). The same status model surfaces in two places: the Outreach Insights dashboard (aggregate view for managers) and the **policies table** (per-row, actionable by users).

## Success Criteria

### Customer Success

- A **Manager** can see active users, per-user activity, deliverability, and outreach timing in-app and export it, proving Connect's value without custom reports.
- A **Manager** can spot overdue renewals and coach on outreach timing.
- A **Manager** can act on undelivered emails so clients are actually contacted.

### Business Success

- **Unlock at-risk go-lives** — customers gating their launch on deliverability visibility (McLean & Dickey is the known blocker) can complete onboarding. Direct revenue impact. — **[TO FILL: target & timeframe]**
- **Reduce churn risk from visibility gaps** — managers who cannot prove Connect's value to leadership are a retention signal. Outreach Insights is the proof layer that closes that gap. — **[TO FILL: target]**
- **CSM efficiency** — eliminate the manual weekly report currently built by hand. — **[TO FILL: hours saved per CSM per week]**
- **Drive Connect expansion** — visibility builds trust, trust drives broader team adoption of Connect, which improves retention and ACV. — **[TO FILL: target]**

## Customer Validation

- Customer interviews (5+ customers, incl. KRG, FNIC, Robertson Ryan, AAA, McLean & Dickey, Union Bay, Empire) — customers need far more than "sent": the full status split, per-sender visibility, deliverability, and timing. The driver is trust and proving value.
- Internal stakeholder feedback (Product / CX / Implementation)
- [x]  MJ
- [ ]  Jon
- [ ]  Janel
- [x]  Brigitte
- An interactive prototype was built and iterated through several internal reviews. That feedback drove the status-model rework, the two-section structure, the move to Time to Complete, the two-bucket outreach timing, and dropping the hours/dollars-saved tiles.
- Customer feedback on the approach

## User Stories

### Manager

- I want to see how many users are actively using Connect so I can prove adoption and support the renewal.
- I want per-user activity by the actual sender so I can coach the team.
- I want deliverability health (undelivered emails) so I can trust clients are reached and act on issues.
- I want to see overdue and near-due renewals so I can hold the team to outreach standards.
- I want to click a user and see their individual policy activity so I can diagnose issues without digging through logs.
- I want to export so I can build the value story for leadership and QBRs.

## Scope

### Requirements

### Data model

A Connect item carries 2 independent dimensions:

- A task tracker status: the status of the policy renewal in Quandri that a user needs to do.
- Email delivery status: the status of the email once sent by the user.

Two top-level states: **Review** and **Completed**. Completed breaks down by method.

### Policy Action Statuses

| State | Current | Type | Meaning | Implement |
| --- | --- | --- | --- | --- |
| Review | Review Email | — | Generated, not yet actioned by the user. The gap managers watch. This terminology will scale in the future for re-quotes as well rather than being email specific | Now |
| Completed | Sent | Email Sent | User sent the email via Connect | Now |
| Completed |  | Called | User called the client | Now |
| Completed |  | Mailed | User sent physical mail | Now |
| Completed |  | SMS | User texted the client | Now |
| Completed | Email Skipped | No Action Required | Reviewed; no outreach needed (formerly "Skip") | Now |

### Email Delivery Statuses

| Status | Meaning |
| --- | --- |
| Delivered | Received by the recipient's mail server |
| Undelivered | Email did not reach the recipient — covers delivery failures, spam complaints, and unsubscribes |
| Opened | Recipient opened the email |

#### Undelivered reasons

The raw reason is surfaced per-policy in the Activity table. Reasons are sourced directly from Mailgun and mapped to user-facing labels as follows:

| User-facing reason | What it means | Mailgun event | Mailgun reason | Severity | How to identify |
| --- | --- | --- | --- | --- | --- |
| Address doesn't exist | The recipient's email address is invalid or no longer active. The receiving server confirmed it doesn't exist. | failed | bounce | permanent | `delivery-status.bounce-type: "hard"` · SMTP 550 · enhanced 5.1.1 |
| Inbox temporarily unavailable | The recipient's mailbox was temporarily unavailable — usually a full inbox or a brief issue on their mail server. Delivery was retried multiple times without success. | failed | generic | temporary | SMTP 421 or 451 · `delivery-status.retry-seconds` will be set |
| Delivery timed out | We attempted delivery over an extended period but the recipient's server remained unreachable. No further attempts will be made. | failed | old | permanent | `delivery-status.code: 602` · message: "Too old" · last temp failure code included |
| Previously failed address | This address failed to receive email in a previous send. It has been blocked from receiving further emails until manually reviewed. | failed | suppress-bounce | permanent | Dropped before delivery attempt · message: "Not delivering to previously bounced address" |
| Recipient unsubscribed | The recipient opted out of emails from you. Sending to this address has been stopped to honour their preference. | failed | suppress-unsubscribe | permanent | Dropped before delivery attempt · address is on the unsubscribe suppression list |
| Marked as spam | The recipient flagged a previous email from you as spam. Sending to this address has been stopped to protect your sender reputation. | failed | suppress-complaint | permanent | Dropped before delivery attempt · address is on the complaint suppression list |
| Malformed address | The email address appears to be incorrectly formatted or contain a typo. It couldn't be routed to a valid mailbox. | failed | bounce | permanent | SMTP 553 or 501 · message contains "Relaying Denied" or "Unrouteable address" |
| Domain can't receive email | The domain in the recipient's email address has no mail server configured. It is unable to receive any emails. | failed | generic | permanent | `delivery-status.code` present · message: "No MX for [domain]" |
| Blocked by recipient's provider | The recipient's email provider rejected the email, likely due to spam filtering or a policy block on your sending domain or IP. | failed | espblock | permanent | SMTP 550 or 554 · message references spam policy or blocklist |

#### Data ingestion — Mailgun event delivery

- **Primary: Webhooks**

Mailgun sends real-time event payloads to a registered webhook endpoint for each of: `delivered`, `failed`, `complained`, `unsubscribed`, `opened`. The backend processes each payload and updates the delivery status on the corresponding policy record.

Relevant webhook events to subscribe to:

| Mailgun event | Maps to |
| --- | --- |
| `delivered` | Delivery Status: Delivered |
| `failed` | Delivery Status: Undelivered + raw reason stored |
| `complained` | Delivery Status: Undelivered (reason: Marked as spam) |
| `unsubscribed` | Delivery Status: Undelivered (reason: Recipient unsubscribed) |
| `opened` | Delivery Status: Opened |
- **Fallback: Mailgun Events API polling**

Webhooks can be missed due to network issues, downtime, or misconfiguration. A reconciliation job must run on a schedule to backfill any gaps:

- Query the Mailgun Events API for events since the last successfully processed webhook timestamp.
- Reconcile returned events against existing policy records and apply any missing status updates.
- Recommended schedule: every 15 minutes, with a lookback window of 1 hour to account for delayed delivery.
- The Mailgun Suppressions API should also be checked on a daily basis to ensure suppression-based statuses (suppress-bounce, suppress-unsubscribe, suppress-complaint) remain in sync.

### Due Soon & Overdue

Not a status — a time-based flag spanning the other dimensions. Two buckets managers act on:

| Bucket | Meaning |
| --- | --- |
| Due Soon | Policies approaching their effective date within 7 days |
| Overdue | Effective date has passed with no outreach completed |

---

### Functional requirements

- Status model as above — **Review & Completed (Email Sent · Called · Mailed · SMS · No Action Required)**.
- All metrics and breakdowns by the **actual sender** (the Quandri user who sent/completed the item), not the AMS assignee.
- **Active Users** = % of users (role: user) who sent or completed ≥1 item in the period. Only accounts with the "user" role type are included in this calculation, managers and other role types are excluded.
- **Send Rate** = % of processed policies with a Connect email sent.
- **Deliverability from Mailgun**: delivery rate and **undelivered rate** (single user-facing Undelivered status covering delivery failures, complaints, and unsubscribes; hard vs. soft kept internal), plus the raw undelivered reason per email.
- **Open rate** (requires tracking enabled).
- **Time to Complete** — average time from when a policy is successfully processed by Quandri to when outreach is completed by the user.
- **Email Edit Rate** — % of sent emails edited before sending.
- **Due Soon** and **Overdue** — surfaced as columns in the Performance table only.
- **Per-policy drill-down** (Activity table): customer name, policy ID, effective date, user, user action, status, delivery status, undelivered reason. Each row links to the policy page filtered by policy ID: `https://app.goquandri.io/connect/review/{id}/?activePolicyId={uuid}`
- **Export to CSV** at the table level (Performance and Activity separately).
- **Conditional formatting** — Performance table cells are color-coded by severity to surface at-risk users at a glance. See thresholds below.
- Manager dashboard is the v1 surface. User view is future work.

### Conditional formatting thresholds

Two severity tiers surface at-risk users in the Performance table at a glance:

| Tier | Color | Meaning |
| --- | --- | --- |
| Warning | Amber | Needs attention |
| Critical | Red | Requires immediate action |

**Review + Send Rate — combined signal**

Review and Send Rate are highlighted together, not independently. A user is only flagged when *both* conditions are true simultaneously — this avoids false positives for users completing via phone or other non-email methods.

| Condition | Amber | Red |
| --- | --- | --- |
| Unactioned rate (Review ÷ (Review + Completed)) | ≥ 40% | ≥ 70% |
| Send Rate | ≤ 50% | ≤ 25% |

Both the Review cell and the Send Rate cell highlight when their respective tier is triggered. If both cells are flagged on the same row, the entire row is highlighted.

**Remaining columns**

| Column | Amber | Red |
| --- | --- | --- |
| Time to Complete | ≥ 3d | ≥ 5d |
| Due Soon | ≥ 5 | ≥ 10 |
| Overdue | ≥ 2 | ≥ 5 |

Overdue thresholds are intentionally strict — an overdue policy means a renewal was missed, so the signal should be sensitive. Completed, Undelivered, and Email Edit Rate have no conditional formatting.

### Policies table

The policies table (Connect page) surfaces the same status model per row, replacing any prior status display:

- **Policy action status** — shows Review or Completed. For Completed rows, the user can select or change the completion type (Email Sent · Called · Mailed · SMS · No Action Required) directly from the table.
- **Email delivery status** — shows Delivered · Undelivered · Opened for rows where an email was sent.
- These columns are the source of truth that feeds all Outreach Insights metrics.

---

### Outreach Insights — what's shown

**KPI Tiles**

| Tile | Dimension |
| --- | --- |
| Active Users | Policy action |
| Send Rate | Policy action |
| Time to Complete | Policy action |
| Delivery Rate | Email delivery |
| Undelivered Rate | Email delivery |
| Open Rate | Email delivery |

**Chart**

| Chart | Format | What it shows |
| --- | --- | --- |
| Outreach Activity Status | Stacked bar | Volume of policy outreaches completed vs. still in Review over time |

**Tables**

| Table | Columns |
| --- | --- |
| Performance | User · Completed · Review · Send Rate · Undelivered · Time to Complete · Email Edit Rate · Due Soon · Overdue. Sortable. Per-table CSV export. |
| Activity (per-policy drill-down) | Customer Name · Policy ID · Effective Date · User · User Action · Status · Delivery Status · Undelivered Reason. Filterable by User Action, Status, and Delivery Status. Each row links to the policy page. Per-table CSV export. |

### Metrics & Definitions

| Metric | Definition |
| --- | --- |
| Review | Connect email is ready but hasn't been sent or actioned yet. |
| Completed | Outreach is complete — email sent, called, mailed, texted, or no action needed. |
| Email Sent | The renewal email was sent to the client through Connect. |
| No Action Required | Reviewed and confirmed — no outreach needed for this policy. |
| Active Users | % of users who took at least one outreach action this period. |
| Send Rate | % of processed policies with a Connect email sent. |
| Delivery Rate | % of emails sent from Quandri that were successfully delivered to the recipient. |
| Undelivered | Email did not deliver — covers delivery failures, spam complaints, and unsubscribes. |
| Undelivered Rate | % of sent emails that failed to deliver, including invalid addresses, inbox issues, provider blocks, and opt-outs. |
| Open Rate | % of delivered emails opened by the recipient. Requires email tracking to be enabled. |
| Time to Complete | Average time from when a policy is successfully processed by Quandri to when outreach is completed by the user. |
| Email Edit Rate | % of emails customized before sending. |
| Effective Date | The date the policy renewal takes effect. Surfaced per-policy in the Activity table. |
| Due Soon | Policies approaching their effective date within 7 days. |
| Overdue | Effective date has passed with no outreach completed. |

### Future Work

- **Outreach Timing metric** — Removed from v1. We need to learn more about how to best surface and report on this metric before committing to a specific display. Time to Complete is a good proxy for now. Will revisit alongside additional completion types and richer timing data.
- **Email Diff %** — % difference between the generated email and what was sent, as a proxy for effort/time spent. Parked for v1.
- Dedicated **user analytics view** (beyond the interim failed-delivery handling in the manager surface).
- **Mail-shop integration** (physical mail for a fee) — sending infrastructure for Mailed completion type.
- Merge into the **broader multi-product dashboard** (Analyze · Recording · Connect).
- **Normalization** of raw undelivered reasons.
- **Hours saved / dollars saved** value tiles — removed from v1; revisit for a cross-product Overview.
- **Daily email digest** of metrics — **[TO CONFIRM: v1 or future]**.

### Non-Requirements

- **Response rate** and inbound reply tracking — no email integration.
- **Click rate** — dropped.
- **Spam complaint rate** and **unsubscribe rate** — available from Mailgun but out of scope for v1.

## Designs

- 

## Success Metrics

| Metric | Baseline | Direction | Type |
| --- | --- | --- | --- |
| Deliverability-gated customers blocked | McLean & Dickey on temporary workaround | To zero | Lagging |
| WAU — managers actively using the dashboard | TBD at launch | Up | Leading |
| Monthly export rate | TBD at launch | Up | Leading |
| Send Rate | 15.3% (90-day pre-launch) | Up | Leading |
| Active Users % per team | TBD at launch | Up | Leading |
| Overdue count | TBD at launch | Down | Leading |
| Time to Complete | TBD at launch | Down | Leading |

Baselines snapshotted at launch. Targets set from the first 30-day distribution — not pre-launch guesses.

## Go-to-Market

### Customer Impact Tier

- *Select based on scope and customer impact: [TO FILL — select one]*
- Tier 2: Significant Enhancement — Noticeably improves workflows, affects an important customer segment
- Tier 3: Incremental Improvement — Quality-of-life enhancement, affects specific use cases

### Launch Activities

- *Based on selected tier. [TO FILL once tier is selected]*

Marketing:

- Feature announcement (Tier 2, 3)
- Release notes (All)
- Knowledge base / support article (All)

Enablement:

- CX (CS / IM / Support) enablement
- Product manual update