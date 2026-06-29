import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../../imports/Table-1/svg-tlcm07u584";

// ─── Series definitions ─────────────────────────────────────────────────────────
// Two views of the same daily renewals, toggled by the segmented control:
//   • "By status"  — Completed vs Incomplete (the high-level "are we keeping up?")
//   • "By action"  — Completed broken into its completion types, Incomplete on top
// These are different dimensions, so we never mix them in one stack.

interface Series {
  id: string;
  label: string;
  color: string;
  hover: string;
}

const INCOMPLETE: Series = { id: "incomplete", label: "Incomplete",  color: "#b1ceef", hover: "#8ab5df" };
const COMPLETED:  Series = { id: "completed",  label: "Completed",   color: "#0260ca", hover: "#0147a3" };

// Completion types — the breakdown that lives *inside* Completed.
const ACTION_TYPES: Series[] = [
  { id: "emailSent", label: "Email Sent",         color: "#0260ca", hover: "#0147a3" },
  { id: "called",    label: "Called",             color: "#2e7d52", hover: "#245f40" },
  { id: "sms",       label: "SMS",                color: "#d98a2b", hover: "#b87122" },
  { id: "mailed",    label: "Mailed",             color: "#7b61c9", hover: "#6149a3" },
  { id: "noAction",  label: "No Action Required", color: "#5d758c", hover: "#4b5f73" },
];

const STATUS_SERIES: Series[] = [COMPLETED, INCOMPLETE];
// "By action" shows only completed outreach — Incomplete has no action type, so it
// is excluded here (it lives in the "By status" view). Bars therefore represent the
// completed portion only and read shorter than the status view, which is intended.
const ACTION_SERIES: Series[] = [...ACTION_TYPES];
const SERIES_BY_ID: Record<string, Series> = Object.fromEntries(
  [...STATUS_SERIES, ...ACTION_SERIES].map(s => [s.id, s])
);

// Visual stack, top → bottom (flex-col renders first child on top). In the status
// view Incomplete sits on top of Completed; in the action view the largest type
// (Email Sent) anchors the bottom.
const STACK_BY_STATUS = ["incomplete", "completed"];
const STACK_BY_ACTION = ["noAction", "mailed", "sms", "called", "emailSent"];

// Share of the Completed bucket each completion type represents (sums to 1).
const CT_ORDER = ["emailSent", "called", "sms", "mailed", "noAction"] as const;
const CT_RATIOS: Record<(typeof CT_ORDER)[number], number> = {
  emailSent: 0.55, called: 0.18, sms: 0.12, mailed: 0.07, noAction: 0.08,
};

// Distribute an integer `total` across `ratios` (which sum to ~1) using
// largest-remainder rounding so the parts always sum back to exactly `total`.
function distribute(total: number, ratios: number[]): number[] {
  const raw = ratios.map(r => total * r);
  const parts = raw.map(Math.floor);
  const remainder = total - parts.reduce((a, b) => a + b, 0);
  const byFrac = raw.map((v, i) => ({ i, f: v - Math.floor(v) })).sort((a, b) => b.f - a.f);
  for (let k = 0; k < remainder; k++) parts[byFrac[k % byFrac.length].i]++;
  return parts;
}

// Pixel heights from the Figma import (190px total = 400 units)
const BARS = [
  { date: "Apr 1", totalH: 110, completedH: 69 },
  { date: "Apr 2", totalH: 140, completedH: 110 },
  { date: "Apr 3", totalH: 157, completedH: 106 },
  { date: "Apr 4", totalH: 170, completedH: 114 },
  { date: "Apr 5", totalH: 157, completedH: 104 },
  { date: "Apr 6", totalH: 129, completedH: 84 },
  { date: "Apr 7", totalH: 149, completedH: 97 },
].map(b => {
  const reviewH = b.totalH - b.completedH;
  const completedCount = Math.round(b.completedH * 400 / 190);
  const incompleteCount = Math.round(reviewH * 400 / 190);
  const ratios = CT_ORDER.map(k => CT_RATIOS[k]);
  const heights = distribute(b.completedH, ratios);
  const counts = distribute(completedCount, ratios);

  const seg: Record<string, { height: number; count: number }> = {};
  CT_ORDER.forEach((k, i) => { seg[k] = { height: heights[i], count: counts[i] }; });
  seg.completed = { height: b.completedH, count: completedCount };
  seg.incomplete = { height: reviewH, count: incompleteCount };

  return { date: b.date, seg, total: completedCount + incompleteCount };
});

function InfoIcon({ tip = "Daily renewals by outreach status. Toggle 'By action' to break Completed into completion types." }: { tip?: string }) {
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
          <g clipPath="url(#clip-oa-info)">
            <path d={svgPaths.p3f43b940} stroke="#3A4B5B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
          <defs><clipPath id="clip-oa-info"><rect fill="white" height="14" width="14" /></clipPath></defs>
        </svg>
      </span>
      {/* Tooltip — Quandri DS "Type=Default, MultiLine=False". Body portal avoids clipping. */}
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

export default function OutreachActivityChart() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mode, setMode] = useState<"status" | "action">("status");
  // Series visibility — toggled via the legend. All visible by default.
  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  const isVisible = (id: string) => !hidden[id];
  const toggle = (id: string) => setHidden(h => ({ ...h, [id]: !h[id] }));

  const series = mode === "status" ? STATUS_SERIES : ACTION_SERIES;
  const stackOrder = mode === "status" ? STACK_BY_STATUS : STACK_BY_ACTION;

  const CHART_H = 190;
  const AXIS_W = 46;
  const BAR_W = 52;
  const EDGE_PAD = 48; // keeps the first/last bars well off the chart edges

  return (
    <div className="bg-white rounded-[8px] border border-[#e3e9ee] w-full">
      {/* Header */}
      <div className="h-[58px] flex items-center justify-between px-[20px]">
        <div className="flex gap-[8px] items-center">
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#1e2831] tracking-[-0.25px] leading-[22px]">Outreach Activity Status</span>
          <InfoIcon />
        </div>
        {/* View toggle — Completed vs Incomplete  ⇄  completion-type breakdown */}
        <div className="flex items-center gap-[2px] bg-[#f6f8fa] border border-[#e3e9ee] rounded-[8px] p-[3px]">
          {([["status", "By status"], ["action", "By action"]] as const).map(([m, label]) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`h-[28px] px-[12px] rounded-[6px] font-['inter:medium',sans-serif] text-[12px] transition-colors ${mode === m ? "bg-white text-[#1e2831] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]" : "text-[#4b5f73] hover:text-[#1e2831]"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart body */}
      <div className="px-[20px] pb-[20px] pt-[16px]">
        {/* Bar container */}
        <div className="relative flex items-center" style={{ height: 229 }}>
          {/* Y-axis */}
          <div className="flex flex-col justify-between items-start shrink-0 relative h-full" style={{ width: AXIS_W }}>
            <div className="absolute border-r border-[#e3e9ee] inset-0 pointer-events-none" />
            {[400, 300, 200, 100, 0].map(v => (
              <div key={v} className="flex gap-[4px] items-center justify-end" style={{ width: AXIS_W }}>
                <span className="font-['inter:regular',sans-serif] text-[12px] text-[#4b5f73] leading-[16px]">{v}</span>
                <div className="bg-[#d0d9e2] h-px w-[8px]" />
              </div>
            ))}
          </div>

          {/* Bars + grid */}
          <div className="flex-1 min-w-0 relative h-full">
            {/* Horizontal grid lines — one per y-axis tick (400…0), aligned via the
                same justify-between distribution the axis labels use */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[400, 300, 200, 100, 0].map(v => (
                <div key={v} className="flex items-center" style={{ height: 16 }}>
                  <div className="bg-[#d0d9e2] h-px w-full" />
                </div>
              ))}
            </div>

            {/* Bars — absolutely positioned to match import */}
            <div className="absolute inset-x-0 flex items-end justify-between" style={{ top: 31, height: CHART_H, paddingLeft: EDGE_PAD, paddingRight: EDGE_PAD }}>
              {BARS.map((bar, i) => {
                const isHovered = hovered === i;
                const visibleH = series.reduce((sum, s) => sum + (isVisible(s.id) ? bar.seg[s.id].height : 0), 0);
                const visibleTotal = series.reduce((sum, s) => sum + (isVisible(s.id) ? bar.seg[s.id].count : 0), 0);

                return (
                  <div
                    key={bar.date}
                    className="relative shrink-0 flex flex-col items-end justify-end cursor-pointer"
                    style={{ width: BAR_W, height: CHART_H }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Tooltip */}
                    {isHovered && (
                      <div
                        className="absolute z-50 bg-[#151c23] rounded-[10px] p-[12px] flex flex-col gap-[6px] shadow-lg"
                        style={{
                          bottom: visibleH + 10,
                          left: "50%",
                          transform: "translateX(-50%)",
                          minWidth: 190,
                          pointerEvents: "none",
                        }}
                      >
                        <div className="flex items-center justify-between gap-[16px]">
                          <span className="font-['inter:medium',sans-serif] text-[13px] text-white leading-[18px]">{bar.date}</span>
                          <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white leading-[18px] whitespace-nowrap">{visibleTotal} {mode === "action" ? "completed" : "policies"}</span>
                        </div>
                        <div className="bg-[#2d3a47] h-px w-full" />
                        {series.filter(s => isVisible(s.id)).map(s => (
                          <div key={s.id} className="flex items-center justify-between gap-[12px]">
                            <div className="flex items-center gap-[6px]">
                              <div className="rounded-full size-[8px] shrink-0" style={{ background: s.color }} />
                              <span className="font-['inter:medium',sans-serif] text-[13px] text-[#d0d9e2] leading-[18px] whitespace-nowrap">{s.label}</span>
                            </div>
                            <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white leading-[18px]">{bar.seg[s.id].count}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bar itself — stacked visible segments (Incomplete on top) */}
                    <div
                      className="relative overflow-clip rounded-tl-[8px] rounded-tr-[8px] flex flex-col"
                      style={{ width: BAR_W, height: visibleH }}
                    >
                      {stackOrder.map(id => {
                        if (!isVisible(id)) return null;
                        const s = SERIES_BY_ID[id];
                        const h = bar.seg[id].height;
                        if (h <= 0) return null;
                        return (
                          <div
                            key={id}
                            className="transition-colors"
                            style={{ height: h, background: isHovered ? s.hover : s.color }}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Date labels */}
        <div className="h-[22px] w-full mt-[4px] flex justify-between" style={{ paddingLeft: AXIS_W + EDGE_PAD, paddingRight: EDGE_PAD }}>
          {BARS.map(bar => (
            <p
              key={bar.date}
              className="font-['Inter:medium',sans-serif] text-[13px] text-[#1e2831] text-center leading-[22px] shrink-0"
              style={{ width: BAR_W }}
            >
              {bar.date}
            </p>
          ))}
        </div>

        {/* Legend — click to toggle each series */}
        <div className="flex flex-wrap gap-x-[20px] gap-y-[8px] items-center justify-center mt-[12px]">
          {series.map(s => {
            const on = isVisible(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggle(s.id)}
                className={`flex gap-[8px] items-center cursor-pointer transition-opacity select-none ${on ? "opacity-100" : "opacity-40"}`}
              >
                <div className="rounded-full size-[8px]" style={{ background: s.color }} />
                <span className={`font-['inter:medium',sans-serif] text-[12px] text-[#1e2831] ${on ? "" : "line-through"}`}>{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
