import { useState } from "react";
import { createPortal } from "react-dom";
import { Search, ChevronDown, ChevronUp, X, ArrowLeft, Copy, MoreHorizontal, TrendingUp, TrendingDown, Home, Car } from "lucide-react";

type PolicyAction = "Review" | "Completed";
type UserAction = "Email Sent" | "Called" | "Mailed" | "SMS" | "No Action Required";
type DeliveryStatus = "Delivered" | "Undelivered" | "Opened";

interface Policy {
  id: string;
  lookupId: string;
  client: string;
  clientEmail: string;
  policyType: "Homeowners" | "Auto";
  carrier: string;
  effectiveDate: string;
  processedDate: string;
  premium: number;
  premChange: number;
  policyAction: PolicyAction;
  userAction: UserAction | null;
  deliveryStatus: DeliveryStatus | null;
}

const COMPLETION_OPTIONS: { value: UserAction; desc: string }[] = [
  { value: "Email Sent",         desc: "Renewal email sent via Connect" },
  { value: "Called",             desc: "Called the client directly" },
  { value: "Mailed",             desc: "Sent physical mail to the client" },
  { value: "SMS",                desc: "Sent a text message to the client" },
  { value: "No Action Required", desc: "Reviewed — no outreach needed" },
];

const INITIAL_POLICIES: Policy[] = [
  { id: "FMH 2458773",  lookupId: "205030", client: "Sydney Collins",   clientEmail: "sydmac67@gmail.com",  policyType: "Homeowners", carrier: "Central Mutual", effectiveDate: "2026-07-19", processedDate: "2026-06-12", premium: 1863, premChange: 394,  policyAction: "Review",    userAction: null,             deliveryStatus: null },
  { id: "9P16083",      lookupId: "205031", client: "Michelle Siefker", clientEmail: "msiefker@gmail.com",  policyType: "Auto",       carrier: "37915H",         effectiveDate: "2026-07-18", processedDate: "2026-06-11", premium: 2036, premChange: 1172, policyAction: "Review",    userAction: null,             deliveryStatus: null },
  { id: "5186421500",   lookupId: "205032", client: "Alex Unterbrink",  clientEmail: "alex.u@gmail.com",    policyType: "Homeowners", carrier: "Auto Owners",    effectiveDate: "2026-07-17", processedDate: "2026-06-11", premium: 1805, premChange: 1,    policyAction: "Completed", userAction: "Email Sent",     deliveryStatus: "Delivered" },
  { id: "FMA 3663210",  lookupId: "205033", client: "Eric Wieging",     clientEmail: "ewieging@gmail.com",  policyType: "Auto",       carrier: "Central Mutual", effectiveDate: "2026-07-15", processedDate: "2026-06-11", premium: 2124, premChange: 2047, policyAction: "Completed", userAction: "Called",         deliveryStatus: null },
  { id: "FMA 3663211",  lookupId: "205034", client: "Cliff Wieging",    clientEmail: "cwieging@gmail.com",  policyType: "Auto",       carrier: "Central Mutual", effectiveDate: "2026-07-15", processedDate: "2026-06-12", premium: 2037, premChange: 1960, policyAction: "Completed", userAction: "Email Sent",     deliveryStatus: "Opened" },
  { id: "HO626626",     lookupId: "205035", client: "Elijah Jones",     clientEmail: "ejones@gmail.com",    policyType: "Homeowners", carrier: "Goodville",      effectiveDate: "2026-07-14", processedDate: "2026-06-11", premium: 1314, premChange: -79,  policyAction: "Review",    userAction: null,             deliveryStatus: null },
  { id: "AU847291",     lookupId: "205036", client: "Diana Pierce",     clientEmail: "dpierce@gmail.com",   policyType: "Auto",       carrier: "State Farm",     effectiveDate: "2026-07-13", processedDate: "2026-06-10", premium: 1592, premChange: 213,  policyAction: "Completed", userAction: "Email Sent",     deliveryStatus: "Undelivered" },
  { id: "HO394821",     lookupId: "205037", client: "Marcus Bell",      clientEmail: "mbell@gmail.com",     policyType: "Homeowners", carrier: "Travelers",      effectiveDate: "2026-07-12", processedDate: "2026-06-10", premium: 2241, premChange: 318,  policyAction: "Review",    userAction: null,             deliveryStatus: null },
  { id: "AU663901",     lookupId: "205038", client: "Priya Okafor",     clientEmail: "pokafor@gmail.com",   policyType: "Auto",       carrier: "Progressive",    effectiveDate: "2026-07-11", processedDate: "2026-06-09", premium: 1748, premChange: 95,   policyAction: "Completed", userAction: "No Action Required", deliveryStatus: null },
  { id: "HO219045",     lookupId: "205039", client: "Tom Nguyen",       clientEmail: "tnguyen@gmail.com",   policyType: "Homeowners", carrier: "Nationwide",     effectiveDate: "2026-07-10", processedDate: "2026-06-09", premium: 1980, premChange: 441,  policyAction: "Review",    userAction: null,             deliveryStatus: null },
];

function fmtDisplay(date: string) {
  const [y, m, d] = date.split("-");
  return `${y}-${m}-${d}`;
}

function fmtLong(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function StatusBadge({ policyAction }: { policyAction: PolicyAction }) {
  if (policyAction === "Completed") {
    return (
      <div className="flex items-center gap-[6px]">
        <div className="bg-[#0260ca] rounded-full size-[8px] shrink-0" />
        <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px]">Completed</span>
      </div>
    );
  }
  return (
    <span className="bg-[#e9eef2] text-[#1e2831] font-['inter:medium',sans-serif] text-[13px] rounded-[6px] px-[10px] py-[4px] whitespace-nowrap">
      Review
    </span>
  );
}

function DeliveryChip({ value }: { value: DeliveryStatus | null }) {
  if (!value) return <span className="font-['inter:medium',sans-serif] text-[13px] text-[#4b5f73]">—</span>;
  const styles: Record<DeliveryStatus, string> = {
    Delivered:   "bg-[#e6f2eb] text-[#1a4731]",
    Undelivered: "bg-[#fce9e8] text-[#5f0e08]",
    Opened:      "bg-[#e6effa] text-[#0f3460]",
  };
  return (
    <span className={`${styles[value]} font-['inter:medium',sans-serif] text-[12px] rounded-[6px] px-[8px] py-[3px] whitespace-nowrap`}>
      {value}
    </span>
  );
}

// ─── Policies list ─────────────────────────────────────────────────────────────

function PoliciesList({ policies, onSelect }: { policies: Policy[]; onSelect: (id: string) => void }) {
  const [search, setSearch] = useState("");

  const filtered = policies.filter(p =>
    [p.id, p.client, p.carrier, p.policyType].some(v =>
      v.toLowerCase().includes(search.toLowerCase())
    )
  );

  const headers = [
    { label: "Policy",           flex: true },
    { label: "Client",           flex: true },
    { label: "Policy Type",      w: 130 },
    { label: "Carrier",          w: 140 },
    { label: "Effective Date",   w: 130 },
    { label: "Processed Date",   w: 130 },
    { label: "Premium",          w: 110 },
    { label: "Prem. change ($)", w: 140 },
    { label: "Status",           w: 130 },
    { label: "User Action",      w: 150 },
    { label: "Delivery Status",  w: 130 },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f6f8fa]">
      <div className="px-[32px] pt-[28px] pb-[20px]">
        <h1 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] text-[#1e2831] tracking-[-0.5px] leading-[32px]">Policies</h1>
      </div>

      {/* Toolbar */}
      <div className="px-[32px] pb-[16px] flex items-center gap-[12px]">
        <div className="flex items-center gap-[8px] bg-white border border-[#e3e9ee] rounded-[10px] px-[12px] h-[40px]" style={{ width: 340 }}>
          <Search size={15} strokeWidth={1.5} className="text-[#4b5f73] shrink-0" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by policy, client, assignee, carrier"
            className="flex-1 min-w-0 bg-transparent outline-none font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] placeholder:text-[#9aa9b7]"
          />
        </div>
        <div className="ml-auto flex items-center gap-[8px]">
          <div className="bg-white border border-[#e3e9ee] rounded-[10px] h-[40px] flex items-center gap-[6px] px-[12px] cursor-pointer hover:border-[#d0d9e2] transition-colors">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"><rect x="0.75" y="1.75" width="12.5" height="12.5" rx="1.25" stroke="#5D758C" strokeWidth="1.2" /><path d="M1 5.5H13M5 0.75V2.75M9 0.75V2.75" stroke="#5D758C" strokeWidth="1.2" strokeLinecap="round" /></svg>
            <span className="font-['inter:medium',sans-serif] text-[13px]">
              <span className="text-[#1e2831]">Effective: </span>
              <span className="text-[#0260ca]">1/1/20 - 12/10/26</span>
            </span>
          </div>
          <div className="bg-white border border-[#e3e9ee] rounded-[10px] h-[40px] flex items-center gap-[6px] px-[12px] cursor-pointer hover:border-[#d0d9e2] transition-colors">
            <span className="font-['inter:medium',sans-serif] text-[13px]">
              <span className="text-[#1e2831]">Assignee: </span>
              <span className="text-[#0260ca]">All</span>
            </span>
            <ChevronDown size={16} strokeWidth={1.5} className="text-[#1e2831]" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 px-[32px] pb-[32px] overflow-x-auto">
        <div className="bg-white rounded-[8px] border border-[#e3e9ee] overflow-hidden" style={{ minWidth: 1200 }}>
          {/* Header row */}
          <div className="flex bg-[#f6f8fa] border-b border-[#e3e9ee]">
            {headers.map(h => (
              <div
                key={h.label}
                className="h-[44px] flex items-center gap-[4px] px-[16px] border-r border-[#e9eef2] last:border-r-0 cursor-pointer select-none hover:bg-[#edf0f3] transition-colors shrink-0"
                style={h.flex ? { flex: 1, minWidth: 120 } : { width: h.w }}
              >
                <span className="font-['inter:medium',sans-serif] text-[12px] text-[#1e2831] leading-[16px] tracking-[0.25px] whitespace-nowrap">{h.label}</span>
                <ChevronDown size={14} strokeWidth={1.5} className="text-[#5d758c] shrink-0" />
              </div>
            ))}
          </div>

          {/* Data rows */}
          {filtered.length === 0 && (
            <div className="flex items-center justify-center h-[52px] text-[#4b5f73] font-['inter:medium',sans-serif] text-[13px]">No results</div>
          )}
          {filtered.map(p => (
            <div
              key={p.id}
              onClick={() => onSelect(p.id)}
              className="flex hover:bg-[#f6f8fa] transition-colors cursor-pointer border-b border-[#e9eef2] last:border-b-0"
            >
              <div className="flex-1 min-w-[120px] h-[52px] flex items-center px-[16px] border-r border-[#e9eef2]">
                <span className="font-['inter:medium',sans-serif] text-[13px] text-[#0260ca] leading-[18px] whitespace-nowrap">{p.id}</span>
              </div>
              <div className="flex-1 min-w-[120px] h-[52px] flex items-center px-[16px] border-r border-[#e9eef2]">
                <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] whitespace-nowrap">{p.client}</span>
              </div>
              <div className="h-[52px] flex items-center px-[16px] border-r border-[#e9eef2] shrink-0" style={{ width: 130 }}>
                <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] whitespace-nowrap">{p.policyType}</span>
              </div>
              <div className="h-[52px] flex items-center px-[16px] border-r border-[#e9eef2] shrink-0" style={{ width: 140 }}>
                <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] whitespace-nowrap">{p.carrier}</span>
              </div>
              <div className="h-[52px] flex items-center px-[16px] border-r border-[#e9eef2] shrink-0" style={{ width: 130 }}>
                <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] whitespace-nowrap">{fmtDisplay(p.effectiveDate)}</span>
              </div>
              <div className="h-[52px] flex items-center px-[16px] border-r border-[#e9eef2] shrink-0" style={{ width: 130 }}>
                <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] whitespace-nowrap">{fmtDisplay(p.processedDate)}</span>
              </div>
              <div className="h-[52px] flex items-center px-[16px] border-r border-[#e9eef2] shrink-0" style={{ width: 110 }}>
                <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] whitespace-nowrap">${p.premium.toLocaleString()}</span>
              </div>
              <div className="h-[52px] flex items-center gap-[5px] px-[16px] border-r border-[#e9eef2] shrink-0" style={{ width: 140 }}>
                {p.premChange >= 0
                  ? <TrendingUp size={13} strokeWidth={1.5} className="text-[#d9534f] shrink-0" />
                  : <TrendingDown size={13} strokeWidth={1.5} className="text-[#2e7d52] shrink-0" />
                }
                <span className={`font-['inter:medium',sans-serif] text-[13px] leading-[18px] whitespace-nowrap ${p.premChange >= 0 ? "text-[#d9534f]" : "text-[#2e7d52]"}`}>
                  ${Math.abs(p.premChange).toLocaleString()}
                </span>
              </div>
              <div className="h-[52px] flex items-center px-[16px] border-r border-[#e9eef2] shrink-0" style={{ width: 130 }}>
                <StatusBadge policyAction={p.policyAction} />
              </div>
              <div className="h-[52px] flex items-center px-[16px] border-r border-[#e9eef2] shrink-0" style={{ width: 150 }}>
                <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] whitespace-nowrap">
                  {p.userAction ?? <span className="text-[#4b5f73]">—</span>}
                </span>
              </div>
              <div className="h-[52px] flex items-center px-[16px] shrink-0" style={{ width: 130 }}>
                <DeliveryChip value={p.deliveryStatus} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Policy detail ─────────────────────────────────────────────────────────────

function PolicyDetail({
  policy, onBack, onSendEmail, onComplete,
}: {
  policy: Policy;
  onBack: () => void;
  onSendEmail: () => void;
  onComplete: (action: UserAction) => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState<UserAction>("Email Sent");
  const [analysisTab, setAnalysisTab] = useState<"Analysis" | "Source Data">("Analysis");

  const pct = Math.round(Math.abs(policy.premChange) / (policy.premium - Math.abs(policy.premChange)) * 100);

  const analysisSections = [
    {
      title: "Review",
      rows: [
        { key: "Policy type",        value: `Single line ${policy.policyType}` },
        { key: "Effective date",      value: fmtLong(policy.effectiveDate) },
        { key: "Term length",         value: "12 months" },
        { key: "Insurance carrier",   value: policy.carrier },
        { key: "Policy number",       value: policy.id },
        { key: "Premium",             value: `$${policy.premium.toLocaleString()}.00` },
        { key: "Change in premium",   value: `${policy.premChange >= 0 ? "Increased" : "Decreased"} by $${Math.abs(policy.premChange).toLocaleString()} (${pct}%)` },
      ],
    },
    {
      title: "For Policy",
      rows: [
        { key: "Dwelling",            value: `Limit $${(policy.premium * 248).toLocaleString()}` },
        { key: "Personal Property",   value: `Limit $${(policy.premium * 177).toLocaleString()}` },
        { key: "Liability",           value: "$500,000" },
        { key: "Deductible",          value: "$1,500" },
      ],
    },
  ];

  const emailBody = `Hi ${policy.client.split(" ")[0]},

I hope you are doing well.

Your ${policy.policyType.toLowerCase()} policy is coming up for renewal on ${fmtLong(policy.effectiveDate)} with ${policy.carrier}. I have reviewed your renewal documents and wanted to highlight the key details.

Premium — Your new 12-month premium is $${policy.premium.toLocaleString()}.00, which is ${policy.premChange >= 0 ? "an increase" : "a decrease"} of $${Math.abs(policy.premChange).toLocaleString()} (${pct}%) from last year.

If you have any questions or would like to make changes, please don't hesitate to reach out.`;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Top bar */}
      <div className="bg-white border-b border-[#e3e9ee] px-[24px] h-[52px] flex items-center gap-[12px] shrink-0">
        <button onClick={onBack} className="flex items-center gap-[6px] text-[#4b5f73] hover:text-[#1e2831] transition-colors font-['inter:medium',sans-serif] text-[13px]">
          <ArrowLeft size={14} strokeWidth={1.5} />
          Go back
        </button>
        <div className="h-[16px] w-px bg-[#e3e9ee]" />
        <span className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-[#1e2831]">{policy.client}</span>
        <span className="font-['inter:regular',sans-serif] text-[13px] text-[#4b5f73]">Lookup: {policy.lookupId}</span>
        <button className="text-[#9aa9b7] hover:text-[#4b5f73] transition-colors"><Copy size={13} strokeWidth={1.5} /></button>
        <div className="ml-auto">
          <button className="text-[#4b5f73] hover:text-[#1e2831] transition-colors"><MoreHorizontal size={18} strokeWidth={1.5} /></button>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="bg-white border-b border-[#e3e9ee] px-[24px] flex items-center shrink-0">
        <button className="h-[40px] flex items-center px-[4px] font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] border-b-2 border-[#0260ca]">
          Policies
        </button>
      </div>

      {/* Split content */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Left — analysis */}
        <div className="flex flex-col border-r border-[#e3e9ee] bg-white overflow-y-auto shrink-0" style={{ width: 580 }}>
          {/* Policy header */}
          <div className="px-[24px] pt-[18px] pb-[12px] border-b border-[#e9eef2]">
            <div className="flex items-center gap-[8px]">
              {policy.policyType === "Homeowners"
                ? <Home size={15} strokeWidth={1.5} className="text-[#4b5f73]" />
                : <Car size={15} strokeWidth={1.5} className="text-[#4b5f73]" />
              }
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#1e2831]">
                {policy.policyType === "Homeowners" ? "Home" : "Auto"} #{policy.id}
              </span>
              <button className="text-[#9aa9b7] hover:text-[#4b5f73] transition-colors"><Copy size={12} strokeWidth={1.5} /></button>
            </div>
            <div className="flex items-center gap-[5px] mt-[6px]">
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none"><rect x="0.75" y="1.25" width="11.5" height="11.5" rx="1.25" stroke="#5D758C" strokeWidth="1.2"/><path d="M0.75 4.75H12.25M4.25 0.25V2.25M8.75 0.25V2.25" stroke="#5D758C" strokeWidth="1.2" strokeLinecap="round"/></svg>
              <span className="font-['inter:medium',sans-serif] text-[13px] text-[#4b5f73]">{fmtLong(policy.effectiveDate)}</span>
            </div>
          </div>

          {/* Tabs + search */}
          <div className="px-[24px] py-[10px] border-b border-[#e9eef2] flex items-center justify-between gap-[12px]">
            <div className="flex items-center gap-[4px]">
              {(["Analysis", "Source Data"] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setAnalysisTab(t)}
                  className={`h-[30px] px-[10px] rounded-[6px] font-['inter:medium',sans-serif] text-[12px] transition-colors ${analysisTab === t ? "bg-[#e9eef2] text-[#1e2831]" : "text-[#4b5f73] hover:text-[#1e2831]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-[5px] bg-[#f6f8fa] border border-[#e3e9ee] rounded-[8px] px-[9px] h-[30px] flex-1 max-w-[200px]">
              <Search size={12} strokeWidth={1.5} className="text-[#4b5f73] shrink-0" />
              <input placeholder="Search by data or value" className="flex-1 min-w-0 bg-transparent outline-none font-['inter:medium',sans-serif] text-[12px] text-[#1e2831] placeholder:text-[#9aa9b7]" />
            </div>
          </div>

          {/* Analysis data */}
          <div className="flex-1 overflow-y-auto">
            {analysisSections.map(section => (
              <div key={section.title}>
                <div className="flex items-center justify-between px-[24px] py-[10px] bg-white border-b border-[#e9eef2]">
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#1e2831]">{section.title}</span>
                  <ChevronUp size={15} strokeWidth={1.5} className="text-[#4b5f73]" />
                </div>
                <div className="flex bg-[#f6f8fa] border-b border-[#e9eef2]">
                  <div className="flex-1 px-[24px] py-[6px]"><span className="font-['inter:medium',sans-serif] text-[11px] text-[#0260ca] tracking-[0.5px] uppercase">Analyzed Data</span></div>
                  <div className="flex-1 px-[24px] py-[6px]"><span className="font-['inter:medium',sans-serif] text-[11px] text-[#0260ca] tracking-[0.5px] uppercase">Value</span></div>
                </div>
                {section.rows.map((row, i) => (
                  <div key={i} className="flex border-b border-[#e9eef2] last:border-b-0">
                    <div className="flex-1 px-[24px] py-[10px]"><span className="font-['inter:medium',sans-serif] text-[13px] text-[#4b5f73] leading-[18px]">{row.key}</span></div>
                    <div className="flex-1 px-[24px] py-[10px]"><span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px]">{row.value}</span></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right — email */}
        <div className="flex-1 flex flex-col bg-white min-w-0">
          <div className="px-[24px] h-[52px] flex items-center justify-between border-b border-[#e3e9ee] shrink-0">
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#1e2831]">Email</span>
            <button className="text-[#4b5f73] hover:text-[#1e2831] transition-colors"><X size={18} strokeWidth={1.5} /></button>
          </div>

          <div className="border-b border-[#e3e9ee]">
            <div className="flex items-center gap-[8px] px-[24px] py-[10px] border-b border-[#e9eef2]">
              <span className="font-['inter:medium',sans-serif] text-[12px] text-[#4b5f73] w-[52px] shrink-0">To</span>
              <span className="bg-[#f6f8fa] border border-[#e3e9ee] rounded-[6px] px-[8px] py-[3px] font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] flex items-center gap-[6px]">
                {policy.clientEmail}
                <X size={10} strokeWidth={1.5} className="text-[#9aa9b7]" />
              </span>
            </div>
            <div className="flex items-center gap-[8px] px-[24px] py-[10px] border-b border-[#e9eef2]">
              <span className="font-['inter:medium',sans-serif] text-[12px] text-[#4b5f73] w-[52px] shrink-0">Subject</span>
              <span className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831]">Renewal of policy {policy.id}</span>
            </div>
            <div className="flex items-center gap-[8px] px-[24px] py-[10px]">
              <span className="font-['inter:medium',sans-serif] text-[12px] text-[#4b5f73] w-[52px] shrink-0">Files</span>
              <button className="text-[#0260ca] hover:text-[#0250aa] transition-colors font-['inter:medium',sans-serif] text-[13px]">+ Add</button>
            </div>
          </div>

          {/* Minimal toolbar */}
          <div className="flex items-center gap-[2px] px-[16px] py-[8px] border-b border-[#e3e9ee] flex-wrap">
            {["Arial", "12pt", "B", "I", "U", "S"].map(t => (
              <button key={t} className="h-[26px] px-[7px] rounded-[4px] font-['inter:medium',sans-serif] text-[12px] text-[#4b5f73] hover:bg-[#f6f8fa] transition-colors">{t}</button>
            ))}
          </div>

          {/* Email body */}
          <div className="flex-1 overflow-y-auto px-[24px] py-[20px]">
            <div className="font-['inter:regular',sans-serif] text-[14px] text-[#1e2831] leading-[22px] whitespace-pre-line">{emailBody}</div>
          </div>

          {/* Footer badge */}
          <div className="px-[24px] py-[12px] border-t border-[#e3e9ee] shrink-0">
            <div className="inline-flex items-center gap-[6px] bg-[#f6f8fa] border border-[#e3e9ee] rounded-[8px] px-[10px] py-[5px]">
              {policy.policyType === "Homeowners"
                ? <Home size={12} strokeWidth={1.5} className="text-[#4b5f73]" />
                : <Car size={12} strokeWidth={1.5} className="text-[#4b5f73]" />
              }
              <span className="font-['inter:medium',sans-serif] text-[12px] text-[#1e2831]">
                {policy.policyType === "Homeowners" ? "Home" : "Auto"} #{policy.id}
              </span>
            </div>
          </div>

          {/* Action bar */}
          <div className="bg-white border-t border-[#e3e9ee] px-[24px] h-[60px] flex items-center justify-between shrink-0">
            <button className="h-[36px] px-[16px] rounded-[8px] border border-[#e3e9ee] font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] hover:bg-[#f6f8fa] transition-colors">
              Rewrite Email
            </button>
            <div className="flex items-center gap-[8px]">
              <button
                onClick={() => setShowModal(true)}
                className="h-[36px] px-[16px] rounded-[8px] border border-[#e3e9ee] font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] hover:bg-[#f6f8fa] transition-colors"
              >
                Complete
              </button>
              <button
                onClick={onSendEmail}
                className="h-[36px] px-[20px] rounded-[8px] bg-[#0260ca] font-['inter:medium',sans-serif] text-[13px] text-white hover:bg-[#0250aa] transition-colors"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Complete modal */}
      {showModal && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-[12px] shadow-xl w-[400px] overflow-hidden">
            <div className="flex items-center justify-between px-[24px] pt-[20px] pb-[16px] border-b border-[#e3e9ee]">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#1e2831]">Mark as Complete</span>
              <button onClick={() => setShowModal(false)} className="text-[#4b5f73] hover:text-[#1e2831] transition-colors">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="py-[6px]">
              {COMPLETION_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedAction(opt.value)}
                  className={`w-full flex items-center gap-[12px] px-[24px] py-[11px] hover:bg-[#f6f8fa] transition-colors text-left ${selectedAction === opt.value ? "bg-[#f0f6ff]" : ""}`}
                >
                  <div className={`size-[18px] rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${selectedAction === opt.value ? "border-[#0260ca]" : "border-[#d0d9e2]"}`}>
                    {selectedAction === opt.value && <div className="size-[8px] rounded-full bg-[#0260ca]" />}
                  </div>
                  <div>
                    <div className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px]">{opt.value}</div>
                    <div className="font-['inter:regular',sans-serif] text-[12px] text-[#4b5f73] leading-[16px]">{opt.desc}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-end gap-[8px] px-[24px] py-[16px] border-t border-[#e3e9ee]">
              <button
                onClick={() => setShowModal(false)}
                className="h-[36px] px-[16px] rounded-[8px] border border-[#e3e9ee] font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] hover:bg-[#f6f8fa] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => { onComplete(selectedAction); setShowModal(false); }}
                className="h-[36px] px-[20px] rounded-[8px] bg-[#0260ca] font-['inter:medium',sans-serif] text-[13px] text-white hover:bg-[#0250aa] transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────────

export default function PoliciesPage() {
  const [policies, setPolicies] = useState<Policy[]>(INITIAL_POLICIES);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = policies.find(p => p.id === selectedId) ?? null;

  function completePolicy(id: string, action: UserAction) {
    setPolicies(ps => ps.map(p => p.id === id ? {
      ...p,
      policyAction: "Completed",
      userAction: action,
      deliveryStatus: action === "Email Sent" ? "Delivered" : null,
    } : p));
    setSelectedId(null);
  }

  function sendEmail(id: string) {
    setPolicies(ps => ps.map(p => p.id === id ? {
      ...p,
      policyAction: "Completed",
      userAction: "Email Sent",
      deliveryStatus: "Delivered",
    } : p));
    setSelectedId(null);
  }

  if (selected) {
    return (
      <PolicyDetail
        policy={selected}
        onBack={() => setSelectedId(null)}
        onSendEmail={() => sendEmail(selected.id)}
        onComplete={(action) => completePolicy(selected.id, action)}
      />
    );
  }

  return <PoliciesList policies={policies} onSelect={setSelectedId} />;
}
