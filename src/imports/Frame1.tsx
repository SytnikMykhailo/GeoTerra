import svgPaths from "./svg-d3a2vq9gl7";

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
    <div className="absolute bg-[#2c2c2c] h-[78px] left-[501px] rounded-[8px] top-[501px] w-[917px]" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] w-[917px]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[64px] relative shrink-0 text-[57px] text-neutral-100 text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Create Map
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[78px] left-[501px] rounded-[8px] top-[617px] w-[917px]" data-name="Button" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(44, 44, 44) 0%, rgb(44, 44, 44) 100%)" }}>
      <div className="box-border content-stretch flex gap-[8px] h-[78px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] w-[917px]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[64px] relative shrink-0 text-[57px] text-neutral-100 text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Use pre-configured
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#473472] h-[1080px] left-0 top-0 w-[1920px]" />
      <div className="absolute bg-[#473472] h-[1080px] left-0 top-0 w-[1920px]" />
      <div className="absolute bg-[#53629e] h-[95px] left-0 top-0 w-[1920px]" />
      <p className="absolute font-['Inter:Light_Italic',sans-serif] font-light italic leading-[normal] left-[19px] text-[#87bac3] text-[64px] text-nowrap top-[9px] tracking-[3.2px] whitespace-pre">GeoTerra</p>
      <User />
      <Button />
      <Button1 />
    </div>
  );
}