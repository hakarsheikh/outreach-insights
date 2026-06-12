import svgPaths from "./svg-1fp30phdmf";

function LucideInfo() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/info">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_5245)" id="lucide/info">
          <path d={svgPaths.p3f43b940} id="Vector" stroke="var(--stroke-0, #3A4B5B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_5245">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:semi_bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[18px]">Outreach Activity Status</p>
      </div>
      <LucideInfo />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[58px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function BarWithLabel() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[46px]" data-name="Bar With Label">
      <p className="[word-break:break-word] font-['inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4b5f73] text-[12px] whitespace-nowrap">400</p>
      <div className="bg-[#d0d9e2] h-px relative shrink-0 w-[8px]" data-name="Bar" />
    </div>
  );
}

function BarWithLabel1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[46px]" data-name="Bar With Label">
      <p className="[word-break:break-word] font-['inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4b5f73] text-[12px] whitespace-nowrap">300</p>
      <div className="bg-[#d0d9e2] h-px relative shrink-0 w-[8px]" data-name="Bar" />
    </div>
  );
}

function BarWithLabel2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[46px]" data-name="Bar With Label">
      <p className="[word-break:break-word] font-['inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4b5f73] text-[12px] whitespace-nowrap">200</p>
      <div className="bg-[#d0d9e2] h-px relative shrink-0 w-[8px]" data-name="Bar" />
    </div>
  );
}

function BarWithLabel3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[46px]" data-name="Bar With Label">
      <p className="[word-break:break-word] font-['inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4b5f73] text-[12px] whitespace-nowrap">100</p>
      <div className="bg-[#d0d9e2] h-px relative shrink-0 w-[8px]" data-name="Bar" />
    </div>
  );
}

function BarWithLabel4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[46px]" data-name="Bar With Label">
      <p className="[word-break:break-word] font-['inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4b5f73] text-[12px] whitespace-nowrap">0</p>
      <div className="bg-[#d0d9e2] h-px relative shrink-0 w-[8px]" data-name="Bar" />
    </div>
  );
}

function BarGroup() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Bar Group">
      <div aria-hidden className="absolute border-[#e3e9ee] border-r border-solid inset-0 pointer-events-none" />
      <BarWithLabel />
      <BarWithLabel1 />
      <BarWithLabel2 />
      <BarWithLabel3 />
      <BarWithLabel4 />
    </div>
  );
}

function BarValueLine() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-end relative shrink-0 w-full" data-name="Bar Value Line">
      <div className="bg-[#d0d9e2] flex-[1_0_0] h-px min-w-px relative" data-name="Value Line" />
    </div>
  );
}

function BarValueLine1() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-end relative shrink-0 w-full" data-name="Bar Value Line">
      <div className="bg-[#d0d9e2] flex-[1_0_0] h-px min-w-px relative" data-name="Value Line" />
    </div>
  );
}

function BarValueLine2() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-end relative shrink-0 w-full" data-name="Bar Value Line">
      <div className="bg-[#d0d9e2] flex-[1_0_0] h-px min-w-px relative" data-name="Value Line" />
    </div>
  );
}

function BarValueLine3() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-end relative shrink-0 w-full" data-name="Bar Value Line">
      <div className="bg-[#d0d9e2] flex-[1_0_0] h-px min-w-px relative" data-name="Value Line" />
    </div>
  );
}

function Bar() {
  return <div className="absolute bg-[#0260ca] bottom-0 h-[69px] left-0 w-[84px]" data-name="Bar" />;
}

function BarLabel() {
  return (
    <div className="bg-[#b1ceef] h-[110px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[52px]" data-name="Bar Label">
      <Bar />
    </div>
  );
}

function Bar1() {
  return <div className="absolute bg-[#0260ca] bottom-0 h-[110px] left-[-0.33px] w-[85px]" data-name="Bar" />;
}

function BarLabel1() {
  return (
    <div className="bg-[#b1ceef] h-[140px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[52px]" data-name="Bar Label">
      <Bar1 />
    </div>
  );
}

function Bar2() {
  return <div className="absolute bg-[#0260ca] bottom-0 h-[106px] left-[-0.33px] w-[85px]" data-name="Bar" />;
}

function BarLabel2() {
  return (
    <div className="bg-[#b1ceef] h-[157px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[52px]" data-name="Bar Label">
      <Bar2 />
    </div>
  );
}

function Bar3() {
  return <div className="absolute bg-[#0260ca] bottom-0 h-[114px] left-0 w-[85px]" data-name="Bar" />;
}

function BarLabel3() {
  return (
    <div className="bg-[#b1ceef] h-[170px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[52px]" data-name="Bar Label">
      <Bar3 />
    </div>
  );
}

function Bar4() {
  return <div className="absolute bg-[#0260ca] bottom-0 h-[104px] left-[-0.33px] w-[85px]" data-name="Bar" />;
}

function BarLabel4() {
  return (
    <div className="bg-[#b1ceef] h-[157px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[52px]" data-name="Bar Label">
      <Bar4 />
    </div>
  );
}

function Bar5() {
  return <div className="absolute bg-[#0260ca] bottom-0 h-[84px] left-[-1.67px] w-[87px]" data-name="Bar" />;
}

function BarLabel5() {
  return (
    <div className="bg-[#b1ceef] h-[129px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[52px]" data-name="Bar Label">
      <Bar5 />
    </div>
  );
}

function Bar6() {
  return <div className="absolute bg-[#0260ca] bottom-0 h-[97px] left-0 w-[85px]" data-name="Bar" />;
}

function BarLabel6() {
  return (
    <div className="bg-[#b1ceef] h-[149px] overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[52px]" data-name="Bar Label">
      <Bar6 />
    </div>
  );
}

function Bars() {
  return (
    <div className="absolute content-stretch flex h-[190px] items-end justify-between left-[52px] top-[31px] w-[1018px]" data-name="Bars">
      <BarLabel />
      <BarLabel1 />
      <BarLabel2 />
      <BarLabel3 />
      <BarLabel4 />
      <BarLabel5 />
      <BarLabel6 />
    </div>
  );
}

function BarValues() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative" data-name="Bar Values">
      <BarValueLine />
      <BarValueLine1 />
      <BarValueLine2 />
      <BarValueLine3 />
      <Bars />
    </div>
  );
}

function BarContainer() {
  return (
    <div className="content-stretch flex h-[229px] items-center relative shrink-0 w-full" data-name="Bar Container">
      <BarGroup />
      <BarValues />
    </div>
  );
}

function DateLabelGroup() {
  return (
    <div className="[word-break:break-word] font-['Inter:medium',sans-serif] h-[22px] leading-[22px] not-italic relative shrink-0 text-[#1e2831] text-[13px] text-center w-full" data-name="Date Label Group">
      <p className="-translate-x-1/2 absolute left-[124px] top-0 w-[52px]">Apr 1</p>
      <p className="-translate-x-1/2 absolute left-[285px] top-0 w-[52px]">Apr 2</p>
      <p className="-translate-x-1/2 absolute left-[446px] top-0 w-[52px]">Apr 3</p>
      <p className="-translate-x-1/2 absolute left-[607px] top-0 w-[52px]">Apr 4</p>
      <p className="-translate-x-1/2 absolute left-[768px] top-0 w-[52px]">Apr 5</p>
      <p className="-translate-x-1/2 absolute left-[929px] top-0 w-[52px]">Apr 6</p>
      <p className="-translate-x-1/2 absolute left-[1090px] top-0 w-[52px]">Apr 7</p>
    </div>
  );
}

function LegendItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend Item">
      <div className="bg-[#0260ca] relative rounded-[1000px] shrink-0 size-[8px]" data-name="Status Indicator" />
      <p className="[word-break:break-word] font-['inter:medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e2831] text-[12px] text-center whitespace-nowrap">Completed</p>
    </div>
  );
}

function LegendItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend Item">
      <div className="bg-[#b1ceef] relative rounded-[1000px] shrink-0 size-[8px]" data-name="Status Indicator" />
      <p className="[word-break:break-word] font-['inter:medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e2831] text-[12px] text-center whitespace-nowrap">Review</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="relative shrink-0 w-full" data-name="Legend">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center px-[22px] relative size-full">
          <LegendItem />
          <LegendItem1 />
        </div>
      </div>
    </div>
  );
}

function DateLabels() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Date Labels">
      <DateLabelGroup />
      <Legend />
    </div>
  );
}

function GraphContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Graph Container">
      <BarContainer />
      <DateLabels />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <GraphContainer />
        </div>
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Slot">
      <Frame />
      <Frame2 />
    </div>
  );
}

export default function Table() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Slot />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}