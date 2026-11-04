import React from 'react';
import { SERVICES, TECH_STACK } from '../data/content';
import { LayoutGrid, Smartphone, Cpu, BarChart3, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  LayoutGrid,
  Smartphone,
  Cpu,
  BarChart3,
};

export const Services: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <section id="services" className="py-20 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            <span>02 // WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
            Engineering practical digital solutions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
            We don't offer generic templates or throwaway code. We engineer bespoke, dependable software precisely tailored to your day-to-day operations.
          </p>
        </div>

        {/* 4 Clean Service Blocks in a 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || LayoutGrid;
            return (
              <div
                key={service.number}
                className="p-8 sm:p-10 rounded-2xl bg-[#121212] border border-[#262626] hover:border-brand-500/50 hover:bg-[#161616] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#181818] text-brand-500 border border-[#262626]">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#181818] border border-[#262626] text-brand-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="pt-5 border-t border-[#262626] space-y-3">
                    <div className="text-[11px] font-mono text-[#737373] uppercase tracking-wider font-semibold">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4D4D4]">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-brand-500 font-semibold">
                  <span>Custom engineering standard</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Horizontally Moving Technology Ribbon (Full-width infinite marquee) */}
      <div className="mt-20 pt-10 border-t border-[#262626] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Production Technology Stack
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#737373] hidden sm:inline">
            Battle-tested tools powering our deployed solutions
          </span>
        </div>

        {/* Marquee Track */}
        <div className="relative w-full overflow-hidden py-3.5 bg-[#0D0D0D] border-y border-[#262626]">
          <div className="marquee-track animate-marquee flex items-center gap-4">
            {marqueeTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="px-4 py-2.5 rounded-xl bg-[#141414] border border-[#262626] text-xs font-mono text-white shadow-xs flex items-center gap-2.5 flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                <span className="font-bold text-white">{tech.name}</span>
                <span className="text-[#737373] text-[10px]">({tech.role})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
