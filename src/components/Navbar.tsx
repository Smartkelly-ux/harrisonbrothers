import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Mail, X } from 'lucide-react';

interface NavbarProps {
  onRequestService: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen]);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#102330]/95 backdrop-blur-md py-4 border-b border-[#65C8C4]/20 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark (Single text element in display face) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 text-lg md:text-xl font-bold tracking-tight text-white hover:text-[#65C8C4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65C8C4]"
          >
            <span className="font-heading font-extrabold uppercase tracking-wide">
              Harrison Brothers
            </span>
          </a>

          {/* Desktop Navigation Links (Visible on desktop lg: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-sm font-medium tracking-wide text-[#E9F0EE]/80">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#services');
              }}
              className="hover:text-[#65C8C4] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#65C8C4] hover:after:w-full after:transition-all"
            >
              SERVICES
            </a>
            <a
              href="#why-us"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#why-us');
              }}
              className="hover:text-[#65C8C4] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#65C8C4] hover:after:w-full after:transition-all"
            >
              WHY US
            </a>
            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#process');
              }}
              className="hover:text-[#65C8C4] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#65C8C4] hover:after:w-full after:transition-all"
            >
              PROCESS
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hover:text-[#65C8C4] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#65C8C4] hover:after:w-full after:transition-all"
            >
              CONTACT
            </a>
          </nav>

          {/* Desktop Action CTAs (Call Now & Email Us) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:dispatch@harrisonplumbingarcadia.com"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] bg-transparent text-white border border-[#B9C9C6]/30 hover:border-[#65C8C4] hover:text-[#65C8C4] transition-all duration-200 active:scale-95"
              title="Email Harrison Brothers Plumbing"
            >
              <Mail className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>EMAIL US</span>
            </a>

            <a
              href="tel:6269000520"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] bg-[#65C8C4] text-[#102330] hover:bg-white hover:text-[#102330] transition-all duration-200 shadow-md shadow-[#65C8C4]/15 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Redesigned Minimalist Hamburger Toggle (Mobile & Tablet: < 1024px) */}
          <button
            type="button"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
            className="lg:hidden group relative z-50 flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:border-[#65C8C4]/60 hover:bg-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#65C8C4]"
          >
            <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/90 group-hover:text-[#65C8C4] transition-colors">
              {drawerOpen ? 'CLOSE' : 'MENU'}
            </span>

            {/* Kinetic 2-line modern geometric icon */}
            <div className="w-4 h-3.5 flex flex-col justify-between items-center relative">
              <span
                className={`w-4 h-[1.5px] bg-current rounded-full transition-transform duration-300 ease-out origin-center ${
                  drawerOpen ? 'translate-y-[6px] rotate-45 bg-[#65C8C4]' : 'bg-white'
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-current rounded-full transition-transform duration-300 ease-out origin-center ${
                  drawerOpen ? '-translate-y-[6px] -rotate-45 bg-[#65C8C4]' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Slide-In Navigation Drawer for Mobile & Tablet */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-400 ease-out ${
          drawerOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
        aria-hidden={!drawerOpen}
      >
        {/* Dimmed backdrop scrim - click to close */}
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-[#102330]/70 backdrop-blur-sm transition-opacity duration-400 ease-out ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Slide-in drawer container */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[86vw] sm:w-[400px] max-w-md bg-[#102330] border-l border-[#65C8C4]/25 shadow-2xl flex flex-col justify-between p-6 sm:p-8 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Subtle grid pattern inside drawer */}
          <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

          {/* Drawer Top Row: Brand & Close */}
          <div className="relative z-10 flex items-center justify-between pb-6 border-b border-[#B9C9C6]/15">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#65C8C4] uppercase block">
                ARCADIA, CALIFORNIA
              </span>
              <span className="font-heading font-extrabold text-base text-white uppercase tracking-tight">
                Harrison Brothers
              </span>
            </div>

            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close drawer"
              className="p-2 rounded-full text-[#D7E3E0]/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="relative z-10 py-8 flex flex-col space-y-4">
            {[
              { label: 'SERVICES', href: '#services', num: '01' },
              { label: 'WHY US', href: '#why-us', num: '02' },
              { label: 'PROCESS', href: '#process', num: '03' },
              { label: 'CONTACT', href: '#contact', num: '04' },
            ].map((item) => (
              <a
                key={item.num}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="group flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/5 transition-colors border-b border-[#B9C9C6]/10"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#65C8C4] font-bold">
                    {item.num}
                  </span>
                  <span className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-[#65C8C4] transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#D7E3E0]/40 group-hover:text-[#65C8C4] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </nav>

          {/* Drawer Actions & Footer */}
          <div className="relative z-10 space-y-3 pt-6 border-t border-[#B9C9C6]/15">
            {/* Call Now and Email Us buttons */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:6269000520"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-[#65C8C4] text-[#102330] hover:bg-white transition-all shadow-md active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL NOW</span>
              </a>

              <a
                href="mailto:dispatch@harrisonplumbingarcadia.com"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-white/10 text-white hover:bg-white/15 border border-white/20 transition-all active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL US</span>
              </a>
            </div>

            {/* Request Service button */}
            <button
              type="button"
              onClick={() => {
                setDrawerOpen(false);
                onRequestService();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-heading font-semibold text-xs uppercase tracking-wider bg-transparent text-white border border-[#B9C9C6]/30 hover:border-[#65C8C4] hover:text-[#65C8C4] transition-all"
            >
              REQUEST SERVICE
            </button>

            {/* Minimal footer metadata */}
            <div className="pt-3 text-center">
              <p className="text-[11px] font-mono text-[#D7E3E0]/50 tracking-wider">
                68 W Live Oak Ave, Arcadia, CA 91007
              </p>
              <p className="text-[10px] font-mono text-[#65C8C4]/70 tracking-widest uppercase mt-0.5">
                24 / 7 Emergency Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
