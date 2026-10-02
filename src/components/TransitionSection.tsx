import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../data/images';

export const TransitionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] lg:min-h-[85vh] bg-[#102330] overflow-hidden flex items-center justify-end px-6 sm:px-8 lg:px-16 py-20"
    >
      {/* Background Image with Organic / Circular Mask Reveal (Requirement 14) */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-[1800ms] ease-out"
        style={{
          clipPath: inView
            ? 'ellipse(140% 120% at 30% 50%)'
            : 'ellipse(20% 20% at 30% 50%)',
        }}
      >
        <img
          src={IMAGES.transitionWork}
          alt="Close up precision plumbing brass ball valve and copper pipes"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter saturate-[0.8] contrast-[1.1]"
        />

        {/* Deep navy atmospheric overlay */}
        <div className="absolute inset-0 bg-[#102330]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102330] via-transparent to-[#102330]/50" />
      </div>

      {/* Decorative flowing water curve lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100,500 C 300,500 400,200 900,200 C 1300,200 1500,450 2000,450"
          fill="none"
          stroke="#65C8C4"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
      </svg>

      {/* Foreground Panel Entering from Bottom-Right (Requirement 14) */}
      <div
        className={`relative z-10 max-w-xl w-full bg-[#102330]/90 backdrop-blur-xl border border-[#65C8C4]/30 rounded-[32px] p-8 sm:p-12 shadow-2xl transition-all duration-1000 ease-out ${
          inView
            ? 'translate-x-0 translate-y-0 opacity-100'
            : 'translate-x-16 translate-y-16 opacity-0'
        }`}
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#65C8C4]" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#65C8C4]">
            Peace of Mind
          </span>
        </div>

        <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.05] mb-6">
          SO YOU CAN<br />
          <span className="text-[#65C8C4]">GET BACK</span><br />
          TO NORMAL.
        </h2>

        {/* Supporting Line */}
        <div className="space-y-2 mb-8 border-l-2 border-[#65C8C4] pl-5">
          <p className="text-base sm:text-lg font-heading font-semibold text-white">
            Less disruption.
          </p>
          <p className="text-base sm:text-lg font-heading font-semibold text-white">
            Clear communication.
          </p>
          <p className="text-base sm:text-lg font-heading font-semibold text-white">
            Practical repairs.
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#D7E3E0]/70 font-normal leading-relaxed">
          Plumbing emergencies disrupt your daily family routine or business operations. Our technicians arrive prepared to resolve the underlying failure immediately without prolonging the chaos.
        </p>
      </div>
    </section>
  );
};
