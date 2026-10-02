import React from 'react';
import { IMAGES } from '../data/images';

export const BackgroundImageSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#102330] overflow-hidden py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      {/* Background Image with Fixed/Subtle Parallax Feel */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={IMAGES.pipeBackground}
          alt="Technical plumbing pipe routing and pressure systems"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter saturate-[0.7] contrast-[1.1] opacity-30 transform scale-105"
        />

        {/* Dark Translucent Overlay */}
        <div className="absolute inset-0 bg-[#102330]/85" />

        {/* Faint Technical Pipe-Routing Graphics */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#65C8C4" strokeWidth="1" strokeDasharray="4 8">
            <line x1="10%" y1="0%" x2="10%" y2="100%" />
            <line x1="90%" y1="0%" x2="90%" y2="100%" />
            <path d="M 100,200 L 400,200 L 400,600 L 900,600 L 900,300 L 1400,300" />
            <path d="M 300,100 L 300,500 L 700,500 L 700,800" />
          </g>
          {/* Pressure junction nodes */}
          <circle cx="400" cy="200" r="4" fill="#65C8C4" />
          <circle cx="400" cy="600" r="4" fill="#B87756" />
          <circle cx="900" cy="600" r="4" fill="#65C8C4" />
          <circle cx="900" cy="300" r="4" fill="#65C8C4" />
        </svg>

        {/* Flowing Aqua Line Pattern */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#65C8C4]/40 to-transparent transform -rotate-1" />
      </div>

      {/* Dominant Text Composition */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Subtle kicker */}
        <div className="inline-flex items-center justify-center gap-2 mb-8">
          <span className="w-8 h-[1px] bg-[#65C8C4]" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#65C8C4]">
            Infrastructure & Flow
          </span>
          <span className="w-8 h-[1px] bg-[#65C8C4]" />
        </div>

        {/* Large Statement */}
        <h2 className="font-heading font-extrabold text-white tracking-tight leading-[1.02] text-[34px] sm:text-[48px] md:text-[62px] lg:text-[76px] xl:text-[84px] uppercase mb-8">
          Plumbing<br />
          is the system<br />
          you don't think about<br />
          <span className="text-[#65C8C4]">until it stops.</span>
        </h2>

        {/* Small Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-[#D7E3E0]/90 font-normal leading-relaxed">
          Repairs, replacements, water lines, drains and hot water systems — handled with practical local expertise.
        </p>

        {/* Copper Technical Accent Detail */}
        <div className="mt-12 flex items-center justify-center gap-4 text-[11px] font-mono tracking-[0.16em] uppercase text-[#B9C9C6]/60">
          <span>SPEC · WATER / GAS / DRAINAGE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B87756]" />
          <span>CITY OF ARCADIA COMPLIANT</span>
        </div>
      </div>
    </section>
  );
};
