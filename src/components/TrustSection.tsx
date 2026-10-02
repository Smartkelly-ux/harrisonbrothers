import React from 'react';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#102330] text-white px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background Dark Grid Texture */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Large Horizontal Statement Block */}
        <div className="border-b border-[#B9C9C6]/20 pb-16 mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#65C8C4]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#65C8C4]">
              Values & Community
            </span>
          </div>

          <h2 className="font-heading font-extrabold tracking-tight text-[36px] sm:text-[54px] md:text-[68px] lg:text-[84px] leading-[0.98] text-white uppercase mb-8">
            LOCAL.<br />
            PRACTICAL.<br />
            <span className="text-[#65C8C4]">PROFESSIONAL.</span>
          </h2>

          <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-[#D7E3E0]/85 font-normal leading-relaxed">
            Serving Arcadia with plumbing solutions for homes and businesses.
          </p>
        </div>

        {/* Three Compact Trust Markers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Marker 1: LICENSED & INSURED */}
          <div className="bg-[#172027] border border-[#B9C9C6]/15 rounded-2xl p-8 hover:border-[#65C8C4]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#102330] border border-[#65C8C4]/30 flex items-center justify-center mb-6 text-[#65C8C4]">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="font-heading font-bold text-lg lg:text-xl text-white uppercase tracking-wider mb-2">
              LICENSED & INSURED
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E3E0]/70 font-normal leading-relaxed">
              Full general liability and specialized plumbing contractor coverage for every residential and commercial project.
            </p>
          </div>

          {/* Marker 2: EMERGENCY SERVICE */}
          <div className="bg-[#172027] border border-[#B9C9C6]/15 rounded-2xl p-8 hover:border-[#65C8C4]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#102330] border border-[#B87756]/30 flex items-center justify-center mb-6 text-[#B87756]">
              <Clock className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="font-heading font-bold text-lg lg:text-xl text-white uppercase tracking-wider mb-2">
              EMERGENCY SERVICE
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E3E0]/70 font-normal leading-relaxed">
              Immediate phone response and rapid on-site troubleshooting for urgent water line breaks and drain backups.
            </p>
          </div>

          {/* Marker 3: LOCAL SERVICE */}
          <div className="bg-[#172027] border border-[#B9C9C6]/15 rounded-2xl p-8 hover:border-[#65C8C4]/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#102330] border border-[#65C8C4]/30 flex items-center justify-center mb-6 text-[#65C8C4]">
              <MapPin className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="font-heading font-bold text-lg lg:text-xl text-white uppercase tracking-wider mb-2">
              LOCAL SERVICE
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E3E0]/70 font-normal leading-relaxed">
              Based right on Live Oak Avenue in Arcadia with immediate familiarity with local municipal water codes and soil conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
