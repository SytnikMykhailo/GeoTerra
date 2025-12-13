import svgPaths from "./svg-klx5p6pvyy";
import imgCanvas from "figma:asset/16ee336d7d18569d42f403d41314568d3341d745.png";
import imgCanvas1 from "figma:asset/1cf014eabc52f830d82e47889e1a95856e56053f.png";
import imgCanvas2 from "figma:asset/030c925f609ace73804516b9a84a0cbc7651e914.png";
import imgMapPreview3D from "figma:asset/7b89d8e717d82dfc25e1a0d1efcd3ee159921a72.png";

function Icon() {
  return (
    <div className="absolute left-[10px] size-[15.993px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13830780} id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M12.6612 7.99658H3.33191" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[31.996px] relative rounded-[8px] shrink-0 w-[35.989px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.996px] relative w-[35.989px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[69.808px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[69.808px]">
        <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[28px] left-0 text-[#e9d4ff] text-[18px] text-nowrap top-[-1.2px] whitespace-pre">GeoTerra</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[31.996px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[31.996px] items-center relative w-full">
        <Button />
        <Heading />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1523ed00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p17682780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#9810fa] relative rounded-[2.01792e+07px] shrink-0 size-[22.796px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[22.796px]">
        <Icon1 />
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute bg-[#9810fa] left-[3.99px] rounded-[2.01792e+07px] size-[23.999px] top-[6px]" data-name="Primitive.span">
      <div className="box-border content-stretch flex items-start overflow-clip p-[0.601px] relative rounded-[inherit] size-[23.999px]">
        <Text />
      </div>
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[35.999px] relative rounded-[8px] shrink-0 w-[31.986px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.999px] relative w-[31.986px]">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-gradient-to-r from-[rgba(89,22,139,0.8)] h-[47.998px] relative shrink-0 to-[rgba(110,17,176,0.8)] w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[242.773px] h-[47.998px] items-center pb-[0.601px] pt-0 px-[12px] relative w-full">
          <Container />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Canvas() {
  return (
    <div className="h-[255.393px] relative shrink-0 w-full" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCanvas} />
    </div>
  );
}

function MapPreview3D() {
  return (
    <div className="h-[255.393px] relative shrink-0 w-full" data-name="MapPreview3D">
      <div className="box-border content-stretch flex flex-col h-[255.393px] items-start overflow-clip pb-[0.601px] pt-0 px-0 relative rounded-[inherit] w-full">
        <Canvas />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[35.322px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[35.322px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Noise</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-emerald-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[34.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[34.599px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[35px]">Out 1</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[19.996px] items-center justify-end left-[13.8px] top-[57.8px] w-[92.388px]" data-name="Container">
      <Text2 />
      <Container3 />
    </div>
  );
}

function Node() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[91.599px] left-0 rounded-[10px] top-0 w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container2 />
      <Container4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[50.404px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[50.404px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Multiply</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Button3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-amber-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 1</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Text4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 2</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Text5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[47.989px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container10 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[34.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[34.599px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[35px]">Out 1</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center justify-end relative w-full">
          <Text6 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.997px] h-[99.981px] items-start left-[1.8px] pb-0 pt-[12px] px-[12px] top-[45.8px] w-[116.387px]" data-name="Container">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Node1() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[147.584px] left-[157px] rounded-[10px] top-[10.99px] w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container6 />
      <Container14 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[44.108px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[44.108px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Output</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Button4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-red-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 1</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[19.996px] items-center left-[13.8px] top-[57.8px] w-[92.388px]" data-name="Container">
      <Container17 />
      <Text8 />
    </div>
  );
}

function Node2() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[99.595px] left-[179.99px] rounded-[10px] top-[186px] w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(194,122,255,0.5),0px_4px_6px_-4px_rgba(194,122,255,0.5)]" />
      <Container16 />
      <Container18 />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute h-[285.594px] left-[20px] top-[55.61px] w-[300.552px]" data-name="Component 4">
      <Node />
      <Node1 />
      <Node2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[341.594px] left-0 top-0 w-[412.552px]" data-name="Container">
      <Component4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor() {
  return (
    <div className="h-[15.993px] relative shrink-0 w-[31.056px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.993px] relative w-[31.056px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[16.5px] text-[#e9d4ff] text-[12px] text-center text-nowrap top-[-1.6px] translate-x-[-50%] whitespace-pre">Noise</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] inset-[12.36%_81.01%_12.36%_1.14%] items-center justify-center p-[0.601px] rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
      <NodeEditor />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor1() {
  return (
    <div className="h-[15.993px] relative shrink-0 w-[45.16px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.993px] relative w-[45.16px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[23.5px] text-[#e9d4ff] text-[12px] text-center text-nowrap top-[-1.6px] translate-x-[-50%] whitespace-pre">Multiply</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] inset-[12.36%_58.68%_12.36%_19.98%] items-center justify-center p-[0.601px] rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon3 />
      <NodeEditor1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor2() {
  return (
    <div className="h-[15.993px] relative shrink-0 w-[22.514px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.993px] relative w-[22.514px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[11px] text-[#e9d4ff] text-[12px] text-center text-nowrap top-[-1.6px] translate-x-[-50%] whitespace-pre">Add</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] inset-[12.36%_41.94%_12.36%_42.31%] items-center justify-center p-[0.601px] rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon4 />
      <NodeEditor2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor3() {
  return (
    <div className="h-[15.993px] relative shrink-0 w-[34.711px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.993px] relative w-[34.711px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[17.5px] text-[#e9d4ff] text-[12px] text-center text-nowrap top-[-1.6px] translate-x-[-50%] whitespace-pre">Clamp</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] inset-[12.36%_22.2%_12.36%_59.04%] items-center justify-center p-[0.601px] rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon5 />
      <NodeEditor3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor4() {
  return (
    <div className="h-[15.993px] relative shrink-0 w-[38.977px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.993px] relative w-[38.977px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[19.5px] text-[#e9d4ff] text-[12px] text-center text-nowrap top-[-1.6px] translate-x-[-50%] whitespace-pre">Output</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] inset-[12.36%_1.4%_12.36%_78.79%] items-center justify-center p-[0.601px] rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon6 />
      <NodeEditor4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(89,22,139,0.6)] inset-[1.06%_0.97%_89.03%_0.97%] rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function NodeEditor5() {
  return (
    <div className="h-[375.322px] relative shrink-0 w-full" data-name="NodeEditor">
      <div className="h-[375.322px] overflow-clip relative rounded-[inherit] w-full">
        <Container19 />
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VariablesPanel() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="VariablesPanel">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e9d4ff] text-[16px] text-nowrap top-[-2.4px] whitespace-pre">Map Parameters</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Width: `}</p>
    </div>
  );
}

function Text9() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text10() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text9 />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.57px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text10 />
      <Slider />
    </div>
  );
}

function Component1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Component1 />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Depth: `}</p>
    </div>
  );
}

function Text11() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text12() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text11 />
    </div>
  );
}

function Slider1() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.57px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text12 />
      <Slider1 />
    </div>
  );
}

function Component5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Component5 />
    </div>
  );
}

function VariablesPanel1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[103.965px] items-start relative shrink-0 w-full" data-name="VariablesPanel">
      <Container21 />
      <Container22 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[rgba(130,0,219,0.5)] h-[0.996px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Heading3() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e9d4ff] text-[16px] text-nowrap top-[-2.4px] whitespace-pre">Terrain Generation</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Height Scale:</p>
    </div>
  );
}

function Text13() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text14() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text13 />
    </div>
  );
}

function Slider2() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.57px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text14 />
      <Slider2 />
    </div>
  );
}

function Component6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">20</p>
      <PrimitiveSpan3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Component6 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Octaves:</p>
    </div>
  );
}

function Text15() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text16() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text15 />
    </div>
  );
}

function Slider3() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.57px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text16 />
      <Slider3 />
    </div>
  );
}

function Component7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">6</p>
      <PrimitiveSpan4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <Component7 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Persistence: `}</p>
    </div>
  );
}

function Text17() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text18() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text17 />
    </div>
  );
}

function Slider4() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.57px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text18 />
      <Slider4 />
    </div>
  );
}

function Component8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">5</p>
      <PrimitiveSpan5 />
    </div>
  );
}

function Container25() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel4 />
      <Component8 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Lacunarity:</p>
    </div>
  );
}

function Text19() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text20() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text19 />
    </div>
  );
}

function Slider5() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.57px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text20 />
      <Slider5 />
    </div>
  );
}

function Component9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">6</p>
      <PrimitiveSpan6 />
    </div>
  );
}

function Container26() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel5 />
      <Component9 />
    </div>
  );
}

function VariablesPanel2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="VariablesPanel">
      <Heading3 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Seed</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[39.992px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[39.992px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1234</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[67.985px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel6 />
      <Input />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[107.808px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[19.996px] items-center relative w-[107.808px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Wireframe Mode</p>
      </div>
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="bg-white relative rounded-[2.01792e+07px] shrink-0 size-[15.993px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[15.993px]" />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-[#cbced4] box-border content-stretch flex h-[18.399px] items-center left-0 p-[0.601px] rounded-[2.01792e+07px] top-0 w-[31.996px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <PrimitiveSpan7 />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[18.399px] relative shrink-0 w-[31.996px]" data-name="Component 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18.399px] relative w-[31.996px]">
        <PrimitiveButton />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[19.996px] items-center justify-between relative w-full">
          <PrimitiveLabel7 />
          <Component2 />
        </div>
      </div>
    </div>
  );
}

function VariablesPanel3() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[103.974px] items-start relative shrink-0 w-full" data-name="VariablesPanel">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.99658 9.99572V1.99914" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p890bf80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p283a4280} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#9810fa] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[17px] items-center justify-center px-[122px] py-[9px] relative w-full">
          <Icon7 />
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Export</p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] box-border content-stretch flex flex-col gap-[28px] items-start left-0 p-[17px] right-[-4.36%] rounded-[14px] top-[1.36px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <VariablesPanel />
      <VariablesPanel1 />
      <PrimitiveDiv />
      <VariablesPanel2 />
      <PrimitiveDiv />
      <VariablesPanel3 />
      <PrimitiveDiv />
      <Button10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow h-[373px] min-h-px min-w-px shrink-0 sticky top-0">
      <Card />
    </div>
  );
}

function VariablesPanel4() {
  return (
    <div className="h-[375.924px] relative shrink-0 w-full" data-name="VariablesPanel">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[375.924px] items-end justify-between pb-0 pl-[7.997px] pr-[26.038px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Container">
      <NodeEditor5 />
      <VariablesPanel4 />
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[inherit] size-full">
        <MapPreview3D />
        <Container29 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="0" style={{ backgroundImage: "linear-gradient(152.895deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header />
      <Container30 />
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

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13830780} id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M12.6612 7.99658H3.33191" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[29.684px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[29.684px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[31.996px] relative rounded-[8px] shrink-0 w-[71.669px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.995px] h-[31.996px] items-center justify-center relative w-[71.669px]">
        <Icon8 />
        <Header1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[69.808px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[69.808px]">
        <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[28px] left-0 text-[#e9d4ff] text-[18px] text-nowrap top-[-1.2px] whitespace-pre">GeoTerra</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[149.473px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[31.996px] items-center relative w-[149.473px]">
        <Button11 />
        <Heading1 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1523ed00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p17682780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[#9810fa] relative rounded-[2.01792e+07px] shrink-0 size-[22.796px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[22.796px]">
        <Icon9 />
      </div>
    </div>
  );
}

function PrimitiveSpan8() {
  return (
    <div className="absolute bg-[#9810fa] left-[3.99px] rounded-[2.01792e+07px] size-[23.999px] top-[6px]" data-name="Primitive.span">
      <div className="box-border content-stretch flex items-start overflow-clip p-[0.601px] relative rounded-[inherit] size-[23.999px]">
        <Text21 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[35.999px] relative rounded-[8px] shrink-0 w-[31.986px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.999px] relative w-[31.986px]">
        <PrimitiveSpan8 />
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-gradient-to-r from-[rgba(89,22,139,0.8)] h-[47.998px] relative shrink-0 to-[rgba(110,17,176,0.8)] w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[47.998px] items-center justify-between pb-[0.601px] pt-0 px-[12px] relative w-full">
          <Container31 />
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function Canvas1() {
  return (
    <div className="h-[255.393px] relative shrink-0 w-full" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCanvas1} />
    </div>
  );
}

function MapPreview3D1() {
  return (
    <div className="h-[255.393px] relative shrink-0 w-full" data-name="MapPreview3D">
      <div className="box-border content-stretch flex flex-col h-[255.393px] items-start overflow-clip pb-[0.601px] pt-0 px-0 relative rounded-[inherit] w-full">
        <Canvas1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[35.322px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[35.322px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Noise</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Button13 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-emerald-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[34.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[34.599px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[35px]">Out 1</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[19.996px] items-center justify-end left-[13.8px] top-[57.8px] w-[92.388px]" data-name="Container">
      <Text23 />
      <Container34 />
    </div>
  );
}

function Node3() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[91.599px] left-0 rounded-[10px] top-0 w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[50.404px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[50.404px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Multiply</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Button14 />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-amber-500 h-[43.995px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[43.995px] items-start pb-0 pt-[7.997px] px-[12px] relative w-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 1</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Text25 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 2</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Text26 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[47.989px] items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[34.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[34.599px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[35px]">Out 1</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[19.996px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Text27 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[99.981px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[99.981px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Container42 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Node4() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] box-border content-stretch flex flex-col h-[147.584px] items-start left-[155px] p-[1.804px] rounded-[10px] top-0 w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container37 />
      <Container45 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[44.108px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[44.108px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Output</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[28.002px] items-center justify-between relative w-full">
          <Text28 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-red-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 1</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[19.996px] items-center left-[13.8px] top-[57.8px] w-[92.388px]" data-name="Container">
      <Container48 />
      <Text29 />
    </div>
  );
}

function Node5() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[99.595px] left-[309.99px] rounded-[10px] top-0 w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container47 />
      <Container49 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[147.584px] left-[107px] top-[132.61px] w-[429.988px]" data-name="Component 3">
      <Node3 />
      <Node4 />
      <Node5 />
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[375.322px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <Component3 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor6() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[36.224px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[36.224px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Noise</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[8.6px] p-[0.601px] rounded-[8px] top-[8.6px] w-[77.41px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon10 />
      <NodeEditor6 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor7() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[52.678px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[52.678px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[26px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Multiply</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[94px] p-[0.601px] rounded-[8px] top-[8.6px] w-[93.863px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon11 />
      <NodeEditor7 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor8() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[26.264px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[26.264px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Add</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[195.86px] p-[0.601px] rounded-[8px] top-[8.6px] w-[67.449px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon12 />
      <NodeEditor8 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor9() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[40.481px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[40.481px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[20.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Clamp</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[271.31px] p-[0.601px] rounded-[8px] top-[8.6px] w-[81.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon13 />
      <NodeEditor9 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor10() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[45.461px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[45.461px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[23.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Output</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[360.97px] p-[0.601px] rounded-[8px] top-[8.6px] w-[86.647px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon14 />
      <NodeEditor10 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(89,22,139,0.6)] inset-[2.13%_1.25%_85.51%_1.25%] rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function NodeEditor11() {
  return (
    <div className="relative shrink-0 w-full" data-name="NodeEditor">
      <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Container50 />
        <Container51 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VariablesPanel5() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="VariablesPanel">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e9d4ff] text-[16px] text-nowrap top-[-2.4px] whitespace-pre">Map Parameters</p>
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Width: `}</p>
    </div>
  );
}

function Text30() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text31() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text30 />
    </div>
  );
}

function Slider6() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.95px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text31 />
      <Slider6 />
    </div>
  );
}

function Component10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan9 />
    </div>
  );
}

function Container52() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel8 />
      <Component10 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Depth: `}</p>
    </div>
  );
}

function Text32() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text33() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text32 />
    </div>
  );
}

function Slider7() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.95px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text33 />
      <Slider7 />
    </div>
  );
}

function Component11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan10 />
    </div>
  );
}

function Container53() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel9 />
      <Component11 />
    </div>
  );
}

function VariablesPanel6() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[103.965px] items-start relative shrink-0 w-full" data-name="VariablesPanel">
      <Container52 />
      <Container53 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="bg-[rgba(130,0,219,0.5)] h-[0.996px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Heading4() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e9d4ff] text-[16px] text-nowrap top-[-2.4px] whitespace-pre">Terrain Generation</p>
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Height Scale:</p>
    </div>
  );
}

function Text34() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text35() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text34 />
    </div>
  );
}

function Slider8() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.95px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text35 />
      <Slider8 />
    </div>
  );
}

function Component12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">20</p>
      <PrimitiveSpan11 />
    </div>
  );
}

function Container54() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel10 />
      <Component12 />
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Octaves:</p>
    </div>
  );
}

function Text36() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text37() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text36 />
    </div>
  );
}

function Slider9() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.95px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text37 />
      <Slider9 />
    </div>
  );
}

function Component13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">6</p>
      <PrimitiveSpan12 />
    </div>
  );
}

function Container55() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel11 />
      <Component13 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Persistence: `}</p>
    </div>
  );
}

function Text38() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text39() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text38 />
    </div>
  );
}

function Slider10() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.95px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text39 />
      <Slider10 />
    </div>
  );
}

function Component14() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">5</p>
      <PrimitiveSpan13 />
    </div>
  );
}

function Container56() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel12 />
      <Component14 />
    </div>
  );
}

function PrimitiveLabel13() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Lacunarity:</p>
    </div>
  );
}

function Text40() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text41() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text40 />
    </div>
  );
}

function Slider11() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.95px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text41 />
      <Slider11 />
    </div>
  );
}

function Component15() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">6</p>
      <PrimitiveSpan14 />
    </div>
  );
}

function Container57() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel13 />
      <Component15 />
    </div>
  );
}

function VariablesPanel7() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="VariablesPanel">
      <Heading4 />
      <Container54 />
      <Container55 />
      <Container56 />
      <Container57 />
    </div>
  );
}

function PrimitiveLabel14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Seed</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[39.992px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[39.992px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1234</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[67.985px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel14 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel15() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[107.808px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[19.996px] items-center relative w-[107.808px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Wireframe Mode</p>
      </div>
    </div>
  );
}

function PrimitiveSpan15() {
  return (
    <div className="bg-white relative rounded-[2.01792e+07px] shrink-0 size-[15.993px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[15.993px]" />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute bg-[#cbced4] box-border content-stretch flex h-[18.399px] items-center left-0 p-[0.601px] rounded-[2.01792e+07px] top-0 w-[31.996px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <PrimitiveSpan15 />
    </div>
  );
}

function Component16() {
  return (
    <div className="h-[18.399px] relative shrink-0 w-[31.996px]" data-name="Component 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18.399px] relative w-[31.996px]">
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[19.996px] items-center justify-between relative w-full">
          <PrimitiveLabel15 />
          <Component16 />
        </div>
      </div>
    </div>
  );
}

function VariablesPanel8() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[103.974px] items-start relative shrink-0 w-full" data-name="VariablesPanel">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.99658 9.99572V1.99914" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p890bf80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p283a4280} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#9810fa] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[17px] items-center justify-center px-[122px] py-[9px] relative w-full">
          <Icon15 />
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Export</p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] box-border content-stretch flex flex-col gap-[28px] items-start left-0 p-[17px] right-[-3%] rounded-[14px] top-[1.36px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <VariablesPanel5 />
      <VariablesPanel6 />
      <PrimitiveDiv1 />
      <VariablesPanel7 />
      <PrimitiveDiv1 />
      <VariablesPanel8 />
      <PrimitiveDiv1 />
      <Button21 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 grow h-[376px] min-h-px min-w-px shrink-0 sticky top-0">
      <Card1 />
    </div>
  );
}

function VariablesPanel9() {
  return (
    <div className="h-[375.924px] relative shrink-0 w-full" data-name="VariablesPanel">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[375.924px] items-end pb-0 pl-[15.993px] pr-[34.035px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Container">
      <NodeEditor11 />
      <VariablesPanel9 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[1008.64px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[1008.64px] items-start justify-between overflow-clip relative rounded-[inherit] w-full">
        <MapPreview3D1 />
        <Container60 />
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[-645px] right-0 top-0" data-name="645" style={{ backgroundImage: "linear-gradient(152.895deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header2 />
      <Container61 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white bottom-0 left-[645px] right-0 top-0" data-name="Frame">
      <Component33 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13830780} id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M12.6612 7.99658H3.33191" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Header3() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[29.684px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[29.684px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[31.996px] relative rounded-[8px] shrink-0 w-[79.665px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[13.992px] h-[31.996px] items-center justify-center relative w-[79.665px]">
        <Icon16 />
        <Header3 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[93.055px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.996px] items-start relative w-[93.055px]">
        <p className="font-['Arimo:Italic',sans-serif] font-normal italic leading-[32px] relative shrink-0 text-[#e9d4ff] text-[24px] text-nowrap whitespace-pre">GeoTerra</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[188.714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[31.996px] items-center relative w-[188.714px]">
        <Button22 />
        <Heading2 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1591b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p17682780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Text42() {
  return (
    <div className="bg-[#9810fa] relative rounded-[2.01792e+07px] shrink-0 size-[30.793px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.009px] py-0 relative size-[30.793px]">
        <Icon17 />
      </div>
    </div>
  );
}

function PrimitiveSpan16() {
  return (
    <div className="absolute bg-[#9810fa] left-[8px] rounded-[2.01792e+07px] size-[31.996px] top-[2px]" data-name="Primitive.span">
      <div className="box-border content-stretch flex items-start overflow-clip p-[0.601px] relative rounded-[inherit] size-[31.996px]">
        <Text42 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[35.999px] relative rounded-[8px] shrink-0 w-[47.989px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.999px] relative w-[47.989px]">
        <PrimitiveSpan16 />
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="bg-gradient-to-r from-[rgba(89,22,139,0.8)] h-[55.995px] relative shrink-0 to-[rgba(110,17,176,0.8)] w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[55.995px] items-center justify-between pb-[0.601px] pt-0 px-[23.999px] relative w-full">
          <Container62 />
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function Canvas2() {
  return (
    <div className="absolute h-[743.851px] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCanvas2} />
    </div>
  );
}

function MapPreview3D2() {
  return (
    <div className="basis-0 grow h-[743.851px] min-h-px min-w-px relative shrink-0" data-name="MapPreview3D">
      <div className="h-[743.851px] overflow-clip relative rounded-[inherit] w-full">
        <Canvas2 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0.601px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[35.322px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[35.322px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Noise</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text43 />
      <Button24 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-emerald-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[34.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[34.599px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[35px]">Out 1</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[19.996px] items-center justify-end left-[13.8px] top-[57.8px] w-[92.388px]" data-name="Container">
      <Text44 />
      <Container65 />
    </div>
  );
}

function Node6() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[91.599px] left-0 rounded-[10px] top-0 w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container64 />
      <Container66 />
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[50.404px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[50.404px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Multiply</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text45 />
      <Button25 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-amber-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 1</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Text46 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 2</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Text47 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[47.989px] items-start relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Container72 />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[34.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[34.599px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[35px]">Out 1</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center justify-end relative w-full">
          <Text48 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7.997px] h-[99.981px] items-start left-[1.8px] pb-0 pt-[12px] px-[12px] top-[45.8px] w-[116.387px]" data-name="Container">
      <Container73 />
      <Container75 />
    </div>
  );
}

function Node7() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[147.584px] left-[157px] rounded-[10px] top-[10.99px] w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container68 />
      <Container76 />
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[44.108px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[44.108px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Output</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text49 />
      <Button26 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute bg-red-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 1</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[19.996px] items-center left-[13.8px] top-[57.8px] w-[92.388px]" data-name="Container">
      <Container79 />
      <Text50 />
    </div>
  );
}

function Node8() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[99.595px] left-[179.99px] rounded-[10px] top-[186px] w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(194,122,255,0.5),0px_4px_6px_-4px_rgba(194,122,255,0.5)]" />
      <Container78 />
      <Container80 />
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute h-[285.594px] left-[94.5px] top-[80.01px] w-[299.989px]" data-name="Component 4">
      <Node6 />
      <Node7 />
      <Node8 />
    </div>
  );
}

function Container81() {
  return (
    <div className="basis-0 grow h-[445.704px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <Component17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor12() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[36.224px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[36.224px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Noise</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[8.6px] p-[0.601px] rounded-[8px] top-[8.6px] w-[77.41px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon18 />
      <NodeEditor12 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor13() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[52.678px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[52.678px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[26px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Multiply</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[94px] p-[0.601px] rounded-[8px] top-[8.6px] w-[93.863px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon19 />
      <NodeEditor13 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor14() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[26.264px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[26.264px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Add</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[195.86px] p-[0.601px] rounded-[8px] top-[8.6px] w-[67.449px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon20 />
      <NodeEditor14 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor15() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[40.481px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[40.481px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[20.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Clamp</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[271.31px] p-[0.601px] rounded-[8px] top-[8.6px] w-[81.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon21 />
      <NodeEditor15 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor16() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[45.461px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[45.461px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[23.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Output</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[360.97px] p-[0.601px] rounded-[8px] top-[8.6px] w-[86.647px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon22 />
      <NodeEditor16 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute bg-[rgba(89,22,139,0.6)] inset-[1.79%_1.72%_87.8%_1.56%] rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
    </div>
  );
}

function NodeEditor17() {
  return (
    <div className="relative shrink-0 w-full" data-name="NodeEditor">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[inherit] w-full">
        <Container81 />
        <Container82 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VariablesPanel10() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="VariablesPanel">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e9d4ff] text-[16px] text-nowrap top-[-2.4px] whitespace-pre">Map Parameters</p>
    </div>
  );
}

function PrimitiveLabel16() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Width: `}</p>
    </div>
  );
}

function Text51() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text52() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text51 />
    </div>
  );
}

function Slider12() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.42px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text52 />
      <Slider12 />
    </div>
  );
}

function Component18() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan17 />
    </div>
  );
}

function Container83() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel16 />
      <Component18 />
    </div>
  );
}

function PrimitiveLabel17() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Depth: `}</p>
    </div>
  );
}

function Text53() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text54() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text53 />
    </div>
  );
}

function Slider13() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.42px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text54 />
      <Slider13 />
    </div>
  );
}

function Component19() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan18 />
    </div>
  );
}

function Container84() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel17 />
      <Component19 />
    </div>
  );
}

function VariablesPanel11() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[103.965px] items-start relative shrink-0 w-full" data-name="VariablesPanel">
      <Container83 />
      <Container84 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="bg-[rgba(130,0,219,0.5)] h-[0.996px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Heading5() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e9d4ff] text-[16px] text-nowrap top-[-2.4px] whitespace-pre">Terrain Generation</p>
    </div>
  );
}

function PrimitiveLabel18() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Height Scale:</p>
    </div>
  );
}

function Text55() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text56() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text55 />
    </div>
  );
}

function Slider14() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.42px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan19() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text56 />
      <Slider14 />
    </div>
  );
}

function Component20() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">20</p>
      <PrimitiveSpan19 />
    </div>
  );
}

function Container85() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel18 />
      <Component20 />
    </div>
  );
}

function PrimitiveLabel19() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Octaves:</p>
    </div>
  );
}

function Text57() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text58() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text57 />
    </div>
  );
}

function Slider15() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.42px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text58 />
      <Slider15 />
    </div>
  );
}

function Component21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">6</p>
      <PrimitiveSpan20 />
    </div>
  );
}

function Container86() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel19 />
      <Component21 />
    </div>
  );
}

function PrimitiveLabel20() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Persistence: `}</p>
    </div>
  );
}

function Text59() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text60() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text59 />
    </div>
  );
}

function Slider16() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.42px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text60 />
      <Slider16 />
    </div>
  );
}

function Component22() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">5</p>
      <PrimitiveSpan21 />
    </div>
  );
}

function Container87() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel20 />
      <Component22 />
    </div>
  );
}

function PrimitiveLabel21() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Lacunarity:</p>
    </div>
  );
}

function Text61() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text62() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text61 />
    </div>
  );
}

function Slider17() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.42px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan22() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text62 />
      <Slider17 />
    </div>
  );
}

function Component23() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">6</p>
      <PrimitiveSpan22 />
    </div>
  );
}

function Container88() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel21 />
      <Component23 />
    </div>
  );
}

function VariablesPanel12() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="VariablesPanel">
      <Heading5 />
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
    </div>
  );
}

function PrimitiveLabel22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Seed</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[39.992px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[39.992px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1234</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[67.985px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel22 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel23() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[107.808px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[19.996px] items-center relative w-[107.808px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Wireframe Mode</p>
      </div>
    </div>
  );
}

function PrimitiveSpan23() {
  return (
    <div className="bg-white relative rounded-[2.01792e+07px] shrink-0 size-[15.993px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[15.993px]" />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute bg-[#cbced4] box-border content-stretch flex h-[18.399px] items-center left-0 p-[0.601px] rounded-[2.01792e+07px] top-0 w-[31.996px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <PrimitiveSpan23 />
    </div>
  );
}

function Component24() {
  return (
    <div className="h-[18.399px] relative shrink-0 w-[31.996px]" data-name="Component 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18.399px] relative w-[31.996px]">
        <PrimitiveButton2 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[19.996px] items-center justify-between relative w-full">
          <PrimitiveLabel23 />
          <Component24 />
        </div>
      </div>
    </div>
  );
}

function VariablesPanel13() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[103.974px] items-start relative shrink-0 w-full" data-name="VariablesPanel">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.99658 9.99572V1.99914" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p890bf80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p283a4280} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-[#9810fa] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[17px] items-center justify-center px-[122px] py-[9px] relative w-full">
          <Icon23 />
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Export</p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] box-border content-stretch flex flex-col gap-[28px] items-start left-[0.05%] p-[17px] right-[-3.22%] rounded-[14px] top-[1.77px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <VariablesPanel10 />
      <VariablesPanel11 />
      <PrimitiveDiv2 />
      <VariablesPanel12 />
      <PrimitiveDiv2 />
      <VariablesPanel13 />
      <PrimitiveDiv2 />
      <Button32 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[298px] overflow-x-clip overflow-y-auto shrink-0 sticky top-0 w-full">
      <Card2 />
    </div>
  );
}

function VariablesPanel14() {
  return (
    <div className="relative shrink-0 w-full" data-name="VariablesPanel">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-0 relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <NodeEditor17 />
      <VariablesPanel14 />
    </div>
  );
}

function Container92() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start justify-between relative size-full">
        <MapPreview3D2 />
        <Container91 />
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[-1025px] right-0 top-0" data-name="1025" style={{ backgroundImage: "linear-gradient(152.895deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header4 />
      <Container92 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white bottom-0 left-[1025px] right-0 top-0" data-name="Frame">
      <Component34 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13830780} id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M12.6612 7.99658H3.33191" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Header5() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[29.684px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[29.684px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[15px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="h-[31.996px] relative rounded-[8px] shrink-0 w-[79.665px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[13.992px] h-[31.996px] items-center justify-center relative w-[79.665px]">
        <Icon24 />
        <Header5 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[93.055px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.996px] items-start relative w-[93.055px]">
        <p className="font-['Arimo:Italic',sans-serif] font-normal italic leading-[32px] relative shrink-0 text-[#e9d4ff] text-[24px] text-nowrap whitespace-pre">GeoTerra</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[188.714px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.993px] h-[31.996px] items-center relative w-[188.714px]">
        <Button33 />
        <Heading6 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1591b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p17682780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Text63() {
  return (
    <div className="bg-[#9810fa] relative rounded-[2.01792e+07px] shrink-0 size-[30.793px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.009px] py-0 relative size-[30.793px]">
        <Icon25 />
      </div>
    </div>
  );
}

function PrimitiveSpan24() {
  return (
    <div className="absolute bg-[#9810fa] left-[8px] rounded-[2.01792e+07px] size-[31.996px] top-[2px]" data-name="Primitive.span">
      <div className="box-border content-stretch flex items-start overflow-clip p-[0.601px] relative rounded-[inherit] size-[31.996px]">
        <Text63 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[35.999px] relative rounded-[8px] shrink-0 w-[47.989px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.999px] relative w-[47.989px]">
        <PrimitiveSpan24 />
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="bg-gradient-to-r from-[rgba(89,22,139,0.8)] h-[55.995px] relative shrink-0 to-[rgba(110,17,176,0.8)] w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[55.995px] items-center justify-between pb-[0.601px] pt-0 px-[23.999px] relative w-full">
          <Container93 />
          <Button34 />
        </div>
      </div>
    </div>
  );
}

function MapPreview3D3() {
  return (
    <div className="basis-0 grow h-[743.851px] min-h-px min-w-px relative shrink-0" data-name="MapPreview3D">
      <div className="h-[743.851px] overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMapPreview3D} />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0.601px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[35.322px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[35.322px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Noise</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text64 />
      <Button35 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute bg-emerald-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container94 />
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[34.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[34.599px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[35px]">Out 1</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[19.996px] items-center justify-end left-[13.8px] top-[57.8px] w-[92.388px]" data-name="Container">
      <Text65 />
      <Container96 />
    </div>
  );
}

function Node9() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[91.599px] left-0 rounded-[10px] top-0 w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container95 />
      <Container97 />
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[50.404px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[50.404px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Multiply</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex h-[28.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text66 />
      <Button36 />
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-amber-500 h-[43.995px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[43.995px] items-start pb-0 pt-[7.997px] px-[12px] relative w-full">
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 1</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Container100 />
      <Text67 />
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text68() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 2</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Text68 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[47.989px] items-start relative shrink-0 w-full" data-name="Container">
      <Container101 />
      <Container103 />
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[34.599px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[34.599px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[35px]">Out 1</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[7.996px] h-[19.996px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Text69 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[99.981px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.997px] h-[99.981px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Container104 />
          <Container106 />
        </div>
      </div>
    </div>
  );
}

function Node10() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] box-border content-stretch flex flex-col h-[147.584px] items-start left-[155px] p-[1.804px] rounded-[10px] top-0 w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container99 />
      <Container107 />
    </div>
  );
}

function Text70() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[44.108px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[44.108px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Output</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-[12.319px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.002px] relative w-[12.319px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[6.5px] text-[18px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">×</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[28.002px] items-center justify-between relative w-full">
          <Text70 />
          <Button37 />
        </div>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute bg-red-500 box-border content-stretch flex flex-col h-[43.995px] items-start left-[1.8px] pb-0 pt-[7.997px] px-[12px] rounded-tl-[10px] rounded-tr-[10px] top-[1.8px] w-[116.387px]" data-name="Container">
      <Container108 />
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-[#59168b] relative rounded-[2.01792e+07px] shrink-0 size-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c27aff] border-[1.804px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Text71() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[23.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[23.031px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e9d4ff] text-[14px] top-[-1.4px] w-[24px]">In 1</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[19.996px] items-center left-[13.8px] top-[57.8px] w-[92.388px]" data-name="Container">
      <Container110 />
      <Text71 />
    </div>
  );
}

function Node11() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] h-[99.595px] left-[309.99px] rounded-[10px] top-0 w-[119.996px]" data-name="Node2">
      <div aria-hidden="true" className="absolute border-[1.804px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container109 />
      <Container111 />
    </div>
  );
}

function Component25() {
  return (
    <div className="absolute h-[147.584px] left-[56px] top-[119.01px] w-[429.988px]" data-name="Component 3">
      <Node9 />
      <Node10 />
      <Node11 />
    </div>
  );
}

function Container112() {
  return (
    <div className="basis-0 grow h-[445.704px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <Component25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor18() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[36.224px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[36.224px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[18px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Noise</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[8.6px] p-[0.601px] rounded-[8px] top-[8.6px] w-[77.41px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon26 />
      <NodeEditor18 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor19() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[52.678px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[52.678px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[26px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Multiply</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[94px] p-[0.601px] rounded-[8px] top-[8.6px] w-[93.863px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon27 />
      <NodeEditor19 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor20() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[26.264px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[26.264px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[13.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Add</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[195.86px] p-[0.601px] rounded-[8px] top-[8.6px] w-[67.449px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon28 />
      <NodeEditor20 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor21() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[40.481px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[40.481px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[20.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Clamp</p>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[271.31px] pl-[0.601px] pr-[0.602px] py-[0.601px] rounded-[8px] top-[8.6px] w-[81.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon29 />
      <NodeEditor21 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33191 7.99658H12.6612" id="Vector" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99658 3.33191V12.6612" id="Vector_2" stroke="var(--stroke-0, #E9D4FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function NodeEditor22() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[45.461px]" data-name="NodeEditor">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] relative w-[45.461px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[23.5px] text-[#e9d4ff] text-[14px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Output</p>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[3.994px] h-[29.186px] items-center justify-center left-[360.97px] p-[0.601px] rounded-[8px] top-[8.6px] w-[86.647px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon30 />
      <NodeEditor22 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute bg-[rgba(89,22,139,0.6)] inset-[1.79%_1.07%_87.8%_1.07%] rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button38 />
      <Button39 />
      <Button40 />
      <Button41 />
      <Button42 />
    </div>
  );
}

function NodeEditor23() {
  return (
    <div className="relative shrink-0 w-full" data-name="NodeEditor">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[inherit] w-full">
        <Container112 />
        <Container113 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.601px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VariablesPanel15() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="VariablesPanel">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e9d4ff] text-[16px] text-nowrap top-[-2.4px] whitespace-pre">Map Parameters</p>
    </div>
  );
}

function PrimitiveLabel24() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Width: `}</p>
    </div>
  );
}

function Text72() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text73() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text72 />
    </div>
  );
}

function Slider18() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.55px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan25() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text73 />
      <Slider18 />
    </div>
  );
}

function Component26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan25 />
    </div>
  );
}

function Container114() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel24 />
      <Component26 />
    </div>
  );
}

function PrimitiveLabel25() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Depth: `}</p>
    </div>
  );
}

function Text74() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text75() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text74 />
    </div>
  );
}

function Slider19() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.55px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text75 />
      <Slider19 />
    </div>
  );
}

function Component27() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">50</p>
      <PrimitiveSpan26 />
    </div>
  );
}

function Container115() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel25 />
      <Component27 />
    </div>
  );
}

function VariablesPanel16() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[103.965px] items-start relative shrink-0 w-full" data-name="VariablesPanel">
      <Container114 />
      <Container115 />
    </div>
  );
}

function PrimitiveDiv3() {
  return <div className="bg-[rgba(130,0,219,0.5)] h-[0.996px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Heading7() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#e9d4ff] text-[16px] text-nowrap top-[-2.4px] whitespace-pre">Terrain Generation</p>
    </div>
  );
}

function PrimitiveLabel26() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Height Scale:</p>
    </div>
  );
}

function Text76() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text77() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text76 />
    </div>
  );
}

function Slider20() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.55px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan27() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text77 />
      <Slider20 />
    </div>
  );
}

function Component28() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">20</p>
      <PrimitiveSpan27 />
    </div>
  );
}

function Container116() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel26 />
      <Component28 />
    </div>
  );
}

function PrimitiveLabel27() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Octaves:</p>
    </div>
  );
}

function Text78() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text79() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text78 />
    </div>
  );
}

function Slider21() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.55px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan28() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text79 />
      <Slider21 />
    </div>
  );
}

function Component29() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">6</p>
      <PrimitiveSpan28 />
    </div>
  );
}

function Container117() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel27 />
      <Component29 />
    </div>
  );
}

function PrimitiveLabel28() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">{`Persistence: `}</p>
    </div>
  );
}

function Text80() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text81() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text80 />
    </div>
  );
}

function Slider22() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.55px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan29() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text81 />
      <Slider22 />
    </div>
  );
}

function Component30() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">5</p>
      <PrimitiveSpan29 />
    </div>
  );
}

function Container118() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel28 />
      <Component30 />
    </div>
  );
}

function PrimitiveLabel29() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[19.996px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Lacunarity:</p>
    </div>
  );
}

function Text82() {
  return <div className="absolute bg-[#030213] h-[15px] left-0 right-[56.2%] top-[0.5px]" data-name="Text" />;
}

function Text83() {
  return (
    <div className="absolute bg-[#ececf0] box-border content-stretch flex h-[15.993px] items-start left-0 overflow-clip pl-0 pr-[370.389px] py-0 right-[0.04%] rounded-[2.01792e+07px] top-0" data-name="Text">
      <Text82 />
    </div>
  );
}

function Slider23() {
  return (
    <div className="absolute bg-white left-[calc(50%-36.55px)] rounded-[2.01792e+07px] size-[15.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Slider">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan30() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text83 />
      <Slider23 />
    </div>
  );
}

function Component31() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-center mb-[-19.996px] relative shrink-0 w-full" data-name="Component 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">6</p>
      <PrimitiveSpan30 />
    </div>
  );
}

function Container119() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[19.996px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel29 />
      <Component31 />
    </div>
  );
}

function VariablesPanel17() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="VariablesPanel">
      <Heading7 />
      <Container116 />
      <Container117 />
      <Container118 />
      <Container119 />
    </div>
  );
}

function PrimitiveLabel30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Seed</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[39.992px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[39.992px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">1234</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0.601px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[67.985px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel30 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel31() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[107.808px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[19.996px] items-center relative w-[107.808px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e9d4ff] text-[14px] text-nowrap whitespace-pre">Wireframe Mode</p>
      </div>
    </div>
  );
}

function PrimitiveSpan31() {
  return (
    <div className="bg-white relative rounded-[2.01792e+07px] shrink-0 size-[15.993px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[15.993px]" />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="absolute bg-[#cbced4] box-border content-stretch flex h-[18.399px] items-center left-0 p-[0.601px] rounded-[2.01792e+07px] top-0 w-[31.996px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.01792e+07px]" />
      <PrimitiveSpan31 />
    </div>
  );
}

function Component32() {
  return (
    <div className="h-[18.399px] relative shrink-0 w-[31.996px]" data-name="Component 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18.399px] relative w-[31.996px]">
        <PrimitiveButton3 />
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[19.996px] items-center justify-between relative w-full">
          <PrimitiveLabel31 />
          <Component32 />
        </div>
      </div>
    </div>
  );
}

function VariablesPanel18() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[103.974px] items-start relative shrink-0 w-full" data-name="VariablesPanel">
      <Container120 />
      <Container121 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.99658 9.99572V1.99914" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p890bf80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p283a4280} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Button43() {
  return (
    <div className="bg-[#9810fa] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[17px] items-center justify-center px-[122px] py-[9px] relative w-full">
          <Icon31 />
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Export</p>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.9)] box-border content-stretch flex flex-col gap-[28px] items-start left-0 p-[17px] right-0 rounded-[14px] top-[1.3px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.601px] border-[rgba(130,0,219,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <VariablesPanel15 />
      <VariablesPanel16 />
      <PrimitiveDiv3 />
      <VariablesPanel17 />
      <PrimitiveDiv3 />
      <VariablesPanel18 />
      <PrimitiveDiv3 />
      <Button43 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[298px] overflow-x-clip overflow-y-auto shrink-0 sticky top-0 w-full">
      <Card3 />
    </div>
  );
}

function VariablesPanel19() {
  return (
    <div className="relative shrink-0 w-full" data-name="VariablesPanel">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-0 relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <NodeEditor23 />
      <VariablesPanel19 />
    </div>
  );
}

function Container123() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start justify-between relative size-full">
        <MapPreview3D3 />
        <Container122 />
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[-1500px] right-0 top-0" data-name="1500" style={{ backgroundImage: "linear-gradient(152.895deg, rgb(89, 22, 139) 0%, rgb(110, 17, 176) 50%, rgb(49, 44, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header6 />
      <Container123 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white bottom-0 left-[1500px] right-0 top-0" data-name="Frame">
      <Component35 />
    </div>
  );
}

export default function Responsive() {
  return (
    <div className="relative size-full" data-name="Responsive">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}