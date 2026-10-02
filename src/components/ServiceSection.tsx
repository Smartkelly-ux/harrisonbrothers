import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  detail: string;
  specs: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'drain-rooter',
    number: '01',
    name: 'DRAIN & ROOTER',
    description: 'Hydro-jetting, motorized augers, and clear line restoration for stubborn blockages.',
    detail: 'Complete clearing of kitchen lines, bathroom main drains, and exterior cleanouts without damaging older pipe walls.',
    specs: ['Hydro-Jetting', 'Root Intrusion Clearing', 'Cleanout Installation'],
  },
  {
    id: 'leak-detection',
    number: '02',
    name: 'LEAK DETECTION',
    description: 'Non-destructive acoustic listening and thermal scanning for concealed leaks.',
    detail: 'Pinpointing pressurized water loss beneath slabs, within drywall, or underneath finished flooring with pinpoint accuracy.',
    specs: ['Under-Slab Acoustic', 'Thermal Line Tracing', 'Pressure Decay Testing'],
  },
  {
    id: 'sewer-pipe-repair',
    number: '03',
    name: 'SEWER & PIPE REPAIR',
    description: 'HD camera line diagnostics, trenchless solutions, and full pipe replacements.',
    detail: 'High-definition video pipe scoping to identify collapses, bellies, or joint failures with durable repair strategies.',
    specs: ['In-Line Video Scoping', 'Trenchless Pipe Relining', 'Spot Sectional Repair'],
  },
  {
    id: 'water-heaters',
    number: '04',
    name: 'WATER HEATERS',
    description: 'Tankless on-demand upgrades, traditional tank replacements, and thermostat servicing.',
    detail: 'Sizing and installing energy-efficient gas or electric water heating calibrated for Arcadia water pressure and hardness.',
    specs: ['Tankless Upgrades', 'Expansion Tank Installs', 'Anode Rod Servicing'],
  },
  {
    id: 'water-lines',
    number: '05',
    name: 'WATER LINES',
    description: 'PEX re-piping, copper supply replacements, and noisy hammer arrestor fixes.',
    detail: 'Replacing brittle galvanized pipes with Type-L copper or cross-linked polyethylene for clean, balanced home flow.',
    specs: ['Whole-Home Copper Re-Pipe', 'Pressure Regulators (PRV)', 'Shutoff Valve Modernization'],
  },
  {
    id: 'water-main-service',
    number: '06',
    name: 'WATER MAIN SERVICE',
    description: 'Street-to-house supply line replacements, meter connections, and valve upgrades.',
    detail: 'Restoring primary municipal incoming water pressure and addressing yard breaks with minimal landscape disturbance.',
    specs: ['Trenchless Pulling', 'Meter Pit Isolation', 'City Code Compliance'],
  },
  {
    id: 'emergency-plumbing',
    number: '07',
    name: 'EMERGENCY PLUMBING',
    description: 'Rapid dispatch for burst pipes, uncontrolled overflows, and total service outages.',
    detail: 'Immediate phone triage and priority truck rollout across Arcadia to protect your property from catastrophic water damage.',
    specs: ['Rapid Dispatch Truck', 'Full Water Isolation', 'Post-Repair Verification'],
  },
];

interface ServiceSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [expandedMobile, setExpandedMobile] = useState<string | null>('drain-rooter');

  const toggleMobile = (id: string) => {
    setExpandedMobile(expandedMobile === id ? null : id);
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F8FAF8] text-[#172027] px-6 sm:px-8 lg:px-12 border-t border-[#B9C9C6]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B9C9C6]/40">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#65C8C4]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#102330]/70">
                Core Capabilities · Arcadia, CA
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[#102330] tracking-tight text-[36px] sm:text-[48px] md:text-[58px] lg:text-[72px] leading-[0.98] uppercase">
              When Water<br />
              <span className="text-[#65C8C4]">Misbehaves.</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 max-w-sm text-sm sm:text-base text-[#172027]/70 font-normal leading-relaxed">
            Every service is handled with precision diagnosis, honest recommendations, and zero guesswork.
          </p>
        </div>

        {/* Clean Vertical Service System (Desktop & Tablet) */}
        <div className="hidden md:flex flex-col divide-y divide-[#B9C9C6]/40">
          {SERVICES.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onClick={() => onSelectService(item.name)}
                className={`group relative py-8 px-6 transition-all duration-300 cursor-pointer rounded-2xl ${
                  isHovered
                    ? 'bg-[#E9F0EE] shadow-sm transform translate-x-2'
                    : 'bg-transparent hover:bg-[#E9F0EE]/50'
                }`}
              >
                {/* Thin Animated Aqua Line on Hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#65C8C4] rounded-r-full transition-all duration-300 ${
                    isHovered ? 'opacity-100 h-full' : 'opacity-0 h-0'
                  }`}
                />

                <div className="flex items-center justify-between">
                  {/* Left: Number & Service Title */}
                  <div className="flex items-center gap-8 lg:gap-14">
                    <span
                      className={`font-mono text-base lg:text-lg font-bold transition-all duration-300 ${
                        isHovered
                          ? 'text-[#65C8C4] translate-x-2'
                          : 'text-[#102330]/40'
                      }`}
                    >
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-heading text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-[#102330] group-hover:text-[#102330]">
                        {item.name}
                      </h3>
                      <p className="text-sm lg:text-base text-[#172027]/70 mt-1 max-w-xl font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Technical Spec Tags & Arrow Reveal */}
                  <div className="flex items-center gap-6">
                    <div
                      className={`hidden lg:flex items-center gap-2 text-xs font-mono text-[#102330]/60 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <span>{item.specs.join(' · ')}</span>
                    </div>

                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#102330] text-white border-[#102330] scale-105'
                          : 'border-[#B9C9C6]/60 text-[#102330]/40'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>
                </div>

                {/* Sub-panel on active row hover */}
                {isHovered && (
                  <div className="mt-4 pt-4 border-t border-[#B9C9C6]/20 flex items-center justify-between text-xs text-[#102330]/80">
                    <span className="font-mono">{item.detail}</span>
                    <span className="font-heading font-semibold text-[#102330] underline hover:text-[#65C8C4] ml-4 whitespace-nowrap">
                      Schedule Service &rarr;
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: Touch-friendly stacked accordions */}
        <div className="md:hidden flex flex-col space-y-3">
          {SERVICES.map((item) => {
            const isExpanded = expandedMobile === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-[#B9C9C6]/50 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleMobile(item.id)}
                  className="w-full py-5 px-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#65C8C4]">
                      {item.number}
                    </span>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-[#102330]">
                      {item.name}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#102330]/60 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#65C8C4]' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#E9F0EE] bg-[#F8FAF8]">
                    <p className="text-sm text-[#172027]/80 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <p className="text-xs text-[#172027]/60 font-mono mb-4">
                      {item.detail}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-[#102330]/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#65C8C4]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectService(item.name)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-heading font-bold uppercase tracking-wider bg-[#102330] text-white hover:bg-[#65C8C4] hover:text-[#102330] transition-colors"
                    >
                      REQUEST {item.name}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
