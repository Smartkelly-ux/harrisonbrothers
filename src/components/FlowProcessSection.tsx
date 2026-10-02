import React, { useRef, useState, useEffect } from 'react';
import { PhoneCall, Search, Wrench, ShieldCheck } from 'lucide-react';

interface Stage {
  number: string;
  name: string;
  action: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STAGES: Stage[] = [
  {
    number: '01',
    name: 'CALL',
    action: 'Direct Contact & Immediate Triage',
    detail: 'Speak directly with a knowledgeable team member who understands local Arcadia infrastructure.',
    icon: PhoneCall,
  },
  {
    number: '02',
    name: 'DIAGNOSE',
    action: 'Precision System Evaluation',
    detail: 'Acoustic leak tests and in-pipe digital cameras pinpoint the exact source of water misbehavior.',
    icon: Search,
  },
  {
    number: '03',
    name: 'REPAIR',
    action: 'Durable Mechanical Correction',
    detail: 'High-spec copper brazing, clean fittings, and tested parts installed strictly to municipal code.',
    icon: Wrench,
  },
  {
    number: '04',
    name: 'RESTORE',
    action: 'Flow Verification & Site Cleanup',
    detail: 'Pressure gauge verification, complete cleanup of the work area, and confirmed line integrity.',
    icon: ShieldCheck,
  },
];

export const FlowProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the section we have scrolled
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height * 0.7), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active stage based on scroll progress
  const activeStageIndex = Math.min(Math.floor(scrollProgress * 4.5), 3);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#F8FAF8] text-[#172027] px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65C8C4]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#102330]/70">
              Operational Sequence
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-[#102330] tracking-tight text-[36px] sm:text-[48px] md:text-[62px] leading-[1] uppercase mb-4">
            THE FLOW.
          </h2>
          <p className="text-base sm:text-lg text-[#172027]/70 font-normal">
            A linear, accountable path from the first phone ring to full water restoration.
          </p>
        </div>

        {/* Desktop & Tablet: Horizontal Pipe-Inspired System */}
        <div className="hidden md:block relative pt-8 pb-12">
          {/* Continuous Pipe Graphic Behind Nodes */}
          <div className="absolute top-[82px] left-[5%] right-[5%] h-8 pointer-events-none">
            {/* Base grey pipe casing */}
            <div className="w-full h-3 bg-[#E9F0EE] rounded-full border border-[#B9C9C6]/40 shadow-inner relative overflow-hidden">
              {/* Flowing Aqua Fill based on scroll */}
              <div
                className="h-full bg-[#65C8C4] transition-all duration-300 ease-out rounded-full shadow-[0_0_12px_rgba(101,200,196,0.6)]"
                style={{ width: `${Math.min(scrollProgress * 120, 100)}%` }}
              />
            </div>

            {/* Subtle copper junction collar rings */}
            <div className="absolute top-[-2px] left-[15%] w-3 h-4 bg-[#B87756] rounded-xs shadow-xs" />
            <div className="absolute top-[-2px] left-[40%] w-3 h-4 bg-[#B87756] rounded-xs shadow-xs" />
            <div className="absolute top-[-2px] left-[65%] w-3 h-4 bg-[#B87756] rounded-xs shadow-xs" />
            <div className="absolute top-[-2px] left-[90%] w-3 h-4 bg-[#B87756] rounded-xs shadow-xs" />
          </div>

          {/* 4 Stages Grid */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {STAGES.map((stage, idx) => {
              const isIlluminated = scrollProgress >= (idx * 0.22);
              const Icon = stage.icon;

              return (
                <div
                  key={stage.number}
                  className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-500 ${
                    isIlluminated
                      ? 'bg-white shadow-lg border border-[#65C8C4]/50 transform -translate-y-2'
                      : 'bg-transparent border border-transparent opacity-60'
                  }`}
                >
                  {/* Stage Circle Node on the Pipe */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-heading font-extrabold text-lg mb-6 transition-all duration-500 shadow-md ${
                      isIlluminated
                        ? 'bg-[#102330] text-[#65C8C4] ring-4 ring-[#65C8C4]/30 scale-110'
                        : 'bg-[#E9F0EE] text-[#102330]/40'
                    }`}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Stage Number & Title */}
                  <span className="font-mono text-xs uppercase tracking-widest text-[#65C8C4] font-bold mb-1">
                    STAGE {stage.number}
                  </span>
                  <h3 className="font-heading text-xl lg:text-2xl font-extrabold uppercase text-[#102330] mb-2 tracking-tight">
                    {stage.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#102330] uppercase tracking-wider mb-2">
                    {stage.action}
                  </p>

                  <p className="text-xs text-[#172027]/70 font-normal leading-relaxed">
                    {stage.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Flowing Pipe Layout */}
        <div className="md:hidden relative pl-8 space-y-8">
          {/* Vertical Aqua Pipe Line */}
          <div className="absolute top-4 bottom-8 left-3 w-1 bg-[#E9F0EE] rounded-full overflow-hidden">
            <div
              className="w-full bg-[#65C8C4] transition-all duration-300 ease-out rounded-full shadow-[0_0_8px_rgba(101,200,196,0.8)]"
              style={{ height: `${Math.min(scrollProgress * 125, 100)}%` }}
            />
          </div>

          {STAGES.map((stage, idx) => {
            const isIlluminated = scrollProgress >= (idx * 0.2);
            const Icon = stage.icon;

            return (
              <div
                key={stage.number}
                className={`relative pl-4 p-5 rounded-2xl transition-all duration-300 ${
                  isIlluminated
                    ? 'bg-white border border-[#65C8C4]/40 shadow-md'
                    : 'bg-[#F8FAF8] border border-transparent opacity-70'
                }`}
              >
                {/* Node indicator */}
                <div
                  className={`absolute -left-9 top-6 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300 ${
                    isIlluminated
                      ? 'bg-[#102330] text-[#65C8C4] ring-2 ring-[#65C8C4]'
                      : 'bg-[#E9F0EE] text-[#102330]/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#65C8C4]">
                    STAGE {stage.number}
                  </span>
                  <span className="text-xs text-[#102330]/40">·</span>
                  <span className="text-xs font-semibold text-[#102330] uppercase">
                    {stage.name}
                  </span>
                </div>

                <h4 className="font-heading text-base font-bold text-[#102330] mb-1">
                  {stage.action}
                </h4>

                <p className="text-xs text-[#172027]/75 leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
