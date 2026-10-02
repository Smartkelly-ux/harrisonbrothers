import React, { useState } from 'react';
import { Phone, MapPin, ArrowUp, Mail } from 'lucide-react';

interface FooterProps {
  onReplayPreloader: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayPreloader }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#102330] text-white pt-24 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-[#65C8C4]/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Animated Background Grid (Requirement 17) */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />

      {/* Giant Aqua Circular Line Behind Wordmark that slowly changes position on hover (Requirement 17) */}
      <div
        className="absolute top-12 left-1/4 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full border border-[#65C8C4]/35 pointer-events-none transition-all duration-[1200ms] ease-out"
        style={{
          transform: isHovered
            ? 'translate(-10%, -5%) scale(1.08)'
            : 'translate(0%, 0%) scale(1)',
          boxShadow: isHovered
            ? '0 0 50px rgba(101,200,196,0.15)'
            : '0 0 20px rgba(101,200,196,0.05)',
        }}
      />
      <div
        className="absolute top-20 left-1/4 w-[380px] sm:w-[560px] h-[380px] sm:h-[560px] rounded-full border border-[#B87756]/20 pointer-events-none transition-all duration-[1600ms] ease-out"
        style={{
          transform: isHovered
            ? 'translate(-6%, -2%) scale(0.95)'
            : 'translate(0%, 0%) scale(1)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Split Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#B9C9C6]/20">
          {/* Wordmark Column */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#65C8C4] uppercase block mb-6">
              WATERLINE / CITY SERVICE
            </span>

            {/* Large Typography: HARRISON BROTHERS, then smaller PLUMBING */}
            <div className="relative">
              <h2 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] uppercase text-white">
                HARRISON<br />
                BROTHERS
              </h2>
              <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-[0.22em] text-[#65C8C4] uppercase block mt-2">
                PLUMBING
              </span>
            </div>

            <p className="mt-8 text-sm sm:text-base text-[#D7E3E0]/70 max-w-md font-normal leading-relaxed">
              Precision plumbing for Arcadia homes and commercial facilities. Responsive diagnosis, clean workmanship, and durable repairs.
            </p>
          </div>

          {/* Navigation & Contact Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            {/* Footer Navigation */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#B9C9C6]/60 block mb-4">
                NAVIGATION
              </span>
              <nav className="flex flex-wrap gap-8 text-sm font-semibold tracking-wider uppercase text-white font-heading">
                <a
                  href="#services"
                  className="hover:text-[#65C8C4] transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="#why-us"
                  className="hover:text-[#65C8C4] transition-colors"
                >
                  ABOUT
                </a>
                <a
                  href="#contact"
                  className="hover:text-[#65C8C4] transition-colors"
                >
                  CONTACT
                </a>
              </nav>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#B9C9C6]/60 block">
                ARCADIA DISPATCH
              </span>

              <a
                href="tel:6269000520"
                className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-heading font-bold text-[#65C8C4] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 stroke-[2.2]" />
                <span className="tabular-nums font-mono">(626) 900-0520</span>
              </a>

              <div>
                <a
                  href="mailto:dispatch@harrisonplumbingarcadia.com"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#65C8C4] hover:text-[#102330] text-[#D7E3E0] text-xs font-mono uppercase tracking-wider transition-colors border border-white/10"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL DISPATCH DESK</span>
                </a>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#D7E3E0]/80 pt-1">
                <MapPin className="w-4 h-4 text-[#B87756] mt-1 shrink-0" />
                <p>
                  68 W Live Oak Ave<br />
                  Arcadia, CA 91007
                </p>
              </div>
            </div>

            {/* Back to Top & Preloader Replay Controls */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D7E3E0]/70 hover:text-[#65C8C4] transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Return to Top</span>
              </button>

              <span className="text-[#B9C9C6]/30">|</span>

              <button
                type="button"
                onClick={onReplayPreloader}
                className="text-xs font-mono uppercase tracking-wider text-[#65C8C4] hover:underline"
              >
                Replay "Waterline"
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7E3E0]/60">
          <p>© 2026 Harrison Brothers Plumbing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Arcadia, California</span>
            <span>·</span>
            <span>Licensed C-36 Contractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
