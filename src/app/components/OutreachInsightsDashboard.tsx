import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, Activity, CircleDot, Send, Users, Search } from "lucide-react";
import OutreachActivityChart from "./OutreachActivityChart";
import svgPaths from "../../imports/OutreachInsights/svg-jbrhwk28hh";
import PoliciesPage from "./PoliciesPage";

// ─── Types ────────────────────────────────────────────────────────────────────

type SortDir = "asc" | "desc" | null;

interface PerformanceRow {
  user: string;
  completed: number;
  review: number;
  sendRate: number;
  undelivered: number;
  timeToComplete: number;
  emailEditRate: number;
  dueSoon: number;
  overdue: number;
}

interface ActivityRow {
  customer: string;
  policyId: string;
  effectiveDate: string;
  user: string;
  userAction: string;
  status: string;
  deliveryStatus: string;
  undeliveredReason: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const ALL_PERF_ROWS: PerformanceRow[] = [
  { user: "Roy", completed: 33, review: 18, sendRate: 58, undelivered: 2, timeToComplete: 1.6, emailEditRate: 38, dueSoon: 8, overdue: 4 },
  { user: "Eleanor Pena", completed: 46, review: 5, sendRate: 80, undelivered: 1, timeToComplete: 0.9, emailEditRate: 22, dueSoon: 2, overdue: 1 },
  { user: "Devon Lane", completed: 24, review: 22, sendRate: 39, undelivered: 4, timeToComplete: 3.2, emailEditRate: 61, dueSoon: 6, overdue: 8 },
  { user: "Jacob Jones", completed: 40, review: 9, sendRate: 67, undelivered: 2, timeToComplete: 1.5, emailEditRate: 41, dueSoon: 4, overdue: 3 },
  { user: "Albert Flores", completed: 33, review: 11, sendRate: 66, undelivered: 0, timeToComplete: 2.1, emailEditRate: 30, dueSoon: 3, overdue: 2 },
  { user: "Kathryn Murphy", completed: 29, review: 8, sendRate: 42, undelivered: 2, timeToComplete: 1.4, emailEditRate: 24, dueSoon: 2, overdue: 1 },
  { user: "Marcus Webb", completed: 37, review: 14, sendRate: 71, undelivered: 3, timeToComplete: 1.8, emailEditRate: 45, dueSoon: 5, overdue: 3 },
  { user: "Priya Nair", completed: 51, review: 4, sendRate: 85, undelivered: 1, timeToComplete: 0.7, emailEditRate: 18, dueSoon: 1, overdue: 0 },
  { user: "Dan Ortiz", completed: 28, review: 19, sendRate: 44, undelivered: 5, timeToComplete: 2.9, emailEditRate: 57, dueSoon: 7, overdue: 6 },
  { user: "Lena Kim", completed: 42, review: 7, sendRate: 76, undelivered: 1, timeToComplete: 1.1, emailEditRate: 27, dueSoon: 3, overdue: 1 },
  { user: "Wade Warren", completed: 31, review: 12, sendRate: 63, undelivered: 2, timeToComplete: 1.7, emailEditRate: 43, dueSoon: 4, overdue: 2 },
  { user: "Jenny Wilson", completed: 48, review: 6, sendRate: 81, undelivered: 1, timeToComplete: 1.0, emailEditRate: 25, dueSoon: 2, overdue: 0 },
  { user: "Guy Hawkins", completed: 22, review: 24, sendRate: 36, undelivered: 6, timeToComplete: 3.4, emailEditRate: 64, dueSoon: 9, overdue: 7 },
  { user: "Theresa Webb", completed: 39, review: 10, sendRate: 70, undelivered: 2, timeToComplete: 1.6, emailEditRate: 39, dueSoon: 4, overdue: 2 },
  { user: "Cody Fisher", completed: 35, review: 13, sendRate: 64, undelivered: 3, timeToComplete: 2.0, emailEditRate: 47, dueSoon: 5, overdue: 3 },
  { user: "Savannah Nguyen", completed: 53, review: 3, sendRate: 88, undelivered: 0, timeToComplete: 0.6, emailEditRate: 16, dueSoon: 1, overdue: 0 },
  { user: "Brooklyn Simmons", completed: 26, review: 20, sendRate: 41, undelivered: 5, timeToComplete: 3.1, emailEditRate: 59, dueSoon: 7, overdue: 6 },
  { user: "Jerome Bell", completed: 44, review: 8, sendRate: 74, undelivered: 1, timeToComplete: 1.2, emailEditRate: 29, dueSoon: 3, overdue: 1 },
  { user: "Arlene McCoy", completed: 30, review: 16, sendRate: 55, undelivered: 3, timeToComplete: 2.4, emailEditRate: 52, dueSoon: 6, overdue: 4 },
  { user: "Ralph Edwards", completed: 41, review: 9, sendRate: 72, undelivered: 2, timeToComplete: 1.4, emailEditRate: 35, dueSoon: 3, overdue: 2 },
];

const ALL_ACTIVITY_ROWS: ActivityRow[] = [
  { customer: "Sarah Mitchell", policyId: "POL-10293", effectiveDate: "05/01/26", user: "Hannah R.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Delivered", undeliveredReason: "—" },
  { customer: "James Parker", policyId: "POL-10311", effectiveDate: "05/03/26", user: "Marcus T.", userAction: "Called", status: "Completed", deliveryStatus: "Undelivered", undeliveredReason: "Mailbox does not exist" },
  { customer: "Linda Torres", policyId: "POL-10288", effectiveDate: "04/28/26", user: "Priya N.", userAction: "—", status: "Review", deliveryStatus: "—", undeliveredReason: "—" },
  { customer: "Robert Kim", policyId: "POL-10301", effectiveDate: "05/10/26", user: "Dan O.", userAction: "Email Sent", status: "Completed", deliveryStatus: "—", undeliveredReason: "—" },
  { customer: "Maria Santos", policyId: "POL-10276", effectiveDate: "04/15/26", user: "Lena K.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Opened", undeliveredReason: "—" },
  { customer: "Thomas Bradley", policyId: "POL-10319", effectiveDate: "05/15/26", user: "Hannah R.", userAction: "Email Sent", status: "Completed", deliveryStatus: "—", undeliveredReason: "—" },
  { customer: "Angela Reyes", policyId: "POL-10327", effectiveDate: "05/20/26", user: "Marcus T.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Delivered", undeliveredReason: "—" },
  { customer: "David Chen", policyId: "POL-10334", effectiveDate: "05/22/26", user: "Priya N.", userAction: "Called", status: "Review", deliveryStatus: "—", undeliveredReason: "—" },
  { customer: "Fatima Al-Hassan", policyId: "POL-10341", effectiveDate: "06/01/26", user: "Dan O.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Undelivered", undeliveredReason: "Spam filter blocked" },
  { customer: "George Walton", policyId: "POL-10358", effectiveDate: "06/05/26", user: "Lena K.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Opened", undeliveredReason: "—" },
  { customer: "Nina Petrova", policyId: "POL-10362", effectiveDate: "06/08/26", user: "Hannah R.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Delivered", undeliveredReason: "—" },
  { customer: "Oscar Delgado", policyId: "POL-10375", effectiveDate: "06/10/26", user: "Marcus T.", userAction: "Called", status: "Review", deliveryStatus: "—", undeliveredReason: "—" },
  { customer: "Emily Watson", policyId: "POL-10388", effectiveDate: "06/12/26", user: "Priya N.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Undelivered", undeliveredReason: "Mailbox full" },
  { customer: "Hassan Ali", policyId: "POL-10394", effectiveDate: "06/15/26", user: "Dan O.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Opened", undeliveredReason: "—" },
  { customer: "Grace Liu", policyId: "POL-10401", effectiveDate: "06/18/26", user: "Lena K.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Delivered", undeliveredReason: "—" },
  { customer: "Patrick O'Brien", policyId: "POL-10417", effectiveDate: "06/20/26", user: "Hannah R.", userAction: "—", status: "Review", deliveryStatus: "—", undeliveredReason: "—" },
  { customer: "Sofia Rossi", policyId: "POL-10423", effectiveDate: "06/22/26", user: "Marcus T.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Undelivered", undeliveredReason: "Invalid address" },
  { customer: "Liam Murphy", policyId: "POL-10439", effectiveDate: "06/25/26", user: "Priya N.", userAction: "Email Sent", status: "Completed", deliveryStatus: "Opened", undeliveredReason: "—" },
  { customer: "Aisha Khan", policyId: "POL-10445", effectiveDate: "06/28/26", user: "Dan O.", userAction: "Called", status: "Completed", deliveryStatus: "Delivered", undeliveredReason: "—" },
  { customer: "Noah Becker", policyId: "POL-10452", effectiveDate: "07/01/26", user: "Lena K.", userAction: "Email Sent", status: "Completed", deliveryStatus: "—", undeliveredReason: "—" },
];

const DATE_RANGES = [
  "4/1/26 - 4/7/26",
  "3/25/26 - 3/31/26",
  "3/18/26 - 3/24/26",
  "3/11/26 - 3/17/26",
];

const USER_GROUPS = ALL_PERF_ROWS.map(r => r.user);
const USER_ACTIONS = ["All", "Email Sent", "Called"];
const STATUSES = ["All", "Completed", "Review"];
const DELIVERY_STATUSES = ["All", "Delivered", "Undelivered", "Opened"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function exportCSV(filename: string, headers: string[], rows: string[][]) {
  const csv = [headers.join(","), ...rows.map(r => r.map(c => `"${c}"`).join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Reusable: Multi-select dropdown with checkboxes ─────────────────────────

function MultiSelectDropdown({
  selected, options, onChange, width = 170,
}: {
  selected: string[];
  options: string[];
  onChange: (v: string[]) => void;
  width?: number;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const allSelected = selected.length === 0 || selected.length === options.length;
  const filtered = options.filter(o => o.toLowerCase().includes(query.trim().toLowerCase()));

  // Reset the search whenever the dropdown closes
  useEffect(() => { if (!open) setQuery(""); }, [open]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function toggleAll() {
    onChange([]);
  }

  function toggleOption(opt: string) {
    if (selected.includes(opt)) {
      const next = selected.filter(s => s !== opt);
      onChange(next);
    } else {
      onChange([...selected, opt]);
    }
  }

  const value = allSelected
    ? "All"
    : selected.length === 1
    ? selected[0]
    : `${selected.length} users`;

  return (
    <div ref={ref} className="relative" style={{ width }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="bg-white w-full h-[40px] rounded-[10px] flex items-center gap-[4px] px-[12px] border border-[#e3e9ee] cursor-pointer hover:border-[#d0d9e2] transition-colors"
      >
        <span className="shrink-0 inline-flex items-center justify-center size-[18px] text-[#4b5f73]"><Users size={16} strokeWidth={1.5} /></span>
        <span className="flex-1 min-w-0 text-left font-['inter:medium',sans-serif] text-[13px] leading-[18px] whitespace-nowrap truncate">
          <span className="text-[#1e2831]">Users: </span>
          <span className="text-[#0260ca]">{value}</span>
        </span>
        <ChevronDown size={18} strokeWidth={1.5} className={`shrink-0 text-[#1e2831] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-[#e3e9ee] rounded-[10px] shadow-lg z-50 overflow-hidden" style={{ minWidth: width }}>
          {/* Type-ahead search */}
          <div className="p-[8px] border-b border-[#e9eef2]">
            <div className="flex items-center gap-[6px] h-[34px] px-[10px] rounded-[8px] bg-[#f6f8fa] border border-[#e3e9ee] focus-within:border-[#0260ca] transition-colors">
              <Search size={15} strokeWidth={1.5} className="shrink-0 text-[#4b5f73]" />
              <input
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search users"
                className="flex-1 min-w-0 bg-transparent outline-none font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] placeholder:text-[#9aa9b7] leading-[18px]"
              />
            </div>
          </div>
          {/* All Users row — always visible (hidden while searching) */}
          {!query.trim() && (<>
          <button
            onClick={toggleAll}
            className="w-full flex items-center gap-[10px] px-[12px] py-[10px] hover:bg-[#f6f8fa] transition-colors"
          >
            <span className={`flex items-center justify-center size-[16px] rounded-[4px] border shrink-0 transition-colors ${allSelected ? "bg-[#0260ca] border-[#0260ca]" : "border-[#d0d9e2] bg-white"}`}>
              {allSelected && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className={`font-['inter:medium',sans-serif] text-[13px] leading-[18px] ${allSelected ? "text-[#0260ca]" : "text-[#1e2831]"}`}>All Users</span>
          </button>
          <div className="bg-[#e9eef2] h-px mx-[12px]" />
          </>)}
          {/* scrollable list capped at ~6 items */}
          <div className="overflow-y-auto" style={{ maxHeight: 6 * 41 }}>
            {filtered.length === 0 && (
              <div className="px-[12px] py-[14px] text-center font-['inter:medium',sans-serif] text-[13px] text-[#4b5f73]">No users found</div>
            )}
            {filtered.map(opt => {
              const checked = allSelected ? false : selected.includes(opt);
              return (
                <button
                  key={opt}
                  onClick={() => toggleOption(opt)}
                  className="w-full flex items-center gap-[10px] px-[12px] py-[10px] hover:bg-[#f6f8fa] transition-colors"
                >
                  <span className={`flex items-center justify-center size-[16px] rounded-[4px] border shrink-0 transition-colors ${checked ? "bg-[#0260ca] border-[#0260ca]" : "border-[#d0d9e2] bg-white"}`}>
                    {checked && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className={`font-['inter:medium',sans-serif] text-[13px] leading-[18px] ${checked ? "text-[#0260ca]" : "text-[#1e2831]"}`}>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// Filter dropdown — Quandri DS "Dropdown Container": leading icon, "Label: Value"
// (label in primary, value in brand blue), trailing chevron. h-40, rounded-10.
function SmallDropdown({
  value, options, onChange, label, icon,
}: { value: string; options: string[]; onChange: (v: string) => void; label?: string; icon?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-flex">
      <button
        onClick={() => setOpen(o => !o)}
        className="bg-white h-[40px] flex items-center gap-[4px] px-[12px] border border-[#e3e9ee] rounded-[10px] cursor-pointer hover:border-[#d0d9e2] transition-colors"
      >
        {icon && <span className="shrink-0 inline-flex items-center justify-center size-[18px] text-[#4b5f73]">{icon}</span>}
        <span className="font-['inter:medium',sans-serif] text-[13px] leading-[18px] whitespace-nowrap">
          {label && <span className="text-[#1e2831]">{label}: </span>}
          <span className="text-[#0260ca]">{value}</span>
        </span>
        <ChevronDown size={18} strokeWidth={1.5} className={`shrink-0 text-[#1e2831] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-[#e3e9ee] rounded-[10px] shadow-lg z-50 min-w-full overflow-hidden">
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-[12px] py-[8px] text-[13px] font-['inter:medium',sans-serif] whitespace-nowrap hover:bg-[#f6f8fa] transition-colors ${opt === value ? "text-[#0260ca]" : "text-[#1e2831]"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Reusable: Column title (table column header) ───────────────────────────────
// Implements the Quandri DS "Column Title" spec: Empty / Default (unsorted ·
// ascending ↑ · descending ↓ with a brand underline) / Slot (custom content).

function ColumnTitle({
  label,
  dir = null,
  onClick,
  width,
  flex = false,
  empty = false,
  children,
  tip,
}: {
  label?: string;
  dir?: SortDir;
  onClick?: () => void;
  width?: number;
  flex?: boolean;
  empty?: boolean;
  children?: React.ReactNode;
  tip?: string;
}) {
  const sizing = flex ? { flex: "1 0 0", minWidth: 0 } : width != null ? { width } : undefined;

  // Delayed (800ms) header tooltip
  const cellRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [tipPos, setTipPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  function handleEnter() {
    if (!tip) return;
    timerRef.current = setTimeout(() => {
      const r = cellRef.current?.getBoundingClientRect();
      if (r) setTipPos({ x: r.left + r.width / 2, y: r.bottom + 6 });
    }, 800);
  }
  function handleLeave() {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    setTipPos(null);
  }

  // Empty — placeholder/spacer column
  if (empty) {
    return <div className="bg-[#f6f8fa] h-[46px] border-b border-[#d0d9e2] shrink-0" style={sizing} />;
  }

  // Slot — arbitrary content (e.g. a dropdown + value)
  if (children) {
    return (
      <div
        className="bg-[#f6f8fa] flex flex-col gap-[8px] items-start justify-center px-[20px] py-[8px] border-b border-[#d0d9e2] shrink-0 overflow-clip"
        style={sizing}
      >
        {children}
      </div>
    );
  }

  // Default — sortable header
  const sorted = dir === "asc" || dir === "desc";
  return (
    <div
      ref={cellRef}
      className={`bg-[#f6f8fa] h-[46px] flex items-center px-[20px] gap-[8px] shrink-0 overflow-clip cursor-pointer hover:bg-[#edf0f3] transition-colors select-none ${sorted ? "border-b-2 border-[#0260ca]" : "border-b border-[#d0d9e2]"}`}
      style={sizing}
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="font-['inter:medium',sans-serif] text-[12px] leading-[16px] tracking-[0.25px] whitespace-nowrap text-[#1e2831]">{label}</span>
      {dir === "asc" ? (
        <ArrowUp size={18} strokeWidth={1.5} className="shrink-0 text-[#0260ca]" />
      ) : dir === "desc" ? (
        <ArrowDown size={18} strokeWidth={1.5} className="shrink-0 text-[#0260ca]" />
      ) : (
        <ChevronDown size={18} strokeWidth={1.5} className="shrink-0 text-[#5d758c]" />
      )}
      {tip && tipPos && createPortal(
        <span
          role="tooltip"
          style={{ position: "fixed", left: tipPos.x, top: tipPos.y, transform: "translateX(-50%)" }}
          className="pointer-events-none z-[9999] whitespace-nowrap rounded-[6px] bg-[#151c23] px-[8px] py-[4px] text-[12px] leading-[20px] tracking-[0.25px] text-white font-['inter:regular',sans-serif] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
          {tip}
        </span>,
        document.body
      )}
    </div>
  );
}

// ─── Icon button + Pagination (table footer) ────────────────────────────────────
// IconButton is the icon-only building block; Pagination "morphs" several of them
// into one segmented control (shared border, dividers between cells).

function IconButton({
  children,
  onClick,
  disabled = false,
  active = false,
  label,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`size-[34px] flex items-center justify-center text-[13px] font-['inter:medium',sans-serif] leading-none transition-colors cursor-pointer disabled:opacity-40 disabled:pointer-events-none ${
        active ? "bg-[#0260ca] text-white" : "bg-white text-[#1e2831] hover:bg-[#f6f8fa]"
      }`}
    >
      {children}
    </button>
  );
}

// Build the page list with ellipses: 1 … (p-1) p (p+1) … N
function pageItems(page: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items: (number | "ellipsis")[] = [1];
  const left = Math.max(2, page - 1);
  const right = Math.min(total - 1, page + 1);
  if (left > 2) items.push("ellipsis");
  for (let p = left; p <= right; p++) items.push(p);
  if (right < total - 1) items.push("ellipsis");
  items.push(total);
  return items;
}

function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (p: number) => void }) {
  return (
    <div className="inline-flex items-center rounded-[8px] border border-[#e3e9ee] overflow-hidden divide-x divide-[#e3e9ee]">
      <IconButton label="Previous page" disabled={page <= 1} onClick={() => onChange(page - 1)}>
        <ChevronLeft size={16} strokeWidth={2} className="shrink-0" />
      </IconButton>
      {pageItems(page, totalPages).map((it, i) =>
        it === "ellipsis" ? (
          <span key={`e${i}`} className="size-[34px] flex items-center justify-center text-[13px] text-[#4b5f73] select-none">…</span>
        ) : (
          <IconButton key={it} active={it === page} label={`Page ${it}`} onClick={() => onChange(it)}>
            {it}
          </IconButton>
        )
      )}
      <IconButton label="Next page" disabled={page >= totalPages} onClick={() => onChange(page + 1)}>
        <ChevronRight size={16} strokeWidth={2} className="shrink-0" />
      </IconButton>
    </div>
  );
}

function TableFooter({ total, page, pageSize, onChange }: { total: number; page: number; pageSize: number; onChange: (p: number) => void }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  return (
    <div className="flex items-center justify-between gap-[12px] px-[4px]">
      <span className="font-['inter:regular',sans-serif] text-[13px] text-[#4b5f73] leading-[18px] whitespace-nowrap">
        {total === 0 ? (
          "No results"
        ) : (
          <>
            <span className="font-['inter:semi_bold',sans-serif] text-[#1e2831]">{start}–{end}</span> of {total}
          </>
        )}
      </span>
      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onChange={onChange} />}
    </div>
  );
}

// ─── Reusable hover tooltip (DS "Type=Default, MultiLine=False") ────────────────
// Wraps any element; shows a body-portal tooltip on hover so it is never clipped.

function Tooltip({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  function show() {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos({ x: r.left + r.width / 2, y: r.bottom + 6 });
  }

  return (
    <span ref={ref} onMouseEnter={show} onMouseLeave={() => setPos(null)} className={`inline-flex ${className}`}>
      {children}
      {pos && createPortal(
        <span
          role="tooltip"
          style={{ position: "fixed", left: pos.x, top: pos.y, transform: "translateX(-50%)" }}
          className="pointer-events-none z-[9999] whitespace-nowrap rounded-[6px] bg-[#151c23] px-[8px] py-[4px] text-[12px] leading-[20px] tracking-[0.25px] text-white font-['inter:regular',sans-serif] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
          {label}
        </span>,
        document.body
      )}
    </span>
  );
}

// ─── Info icon ────────────────────────────────────────────────────────────────

function InfoIcon({ tip = "Lorem ipsum dolor sit amet, consectetur." }: { tip?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  function show() {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos({ x: r.left + r.width / 2, y: r.bottom + 6 });
  }

  return (
    <span
      ref={ref}
      onMouseEnter={show}
      onMouseLeave={() => setPos(null)}
      className="relative inline-flex shrink-0 cursor-help"
    >
      <span className="relative block size-[14px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 14 14">
          <g clipPath="url(#clip-info)">
            <path d={svgPaths.p3f43b940} stroke="#3A4B5B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
          <defs><clipPath id="clip-info"><rect fill="white" height="14" width="14" /></clipPath></defs>
        </svg>
      </span>
      {/* Tooltip — Quandri DS "Type=Default, MultiLine=False". Rendered in a body
          portal so it is never clipped by a card's overflow-hidden. */}
      {pos && createPortal(
        <span
          role="tooltip"
          style={{ position: "fixed", left: pos.x, top: pos.y, transform: "translateX(-50%)" }}
          className="pointer-events-none z-[9999] whitespace-nowrap rounded-[6px] bg-[#151c23] px-[8px] py-[4px] text-[12px] leading-[20px] tracking-[0.25px] text-white font-['inter:regular',sans-serif] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
          {tip}
        </span>,
        document.body
      )}
    </span>
  );
}

// ─── Export button ────────────────────────────────────────────────────────────

function ExportButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#1e2831] h-[34px] min-w-[100px] rounded-[8px] inline-flex items-center justify-center gap-[6px] pl-[10px] pr-[14px] cursor-pointer hover:bg-[#2d3d4e] transition-colors border border-[#1e2831]"
    >
      <svg width="16" height="15" viewBox="0 0 16.499 14.9997" fill="none" className="shrink-0">
        <path d={svgPaths.p620f500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
      <span className="font-['Inter:medium',sans-serif] text-[13px] text-white leading-none">Export</span>
    </button>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, tip }: { label: string; value: string; sub?: string; tip?: string }) {
  return (
    <div className="bg-white flex-1 min-w-0 rounded-[12px] border border-[#e3e9ee] p-[20px] flex flex-col items-start">
      <div className="flex gap-[8px] items-center w-full">
        <span className="font-['inter:medium',sans-serif] text-[13px] text-[#4b5f73] leading-[18px] whitespace-nowrap">{label}</span>
        <InfoIcon tip={tip} />
      </div>
      <div className="font-['Inter:Medium',sans-serif] font-medium text-[30px] text-[#1e2831] tracking-[-1px] leading-[1.4] mt-1">{value}</div>
      <div className="font-['Inter:regular',sans-serif] text-[12px] text-[#4b5f73] tracking-[0.25px] leading-[20px] h-[20px]">{sub ?? ""}</div>
    </div>
  );
}

// ─── Performance table ────────────────────────────────────────────────────────

type PerfSortKey = keyof Omit<PerformanceRow, "user"> | "user";

type Tier = "red" | "amber" | null;

function combinedTier(r: PerformanceRow): Tier {
  const total = r.review + r.completed;
  const unactioned = total === 0 ? 0 : r.review / total;
  if (unactioned >= 0.70 && r.sendRate <= 25) return "red";
  if (unactioned >= 0.40 && r.sendRate <= 50) return "amber";
  return null;
}

function timeTier(val: number): Tier {
  if (val >= 5) return "red";
  if (val >= 3) return "amber";
  return null;
}

function dueSoonTier(val: number): Tier {
  if (val >= 10) return "red";
  if (val >= 5) return "amber";
  return null;
}

function overdueTier(val: number): Tier {
  if (val >= 5) return "red";
  if (val >= 2) return "amber";
  return null;
}

function PerfCell({ value, tier = null }: { value: string; tier?: Tier }) {
  const bg = tier === "red" ? "bg-[#fce9e8]" : tier === "amber" ? "bg-[#fbf4eb]" : "bg-white";
  const color = tier === "red" ? "text-[#5f0e08]" : tier === "amber" ? "text-[#5c3c16]" : "text-[#1e2831]";
  return (
    <div className={`${bg} h-[46px] flex items-center px-[20px] border-b border-[#f6f8fa]`}>
      <span className={`font-['inter:medium',sans-serif] text-[14px] leading-[20px] whitespace-nowrap ${color}`}>{value}</span>
    </div>
  );
}

const PAGE_SIZE = 10;

function PerformanceTable({ userFilter }: { userFilter: string[] }) {
  const [sort, setSort] = useState<{ key: PerfSortKey; dir: SortDir }>({ key: "user", dir: "asc" });
  const [page, setPage] = useState(1);

  // Reset to the first page whenever the result set changes
  useEffect(() => { setPage(1); }, [userFilter, sort.key, sort.dir]);

  function toggleSort(key: PerfSortKey) {
    setSort(s => {
      if (s.key !== key) return { key, dir: "desc" };
      if (s.dir === "desc") return { key, dir: "asc" };
      if (s.dir === "asc") return { key, dir: null };
      return { key, dir: "desc" };
    });
  }

  let rows = [...ALL_PERF_ROWS];
  if (userFilter.length > 0) rows = rows.filter(r => userFilter.includes(r.user));
  if (sort.dir) {
    rows.sort((a, b) => {
      const av = a[sort.key as PerfSortKey];
      const bv = b[sort.key as PerfSortKey];
      const cmp = typeof av === "string" ? av.localeCompare(bv as string) : (av as number) - (bv as number);
      return sort.dir === "asc" ? cmp : -cmp;
    });
  }

  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageRows = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function ColHeader({ label, colKey, width, tip }: { label: string; colKey: PerfSortKey; width?: number; tip?: string }) {
    const active = sort.key === colKey;
    return (
      <ColumnTitle
        label={label}
        dir={active ? sort.dir : null}
        onClick={() => toggleSort(colKey)}
        width={width}
        flex={width == null}
        tip={tip}
      />
    );
  }

  const colDef = [
    { label: "User", key: "user" as PerfSortKey, width: undefined, tip: undefined },
    { label: "Completed", key: "completed" as PerfSortKey, width: 130, tip: "Outreach is complete — email sent, called, mailed, texted, or no action needed." },
    { label: "Review", key: "review" as PerfSortKey, width: 110, tip: "Connect email is ready but hasn't been sent or actioned yet." },
    { label: "Send Rate", key: "sendRate" as PerfSortKey, width: 120, tip: "% of processed policies with a Connect email sent." },
    { label: "Undelivered", key: "undelivered" as PerfSortKey, width: 110, tip: "Email did not deliver — covers delivery failures, spam complaints, and unsubscribes." },
    { label: "Time to Complete", key: "timeToComplete" as PerfSortKey, width: 150, tip: "Average time from when a policy is successfully processed by Quandri to when outreach is completed by the user." },
    { label: "Email Edit Rate", key: "emailEditRate" as PerfSortKey, width: 140, tip: "% of emails customized before sending." },
    { label: "Due Soon", key: "dueSoon" as PerfSortKey, width: 110, tip: "Policies approaching their effective date within 7 days." },
    { label: "Overdue", key: "overdue" as PerfSortKey, width: 110, tip: "Effective date has passed with no outreach completed." },
  ];

  function handleExport() {
    exportCSV("performance.csv",
      colDef.map(c => c.label),
      rows.map(r => [r.user, r.completed, r.review, `${r.sendRate}%`, r.undelivered, `${r.timeToComplete}d`, `${r.emailEditRate}%`, r.dueSoon, r.overdue].map(String))
    );
  }

  return (
    <div className="flex flex-col gap-[10px] w-full">
    <div className="bg-white rounded-[8px] border border-[#e3e9ee] w-full overflow-hidden">
      {/* Header row */}
      <div className="bg-white flex items-center justify-between px-[20px] py-[12px]">
        <div className="flex gap-[8px] items-center">
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#1e2831] tracking-[-0.25px] leading-[22px]">Performance</span>
          <InfoIcon tip="How each user on your team is performing across outreach and email delivery. Rows are attributed to the actual sender." />
        </div>
        <ExportButton onClick={handleExport} />
      </div>
      {/* Table */}
      <div className="w-full overflow-x-auto">
        <div className="flex" style={{ minWidth: 900 }}>
          {colDef.map(c => (
            <ColHeader key={c.key} label={c.label} colKey={c.key} width={c.width} tip={c.tip} />
          ))}
        </div>
        {pageRows.map(r => {
          const combined = combinedTier(r);
          const time = timeTier(r.timeToComplete);
          const dueSoon = dueSoonTier(r.dueSoon);
          const overdue = overdueTier(r.overdue);
          return (
            <div key={r.user} className="flex hover:bg-[#fafbfc] transition-colors" style={{ minWidth: 900 }}>
              <div className="flex-1 min-w-0 h-[46px] flex items-center px-[20px] border-b border-[#f6f8fa] bg-white">
                <span className="font-['inter:medium',sans-serif] text-[14px] text-[#1e2831] leading-[20px] whitespace-nowrap">{r.user}</span>
              </div>
              <div style={{ width: 130 }}>
                <PerfCell value={String(r.completed)} />
              </div>
              <div style={{ width: 110 }}>
                <PerfCell value={String(r.review)} tier={combined} />
              </div>
              <div style={{ width: 120 }}>
                <PerfCell value={`${r.sendRate}%`} tier={combined} />
              </div>
              <div style={{ width: 110 }}>
                <PerfCell value={String(r.undelivered)} />
              </div>
              <div style={{ width: 150 }}>
                <PerfCell value={`${r.timeToComplete}d`} tier={time} />
              </div>
              <div style={{ width: 140 }}>
                <PerfCell value={`${r.emailEditRate}%`} />
              </div>
              <div style={{ width: 110 }}>
                <PerfCell value={String(r.dueSoon)} tier={dueSoon} />
              </div>
              <div style={{ width: 110 }}>
                <PerfCell value={String(r.overdue)} tier={overdue} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <TableFooter total={total} page={currentPage} pageSize={PAGE_SIZE} onChange={setPage} />
    </div>
  );
}

// ─── Bar chart ────────────────────────────────────────────────────────────────


// ─── Activity table ───────────────────────────────────────────────────────────

type ActivitySortKey = keyof ActivityRow;

function StatusChip({ value }: { value: string }) {
  if (value === "—") return <span className="font-['inter:medium',sans-serif] text-[14px] text-[#4b5f73]">—</span>;
  const bg = value === "Completed" ? "bg-[#e6f2eb]" : value === "Review" ? "bg-[#fce9e8]" : value === "Delivered" ? "bg-[#e6f2eb]" : value === "Undelivered" ? "bg-[#fce9e8]" : value === "Opened" ? "bg-[#e6effa]" : "bg-[#e9eef2]";
  return (
    <div className={`${bg} flex h-[26px] items-center justify-center overflow-clip px-[12px] rounded-[1000px] shrink-0`}>
      <span className="font-['inter:medium',sans-serif] text-[12px] text-[#1e2831] leading-[16px] whitespace-nowrap">{value}</span>
    </div>
  );
}

function ActivityTable() {
  const [sort, setSort] = useState<{ key: ActivitySortKey; dir: SortDir }>({ key: "customer", dir: "asc" });
  const [userActionFilter, setUserActionFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [deliveryFilter, setDeliveryFilter] = useState("All");
  const [page, setPage] = useState(1);

  // Reset to the first page whenever the result set changes
  useEffect(() => { setPage(1); }, [userActionFilter, statusFilter, deliveryFilter, sort.key, sort.dir]);

  function toggleSort(key: ActivitySortKey) {
    setSort(s => {
      if (s.key !== key) return { key, dir: "desc" };
      if (s.dir === "desc") return { key, dir: "asc" };
      if (s.dir === "asc") return { key, dir: null };
      return { key, dir: "desc" };
    });
  }

  let rows = [...ALL_ACTIVITY_ROWS];
  if (userActionFilter !== "All") rows = rows.filter(r => r.userAction === userActionFilter);
  if (statusFilter !== "All") rows = rows.filter(r => r.status === statusFilter);
  if (deliveryFilter !== "All") rows = rows.filter(r => r.deliveryStatus === deliveryFilter);
  if (sort.dir) {
    rows.sort((a, b) => {
      const cmp = a[sort.key].localeCompare(b[sort.key]);
      return sort.dir === "asc" ? cmp : -cmp;
    });
  }

  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageRows = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function ColHeader({ label, colKey, flex, width, tip }: { label: string; colKey: ActivitySortKey; flex?: boolean; width?: number; tip?: string }) {
    const active = sort.key === colKey;
    return (
      <ColumnTitle
        label={label}
        dir={active ? sort.dir : null}
        onClick={() => toggleSort(colKey)}
        width={width}
        flex={flex}
        tip={tip}
      />
    );
  }

  function handleExport() {
    exportCSV("activity.csv",
      ["Customer Name", "Policy ID", "Effective Date", "User", "User Action", "Status", "Delivery Status", "Undelivered Reason"],
      rows.map(r => [r.customer, r.policyId, r.effectiveDate, r.user, r.userAction, r.status, r.deliveryStatus, r.undeliveredReason])
    );
  }

  return (
    <div className="flex flex-col gap-[10px] w-full">
    <div className="bg-white rounded-[8px] border border-[#e3e9ee] w-full overflow-hidden">
      {/* Toolbar */}
      <div className="bg-white flex items-center justify-between px-[20px] py-[12px]">
        <div className="flex gap-[8px] items-center">
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#1e2831] tracking-[-0.25px] leading-[22px]">Activity</span>
          <InfoIcon tip="Per-policy drill-down of outreach actions and email delivery status for each renewal. Sortable and filterable." />
        </div>
        <div className="flex gap-[8px] items-center">
          {(userActionFilter !== "All" || statusFilter !== "All" || deliveryFilter !== "All") && (
            <button
              onClick={() => { setUserActionFilter("All"); setStatusFilter("All"); setDeliveryFilter("All"); }}
              className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] underline underline-offset-2 cursor-pointer whitespace-nowrap hover:text-[#0260ca]"
            >
              Reset filters
            </button>
          )}
          <SmallDropdown value={userActionFilter} options={USER_ACTIONS} onChange={setUserActionFilter} label="User Action" icon={<Activity size={16} strokeWidth={1.5} />} />
          <SmallDropdown value={statusFilter} options={STATUSES} onChange={setStatusFilter} label="Status" icon={<CircleDot size={16} strokeWidth={1.5} />} />
          <SmallDropdown value={deliveryFilter} options={DELIVERY_STATUSES} onChange={setDeliveryFilter} label="Delivery" icon={<Send size={16} strokeWidth={1.5} />} />
          <ExportButton onClick={handleExport} />
        </div>
      </div>
      {/* Table */}
      <div className="w-full overflow-x-auto">
        <div className="flex" style={{ minWidth: 900 }}>
          <ColHeader label="Customer Name" colKey="customer" flex />
          <ColHeader label="Policy ID" colKey="policyId" flex tip="Unique policy identifier" />
          <ColHeader label="Effective Date" colKey="effectiveDate" width={140} tip="Policy effective date" />
          <ColHeader label="User" colKey="user" width={110} />
          <ColHeader label="User Action" colKey="userAction" flex tip="Outreach method used — Email Sent, Called, Mailed, SMS, or No Action Required." />
          <ColHeader label="Status" colKey="status" width={140} tip="Review = not yet actioned. Completed = outreach done." />
          <ColHeader label="Delivery Status" colKey="deliveryStatus" flex tip="Email delivery outcome — Delivered, Undelivered, or Opened. Only applies to rows where an email was sent." />
          <ColHeader label="Undelivered Reason" colKey="undeliveredReason" width={200} tip="Why the email failed to deliver. Sourced from Mailgun — covers invalid addresses, full inboxes, spam blocks, opt-outs, and more." />
          {/* action column header */}
          <ColumnTitle empty width={73} />
        </div>
        {total === 0 && (
          <div className="flex items-center justify-center h-[46px] text-[#4b5f73] text-[14px] font-['inter:medium',sans-serif]">No results</div>
        )}
        {pageRows.map((r, i) => {
          return (
            <div key={`${r.policyId}-${i}`} className="group flex bg-white hover:bg-[#f6f8fa] transition-colors" style={{ minWidth: 900 }}>
              <div className="flex-1 min-w-0 h-[46px] flex items-center px-[20px] border-b border-[#e9eef2]">
                <span className="font-['inter:medium',sans-serif] text-[14px] text-[#1e2831] leading-[20px] whitespace-nowrap">{r.customer}</span>
              </div>
              <div className="flex-1 min-w-0 h-[46px] flex items-center px-[20px] border-b border-[#e9eef2]">
                <span className="font-['inter:medium',sans-serif] text-[14px] text-[#1e2831] leading-[20px] whitespace-nowrap">{r.policyId}</span>
              </div>
              <div className="h-[46px] flex items-center px-[20px] border-b border-[#e9eef2] shrink-0" style={{ width: 140 }}>
                <span className="font-['inter:medium',sans-serif] text-[14px] text-[#1e2831] leading-[20px] whitespace-nowrap">{r.effectiveDate}</span>
              </div>
              <div className="h-[46px] flex items-center px-[20px] border-b border-[#e9eef2] shrink-0" style={{ width: 110 }}>
                <span className="font-['inter:medium',sans-serif] text-[14px] text-[#1e2831] leading-[20px] whitespace-nowrap">{r.user}</span>
              </div>
              <div className="flex-1 min-w-0 h-[46px] flex items-center px-[20px] border-b border-[#e9eef2]">
                <span className="font-['inter:medium',sans-serif] text-[14px] text-[#1e2831] leading-[20px] whitespace-nowrap">{r.userAction}</span>
              </div>
              <div className="h-[46px] flex items-center px-[20px] border-b border-[#e9eef2] shrink-0" style={{ width: 140 }}>
                <StatusChip value={r.status} />
              </div>
              <div className="flex-1 min-w-0 h-[46px] flex items-center px-[20px] border-b border-[#e9eef2]">
                <StatusChip value={r.deliveryStatus} />
              </div>
              <div className="h-[46px] flex items-center px-[20px] border-b border-[#e9eef2] shrink-0" style={{ width: 200 }}>
                <span className="font-['inter:medium',sans-serif] text-[14px] text-[#4b5f73] leading-[20px] whitespace-nowrap">{r.undeliveredReason}</span>
              </div>
              <div className="h-[46px] flex items-center px-[20px] border-b border-[#e9eef2] shrink-0" style={{ width: 73 }}>
                <Tooltip label="View policy" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-transparent border border-transparent rounded-[8px] size-[34px] flex items-center justify-center hover:bg-[#e3e9ee] transition-colors cursor-pointer">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d={svgPaths.p1669e400} stroke="#1E2831" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <TableFooter total={total} page={currentPage} pageSize={PAGE_SIZE} onChange={setPage} />
    </div>
  );
}

// ─── Sidebar nav item ─────────────────────────────────────────────────────────

function NavItem({
  label, icon, active = false, onClick,
}: { label: string; icon: React.ReactNode; active?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-[216px] h-[38px] flex items-center gap-[8px] px-[12px] rounded-[12px] cursor-pointer transition-colors ${active ? "bg-[rgba(255,255,255,0.1)]" : "bg-transparent hover:bg-[rgba(255,255,255,0.05)]"}`}
    >
      {icon}
      <span className={`font-['inter:medium',sans-serif] text-[13px] leading-[18px] ${active ? "text-white" : "text-[#d0d9e2]"}`}>{label}</span>
    </button>
  );
}

// ─── Main dashboard ───────────────────────────────────────────────────────────

export default function OutreachInsightsDashboard() {
  const [activeTab, setActiveTab] = useState("Outreach Insights");
  const [dateRange, setDateRange] = useState("4/1/26 - 4/7/26");
  const [userFilter, setUserFilter] = useState<string[]>([]);
  const [activeNav, setActiveNav] = useState("Dashboard");

  const tabs = ["Outreach Insights", "Policy Renewal", "Requoting"];

  return (
    <div className="flex min-h-screen" style={{ minWidth: 1280 }}>
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <div className="bg-[#151c23] w-[240px] min-h-screen flex flex-col justify-between pb-[20px] border-r border-[#1e2831] relative overflow-hidden shrink-0 sticky top-0 self-start" style={{ minHeight: "100vh" }}>
        {/* blurs */}
        <div className="absolute bg-[#0260ca] blur-[70px] h-[113px] left-[12px] opacity-30 top-[-45px] w-[169px] pointer-events-none" />
        <div className="absolute bg-[#007d38] blur-[70px] h-[58px] left-[188px] opacity-40 top-[52px] w-[87px] pointer-events-none" />

        {/* top */}
        <div className="flex flex-col gap-[24px] px-[12px] pt-[24px] relative z-10">
          {/* Logo */}
          <div className="flex gap-[6px] items-center px-[12px]">
            <div className="relative shrink-0" style={{ width: 88, height: 22 }}>
              <svg className="block size-full" fill="none" viewBox="0 0 88 22" preserveAspectRatio="xMidYMid meet">
                <path d={svgPaths.p12ccb000} fill="white" />
                <path d={svgPaths.p3a550780} fill="white" />
                <path d={svgPaths.p13082200} fill="white" />
                <path d={svgPaths.p361fcd00} fill="white" />
                <path d={svgPaths.pb751700} fill="white" />
                <path d={svgPaths.p1e08e380} fill="white" />
                <path d={svgPaths.p2206eb60} fill="white" />
              </svg>
            </div>
            {/* dot menu icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="3" r="1.5" fill="#d0d9e2" />
              <circle cx="7" cy="7" r="1.5" fill="#d0d9e2" />
              <circle cx="7" cy="11" r="1.5" fill="#d0d9e2" />
            </svg>
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-[2px]">
            <NavItem active={activeNav === "Dashboard"} onClick={() => setActiveNav("Dashboard")} label="Dashboard"
              icon={<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1" stroke={activeNav === "Dashboard" ? "white" : "#d0d9e2"} strokeWidth="1.5" /><rect x="9" y="1" width="6" height="6" rx="1" stroke={activeNav === "Dashboard" ? "white" : "#d0d9e2"} strokeWidth="1.5" /><rect x="1" y="9" width="6" height="6" rx="1" stroke={activeNav === "Dashboard" ? "white" : "#d0d9e2"} strokeWidth="1.5" /><rect x="9" y="9" width="6" height="6" rx="1" stroke={activeNav === "Dashboard" ? "white" : "#d0d9e2"} strokeWidth="1.5" /></svg>}
            />
            <NavItem active={activeNav === "Policies"} onClick={() => setActiveNav("Policies")} label="Policies"
              icon={<svg width="18" height="18" viewBox="0 0 14 16" fill="none"><path d={svgPaths.p553c100} stroke={activeNav === "Policies" ? "white" : "#d0d9e2"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            />
          </div>

          <div className="flex flex-col gap-[2px]">
            <span className="px-[12px] font-['inter:medium',sans-serif] text-[11px] text-[#5d758c] leading-[16px] uppercase tracking-[0.5px]">Admin</span>
            <NavItem active={activeNav === "Configuration"} onClick={() => setActiveNav("Configuration")} label="Configuration"
              icon={<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p1ba3b200} stroke={activeNav === "Configuration" ? "white" : "#d0d9e2"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            />
            <NavItem active={activeNav === "Carriers"} onClick={() => setActiveNav("Carriers")} label="Carriers"
              icon={<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p38595e80} stroke={activeNav === "Carriers" ? "white" : "#d0d9e2"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            />
            <NavItem active={activeNav === "Team & Permissions"} onClick={() => setActiveNav("Team & Permissions")} label="Team & Permissions"
              icon={<svg width="18" height="18" viewBox="0 0 14 16" fill="none"><path d={svgPaths.p17bdc600} stroke={activeNav === "Team & Permissions" ? "white" : "#d0d9e2"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            />
            <NavItem active={activeNav === "Integrations"} onClick={() => setActiveNav("Integrations")} label="Integrations"
              icon={<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d={svgPaths.pc17c8f0} stroke={activeNav === "Integrations" ? "white" : "#d0d9e2"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            />
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col gap-[20px] px-[12px] relative z-10">
          <div className="flex flex-col gap-[2px]">
            <NavItem active={false} onClick={() => {}} label="Share Feedback"
              icon={<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p5978280} stroke="#d0d9e2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            />
            <NavItem active={false} onClick={() => {}} label="Create Support Ticket"
              icon={<svg width="18" height="18" viewBox="0 0 16 12" fill="none"><path d={svgPaths.p16106700} stroke="#d0d9e2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            />
            <NavItem active={false} onClick={() => {}} label="Learning Center"
              icon={<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p3bdb9600} stroke="#d0d9e2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            />
          </div>
          {/* user profile */}
          <button className="bg-transparent w-full rounded-[12px] flex items-center gap-[8px] pl-[12px] pr-[4px] py-[8px] hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer">
            <div className="bg-[#2d3a47] rounded-full size-[40px] flex items-center justify-center shrink-0">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">J</span>
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-[4px] items-start">
              <span className="font-['inter:medium',sans-serif] text-[13px] text-white leading-[18px]">Jill Patterson</span>
              <span className="font-['inter:regular',sans-serif] text-[12px] text-[#d0d9e2] leading-[16px] overflow-hidden text-ellipsis whitespace-nowrap w-[120px]">jill.patterson@amceinsurance.com</span>
            </div>
            <svg width="10.5" height="6" viewBox="0 0 10.5 6" fill="none" className="shrink-0">
              <path d={svgPaths.p38d60d00} stroke="#D0D9E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="bg-[#f6f8fa] flex-1 min-w-0 flex flex-col">
        {activeNav === "Policies" ? (
          <PoliciesPage />
        ) : (<>
        {/* Tab bar */}
        <div className="bg-[#f6f8fa] border-b border-[#e3e9ee] flex gap-[12px] items-center px-[32px] shrink-0 sticky top-0 z-30">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative h-[46px] flex items-center justify-center px-[12px] cursor-pointer transition-colors font-['inter:medium',sans-serif] text-[14px] leading-[20px] ${activeTab === tab ? "text-[#1e2831]" : "text-[#4b5f73] hover:text-[#1e2831]"}`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0260ca] rounded-t-sm" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-[20px] px-[32px] pt-[20px] pb-[84px]">

            {/* Date filter */}
            <div className="flex items-center">
              <div className="bg-white rounded-[10px] border border-[#e3e9ee] flex items-center px-[12px] gap-[4px] relative" style={{ width: 228, height: 40 }}>
                <div className="overflow-clip relative shrink-0 size-[18px]">
                  <div className="absolute inset-[8.33%_12.5%]">
                    <div className="absolute inset-[-5%_-5.56%]">
                      <svg className="block size-full" fill="none" viewBox="0 0 15 16.5">
                        <path d={svgPaths.p3c8d6c80} stroke="#5D758C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="font-['inter:medium',sans-serif] text-[13px] leading-[18px] pointer-events-none select-none">
                  <span className="text-[#1e2831]">Date Range: </span>
                  <span className="text-[#0260ca]">{dateRange}</span>
                </span>
                {/* invisible select covers the whole button */}
                <select
                  value={dateRange}
                  onChange={e => setDateRange(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                >
                  {DATE_RANGES.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-[12px] items-start w-full">
              <StatCard label="Active Users" value="68%" sub="12 of 18 users active" tip="% of users who took at least one outreach action this period. Only users with the 'user' role are included — managers are excluded." />
              <StatCard label="Send Rate" value="72%" sub="1,802 emails sent" tip="% of processed policies with a Connect email sent." />
              <StatCard label="Time to Complete" value="1.8d" tip="Average time from when a policy is successfully processed by Quandri to when outreach is completed by the user." />
              <StatCard label="Delivery Rate" value="96.4%" sub="1,737 of 1,802 sent" tip="% of emails sent from Quandri that were successfully delivered to the recipient." />
              <StatCard label="Undelivered rate" value="3.6%" sub="65 undelivered" tip="% of sent emails that failed to deliver, including invalid addresses, inbox issues, provider blocks, and opt-outs." />
              <StatCard label="Open Rate" value="41%" sub="712 of 1,737 delivered" tip="% of delivered emails opened by the recipient. Requires email tracking to be enabled." />
            </div>

            {/* divider */}
            <div className="bg-[#e9eef2] h-px w-full" />

            {/* Team Insights */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between gap-[12px]">
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#1e2831] tracking-[-0.25px] leading-[22px]">Team Insights</span>
                <div className="flex items-center gap-[12px]">
                  {userFilter.length > 0 && (
                    <button
                      onClick={() => setUserFilter([])}
                      className="font-['inter:medium',sans-serif] text-[13px] text-[#1e2831] leading-[18px] underline underline-offset-2 cursor-pointer whitespace-nowrap hover:text-[#0260ca]"
                    >
                      Reset filter
                    </button>
                  )}
                  <MultiSelectDropdown selected={userFilter} options={USER_GROUPS} onChange={setUserFilter} width={190} />
                </div>
              </div>
              <PerformanceTable userFilter={userFilter} />
            </div>

            {/* Outreach Activity Status */}
            <OutreachActivityChart />

            {/* Activity table */}
            <ActivityTable />
          </div>
        </div>
        </>)}
      </div>
    </div>
  );
}
