import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const WaterlinePreloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  // Sequence stages:
  // 0: Initial state
  // 1: Aqua line enters from left edge & travels horizontally
  // 2: Line curves downward & wraps around title box
  // 3: Line pulses like water pressure
  // 4: Business name appears through masked reveal
  // 5: Small text appears: ARCADIA / CA
  // 6: Line retracts toward the right
  // 7: Preloader slides upward to reveal website
  const [step, setStep] = useState<number>(0);
  const [dismissed, setDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 100);
    const t2 = setTimeout(() => setStep(2), 650);
    const t3 = setTimeout(() => setStep(3), 1300);
    const t4 = setTimeout(() => setStep(4), 1800);
    const t5 = setTimeout(() => setStep(5), 2300);
    const t6 = setTimeout(() => setStep(6), 3000);
    const t7 = setTimeout(() => setStep(7), 3600);
    const t8 = setTimeout(() => {
      setDismissed(true);
      onComplete();
    }, 4300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, [onComplete]);

  if (dismissed) return null;

  const handleSkip = () => {
    setStep(7);
    setTimeout(() => {
      setDismissed(true);
      onComplete();
    }, 400);
  };

  return (
    <div
      aria-label="Waterline Loading Animation"
      role="status"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#102330] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        step >= 7 ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute top-6 right-6 z-20 text-[11px] font-mono tracking-[0.14em] uppercase text-[#D7E3E0]/60 hover:text-[#65C8C4] transition-colors px-3 py-1 border border-[#B9C9C6]/20 rounded-full"
      >
        Skip Preloader
      </button>

      {/* Background Utility Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      {/* The Waterline SVG Canvas */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pressureGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Faint static pipe route guide */}
        <path
          d="M 0,220 L 400,220 C 460,220 500,260 500,320 L 500,480 C 500,540 540,580 600,580 L 1920,580"
          fill="none"
          stroke="rgba(185, 201, 198, 0.08)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Dynamic Waterline Path */}
        <path
          d="M -50,260 L 380,260 Q 450,260 450,330 L 450,470 Q 450,540 520,540 L 1950,540"
          fill="none"
          stroke="#65C8C4"
          strokeWidth={step === 3 ? "3.5" : "2"}
          filter={step === 3 ? "url(#pressureGlow)" : undefined}
          strokeDasharray="2500"
          strokeDashoffset={
            step === 0
              ? 2500
              : step === 1
              ? 1800
              : step === 2
              ? 1100
              : step >= 6
              ? 0
              : 850
          }
          className={`transition-all ${
            step === 3
              ? 'duration-300 stroke-[#65C8C4] opacity-100 scale-102'
              : step >= 6
              ? 'duration-700 ease-in stroke-[#65C8C4] opacity-40'
              : 'duration-700 ease-out opacity-90'
          }`}
          style={{
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        />

        {/* Subtle pressure pulse ripple node */}
        {step >= 3 && step < 6 && (
          <circle
            cx="450"
            cy="400"
            r="16"
            fill="none"
            stroke="#65C8C4"
            strokeWidth="1.5"
            className="animate-ping opacity-75 origin-center"
          />
        )}
      </svg>

      {/* Centered Composition */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Pipe routing notch mark */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`h-[1px] bg-[#65C8C4] transition-all duration-700 ${
              step >= 2 ? 'w-12 opacity-100' : 'w-0 opacity-0'
            }`}
          />
          <span
            className={`text-[11px] font-mono tracking-[0.2em] text-[#65C8C4] uppercase transition-all duration-500 ${
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            Waterline Systems
          </span>
          <div
            className={`h-[1px] bg-[#65C8C4] transition-all duration-700 ${
              step >= 2 ? 'w-12 opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Business Name with Masked Reveal */}
        <div className="relative overflow-hidden py-2 px-6">
          <div
            className={`transition-all duration-700 ease-out transform ${
              step >= 4
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05]">
              HARRISON<br />
              BROTHERS<br />
              <span className="text-[#65C8C4]">PLUMBING</span>
            </h1>
          </div>

          {/* Mask curtain bar */}
          <div
            className={`absolute inset-0 bg-[#102330] pointer-events-none transition-transform duration-700 ease-out origin-top ${
              step >= 4 ? 'scale-y-0' : 'scale-y-100'
            }`}
          />
        </div>

        {/* Step 7: ARCADIA / CA and Service Spec */}
        <div
          className={`mt-6 flex items-center justify-center gap-4 text-xs font-mono tracking-[0.2em] text-[#D7E3E0] uppercase transition-all duration-600 ${
            step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[#65C8C4]">ARCADIA</span>
          <span className="text-[#B9C9C6]/60">/</span>
          <span>CALIFORNIA</span>
          <span className="text-[#B9C9C6]/60">·</span>
          <span className="text-[#B87756]">EST. RESIDENTIAL & COMMERCIAL</span>
        </div>

        {/* Small subtle water flow bar */}
        <div className="mt-8 w-48 h-[1px] bg-[#172027] relative overflow-hidden rounded-full">
          <div
            className={`absolute top-0 bottom-0 left-0 bg-[#65C8C4] transition-all duration-500 ${
              step >= 2 ? (step >= 6 ? 'w-full opacity-40' : 'w-3/4 opacity-100') : 'w-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
