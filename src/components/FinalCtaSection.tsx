import React, { useRef, useState, useEffect } from 'react';
import { Phone, Calendar, ArrowRight, Mail } from 'lucide-react';

interface FinalCtaSectionProps {
  onRequestService: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onRequestService }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-white text-[#172027] px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-[#B9C9C6]/30"
    >
      {/* Oversized Curved Aqua Line Entering from Outside Viewport (Requirement 16) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -150,120 C 250,120 400,650 900,450 C 1300,300 1600,600 2100,500"
          fill="none"
          stroke="#65C8C4"
          strokeWidth="3.5"
          strokeDasharray="2800"
          strokeDashoffset={inView ? '0' : '2800'}
          className="transition-all duration-[2200ms] ease-out opacity-85"
          style={{ strokeLinecap: 'round' }}
        />
        {/* Subtle companion line */}
        <path
          d="M -150,160 C 250,160 400,690 900,490 C 1300,340 1600,640 2100,540"
          fill="none"
          stroke="#B9C9C6"
          strokeWidth="1"
          strokeDasharray="10 10"
          opacity="0.4"
        />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#65C8C4]" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#102330]/70 font-semibold">
            Ready When You Need Us
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-heading font-extrabold text-[#102330] text-[40px] sm:text-[58px] md:text-[76px] lg:text-[90px] leading-[0.96] tracking-tight uppercase mb-8">
          LET'S GET<br />
          YOUR WATER<br />
          <span className="text-[#65C8C4]">MOVING RIGHT.</span>
        </h2>

        {/* Small Copy */}
        <div className="mb-12">
          <p className="font-heading text-lg sm:text-xl font-bold text-[#102330]">
            Harrison Brothers Plumbing
          </p>
          <p className="text-sm font-mono uppercase tracking-[0.16em] text-[#102330]/60 mt-1">
            Arcadia, California
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <a
            href="tel:6269000520"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-[0.14em] bg-[#102330] text-white hover:bg-[#65C8C4] hover:text-[#102330] shadow-lg transition-all duration-200 active:scale-95"
          >
            <Phone className="w-4 h-4 stroke-[2.2]" />
            <span>CALL NOW</span>
          </a>

          <button
            type="button"
            onClick={onRequestService}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-[0.14em] bg-[#65C8C4] text-[#102330] hover:bg-[#102330] hover:text-white transition-all duration-200 shadow-md shadow-[#65C8C4]/20 active:scale-95"
          >
            <Calendar className="w-4 h-4 stroke-[2.2]" />
            <span>REQUEST SERVICE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="mailto:dispatch@harrisonplumbingarcadia.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-[0.14em] bg-white text-[#102330] border border-[#102330]/30 hover:border-[#65C8C4] hover:text-[#65C8C4] transition-all duration-200 shadow-sm active:scale-95"
            title="Email Harrison Brothers Plumbing"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL US</span>
          </a>
        </div>
      </div>
    </section>
  );
};
