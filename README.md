# Outreach Insights — Dashboard Prototype

Interactive prototype of the **Outreach Insights** dashboard (Quandri DS), built from the Figma
"Design Creation" bundle. For PM + Dev review.

## Running it locally

```bash
npm install      # one time
npm run dev      # starts Vite dev server (prints a localhost URL)
```

Then open the printed URL (e.g. http://localhost:5173). To produce a production build:

```bash
npm run build    # outputs static assets to dist/
npm run preview  # serve the production build locally
```

Requirements: Node 18+ (built/tested on Node 24). Stack: **Vite 6 + React 18 + Tailwind v4 + lucide-react**.

## What to look at

All app code lives in `src/app/components/`:

- **`OutreachInsightsDashboard.tsx`** — the page: sidebar, sticky tab bar, stat cards,
  Team Insights (Performance table) and Activity table, plus the shared building blocks:
  - `ColumnTitle` — DS column-header (sortable ↑/↓ with brand underline, Empty + Slot variants)
  - `SmallDropdown` / `MultiSelectDropdown` — DS filter dropdowns (`Label: Value`, leading icon);
    the multi-select has type-ahead search
  - `Pagination` / `TableFooter` — icon-buttons "morphed" into a segmented pager (10 rows/page)
  - `InfoIcon` / `Tooltip` — DS tooltips, rendered via body portal so they're never clipped
- **`OutreachActivityChart.tsx`** — the stacked bar chart with hover tooltips and a
  click-to-toggle legend (Completed / Review).

## Interactions to try

- Sort any column (headers cycle desc → asc → off; tables load sorted A→Z by name)
- Filter the Activity table (User Action / Status / Delivery) and Team Insights (Users, searchable)
- Paginate either table; hover a column header ~0.8s for its tooltip
- Toggle the chart legend series; hover bars for the breakdown tooltip
- Hover a row's arrow → "View policy" tooltip

## Notes / open items

- Data is **mock/static** (`ALL_PERF_ROWS`, `ALL_ACTIVITY_ROWS` in `OutreachInsightsDashboard.tsx`) — no backend.
- Column-header and info tooltip copy is **placeholder** ("Lorem ipsum…" / short descriptions) — needs real copy.
- Tab bar shows three tabs; only **Outreach Insights** is built out.
- Export buttons download the current filtered rows as CSV.

Originally generated from Figma: https://www.figma.com/design/Yodf7IZL3DSjQHSqPySmOs/Design-Creation
