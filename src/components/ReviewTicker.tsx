import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle, Quote } from 'lucide-react';

interface ReviewItem {
  id: string;
  theme: string;
  author: string;
  area: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    theme: 'FAST RESPONSE',
    author: 'David M.',
    area: 'Arcadia Highlands',
    service: 'Main Water Line Isolation & Repair',
    rating: 5,
    date: 'March 2026',
    quote: 'Arrived within forty minutes of our emergency call on a Sunday morning and stopped our pressurized main line leak immediately. Handled everything with calm precision.',
  },
  {
    id: 'rev-2',
    theme: 'CLEAR EXPLANATIONS',
    author: 'Elena R.',
    area: 'Santa Anita Park Area',
    service: 'In-Line HD Camera Inspection',
    rating: 5,
    date: 'February 2026',
    quote: 'Showed me the high-definition video feed of the root blockage under our driveway and explained every repair option plainly without trying to upsell unneeded work.',
  },
  {
    id: 'rev-3',
    theme: 'CLEAN WORK',
    author: 'Marcus T.',
    area: 'Rancho Santa Anita',
    service: 'Tankless Water Heater Installation',
    rating: 5,
    date: 'March 2026',
    quote: 'Tidied up the mechanical closet completely after replacing our water heater. Flawless copper brazing, zero mess left behind, and haul-away was effortless.',
  },
  {
    id: 'rev-4',
    theme: 'DRAIN & PIPE EXPERTISE',
    author: 'Patricia K.',
    area: 'Downtown Arcadia',
    service: 'Hydro-Jet Sewer Clearing',
    rating: 5,
    date: 'January 2026',
    quote: 'Cleared a recurring sewer backup that two previous rooter companies failed to resolve. Their motorized equipment and nozzle selection made all the difference.',
  },
  {
    id: 'rev-5',
    theme: 'HELPFUL SERVICE',
    author: 'Brian S.',
    area: 'Arcadia Foothills',
    service: 'Whole-Home Pressure Regulator Valve',
    rating: 5,
    date: 'March 2026',
    quote: 'Honest assessment of our aging copper lines and city pressure spikes. Installed a heavy-duty regulator that balanced our fixtures perfectly.',
  },
  {
    id: 'rev-6',
    theme: 'EMERGENCY REPAIR',
    author: 'Claire L.',
    area: 'Baldwin Stocker District',
    service: 'Under-Slab Acoustic Leak Detection',
    rating: 5,
    date: 'February 2026',
    quote: 'Pinpointed the hot water slab leak in less than 30 minutes without jackhammering half the house. Saved us thousands in floor repairs.',
  },
];

export const ReviewTicker: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Manual scroll handler
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Continuous auto-glide movement when not hovered
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.75; // pixels per frame

    const step = () => {
      if (!isHovered && container) {
        container.scrollLeft += speed;
        // Seamless loop reset
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#65C8C4]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#B9C9C6]/30">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#65C8C4]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#102330]/70 font-semibold">
                Customer Verification · Arcadia, CA
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[#102330] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1]">
              Verified Feedback <span className="text-[#65C8C4]">In Motion.</span>
            </h2>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous review"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#B9C9C6]/60 text-[#102330] hover:bg-[#102330] hover:text-white hover:border-[#102330] transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next review"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#B9C9C6]/60 text-[#102330] hover:bg-[#102330] hover:text-white hover:border-[#102330] transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Moving Row Carousel Track */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft edge gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable container with duplicated items for infinite continuous motion */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden no-scrollbar px-6 sm:px-12 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-[340px] sm:w-[400px] md:w-[420px] p-7 rounded-3xl bg-[#F8FAF8] border border-[#65C8C4]/40 hover:border-[#65C8C4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row with Theme and 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.16em] font-bold text-[#65C8C4] bg-[#E9F0EE] px-2.5 py-1 rounded-md">
                    {item.theme}
                  </span>

                  <div className="flex items-center gap-1 text-[#65C8C4]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#65C8C4]" />
                    ))}
                  </div>
                </div>

                {/* Quote with subtle quote icon */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-[#65C8C4]/20 absolute -top-2 -left-1 pointer-events-none" />
                  <p className="text-sm sm:text-base text-[#102330] font-normal leading-relaxed pl-5">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-[#B9C9C6]/30 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-heading font-bold text-sm text-[#102330]">
                      {item.author}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-[#65C8C4]" />
                  </div>
                  <span className="text-xs font-mono text-[#102330]/60">
                    {item.area}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-[#102330]/50 block">
                    {item.date}
                  </span>
                  <span className="text-[11px] font-mono text-[#B87756] uppercase">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
