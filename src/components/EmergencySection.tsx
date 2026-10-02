import React from 'react';
import { PhoneCall, AlertTriangle, ShieldAlert, Mail } from 'lucide-react';

export const EmergencySection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#102330] text-white px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-[#65C8C4]/20">
      {/* Subtle Moving Water-Light Texture in Background (Requirement 15) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated caustic light radial gradient blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#65C8C4]/15 rounded-full blur-3xl animate-slow-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#65C8C4]/15 rounded-full blur-3xl animate-slow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-dark-grid opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Priority alert badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#172027] border border-[#65C8C4]/40 text-[#65C8C4] text-xs font-mono uppercase tracking-[0.16em] mb-8">
          <AlertTriangle className="w-3.5 h-3.5 text-[#B87756]" />
          <span>Priority Immediate Dispatch</span>
        </div>

        {/* Large Aqua Headline */}
        <h2 className="font-heading font-extrabold text-[#65C8C4] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[84px] tracking-tight leading-[0.98] uppercase mb-6">
          NEED A PLUMBER?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl md:text-2xl text-[#D7E3E0] max-w-2xl mx-auto font-normal leading-relaxed mb-12">
          Fast help for urgent plumbing problems in Arcadia.
        </p>

        {/* Action Buttons: Clean Call Now (no number text on button) + Email Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <a
            href="tel:6269000520"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-5 rounded-2xl bg-[#65C8C4] text-[#102330] hover:bg-white hover:text-[#102330] text-lg sm:text-xl font-heading font-extrabold tracking-tight shadow-[0_0_35px_rgba(101,200,196,0.3)] transition-all duration-300 active:scale-95"
          >
            <div className="w-9 h-9 rounded-full bg-[#102330] text-[#65C8C4] flex items-center justify-center group-hover:bg-[#102330] transition-colors">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <span>CALL EMERGENCY DISPATCH</span>
          </a>

          <a
            href="mailto:dispatch@harrisonplumbingarcadia.com"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/10 text-white hover:bg-white hover:text-[#102330] border border-white/20 text-lg sm:text-xl font-heading font-bold tracking-tight transition-all duration-300 active:scale-95"
          >
            <Mail className="w-5 h-5 text-[#65C8C4] group-hover:text-[#102330]" />
            <span>EMAIL DISPATCH</span>
          </a>
        </div>

        {/* Quiet metadata line below the buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono tracking-[0.16em] text-[#D7E3E0]/80 uppercase">
          <ShieldAlert className="w-4 h-4 text-[#65C8C4]" />
          <span>24 / 7 EMERGENCY SERVICE</span>
          <span className="text-[#65C8C4]">·</span>
          <span>DIRECT LINE: (626) 900-0520</span>
          <span className="text-[#65C8C4]">·</span>
          <span>ARCADIA TRUCKS READY</span>
        </div>
      </div>
    </section>
  );
};
