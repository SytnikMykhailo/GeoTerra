import svgPaths from "./svg-luzw7a52ki";
import clsx from "clsx";
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(148.417deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} className={clsx("absolute bottom-0 content-stretch flex flex-col items-start right-0 top-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("bg-gradient-to-r from-[rgba(89,22,139,0.8)] relative shrink-0 to-[rgba(110,17,176,0.8)] w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("basis-0 bg-[#9810fa] grow min-h-px min-w-px relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("basis-0 bg-[rgba(89,22,139,0.4)] grow min-h-px min-w-px relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[15.993px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function ContainerBackgroundImage3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[63.991px] items-center justify-center pb-[0.009px] pt-0 px-0 relative size-full">
        <ContainerBackgroundImage1 />
        <ContainerBackgroundImage2 />
      </div>
    </div>
  );
}

function ContainerBackgroundImage2() {
  return (
    <div className="h-[255.994px] relative shrink-0 w-[895.993px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.996px] h-[255.994px] items-start px-[15.993px] py-0 relative w-[895.993px]">
        <ButtonBackgroundImageAndText text="Create Map" />
        <ButtonBackgroundImageAndText1 text="Use Pre-configured" />
      </div>
    </div>
  );
}
type ButtonBackgroundImageAndText1Props = {
  text: string;
};

function ButtonBackgroundImageAndText1({ text }: ButtonBackgroundImageAndText1Props) {
  return (
    <BackgroundImage1 additionalClassNames="h-[255.994px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[255.994px] items-center justify-center px-[17.804px] py-[9.804px] relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[48px] text-center text-nowrap text-purple-100 whitespace-pre">{text}</p>
      </div>
    </BackgroundImage1>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <BackgroundImage2 additionalClassNames="h-[255.994px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[255.994px] items-center justify-center px-[17.804px] py-[9.804px] relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[48px] text-center text-nowrap text-white whitespace-pre">{text}</p>
      </div>
    </BackgroundImage2>
  );
}

function ContainerBackgroundImage1() {
  return (
    <div className="h-[147.988px] relative shrink-0 w-[372.287px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.999px] h-[147.988px] items-start relative w-[372.287px]">
        <HeadingBackgroundImageAndText3 text="GeoTerra" />
        <ParagraphBackgroundImageAndText1 text="Procedural Map Generation Tool" />
      </div>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="h-[27.993px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[186.4px] text-[#e9d4ff] text-[20px] text-center text-nowrap top-[-2.4px] translate-x-[-50%] whitespace-pre">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText3Props = {
  text: string;
};

function HeadingBackgroundImageAndText3({ text }: HeadingBackgroundImageAndText3Props) {
  return (
    <div className="h-[95.997px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[96px] left-[186.5px] text-[96px] text-center text-nowrap text-purple-100 top-[-9.24px] translate-x-[-50%] whitespace-pre">{text}</p>
    </div>
  );
}

function HeaderBackgroundImage1() {
  return (
    <BackgroundImage3 additionalClassNames="h-[55.995px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[55.995px] items-center justify-between pb-[0.601px] pt-0 px-[23.999px] relative w-full">
        <HeadingBackgroundImageAndText2 text="GeoTerra" />
        <ButtonBackgroundImage1 />
      </div>
    </BackgroundImage3>
  );
}

function ButtonBackgroundImage1() {
  return (
    <div className="h-[35.999px] relative rounded-[8px] shrink-0 w-[47.989px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[35.999px] relative w-[47.989px]">
        <PrimitiveSpanBackgroundImage1 />
      </div>
    </div>
  );
}

function PrimitiveSpanBackgroundImage1() {
  return (
    <div className="absolute bg-[#9810fa] left-[8px] rounded-[2.01792e+07px] size-[31.996px] top-[2px]">
      <div className="content-stretch flex items-start overflow-clip p-[0.601px] relative rounded-[inherit] size-[31.996px]">
        <TextBackgroundImage1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
    </div>
  );
}

function TextBackgroundImage1() {
  return (
    <div className="bg-[#9810fa] relative rounded-[2.01792e+07px] shrink-0 size-[30.793px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.009px] py-0 relative size-[30.793px]">
        <IconBackgroundImage1 />
      </div>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p1591b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
      <path d={svgPaths.p17682780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
    </BackgroundImage>
  );
}
type HeadingBackgroundImageAndText2Props = {
  text: string;
};

function HeadingBackgroundImageAndText2({ text }: HeadingBackgroundImageAndText2Props) {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[93.055px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[31.996px] items-start relative w-[93.055px]">
        <p className="font-['Arimo:Italic',sans-serif] font-normal italic leading-[32px] relative shrink-0 text-[#e9d4ff] text-[24px] text-nowrap whitespace-pre">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17.804px] py-[9.804px] relative", additionalClassNames)}>
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-center text-nowrap text-purple-100 whitespace-pre">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17.804px] py-[9.804px] relative", additionalClassNames)}>
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">{text}</p>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="h-[87.991px] relative shrink-0 w-[228.377px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.993px] h-[87.991px] items-start relative w-[228.377px]">
        <HeadingBackgroundImageAndText1 text="GeoTerra" />
        <ParagraphBackgroundImageAndText text="Procedural Map Generation Tool" />
      </div>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[114.5px] text-[#e9d4ff] text-[16px] text-center text-nowrap top-[-2.4px] translate-x-[-50%] whitespace-pre">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className="h-[47.998px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[48px] left-[114.12px] text-[48px] text-center text-nowrap text-purple-100 top-[-5.42px] translate-x-[-50%] whitespace-pre">{text}</p>
    </div>
  );
}

function HeaderBackgroundImage() {
  return (
    <BackgroundImage3 additionalClassNames="h-[47.998px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[47.998px] items-center justify-between pb-[0.601px] pt-0 px-[12px] relative w-full">
        <HeadingBackgroundImageAndText text="GeoTerra" />
        <ButtonBackgroundImage />
      </div>
    </BackgroundImage3>
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
        <IconBackgroundImage />
      </div>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage>
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

function Button() {
  return (
    <div className="basis-0 bg-[#9810fa] grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[348.579px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <BackgroundImageAndText text="Create Map" additionalClassNames="h-full w-[348.579px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[rgba(89,22,139,0.4)] grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[348.579px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <BackgroundImageAndText1 text="Use Pre-configured" additionalClassNames="h-full w-[348.579px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[119.188px] relative shrink-0 w-[380.566px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.993px] h-[119.188px] items-start pl-[15.993px] pr-0 py-0 relative w-[380.566px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31.996px] items-center justify-center pb-[0.009px] pt-0 px-0 relative size-full">
        <ContainerBackgroundImage />
        <Container />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="0" style={{ backgroundImage: "linear-gradient(148.417deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <HeaderBackgroundImage />
      <Container1 />
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

function Button2() {
  return (
    <BackgroundImage2 additionalClassNames="h-[127.992px]">
      <BackgroundImageAndText text="Create Map" additionalClassNames="h-[127.992px] w-full" />
    </BackgroundImage2>
  );
}

function Button3() {
  return (
    <BackgroundImage1 additionalClassNames="h-[127.992px]">
      <BackgroundImageAndText1 text="Use Pre-configured" additionalClassNames="h-[127.992px] w-full" />
    </BackgroundImage1>
  );
}

function Container2() {
  return (
    <div className="h-[127.992px] relative shrink-0 w-[613.904px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.993px] h-[127.992px] items-start px-[15.993px] py-0 relative w-[613.904px]">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31.996px] items-center justify-center relative size-full">
        <ContainerBackgroundImage />
        <Container2 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <BackgroundImage4 additionalClassNames="left-[-645px]">
      <HeaderBackgroundImage />
      <Container3 />
    </BackgroundImage4>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white bottom-0 left-[645px] right-0 top-0" data-name="Frame">
      <Component1 />
    </div>
  );
}

function Component2() {
  return (
    <BackgroundImage4 additionalClassNames="left-[-1025px]">
      <HeaderBackgroundImage1 />
      <ContainerBackgroundImage3 />
    </BackgroundImage4>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white bottom-0 left-[1025px] right-0 top-0" data-name="Frame">
      <Component2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[-1500px] right-0 top-0" data-name="1500" style={{ backgroundImage: "linear-gradient(149.797deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <HeaderBackgroundImage1 />
      <ContainerBackgroundImage3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <Component3 />
    </div>
  );
}

function Responsive() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Responsive">
      <Frame />
      <Frame1 />
      <Frame2 />
      <div className="absolute bottom-0 flex items-center justify-center left-[1459px] right-[-41px] top-0">
        <div className="flex-none h-[897px] rotate-[180deg] scale-y-[-100%] w-[41px]">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

export default function HomepageResponsive() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="homepage responsive">
      <Responsive />
    </div>
  );
}