import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../data/images';

export const LongCurvedImageHolder: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offset = (rect.top / window.innerHeight) * 20;
      setScrollY(offset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 bg-[#F8FAF8] flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="w-[92vw] sm:w-[90vw] max-w-[1360px] relative">
        {/* Secondary Offset Frame in #65C8C4 (moves slightly slower while scrolling) */}
        <div
          className="absolute inset-0 rounded-[36px] sm:rounded-[52px] bg-[#65C8C4]/25 pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${12 + scrollY * 0.2}px, ${14 + scrollY * 0.4}px)`,
          }}
        />

        {/* Main Image Container */}
        <div className="relative z-10 w-full h-[280px] sm:h-[400px] lg:h-[500px] rounded-[36px] sm:rounded-[52px] overflow-hidden border border-[#102330] bg-[#102330] shadow-xl">
          <img
            src={IMAGES.fieldService}
            alt="Harrison Brothers technician calibrating residential plumbing system in Arcadia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter saturate-[0.9] contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
          />

          {/* Gentle edge vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#102330]/40 via-transparent to-transparent pointer-events-none" />

          {/* Technical Corner Marking */}
          <div className="absolute top-6 left-8 bg-[#102330]/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#65C8C4]" />
            <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/90">
              FIELD VERIFIED · SEC. 48-A
            </span>
          </div>
        </div>

        {/* Caption & Copper Accent Line Below the Image */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-3">
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-[0.18em] text-[#102330]">
              FIELD SERVICE
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#102330]/70">
              ARCADIA, CALIFORNIA
            </span>
          </div>

          {/* Small Copper Accent Line Detail */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#102330]/60">
              PIPE & SUPPLY LINES
            </span>
            <div className="h-[2px] w-20 sm:w-28 bg-[#B87756] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
