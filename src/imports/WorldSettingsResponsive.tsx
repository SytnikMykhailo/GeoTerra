import svgPaths from "./svg-c5vn0mtckv";
import clsx from "clsx";
import imgPlanetPreview3D from "figma:asset/4939db67e5080f8b6d0e7d43c4ced51b70215245.png";
import imgPlanetPreview3D1 from "figma:asset/4ed90b7385bfdaf370af6cdb87ca9a2e7bc8096e.png";
import imgPlanetPreview3D2 from "figma:asset/ccc67e3a4b55137b7c1f98dca414bdc515ef5994.png";
import imgPlanetPreview3D3 from "figma:asset/a46e64ec19306de81ac6f3687353ab02456ecdc4.png";
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(152.895deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} className={clsx("absolute bottom-0 content-stretch flex flex-col items-start right-0 top-0", additionalClassNames)}>
      {children}
    </div>
  );
}

function PlanetConfigPageBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[744.854px] relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[744.854px] items-start overflow-clip relative rounded-[inherit] w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[31.998px] relative shrink-0 w-[188.726px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.994px] h-[31.998px] items-center relative w-[188.726px]">{children}</div>
    </div>
  );
}

function ButtonBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[31.998px] relative rounded-[8px] shrink-0 w-[79.671px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.99px] h-[31.998px] items-center justify-center relative w-[79.671px]">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[744.854px] min-h-px min-w-px relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[744.854px] items-start pb-0 pl-[31.998px] pr-[50.063px] pt-[31.998px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function HeaderBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-gradient-to-r from-[rgba(89,22,139,0.8)] h-[56px] relative shrink-0 to-[rgba(110,17,176,0.8)] w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.602px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[56px] items-center justify-between pb-[0.602px] pt-0 px-[23.992px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function CardBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(30,41,57,0.9)] h-[472.063px] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.602px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[472.063px] items-start pl-[24.594px] pr-[0.602px] py-[24.594px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function PlanetConfigPageBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[22px] items-start pl-0 pr-[20px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function HeaderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-gradient-to-r from-[rgba(89,22,139,0.8)] h-[47.998px] relative shrink-0 to-[rgba(110,17,176,0.8)] w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[47.998px] items-center justify-between pb-[0.601px] pt-0 px-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function ButtonBackgroundImage1() {
  return (
    <div className="h-[35.997px] relative rounded-[8px] shrink-0 w-[47.993px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[35.997px] relative w-[47.993px]">
        <PrimitiveSpanBackgroundImage1 />
      </div>
    </div>
  );
}

function PrimitiveSpanBackgroundImage1() {
  return (
    <div className="absolute bg-[#9810fa] left-[8px] rounded-[2.02046e+07px] size-[31.998px] top-[2px]">
      <div className="content-stretch flex items-start overflow-clip p-[0.602px] relative rounded-[inherit] size-[31.998px]">
        <TextBackgroundImage1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0.602px] border-solid inset-0 pointer-events-none rounded-[2.02046e+07px]" />
    </div>
  );
}

function TextBackgroundImage1() {
  return (
    <div className="bg-[#9810fa] relative rounded-[2.02046e+07px] shrink-0 size-[30.794px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.009px] py-0 relative size-[30.794px]">
        <IconBackgroundImage3 />
      </div>
    </div>
  );
}

function IconBackgroundImage3() {
  return (
    <BackgroundImage additionalClassNames="relative shrink-0 size-[15.994px]">
      <path d={svgPaths.p3999a100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33287" />
      <path d={svgPaths.p12002af1} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33287" />
    </BackgroundImage>
  );
}
type HeadingBackgroundImageAndText2Props = {
  text: string;
};

function HeadingBackgroundImageAndText2({ text }: HeadingBackgroundImageAndText2Props) {
  return (
    <div className="h-[31.998px] relative shrink-0 w-[93.06px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[31.998px] items-start relative w-[93.06px]">
        <p className="font-['Arimo:Italic',sans-serif] font-normal italic leading-[32px] relative shrink-0 text-[#e9d4ff] text-[24px] text-nowrap whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function IconBackgroundImage2() {
  return (
    <BackgroundImage additionalClassNames="relative shrink-0 size-[15.994px]">
      <path d={svgPaths.p2698c740} id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33287" />
      <path d="M12.6623 7.99724H3.33218" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33287" />
    </BackgroundImage>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid relative", additionalClassNames)}>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">{text}</p>
    </div>
  );
}
type PrimitiveLabelBackgroundImageAndText2Props = {
  text: string;
};

function PrimitiveLabelBackgroundImageAndText2({ text }: PrimitiveLabelBackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex h-[14px] items-center mb-[-2px] relative shrink-0 w-full">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#e9d4ff] text-[14px] w-[93px]">{text}</p>
    </div>
  );
}

function PrimitiveLabelBackgroundImage() {
  return (
    <div className="content-stretch flex h-[14px] items-center mb-[-1px] relative shrink-0 w-full">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Gravity: `}</p>
    </div>
  );
}
type PrimitiveLabelBackgroundImageAndText1Props = {
  text: string;
};

function PrimitiveLabelBackgroundImageAndText1({ text }: PrimitiveLabelBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex h-[14px] items-center mb-[-7px] relative shrink-0 w-full">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#e9d4ff] text-[14px] w-[159px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[19.993px] relative shrink-0 w-full", additionalClassNames)}>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#dab2ff] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">{text}</p>
    </div>
  );
}
type PrimitiveLabelBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PrimitiveLabelBackgroundImageAndText({ text, additionalClassNames = "" }: PrimitiveLabelBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex h-[14px] items-center relative shrink-0 w-full", additionalClassNames)}>
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{text}</p>
    </div>
  );
}
type TabListBackgroundImageProps = {
  additionalClassNames?: string;
};

function TabListBackgroundImage({ additionalClassNames = "" }: TabListBackgroundImageProps) {
  return (
    <div className="bg-[rgba(30,41,57,0.5)] h-[35.997px] relative rounded-[14px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[35.997px] overflow-clip relative rounded-[inherit] w-full">
        <PrimitiveButtonBackgroundImageAndText text="Physical" />
        <PrimitiveButtonBackgroundImageAndText1 text="Surface" additionalClassNames="left-[25.29%] right-[49.96%]" />
        <PrimitiveButtonBackgroundImageAndText1 text="Tectonic" additionalClassNames="left-[50.04%] right-[25.21%]" />
        <PrimitiveButtonBackgroundImageAndText1 text="Atmosphere" additionalClassNames="left-[74.79%] right-[0.46%]" />
      </div>
      <div aria-hidden="true" className="absolute border-[0.602px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}
type PrimitiveButtonBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function PrimitiveButtonBackgroundImageAndText1({ text, additionalClassNames = "" }: PrimitiveButtonBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[27.802px] items-center justify-center px-[16.602px] py-[4.602px] rounded-[14px] top-[4.09px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.602px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#e9d4ff] text-[16px] text-center text-nowrap whitespace-pre">{text}</p>
    </div>
  );
}
type PrimitiveButtonBackgroundImageAndTextProps = {
  text: string;
};

function PrimitiveButtonBackgroundImageAndText({ text }: PrimitiveButtonBackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-[#9810fa] content-stretch flex h-[27.802px] items-center justify-center left-[0.54%] px-[16.602px] py-[4.602px] right-[74.71%] rounded-[14px] top-[4.09px]">
      <div aria-hidden="true" className="absolute border-[0.602px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className="h-[39.996px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[40px] left-0 text-[36px] text-nowrap text-purple-100 top-[-3.22px] whitespace-pre">{text}</p>
    </div>
  );
}

function ButtonBackgroundImage() {
  return (
    <div className="h-[35.999px] relative rounded-[8px] shrink-0 w-[31.986px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[35.999px] relative w-[31.986px]">
        <PrimitiveSpanBackgroundImage />
      </div>
    </div>
  );
}

function PrimitiveSpanBackgroundImage() {
  return (
    <div className="absolute bg-[#9810fa] left-[3.99px] rounded-[2.01792e+07px] size-[23.999px] top-[6px]">
      <div className="content-stretch flex items-start overflow-clip p-[0.601px] relative rounded-[inherit] size-[23.999px]">
        <TextBackgroundImage />
      </div>
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
    </div>
  );
}

function TextBackgroundImage() {
  return (
    <div className="bg-[#9810fa] relative rounded-[2.01792e+07px] shrink-0 size-[22.796px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[22.796px]">
        <IconBackgroundImage1 />
      </div>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage additionalClassNames="relative shrink-0 size-[15.993px]">
      <path d={svgPaths.p1523ed00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
      <path d={svgPaths.p17682780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
    </BackgroundImage>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[69.808px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[28.002px] relative w-[69.808px]">
        <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[28px] left-0 text-[#e9d4ff] text-[18px] text-nowrap top-[-1.2px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ additionalClassNames = "" }: IconBackgroundImageProps) {
  return (
    <BackgroundImage additionalClassNames={clsx("size-[15.993px]", additionalClassNames)}>
      <path d={svgPaths.p13830780} id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
      <path d="M12.6612 7.99658H3.33191" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
    </BackgroundImage>
  );
}

function Header() {
  return <div className="absolute left-[-12px] size-0 top-[-7.7px]" data-name="Header" />;
}

function Button() {
  return (
    <div className="h-[31.996px] relative rounded-[8px] shrink-0 w-[35.989px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[31.996px] relative w-[35.989px]">
        <IconBackgroundImage additionalClassNames="absolute left-[10px] top-[8px]" />
        <Header />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[113.794px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.997px] h-[31.996px] items-center relative w-[113.794px]">
        <Button />
        <HeadingBackgroundImageAndText text="GeoTerra" />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <HeaderBackgroundImage>
      <Container />
      <ButtonBackgroundImage />
    </HeaderBackgroundImage>
  );
}

function PlanetPreview3D() {
  return (
    <div className="h-[399.998px] relative shrink-0 w-[380.998px]" data-name="PlanetPreview3D">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlanetPreview3D} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[399.998px] w-[380.998px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[255.994px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[255.994px] items-center justify-center pl-[0.432px] pr-0 py-0 relative w-full">
          <PlanetPreview3D />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text />
    </div>
  );
}

function Slider() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.69px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text1 />
      <Slider />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText text="Radius:" />
      <Component1 />
      <ParagraphBackgroundImageAndText text="Earth radius: 6,371 km" />
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text2 />
    </div>
  );
}

function Slider1() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.69px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text3 />
      <Slider1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-7px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[37.992px] items-start pb-[7px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText1 text="Mass:" />
      <Component2 />
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text5() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text4 />
    </div>
  );
}

function Slider2() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.69px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text5 />
      <Slider2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-1px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImage />
      <Component3 />
      <ParagraphBackgroundImageAndText text="Earth gravity: 9.81 m/s²" additionalClassNames="mb-[-1px]" />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[rgba(130,0,219,0.5)] h-[0.997px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Text6() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text7() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text6 />
    </div>
  );
}

function Slider3() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.69px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text7 />
      <Slider3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-3px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-[3px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText text="Rotation Period:" additionalClassNames="mb-[-3px]" />
      <Component4 />
      <ParagraphBackgroundImageAndText text="Earth day: 24 hours" additionalClassNames="mb-[-3px]" />
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text8 />
    </div>
  );
}

function Slider4() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.69px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text9 />
      <Slider4 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-2px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText2 text="Axial Tilt:" />
      <Component5 />
      <ParagraphBackgroundImageAndText text="Affects seasonal variations" additionalClassNames="mb-[-2px]" />
    </div>
  );
}

function PlanetConfigPage() {
  return (
    <PlanetConfigPageBackgroundImage>
      <Container2 />
      <Container3 />
      <Container4 />
      <PrimitiveDiv />
      <Container5 />
      <Container6 />
    </PlanetConfigPageBackgroundImage>
  );
}

function Card() {
  return (
    <CardBackgroundImage>
      <PlanetConfigPage />
    </CardBackgroundImage>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="content-stretch flex flex-col gap-[31.989px] h-[540.049px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabListBackgroundImage />
      <Card />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#9810fa] h-[63.997px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[calc(50%-0.11px)] text-[20px] text-center text-nowrap text-white top-[calc(50%-16.4px)] translate-x-[-50%] whitespace-pre">Continue</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[31.998px] h-[708.038px] items-start relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText1 text="Planet Parameters" />
      <PrimitiveDiv1 />
      <Button1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[495.854px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[495.854px] items-start pb-0 pl-[15.993px] pr-[34.035px] pt-[15.993px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function PlanetConfigPage1() {
  return (
    <div className="relative shrink-0 w-full" data-name="PlanetConfigPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container1 />
        <Container8 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="0" style={{ backgroundImage: "linear-gradient(152.895deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header1 />
      <PlanetConfigPage1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white inset-0" data-name="Frame">
      <Component />
    </div>
  );
}

function Header2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[29.684px]" data-name="Header">
      <BackgroundImageAndText text="Back" additionalClassNames="h-[19.996px] w-[29.684px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[31.996px] relative rounded-[8px] shrink-0 w-[71.669px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.995px] h-[31.996px] items-center justify-center relative w-[71.669px]">
        <IconBackgroundImage additionalClassNames="relative shrink-0" />
        <Header2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[149.473px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.997px] h-[31.996px] items-center relative w-[149.473px]">
        <Button2 />
        <HeadingBackgroundImageAndText text="GeoTerra" />
      </div>
    </div>
  );
}

function Header3() {
  return (
    <HeaderBackgroundImage>
      <Container9 />
      <ButtonBackgroundImage />
    </HeaderBackgroundImage>
  );
}

function PlanetPreview3D1() {
  return (
    <div className="h-[399.998px] relative shrink-0 w-[613.998px]" data-name="PlanetPreview3D">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlanetPreview3D1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[399.998px] w-[613.998px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[255.994px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[255.994px] items-center justify-center pl-[0.094px] pr-0 py-0 relative w-full">
          <PlanetPreview3D1 />
        </div>
      </div>
    </div>
  );
}

function PlanetConfigPage2() {
  return (
    <div className="relative shrink-0 w-full" data-name="PlanetConfigPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container10 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[39.996px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[40px] left-0 text-[24px] text-nowrap text-purple-100 top-[12px] whitespace-pre">Planet Parameters</p>
    </div>
  );
}

function Text10() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text11() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text10 />
    </div>
  );
}

function Slider5() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.7px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text11 />
      <Slider5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText text="Radius:" />
      <Component6 />
      <ParagraphBackgroundImageAndText text="Earth radius: 6,371 km" />
    </div>
  );
}

function Text12() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text13() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text12 />
    </div>
  );
}

function Slider6() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.7px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text13 />
      <Slider6 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-7px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[37.992px] items-start pb-[7px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText1 text="Mass:" />
      <Component7 />
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text15() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text14 />
    </div>
  );
}

function Slider7() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.7px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text15 />
      <Slider7 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-1px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan7 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImage />
      <Component8 />
      <ParagraphBackgroundImageAndText text="Earth gravity: 9.81 m/s²" additionalClassNames="mb-[-1px]" />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="bg-[rgba(130,0,219,0.5)] h-[0.997px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Text16() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text17() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text16 />
    </div>
  );
}

function Slider8() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.7px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text17 />
      <Slider8 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-3px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-[3px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText text="Rotation Period:" additionalClassNames="mb-[-3px]" />
      <Component9 />
      <ParagraphBackgroundImageAndText text="Earth day: 24 hours" additionalClassNames="mb-[-3px]" />
    </div>
  );
}

function Text18() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text19() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text18 />
    </div>
  );
}

function Slider9() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.7px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text19 />
      <Slider9 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-2px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan9 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText2 text="Axial Tilt:" />
      <Component10 />
      <ParagraphBackgroundImageAndText text="Affects seasonal variations" additionalClassNames="mb-[-2px]" />
    </div>
  );
}

function PlanetConfigPage3() {
  return (
    <PlanetConfigPageBackgroundImage>
      <Container11 />
      <Container12 />
      <Container13 />
      <PrimitiveDiv2 />
      <Container14 />
      <Container15 />
    </PlanetConfigPageBackgroundImage>
  );
}

function Card1() {
  return (
    <CardBackgroundImage>
      <PlanetConfigPage3 />
    </CardBackgroundImage>
  );
}

function PrimitiveDiv3() {
  return (
    <div className="content-stretch flex flex-col gap-[31.989px] h-[540.049px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabListBackgroundImage />
      <Card1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#9810fa] h-[63.997px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[calc(50%+0.88px)] text-[20px] text-center text-nowrap text-white top-[calc(50%-16.4px)] translate-x-[-50%] whitespace-pre">Continue</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[708.038px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31.998px] h-[708.038px] items-start relative w-full">
        <Heading />
        <PrimitiveDiv3 />
        <Button3 />
      </div>
    </div>
  );
}

function Component21() {
  return (
    <BackgroundImage1 additionalClassNames="left-[-645px]">
      <Header3 />
      <PlanetConfigPage2 />
      <Container16 />
    </BackgroundImage1>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white bottom-0 left-[645px] right-0 top-0" data-name="Frame">
      <Component21 />
    </div>
  );
}

function Header4() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[29.703px]" data-name="Header">
      <BackgroundImageAndText text="Back" additionalClassNames="h-[19.993px] w-[29.703px]" />
    </div>
  );
}

function Button4() {
  return (
    <ButtonBackgroundImage2>
      <IconBackgroundImage2 />
      <Header4 />
    </ButtonBackgroundImage2>
  );
}

function Container17() {
  return (
    <ContainerBackgroundImage1>
      <Button4 />
      <HeadingBackgroundImageAndText2 text="GeoTerra" />
    </ContainerBackgroundImage1>
  );
}

function Header5() {
  return (
    <HeaderBackgroundImage1>
      <Container17 />
      <ButtonBackgroundImage1 />
    </HeaderBackgroundImage1>
  );
}

function PlanetPreview3D2() {
  return (
    <div className="basis-0 grow h-[680.998px] min-h-px min-w-px relative shrink-0" data-name="PlanetPreview3D">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlanetPreview3D2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[680.998px] w-full" />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[744.854px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0.602px_0px_0px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[744.854px] items-center justify-center pl-[0.169px] pr-[0.602px] py-0 relative w-full">
          <PlanetPreview3D2 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text21() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text20 />
    </div>
  );
}

function Slider10() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.92px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text21 />
      <Slider10 />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan10 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText text="Radius:" />
      <Component11 />
      <ParagraphBackgroundImageAndText text="Earth radius: 6,371 km" />
    </div>
  );
}

function Text22() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text23() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text22 />
    </div>
  );
}

function Slider11() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.92px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text23 />
      <Slider11 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-7px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan11 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-[37.992px] items-start pb-[7px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText1 text="Mass:" />
      <Component12 />
    </div>
  );
}

function Text24() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text25() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text24 />
    </div>
  );
}

function Slider12() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.92px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text25 />
      <Slider12 />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-1px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan12 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImage />
      <Component13 />
      <ParagraphBackgroundImageAndText text="Earth gravity: 9.81 m/s²" additionalClassNames="mb-[-1px]" />
    </div>
  );
}

function PrimitiveDiv4() {
  return <div className="bg-[rgba(130,0,219,0.5)] h-[0.997px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Text26() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text27() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text26 />
    </div>
  );
}

function Slider13() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.92px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text27 />
      <Slider13 />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-3px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan13 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-[3px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText text="Rotation Period:" additionalClassNames="mb-[-3px]" />
      <Component14 />
      <ParagraphBackgroundImageAndText text="Earth day: 24 hours" additionalClassNames="mb-[-3px]" />
    </div>
  );
}

function Text28() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text29() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text28 />
    </div>
  );
}

function Slider14() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.92px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text29 />
      <Slider14 />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-2px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan14 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText2 text="Axial Tilt:" />
      <Component15 />
      <ParagraphBackgroundImageAndText text="Affects seasonal variations" additionalClassNames="mb-[-2px]" />
    </div>
  );
}

function PlanetConfigPage4() {
  return (
    <PlanetConfigPageBackgroundImage>
      <Container19 />
      <Container20 />
      <Container21 />
      <PrimitiveDiv4 />
      <Container22 />
      <Container23 />
    </PlanetConfigPageBackgroundImage>
  );
}

function Card2() {
  return (
    <CardBackgroundImage>
      <PlanetConfigPage4 />
    </CardBackgroundImage>
  );
}

function PrimitiveDiv5() {
  return (
    <div className="content-stretch flex flex-col gap-[31.989px] h-[540.049px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabListBackgroundImage />
      <Card2 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#9810fa] h-[63.997px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[calc(50%+0.66px)] text-[20px] text-center text-nowrap text-white top-[calc(50%-16.4px)] translate-x-[-50%] whitespace-pre">Continue</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[31.998px] h-[708.038px] items-start relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText1 text="Planet Parameters" />
      <PrimitiveDiv5 />
      <Button5 />
    </div>
  );
}

function Container25() {
  return (
    <ContainerBackgroundImage>
      <Container24 />
    </ContainerBackgroundImage>
  );
}

function PlanetConfigPage5() {
  return (
    <PlanetConfigPageBackgroundImage1>
      <Container18 />
      <Container25 />
    </PlanetConfigPageBackgroundImage1>
  );
}

function Component22() {
  return (
    <BackgroundImage1 additionalClassNames="left-[-1025px]">
      <Header5 />
      <PlanetConfigPage5 />
    </BackgroundImage1>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white bottom-0 left-[1025px] right-0 top-0" data-name="Frame">
      <Component22 />
    </div>
  );
}

function Header6() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[29.703px]" data-name="Header">
      <BackgroundImageAndText text="Back" additionalClassNames="h-[19.993px] w-[29.703px]" />
    </div>
  );
}

function Button6() {
  return (
    <ButtonBackgroundImage2>
      <IconBackgroundImage2 />
      <Header6 />
    </ButtonBackgroundImage2>
  );
}

function Container26() {
  return (
    <ContainerBackgroundImage1>
      <Button6 />
      <HeadingBackgroundImageAndText2 text="GeoTerra" />
    </ContainerBackgroundImage1>
  );
}

function Header7() {
  return (
    <HeaderBackgroundImage1>
      <Container26 />
      <ButtonBackgroundImage1 />
    </HeaderBackgroundImage1>
  );
}

function PlanetPreview3D3() {
  return (
    <div className="h-[680.998px] relative shrink-0 w-[671.994px]" data-name="PlanetPreview3D">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPlanetPreview3D3} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[680.998px] w-[671.994px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[744.854px] relative shrink-0 w-[750.273px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0.602px_0px_0px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[744.854px] items-center justify-center pl-0 pr-[0.602px] py-0 relative w-[750.273px]">
        <PlanetPreview3D3 />
      </div>
    </div>
  );
}

function Text30() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text31() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text30 />
    </div>
  );
}

function Slider15() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.54px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text31 />
      <Slider15 />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan15 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText text="Radius:" />
      <Component16 />
      <ParagraphBackgroundImageAndText text="Earth radius: 6,371 km" />
    </div>
  );
}

function Text32() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text33() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text32 />
    </div>
  );
}

function Slider16() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.54px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text33 />
      <Slider16 />
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-7px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan16 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[37.992px] items-start pb-[7px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText1 text="Mass:" />
      <Component17 />
    </div>
  );
}

function Text34() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text35() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text34 />
    </div>
  );
}

function Slider17() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.54px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text35 />
      <Slider17 />
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-1px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan17 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImage />
      <Component18 />
      <ParagraphBackgroundImageAndText text="Earth gravity: 9.81 m/s²" additionalClassNames="mb-[-1px]" />
    </div>
  );
}

function PrimitiveDiv6() {
  return <div className="bg-[rgba(130,0,219,0.5)] h-[0.997px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Text36() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text37() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text36 />
    </div>
  );
}

function Slider18() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.54px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text37 />
      <Slider18 />
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-3px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan18 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-[3px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText text="Rotation Period:" additionalClassNames="mb-[-3px]" />
      <Component19 />
      <ParagraphBackgroundImageAndText text="Earth day: 24 hours" additionalClassNames="mb-[-3px]" />
    </div>
  );
}

function Text38() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text39() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text38 />
    </div>
  );
}

function Slider19() {
  return <div className="absolute bg-white border-[#030213] border-[0.601px] border-solid left-[calc(50%-36.54px)] rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider" />;
}

function PrimitiveSpan19() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text39 />
      <Slider19 />
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center mb-[-2px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan19 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[65.982px] items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabelBackgroundImageAndText2 text="Axial Tilt:" />
      <Component20 />
      <ParagraphBackgroundImageAndText text="Affects seasonal variations" additionalClassNames="mb-[-2px]" />
    </div>
  );
}

function PlanetConfigPage6() {
  return (
    <PlanetConfigPageBackgroundImage>
      <Container28 />
      <Container29 />
      <Container30 />
      <PrimitiveDiv6 />
      <Container31 />
      <Container32 />
    </PlanetConfigPageBackgroundImage>
  );
}

function Card3() {
  return (
    <CardBackgroundImage>
      <PlanetConfigPage6 />
    </CardBackgroundImage>
  );
}

function PrimitiveDiv7() {
  return (
    <div className="content-stretch flex flex-col gap-[31.989px] h-[540.049px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabListBackgroundImage />
      <Card3 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#9810fa] h-[63.997px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[calc(50%+0.04px)] text-[20px] text-center text-nowrap text-white top-[calc(50%-16.4px)] translate-x-[-50%] whitespace-pre">Continue</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[31.998px] h-[708.038px] items-start relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText1 text="Earth" />
      <PrimitiveDiv7 />
      <Button7 />
    </div>
  );
}

function Container34() {
  return (
    <ContainerBackgroundImage>
      <Container33 />
    </ContainerBackgroundImage>
  );
}

function PlanetConfigPage7() {
  return (
    <PlanetConfigPageBackgroundImage1>
      <Container27 />
      <Container34 />
    </PlanetConfigPageBackgroundImage1>
  );
}

function Component23() {
  return (
    <BackgroundImage1 additionalClassNames="left-[-1500px]">
      <Header7 />
      <PlanetConfigPage7 />
    </BackgroundImage1>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white bottom-0 left-[1500px] right-0 top-0" data-name="Frame">
      <Component23 />
    </div>
  );
}

function Responsive() {
  return (
    <div className="h-[800px] overflow-clip relative shrink-0 w-full" data-name="Responsive">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function WorldSettingsResponsive() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="World Settings Responsive">
      <Responsive />
    </div>
  );
}