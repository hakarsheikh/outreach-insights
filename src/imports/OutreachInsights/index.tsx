import svgPaths from "./svg-jbrhwk28hh";

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.5">
              <path d={svgPaths.p3c8d6c80} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[13px] whitespace-nowrap">
        <p>
          <span className="leading-[18px]">{`Effective: `}</span>
          <span className="leading-[18px] text-[#0260ca]">4/1/26 - 4/7/26</span>
        </p>
      </div>
    </div>
  );
}

function DropdownContainer() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative rounded-[10px]" data-name="Dropdown Container">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[4px] relative size-full">
          <Container />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[228px]" data-name="Dropdown">
      <DropdownContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Dropdown />
    </div>
  );
}

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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Active Users</p>
      </div>
      <LucideInfo />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <Frame5 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[30px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[1.4]">68%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[12px] tracking-[0.25px] whitespace-nowrap">
        <p className="leading-[20px]">12 of 18 users active</p>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Main Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <TextContainer />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LucideInfo1() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Send Rate</p>
      </div>
      <LucideInfo1 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <Frame6 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[30px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[1.4]">72%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[12px] tracking-[0.25px] whitespace-nowrap">
        <p className="leading-[20px]">1,802 emails sent</p>
      </div>
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Main Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <TextContainer1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LucideInfo2() {
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Time to Complete</p>
      </div>
      <LucideInfo2 />
    </div>
  );
}

function Frame8() {
  return <div className="h-[20px] relative shrink-0 w-[76px]" />;
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <Frame7 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[30px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[1.4]">1.8d</p>
      </div>
      <Frame8 />
    </div>
  );
}

function MainContainer2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Main Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <TextContainer2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LucideInfo3() {
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Delivery Rate</p>
      </div>
      <LucideInfo3 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <Frame9 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[30px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[1.4]">96.4%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[12px] tracking-[0.25px] whitespace-nowrap">
        <p className="leading-[20px]">1,737 of 1,802 sent</p>
      </div>
    </div>
  );
}

function MainContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Main Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <TextContainer3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LucideInfo4() {
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Undelivered rate</p>
      </div>
      <LucideInfo4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[12px] tracking-[0.25px] whitespace-nowrap">
        <p className="leading-[20px]">65 undelivered</p>
      </div>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <Frame10 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[30px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[1.4]">3.6%</p>
      </div>
      <Frame11 />
    </div>
  );
}

function MainContainer4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Main Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <TextContainer4 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LucideInfo5() {
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Open Rate</p>
      </div>
      <LucideInfo5 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <Frame12 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[30px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[1.4]">41%</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[12px] tracking-[0.25px] whitespace-nowrap">
        <p className="leading-[20px]">712 of 1,737 delivered</p>
      </div>
    </div>
  );
}

function MainContainer5() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Main Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <TextContainer5 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StatisticsCards() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Statistics Cards">
      <MainContainer />
      <MainContainer1 />
      <MainContainer2 />
      <MainContainer3 />
      <MainContainer4 />
      <MainContainer5 />
    </div>
  );
}

function Frame13() {
  return <div className="bg-[#e9eef2] h-px relative shrink-0 w-full" />;
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">All Users</p>
      </div>
    </div>
  );
}

function DropdownContainer1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Dropdown Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[4px] relative size-full">
          <Container1 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                  <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:semi_bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[18px]">Team Insights</p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[170px]" data-name="Dropdown">
        <DropdownContainer1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function LucideInfo6() {
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

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:semi_bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[18px]">Performance</p>
      </div>
      <LucideInfo6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative size-full">
          <Frame16 />
          <div className="bg-[#1e2831] h-[34px] min-w-[100px] relative rounded-[8px] shrink-0" data-name="Button">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] overflow-clip pl-[8px] pr-[12px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute inset-[12.5%_8.33%_12.5%_8.34%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.499 14.9997">
                      <path d={svgPaths.p620f500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
                <p className="leading-[18px]">{`Export `}</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#1e2831] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnSlot() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Roy</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Eleanor Pena</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Devon Lane</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Jacob Jones</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Albert Flores</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Kathryn Murphy</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Slot1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">33</p>
      </div>
    </div>
  );
}

function Slot2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">46</p>
      </div>
    </div>
  );
}

function Slot3() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">24</p>
      </div>
    </div>
  );
}

function Slot4() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">40</p>
      </div>
    </div>
  );
}

function Slot5() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">33</p>
      </div>
    </div>
  );
}

function Slot6() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">29</p>
      </div>
    </div>
  );
}

function ColumnSlot1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <Slot1 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <Slot2 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <Slot3 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <Slot4 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <Slot5 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <Slot6 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">18</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">5</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">22</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">9</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">11</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">8</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">58%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">80%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">39%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">67%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">66%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">42%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">2</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">1</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">4</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">2</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">0</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">2</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">1.6d</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">0.9d</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">3.2d</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">1.5d</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">2.1d</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">1.4d</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">38%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">22%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fbf4eb] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5c3c16] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">61%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">41%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">30%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">24%</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">8</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">2</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">6</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">4</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">3</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">2</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">4</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">1</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">8</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">3</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">2</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#fce9e8] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f0e08] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">1</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[140px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">User</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[130px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Completed</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot1 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[110px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Review</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot2 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[120px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Send Rate</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot3 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[110px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Undelivered</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot4 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Time to Complete</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot5 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[140px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Email Edit Rate</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot6 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Due Soon</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot7 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[110px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Overdue</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot8 />
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Slot">
      <Frame15 />
      <Frame19 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Slot />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame />
      <Table />
    </div>
  );
}

function LucideInfo7() {
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:semi_bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[18px]">Outreach Activity Status</p>
      </div>
      <LucideInfo7 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white h-[58px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative size-full">
          <Frame21 />
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

function Frame22() {
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

function Slot7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Slot">
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-white h-[382px] relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Slot7 />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LucideInfo8() {
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

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:semi_bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[18px]">Activity</p>
      </div>
      <LucideInfo8 />
    </div>
  );
}

function Dropdown1() {
  return <div className="content-stretch flex flex-col h-[34px] items-start relative shrink-0 w-[120px]" data-name="Dropdown" />;
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">User Action</p>
      </div>
    </div>
  );
}

function DropdownContainer2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Dropdown Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[4px] relative size-full">
          <Container2 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                  <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[34px] items-start relative shrink-0 w-[120px]" data-name="Dropdown">
      <DropdownContainer2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Status</p>
      </div>
    </div>
  );
}

function DropdownContainer3() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0" data-name="Dropdown Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative size-full">
          <Container3 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                  <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Delivery Status</p>
      </div>
    </div>
  );
}

function DropdownContainer4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Dropdown Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[4px] relative size-full">
          <Container4 />
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                  <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[34px] items-start relative shrink-0 w-[150px]" data-name="Dropdown">
      <DropdownContainer4 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <Dropdown2 />
      <DropdownContainer3 />
      <Dropdown3 />
      <div className="bg-[#1e2831] h-[34px] min-w-[100px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] overflow-clip pl-[8px] pr-[12px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
            <div className="absolute inset-[12.5%_8.33%_12.5%_8.34%]" data-name="Vector">
              <div className="absolute inset-[-5.56%_-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.499 14.9997">
                  <path d={svgPaths.p620f500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
            <p className="leading-[18px]">Export</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#1e2831] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative size-full">
          <Frame24 />
          <Dropdown1 />
          <div className="flex flex-row items-center self-stretch">
            <Frame25 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnSlot9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Sarah Mitchell</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">James Parker</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Linda Torres</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Robert Kim</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Maria Santos</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Thomas Bradley</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">POL-10293</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">POL-10311</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">POL-10288</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">POL-10301</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">POL-10276</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">POL-10319</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Hannah R.</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Marcus T.</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Priya N.</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Dan O.</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Lena K.</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Hannah R.</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Email Sent</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Called</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Email Sent</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Email Sent</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Email Sent</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#e6f2eb] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#e6f2eb] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#fce9e8] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#e6f2eb] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#e6f2eb] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#e6f2eb] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#e6f2eb] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#fce9e8] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Undelivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#e6effa] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[12px] relative rounded-[1000px] shrink-0" data-name="Chip">
                <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Opened</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Mailbox does not exist</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">—</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ColumnSlot16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column Slot 1">
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="h-full relative shrink-0 w-[59px]" data-name="Slot" />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Slot">
              <div className="bg-[#e3e9ee] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[34px]" data-name="Button">
                <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                  <div className="absolute inset-[20.83%]" data-name="Vector">
                    <div className="absolute inset-[-7.14%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p1669e400} id="Vector" stroke="var(--stroke-0, #1E2831)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="h-full relative shrink-0 w-[59px]" data-name="Slot" />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="h-full relative shrink-0 w-[59px]" data-name="Slot" />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="h-full relative shrink-0 w-[59px]" data-name="Slot" />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Cell">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[20px] relative size-full">
            <div className="h-full relative shrink-0 w-[59px]" data-name="Slot" />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#f6f8fa] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[26px] overflow-clip size-[24px] top-[73px]" data-name="Cursor">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.309px] left-[calc(50%+0.56px)] top-[calc(50%+0.04px)] w-[14.396px]" data-name="pointing">
          <div className="absolute inset-[-2.45%_-8.16%_-14.21%_-8.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7461 17.8588">
              <g filter="url(#filter0_d_1_5201)" id="pointing">
                <path d={svgPaths.p4154640} fill="var(--fill-0, white)" id="Shape" />
                <path clipRule="evenodd" d={svgPaths.p4154640} fillRule="evenodd" id="Shape_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                <path d={svgPaths.p3cd716c0} fill="var(--fill-0, black)" id="Shape_3" />
                <path d={svgPaths.p3fa35500} fill="var(--fill-0, black)" id="Shape_4" />
                <path d={svgPaths.p1b2ab280} fill="var(--fill-0, black)" id="Shape_5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.8588" id="filter0_d_1_5201" width="16.7461" x="2.98023e-08" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.4" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_5201" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_5201" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Customer Name</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot9 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Policy ID</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot10 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[110px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">User</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot11 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">User Action</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot12 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[140px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Status</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot13 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Delivery Status</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot14 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[200px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2831] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Undelivered Reason</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #5D758C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot15 />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[73px]" data-name="Column">
        <div className="bg-[#f6f8fa] h-[46px] relative shrink-0 w-full" data-name="Column Title">
          <div className="flex flex-row items-center size-full">
            <div className="relative size-full" />
          </div>
          <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <ColumnSlot16 />
      </div>
    </div>
  );
}

function Slot8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Slot">
      <Frame23 />
      <Frame26 />
    </div>
  );
}

function Table2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Slot8 />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <StatisticsCards />
      <Frame13 />
      <Frame17 />
      <Table1 />
      <Table2 />
      <div className="absolute bg-[#151c23] content-stretch flex items-center left-[1147px] overflow-clip px-[8px] py-[4px] rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] top-[1134px]" data-name="Tooltip">
        <div className="[word-break:break-word] flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.25px] whitespace-nowrap">
          <p className="leading-[20px]">View Policy</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[754px] left-0 overflow-x-clip overflow-y-auto top-[66px] w-[1272px]">
      <div className="absolute bg-[#f6f8fa] content-stretch flex flex-col items-start left-0 overflow-clip pb-[84px] pt-[20px] px-[32px] top-0 w-[1272px]" data-name="Outreach Insights Mock">
        <Frame18 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f6f8fa] h-[820px] relative shrink-0 w-[1272px]">
      <div className="absolute content-stretch flex gap-[12px] items-center left-[32px] top-[20px] w-[1208px]" data-name="Tab">
        <div aria-hidden className="absolute border-[#e3e9ee] border-b border-solid inset-0 pointer-events-none" />
        <div className="h-[46px] relative shrink-0" data-name="Tab Anatomy">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
            <p className="[word-break:break-word] font-['inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">Policy Renewal</p>
          </div>
          <div aria-hidden className="absolute border-[rgba(255,255,255,0)] border-b-2 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="h-[46px] relative shrink-0" data-name="Tab Anatomy">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
            <p className="[word-break:break-word] font-['inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4b5f73] text-[14px] whitespace-nowrap">Requoting</p>
          </div>
          <div aria-hidden className="absolute border-[rgba(255,255,255,0)] border-b-2 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="h-[46px] relative shrink-0" data-name="Tab Anatomy">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
            <p className="[word-break:break-word] font-['inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e2831] text-[14px] whitespace-nowrap">Outreach Insights</p>
          </div>
          <div aria-hidden className="absolute border-[#0260ca] border-b-3 border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function BlueBlur() {
  return <div className="absolute bg-[#0260ca] blur-[70px] h-[113px] left-[12px] opacity-30 top-[-45px] w-[169px]" data-name="Blue Blur" />;
}

function GreenBlur() {
  return <div className="absolute bg-[#007d38] blur-[70px] h-[58px] left-[188px] opacity-40 top-[52px] w-[87px]" data-name="Green Blur" />;
}

function Group() {
  return (
    <div className="absolute inset-[10%_-0.08%_10.08%_87.85%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4467 18.3821">
        <g id="Group 130">
          <ellipse cx="6.45478" cy="4.32548" fill="var(--fill-0, white)" id="Ellipse 4" rx="4.30291" ry="4.32548" />
          <ellipse cx="3.22718" cy="15.138" fill="var(--fill-0, white)" id="Ellipse 7" rx="3.22718" ry="3.24411" />
          <ellipse cx="11.2952" cy="13.5176" fill="var(--fill-0, white)" id="Ellipse 6" rx="2.15146" ry="2.16274" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Logo Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[20px] pr-[12px] relative size-full">
          <div className="h-[23px] relative shrink-0 w-[110px]" data-name="Logo">
            <Group />
            <div className="absolute inset-[3.85%_20.6%_3.85%_0]" data-name="Quandri">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.3437 21.2308">
                <g id="Quandri">
                  <path d={svgPaths.p12ccb000} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p3a550780} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p13082200} fill="var(--fill-0, white)" />
                  <path d={svgPaths.pb751700} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p361fcd00} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p1e08e380} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p2206eb60} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.pc17c8f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Dashboard</p>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5">
              <path d={svgPaths.p38595e80} id="Vector" stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Policies</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navigation">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] relative size-full">
        <div className="bg-[#151c23] h-[38px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
          <div className="content-stretch flex items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
            <Wrapper />
          </div>
          <div aria-hidden className="absolute border border-[#0260ca] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[38px] items-center overflow-clip px-[12px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
          <Wrapper1 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Title">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
              <path d={svgPaths.p1ba3b200} id="Vector" stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Configuration</p>
      </div>
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5">
              <path d={svgPaths.p553c100} id="Vector" stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Carriers</p>
      </div>
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-5.56%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
              <path d={svgPaths.p17bdc600} id="Vector" stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">{`Team & Permissions`}</p>
      </div>
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <g id="Vector">
                <path d={svgPaths.p270d3af0} stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p60e8900} stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Integrations</p>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Navigation">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[38px] items-center overflow-clip px-[12px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
        <Wrapper2 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[38px] items-center overflow-clip px-[12px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
        <Wrapper3 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[38px] items-center overflow-clip px-[12px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
        <Wrapper4 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[38px] items-center overflow-clip px-[12px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
        <Wrapper5 />
      </div>
    </div>
  );
}

function AdminSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Admin Section">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] relative size-full">
        <SectionTitle />
        <Navigation1 />
      </div>
    </div>
  );
}

function TopSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Top Section">
      <LogoContainer />
      <Navigation />
      <AdminSection />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5001">
              <path d={svgPaths.p5978280} id="Vector" stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Share Feedback</p>
      </div>
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 12">
              <path d={svgPaths.p16106700} id="Vector" stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Create Support Ticket</p>
      </div>
    </div>
  );
}

function Wrapper8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Wrapper">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.56%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15">
              <path d={svgPaths.p3bdb9600} id="Vector" stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d9e2] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Learning Center</p>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="User Profile">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[38px] items-center overflow-clip px-[12px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
        <Wrapper6 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[38px] items-center overflow-clip px-[12px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
        <Wrapper7 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[38px] items-center overflow-clip px-[12px] relative rounded-[12px] shrink-0 w-[216px]" data-name="Navigation item">
        <Wrapper8 />
      </div>
    </div>
  );
}

function UserIconContainer() {
  return (
    <div className="bg-[#2d3a47] content-stretch flex items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[40px]" data-name="User Icon Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[30px]">
        <p className="leading-[20px]">J</p>
      </div>
    </div>
  );
}

function UserDetailsContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-name="User Details Container">
      <div className="flex flex-col font-['inter:medium',sans-serif] justify-center relative shrink-0 text-[13px] text-white">
        <p className="leading-[18px]">Jill Patterson</p>
      </div>
      <div className="flex flex-col font-['inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#d0d9e2] text-[12px] text-ellipsis w-[120px]">
        <p className="leading-[16px] overflow-hidden text-ellipsis">jill.patterson@amceinsurance.com</p>
      </div>
    </div>
  );
}

function BottomSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom Section">
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[12px] relative size-full">
        <UserProfile />
        <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="User Info Container">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[4px] py-[8px] relative size-full">
              <UserIconContainer />
              <UserDetailsContainer />
              <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #D0D9E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OutreachInsights() {
  return (
    <div className="content-stretch flex items-start justify-end relative size-full" data-name="Outreach Insights">
      <Frame3 />
      <div className="absolute bg-[#151c23] h-[820px] left-0 max-w-[260px] top-0 w-[240px]" data-name="Navigation">
        <div className="content-stretch flex flex-col items-start justify-between max-w-[inherit] overflow-clip pb-[20px] relative rounded-[inherit] size-full">
          <BlueBlur />
          <GreenBlur />
          <TopSection />
          <BottomSection />
        </div>
        <div aria-hidden className="absolute border-[#1e2831] border-r border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}