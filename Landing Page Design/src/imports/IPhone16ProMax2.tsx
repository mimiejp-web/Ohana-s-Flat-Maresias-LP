import { useRef, useState, useEffect } from "react";
import svgPaths from "./svg-c3fnpbvkap";
import imgRectangle7 from "figma:asset/994c58a830e4ec8fb8752af27e0db57ab2d6f4f3.png";
import imgRectangle5 from "figma:asset/3e9c8e692e7d4ac7440811e2959a197307d4c4f9.png";
import imgRectangle6 from "figma:asset/95040870933aa25a78bdf1c67372e1c52e99976f.png";
import imgNewFlat from "figma:asset/5957b292acca6534e144f7e8de8ca931583dd4e5.png";
import logoOhanas from "figma:asset/9d9c48dfa6dbd194f64182f9efdf79723ac4c9bb.png";
import Bookingcom from "./Bookingcom11";
import WhatsappNew from "./Whatsapp1";
import AirbnbLogo from "./Frame16";

function Back() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="back 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="back 1">
          <path d={svgPaths.p83c2b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[33px] p-[10px] top-[3%] cursor-pointer hover:opacity-70 transition-opacity"
    >
      <Back />
      <p className="font-['Raleway:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre font-[Raleway]">Voltar</p>
    </button>
  );
}



function CarouselIndicators({ activeIndex, total, onDotClick }: { activeIndex: number; total: number; onDotClick: (index: number) => void }) {
  return (
    <div className="flex gap-[8px] items-center justify-center mt-[1.5vh]">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`transition-all duration-300 ${
            index === activeIndex 
              ? "w-[24px] h-[6px] bg-black rounded-[3px]" 
              : "w-[6px] h-[6px] bg-[#d9d9d9] rounded-full hover:bg-[#b0b0b0]"
          }`}
          aria-label={`Ir para slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

function Frame7() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const totalSlides = 4;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const slideWidth = scrollRef.current.scrollWidth / totalSlides;
      const currentIndex = Math.round(scrollLeft / slideWidth);
      setActiveIndex(currentIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / totalSlides;
      scrollRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth"
      });
    }
  };

  // Touch handling for better mobile experience
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      scrollElement.addEventListener("touchstart", handleTouchStart, { passive: true });
      scrollElement.addEventListener("touchend", handleTouchEnd, { passive: true });
      
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
        scrollElement.removeEventListener("touchstart", handleTouchStart);
        scrollElement.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);

  return (
    <div className="relative shrink-0 w-full">
      <div 
        ref={scrollRef}
        className="h-[38vh] max-h-[367px] overflow-x-auto overflow-y-clip relative shrink-0 w-full scrollbar-hide snap-x snap-mandatory touch-pan-x"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="absolute content-stretch flex gap-[20px] items-center left-[26px] top-[13px]">
          <div className="h-[35vh] max-h-[333px] relative rounded-[19px] shrink-0 w-[75vw] max-w-[332px] snap-center">
            <img 
              alt="Foto 1 do flat" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[19px] size-full select-none" 
              src={imgRectangle5}
              draggable="false"
            />
          </div>
          <div className="h-[35vh] max-h-[333px] relative rounded-[19px] shrink-0 w-[75vw] max-w-[332px] snap-center">
            <img 
              alt="Foto 2 do flat" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[19px] size-full select-none" 
              src={imgNewFlat}
              draggable="false"
            />
          </div>
          <div className="h-[35vh] max-h-[333px] relative rounded-[19px] shrink-0 w-[75vw] max-w-[332px] snap-center">
            <img 
              alt="Foto 3 do flat" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[19px] size-full select-none" 
              src={imgRectangle7}
              draggable="false"
            />
          </div>
          <div className="h-[35vh] max-h-[333px] relative rounded-[19px] shrink-0 w-[75vw] max-w-[332px] snap-center">
            <img 
              alt="Foto 4 do flat" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[19px] size-full select-none" 
              src={imgRectangle6}
              draggable="false"
            />
          </div>
        </div>
      </div>
      <CarouselIndicators activeIndex={activeIndex} total={totalSlides} onDotClick={scrollToSlide} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#4b4b4b]">
      <p className="font-['Raleway:Bold',_sans-serif] font-bold relative shrink-0 text-[16px] whitespace-nowrap font-[Raleway]">Ohana's Flat Maresias</p>
      <p className="font-['Raleway:Light',_sans-serif] font-light relative shrink-0 text-[12px] whitespace-nowrap font-[Raleway]">Menos rotinas... mais Maresias</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[66px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <circle cx="33" cy="33" fill="var(--fill-0, #00E6FF)" id="Ellipse 1" r="33" />
        </svg>
        <img 
          src={logoOhanas} 
          alt="Ohana's Flat Maresias" 
          className="absolute inset-0 size-full rounded-full object-cover"
        />
      </div>
      <Frame1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-full max-w-[388px]">
      <Frame2 />
      <p className="font-['Raleway:Light',_sans-serif] font-light leading-[normal] relative shrink-0 text-[#4b4b4b] text-[12px] text-center w-full font-[Raleway]">
        Descubra dias leves e cheios de boas vibrações em Maresias. Sol, mar, areia e a melhor energia do litoral norte. Nosso flat, em condomínio completo, é o ponto de descanso perfeito pra você só se preocupar com uma coisa: curtir cada momento.
        <br aria-hidden="true" />
        {` 👉 Partiu Maresias?`}
      </p>
    </div>
  );
}

function Whatsapp() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="whatsapp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_114)" id="whatsapp 1">
          <path d={svgPaths.p21189e80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1832980} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_114">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <a 
      href="https://www.airbnb.com/l/jRgKyfWP"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#ebebeb] h-[62px] relative rounded-[12px] shrink-0 w-full block hover:bg-[#d9d9d9] transition-colors cursor-pointer"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[62px] items-center px-[20px] py-[10px] relative w-full">
          <div className="relative shrink-0 size-[30px]">
            <AirbnbLogo />
          </div>
          <p className="font-['Raleway:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre font-[Raleway]">Airbnb</p>
        </div>
      </div>
    </a>
  );
}

function Whatsapp1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="whatsapp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_114)" id="whatsapp 1">
          <path d={svgPaths.p21189e80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1832980} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_114">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <a 
      href="https://www.booking.com/hotel/br/ohana-39-s-flat.pt-br.html?label=pt-br-booking-desktop-9_uvqir24qvA6x6xGiDvCQS652796015463%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp1001772%3Ali%3Adec%3Adm&sid=38a0972c68e12f4f74ae3f40f8c00a25&aid=2311236&ucfs=1&arphpl=1&dest_id=-672204&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=1a218e647a4f0262&srepoch=1761509864&from=searchresults"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#ebebeb] h-[62px] relative rounded-[12px] shrink-0 w-full block hover:bg-[#d9d9d9] transition-colors cursor-pointer"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[62px] items-center px-[20px] py-[10px] relative w-full">
          <div className="relative shrink-0 size-[30px]">
            <Bookingcom />
          </div>
          <p className="font-['Raleway:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre font-[Raleway]">Booking</p>
        </div>
      </div>
    </a>
  );
}

function Whatsapp2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="whatsapp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_114)" id="whatsapp 1">
          <path d={svgPaths.p21189e80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1832980} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_114">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <a 
      href="https://wa.me/5511952153775?text=Ol%C3%A1!%20Pode%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20flat%20em%20Maresias%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#ebebeb] h-[62px] relative rounded-[12px] shrink-0 w-full block hover:bg-[#d9d9d9] transition-colors cursor-pointer"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[62px] items-center px-[20px] py-[10px] relative w-full">
          <div className="relative shrink-0 size-[30px]">
            <WhatsappNew />
          </div>
          <p className="font-['Raleway:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre font-[Raleway]">Entrar em contato</p>
        </div>
      </div>
    </a>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full max-w-[387px]">
      <Frame5 />
      <Frame4 />
      <Frame />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.5vh] items-center left-0 top-[8%] bottom-0 w-full px-[26px] overflow-y-auto scrollbar-hide">
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

export default function IPhone16ProMax({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 Pro Max - 2">
      <Frame3 onClick={onNavigate} />

      <Frame10 />
    </div>
  );
}
