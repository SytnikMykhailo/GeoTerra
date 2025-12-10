import svgPaths from "./svg-xd06d19wlt";

function User() {
  return (
    <div className="absolute left-[1820px] size-[67px] top-[14px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="User">
          <rect fill="var(--fill-0, #87BAC3)" height="67" rx="33.5" width="67" />
          <path d={svgPaths.p3ca0700} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2c2c2c] h-[78px] left-[1098px] rounded-[8px] top-[861px] w-[715px]" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] w-[715px]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[64px] relative shrink-0 text-[57px] text-neutral-100 text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Continue
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[1080px] left-0 top-0 w-[1920px]">
      <div className="absolute bg-[#473472] h-[1080px] left-0 top-0 w-[1920px]" />
      <div className="absolute bg-[#473472] h-[1080px] left-0 top-0 w-[1920px]" />
      <div className="absolute bg-[#53629e] h-[95px] left-0 top-0 w-[1920px]" />
      <p className="absolute font-['Inter:Light_Italic',sans-serif] font-light italic leading-[normal] left-[19px] text-[#87bac3] text-[64px] text-nowrap top-[9px] tracking-[3.2px] whitespace-pre">GeoTerra</p>
      <User />
      <div className="absolute bg-[#87bac3] h-[985px] left-[992px] top-[95px] w-[928px]" />
      <div className="absolute bg-[#d9d9d9] h-[985px] left-0 top-[95px] w-[992px]" />
      <div className="absolute h-[563px] left-[167px] top-[258px] w-[558px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 558 563">
          <ellipse cx="279" cy="281.5" fill="url(#paint0_linear_14_510)" id="Ellipse 1" rx="279" ry="281.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_14_510" x1="279" x2="279" y1="0" y2="563">
              <stop stopColor="#12E82B" />
              <stop offset="1" stopColor="#0A8218" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Inter:Light_Italic',sans-serif] font-light italic leading-[normal] left-[1270px] text-[64px] text-black text-nowrap top-[196px] tracking-[3.2px] whitespace-pre">Parameters</p>
      <Button />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}