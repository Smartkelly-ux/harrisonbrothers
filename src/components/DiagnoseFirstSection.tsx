import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../data/images';

export const DiagnoseFirstSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setScrollY((progress - 0.5) * 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#E9F0EE] text-[#172027] px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-utility-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Text */}
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#65C8C4]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#102330]/70">
              The Method
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-[#102330] tracking-tight leading-[0.96] text-[40px] sm:text-[54px] md:text-[68px] lg:text-[76px] uppercase">
            FIND IT.<br />
            <span className="text-[#65C8C4]">FIX IT.</span><br />
            MOVE ON.
          </h2>

          {/* Supporting Copy */}
          <div className="border-l-2 border-[#102330] pl-6 space-y-3 py-1">
            <p className="font-heading text-lg sm:text-xl font-bold text-[#102330]">
              Start with the problem.
            </p>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#102330]">
              Trace the system.
            </p>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#102330]">
              Make the repair.
            </p>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#102330]">
              Leave the space clean.
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#172027]/75 leading-relaxed max-w-lg">
            We don't replace parts on speculation. We locate exact leaks using non-invasive acoustic diagnostics, verify system pressures, and restore full hydraulic balance before we consider our job finished.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold font-heading text-[#102330]">0%</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#102330]/60">
                Guesswork Tolerated
              </span>
            </div>
            <div className="w-[1px] h-10 bg-[#B9C9C6]" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold font-heading text-[#65C8C4]">100%</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#102330]/60">
                Site Cleanup Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Right Vertical Image with Self-Drawing Technical Overlay */}
        <div className="lg:col-span-6 relative">
          {/* Subtle outer frame */}
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-[36px] overflow-hidden border border-[#102330]/20 shadow-2xl bg-[#102330]">
            <div
              className="relative w-full aspect-[3/4] overflow-hidden"
              style={{
                transform: `translateY(${scrollY}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <img
                src={IMAGES.diagnoseInspection}
                alt="Plumbing technician utilizing digital pipe inspection camera in Arcadia residence"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05]"
              />

              {/* Scrim for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102330]/70 via-transparent to-transparent pointer-events-none" />

              {/* Technical Overlay with Self-Drawing Pipe Lines (Requirement 10) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 533"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal pipe line */}
                <path
                  d="M 20,420 L 180,420 Q 210,420 210,390 L 210,220 Q 210,190 240,190 L 380,190"
                  stroke="#65C8C4"
                  strokeWidth="2.5"
                  strokeDasharray="600"
                  strokeDashoffset={inView ? '0' : '600'}
                  className="transition-all duration-[1600ms] ease-out delay-200"
                  style={{ strokeLinecap: 'round' }}
                />

                {/* Secondary pipe bypass line */}
                <path
                  d="M 120,490 L 120,420"
                  stroke="#B87756"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset={inView ? '0' : '100'}
                  className="transition-all duration-[1200ms] ease-out delay-500"
                />

                {/* Sensor and diagnostic node */}
                <g className={`transition-opacity duration-700 delay-[900ms] ${inView ? 'opacity-100' : 'opacity-0'}`}>
                  <circle cx="210" cy="300" r="6" fill="#65C8C4" />
                  <circle cx="210" cy="300" r="14" stroke="#65C8C4" strokeWidth="1" strokeDasharray="3 3" />
                  <rect x="230" y="288" width="95" height="24" rx="4" fill="#102330" fillOpacity="0.85" />
                  <text x="238" y="304" fill="#E9F0EE" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">
                    LINE_PRESSURE: OK
                  </text>
                </g>
              </svg>

              {/* Bottom technical badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-wider text-white/90">
                <span className="bg-[#102330]/80 backdrop-blur-md px-3 py-1 rounded-md border border-[#65C8C4]/40">
                  CAMERA INSPECTION // 1080P
                </span>
                <span className="text-[#65C8C4] font-bold">ARC-91007</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
