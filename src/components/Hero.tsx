import React, { useEffect, useState } from 'react';
import { Phone, ArrowRight, Mail } from 'lucide-react';
import { IMAGES } from '../data/images';

interface HeroProps {
  onRequestService: () => void;
  isLoaded: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onRequestService, isLoaded }) => {
  const [animReady, setAnimReady] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setAnimReady(true), 150);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-[#102330] overflow-hidden pt-28 pb-8 px-6 sm:px-8 lg:px-12">
      {/* Background Image with Slow Settle Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={IMAGES.hero}
          alt="Harrison Brothers plumbing technician working on copper piping in Arcadia home"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center filter saturate-[0.85] contrast-[1.05] transition-all duration-[2200ms] ease-out ${
            animReady ? 'scale-100 opacity-35' : 'scale-110 opacity-20'
          }`}
        />

        {/* Cinematic Scrim & Utility Grid Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102330] via-[#102330]/80 to-[#102330]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102330] via-[#102330]/70 to-transparent" />
        <div className="absolute inset-0 bg-dark-grid opacity-20" />

        {/* Translucent curved sweep graphic (Requirement 6.3) */}
        <div
          className={`absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full border border-[#65C8C4]/20 bg-gradient-to-br from-[#65C8C4]/10 to-transparent pointer-events-none transition-all duration-[2500ms] ease-out ${
            animReady ? 'translate-x-12 translate-y-16 opacity-100' : '-translate-x-32 -translate-y-32 opacity-0'
          }`}
        />
        <div
          className={`absolute top-1/3 -right-24 w-[450px] h-[450px] rounded-full border border-[#B87756]/20 bg-gradient-to-bl from-[#B87756]/5 to-transparent pointer-events-none transition-all duration-[2800ms] ease-out ${
            animReady ? '-translate-x-8 opacity-75' : 'translate-x-32 opacity-0'
          }`}
        />
      </div>

      {/* Main Asymmetrical Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 lg:py-20">
        <div className="max-w-4xl">
          {/* Subtle utility kicker */}
          <div
            className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ease-out delay-150 ${
              animReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#65C8C4] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.16em] uppercase text-[#D7E3E0]/80">
              City Service · Arcadia, California
            </span>
          </div>

          {/* Primary Headline with Individual Staggered Line Reveals (Requirement 6.4) */}
          <h1 className="font-heading font-extrabold text-white tracking-tight leading-[0.94] text-[44px] sm:text-[62px] md:text-[84px] lg:text-[104px] xl:text-[118px] mb-8 select-none">
            <span className="block overflow-hidden">
              <span
                className={`block transform transition-transform duration-700 ease-out delay-200 ${
                  animReady ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                WATER
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className={`block transform transition-transform duration-700 ease-out delay-350 text-[#65C8C4] ${
                  animReady ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                WHERE IT
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className={`block transform transition-transform duration-700 ease-out delay-500 ${
                  animReady ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                SHOULD BE.
              </span>
            </span>
          </h1>

          {/* Small Supporting Text */}
          <p
            className={`text-base sm:text-lg lg:text-xl text-[#D7E3E0] max-w-xl font-normal leading-relaxed mb-10 transition-all duration-700 ease-out delay-700 ${
              animReady ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Reliable plumbing for homes and businesses in Arcadia.
          </p>

          {/* CTA Buttons (Requirement 6.5) */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 transition-all duration-700 ease-out delay-[850ms] ${
              animReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="tel:6269000520"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-[0.14em] bg-[#65C8C4] text-[#102330] hover:bg-white hover:text-[#102330] transition-all duration-200 shadow-lg shadow-[#65C8C4]/20 active:scale-95"
            >
              <Phone className="w-4 h-4 stroke-[2.2]" />
              <span>CALL HARRISON BROTHERS</span>
            </a>

            <button
              type="button"
              onClick={onRequestService}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-heading font-semibold uppercase tracking-[0.14em] bg-transparent text-white border border-[#B9C9C6]/40 hover:border-[#65C8C4] hover:text-[#65C8C4] transition-all duration-200 active:scale-95"
            >
              <span>REQUEST SERVICE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="mailto:dispatch@harrisonplumbingarcadia.com"
              className="group inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-xs sm:text-sm font-heading font-semibold uppercase tracking-[0.14em] bg-white/5 text-[#D7E3E0] border border-[#B9C9C6]/25 hover:border-[#65C8C4] hover:text-[#65C8C4] transition-all duration-200 active:scale-95"
              title="Email dispatch team"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL US</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slim Information Rail Near Bottom (Requirement 5 & 6.6) */}
      <div
        className={`relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[#B9C9C6]/20 transition-all duration-1000 ease-out delay-[1000ms] ${
          animReady ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-xs font-mono tracking-[0.18em] text-[#D7E3E0]/70 uppercase">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#65C8C4]" />
            <span className="text-[#FFFFFF]">ARC A D I A / CA</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B87756]" />
            <span>24 / 7 SERVICE</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#65C8C4]" />
            <span>HOMES + BUSINESSES</span>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[#65C8C4]">
            <span>TEL (626) 900-0520</span>
          </div>
        </div>
      </div>

      {/* Aqua line travels beneath the hero (Requirement 6.7) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#102330] overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-transparent via-[#65C8C4] to-transparent transition-all duration-[2000ms] ease-in-out delay-700 ${
            animReady ? 'w-full translate-x-0' : 'w-0 -translate-x-full'
          }`}
        />
      </div>
    </section>
  );
};
