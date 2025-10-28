import { useState, useEffect } from "react";
import svgPaths from "./svg-81o5fnzhg5";
import imgEllipse2 from "figma:asset/51be86cf50a5849ffc8787c17763e5fd87be61d9.png";
import imgIPhone16ProMax1 from "figma:asset/ac0ccef186fada6d2effd2db77b99061057af710.png";
import logoOhanas from "figma:asset/9d9c48dfa6dbd194f64182f9efdf79723ac4c9bb.png";

function Frame1({ onClick, showGlow }: { onClick: () => void; showGlow: boolean }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-white box-border content-stretch flex gap-[10px] items-center justify-center left-1/2 p-[10px] rounded-[12px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[244px] font-[Raleway] cursor-pointer hover:bg-gray-50 transition-all animate-glow-pulse"
    >
      <p className="font-['Raleway:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre font-[Raleway] font-bold">Conhecer agora</p>
    </button>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-white w-[166px]">
      <p className="font-['Raleway:Bold',_sans-serif] relative shrink-0 text-[16px] w-full font-[Raleway] font-bold">Ohana's Flat Maresias</p>
      <p className="font-['Raleway:Light',_sans-serif] relative shrink-0 text-[12px] w-full font-[Raleway]">Menos rotinas... mais Maresias</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-1/2 -translate-x-1/2 bottom-[100px]">
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
      <Frame3 />
    </div>
  );
}

function Frame5({ onTypingComplete }: { onTypingComplete: () => void }) {
  const [showDots, setShowDots] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const fullText = "Partiu Maresias?";

  useEffect(() => {
    // Mostrar pontinhos por 1.5 segundos
    const dotsTimer = setTimeout(() => {
      setShowDots(false);
      setIsTyping(true);
    }, 1500);

    return () => clearTimeout(dotsTimer);
  }, []);

  useEffect(() => {
    if (!showDots && isTyping) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false); // Terminou de digitar
          onTypingComplete(); // Avisa que terminou
        }
      }, 80); // Velocidade da digitação (80ms por letra)

      return () => clearInterval(typingInterval);
    }
  }, [showDots, isTyping, onTypingComplete]);

  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[51px]">
        <img alt="" className="block max-w-none size-full" height="51" src={imgEllipse2} width="51" />
      </div>
      {showDots ? (
        <div className="flex gap-[6px] items-center h-[40px]">
          <div 
            className="w-[12px] h-[12px] bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0ms", animationDuration: "1s" }}
          />
          <div 
            className="w-[12px] h-[12px] bg-white rounded-full animate-bounce"
            style={{ animationDelay: "150ms", animationDuration: "1s" }}
          />
          <div 
            className="w-[12px] h-[12px] bg-white rounded-full animate-bounce"
            style={{ animationDelay: "300ms", animationDuration: "1s" }}
          />
        </div>
      ) : (
        <p className="font-['Raleway:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] sm:text-[28px] md:text-[32px] text-nowrap text-white whitespace-pre font-[Raleway] font-bold">
          {displayedText}
          {isTyping && <span className="inline-block w-[3px] h-[24px] sm:h-[28px] md:h-[32px] bg-white ml-[2px] animate-pulse" />}
        </p>
      )}
    </div>
  );
}

function Frame2({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-[45px] cursor-pointer hover:opacity-80 transition-opacity"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="Frame 3">
          <rect fill="var(--fill-0, #009DFF)" height="45" rx="8" width="45" />
          <path clipRule="evenodd" d={svgPaths.p3dfe6d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Frame({ startTyping, onTypingComplete, onNavigate }: { startTyping: boolean; onTypingComplete: () => void; onNavigate: () => void }) {
  const fullText = "Só se for agora!!!";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!startTyping) return;
    
    setIsTyping(true);
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      currentIndex++;
      setDisplayedText(fullText.slice(0, currentIndex));
      
      if (currentIndex >= fullText.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
        onTypingComplete();
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [startTyping]);

  return (
    <div className="bg-white h-[59px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[59px] items-center justify-between pl-[20px] pr-[7px] py-[7px] relative w-full min-w-0 bg-white rounded-[16px]" style={{ colorScheme: 'light' }}>
          <p className="font-['Raleway:Light',_sans-serif] leading-[normal] not-italic relative text-[20px] text-black text-nowrap whitespace-pre font-[Raleway] overflow-hidden text-ellipsis min-w-0 flex-1 mr-[10px]">
            {displayedText}
            {isTyping && <span className="inline-block w-[2px] h-[20px] bg-black ml-[2px] animate-pulse" />}
          </p>
          <Frame2 onClick={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Frame6({ onAllTypingComplete, onNavigate }: { onAllTypingComplete: () => void; onNavigate: () => void }) {
  const [startSecondTyping, setStartSecondTyping] = useState(false);

  const handleFirstTypingComplete = () => {
    setStartSecondTyping(true);
  };

  const handleSecondTypingComplete = () => {
    onAllTypingComplete(); // Propaga para o componente pai
  };

  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[5%] right-[5%] top-[23%] px-[20px]">
      <Frame5 onTypingComplete={handleFirstTypingComplete} />
      <Frame startTyping={startSecondTyping} onTypingComplete={handleSecondTypingComplete} onNavigate={onNavigate} />
    </div>
  );
}

export default function IPhone16ProMax({ onNavigate }: { onNavigate: () => void }) {
  const [showButtonGlow, setShowButtonGlow] = useState(false);

  const handleAllTypingComplete = () => {
    setShowButtonGlow(true);
  };

  return (
    <div className="relative size-full" data-name="iPhone 16 Pro Max - 1">
      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6), 0 0 90px rgba(255, 255, 255, 0.4);
          }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#eeeeee] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgIPhone16ProMax1} />
      </div>
      <div className="absolute bg-gradient-to-t from-[#000000] h-[35%] left-0 mix-blend-soft-light opacity-[0.53] to-[rgba(0,0,0,0)] bottom-0 w-full" />
      <Frame1 onClick={onNavigate} showGlow={showButtonGlow} />
      <div className="absolute h-[16px] left-[calc(50%+0.5px)] bottom-[20px] translate-x-[-50%] w-[105px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 16">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p20881080} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p17bd0100} fill="white" />
            <path d={svgPaths.p13f66e80} fill="white" />
            <path d={svgPaths.p3af951b0} fill="white" />
            <path d={svgPaths.p2c07cc00} fill="white" />
            <path d={svgPaths.p2f5d4600} fill="white" />
            <path d={svgPaths.p2f1a0e80} fill="white" />
            <path d={svgPaths.p12e46c00} fill="white" />
            <path d={svgPaths.p9820c00} fill="white" />
            <path d={svgPaths.p2d1d0480} fill="white" />
            <path d={svgPaths.p19b01d80} fill="white" />
            <path d={svgPaths.p375e5b80} fill="var(--fill-0, #FF7433)" />
          </g>
        </svg>
      </div>
      <Frame4 />
      <Frame6 onAllTypingComplete={handleAllTypingComplete} onNavigate={onNavigate} />
    </div>
  );
}
