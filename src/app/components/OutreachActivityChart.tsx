import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../../imports/Table-1/svg-tlcm07u584";

// Pixel heights from the Figma import (190px total = 400 units)
const BARS = [
  { date: "Apr 1", totalH: 110, completedH: 69 },
  { date: "Apr 2", totalH: 140, completedH: 110 },
  { date: "Apr 3", totalH: 157, completedH: 106 },
  { date: "Apr 4", totalH: 170, completedH: 114 },
  { date: "Apr 5", totalH: 157, completedH: 104 },
  { date: "Apr 6", totalH: 129, completedH: 84 },
  { date: "Apr 7", totalH: 149, completedH: 97 },
].map(b => ({
  ...b,
  completed: Math.round(b.completedH * 400 / 190),
  review: Math.round((b.totalH - b.completedH) * 400 / 190),
  total: Math.round(b.totalH * 400 / 190),
}));

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
  const [showCompleted, setShowCompleted] = useState(true);
  const [showReview, setShowReview] = useState(true);

  const CHART_H = 190;
  const AXIS_W = 46;
  const BAR_W = 52;
  const EDGE_PAD = 48; // keeps the first/last bars well off the chart edges

  return (
    <div className="bg-white rounded-[8px] border border-[#e3e9ee] w-full">
      {/* Header */}
      <div className="h-[58px] flex items-center px-[20px]">
        <div className="flex gap-[8px] items-center">
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#1e2831] tracking-[-0.25px] leading-[22px]">Outreach Activity Status</span>
          <InfoIcon />
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
                const reviewH = bar.totalH - bar.completedH;
                const visibleH = (showReview ? reviewH : 0) + (showCompleted ? bar.completedH : 0);
                const visibleTotal = (showReview ? bar.review : 0) + (showCompleted ? bar.completed : 0);

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
                          minWidth: 180,
                          pointerEvents: "none",
                        }}
                      >
                        <div className="flex items-center justify-between gap-[16px]">
                          <span className="font-['inter:medium',sans-serif] text-[13px] text-white leading-[18px]">{bar.date}</span>
                          <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white leading-[18px] whitespace-nowrap">{visibleTotal} policies</span>
                        </div>
                        <div className="bg-[#2d3a47] h-px w-full" />
                        {showReview && (
                          <div className="flex items-center justify-between gap-[12px]">
                            <div className="flex items-center gap-[6px]">
                              <div className="bg-[#b1ceef] rounded-full size-[8px] shrink-0" />
                              <span className="font-['inter:medium',sans-serif] text-[13px] text-[#d0d9e2] leading-[18px]">Review</span>
                            </div>
                            <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white leading-[18px]">{bar.review}</span>
                          </div>
                        )}
                        {showCompleted && (
                          <div className="flex items-center justify-between gap-[12px]">
                            <div className="flex items-center gap-[6px]">
                              <div className="bg-[#0260ca] rounded-full size-[8px] shrink-0" />
                              <span className="font-['inter:medium',sans-serif] text-[13px] text-[#d0d9e2] leading-[18px]">Completed</span>
                            </div>
                            <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white leading-[18px]">{bar.completed}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bar itself — stacked visible segments (review on top, completed below) */}
                    <div
                      className="relative overflow-clip rounded-tl-[8px] rounded-tr-[8px] flex flex-col"
                      style={{ width: BAR_W, height: visibleH }}
                    >
                      {showReview && (
                        <div
                          className="transition-colors"
                          style={{ height: reviewH, background: isHovered ? "#8ab5df" : "#b1ceef" }}
                        />
                      )}
                      {showCompleted && (
                        <div
                          className="transition-colors"
                          style={{ height: bar.completedH, background: isHovered ? "#0147a3" : "#0260ca" }}
                        />
                      )}
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
        <div className="flex gap-[20px] items-center justify-center mt-[12px]">
          <button
            type="button"
            onClick={() => setShowCompleted(v => !v)}
            className={`flex gap-[8px] items-center cursor-pointer transition-opacity select-none ${showCompleted ? "opacity-100" : "opacity-40"}`}
          >
            <div className="bg-[#0260ca] rounded-full size-[8px]" />
            <span className={`font-['inter:medium',sans-serif] text-[12px] text-[#1e2831] ${showCompleted ? "" : "line-through"}`}>Completed</span>
          </button>
          <button
            type="button"
            onClick={() => setShowReview(v => !v)}
            className={`flex gap-[8px] items-center cursor-pointer transition-opacity select-none ${showReview ? "opacity-100" : "opacity-40"}`}
          >
            <div className="bg-[#b1ceef] rounded-full size-[8px]" />
            <span className={`font-['inter:medium',sans-serif] text-[12px] text-[#1e2831] ${showReview ? "" : "line-through"}`}>Review</span>
          </button>
        </div>
      </div>
    </div>
  );
}
