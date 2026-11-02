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
  return (
    <section id="services" className="py-20 md:py-28 bg-surface-secondary border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-3">
            02 // WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-display leading-tight">
            Technology built around your workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-textMuted max-w-2xl">
            We don't offer generic templates or throwaway code. We build custom, dependable software engineered precisely for how your team operates.
          </p>
        </div>

        {/* 4 Clean Service Blocks in a 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || LayoutGrid;
            return (
              <div
                key={service.number}
                className="p-8 rounded-xl bg-white border border-[#EAEAEA] hover:border-brand-200 transition-all duration-200 hover:shadow-subtle flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-surface-secondary text-surface-textMuted border border-[#EAEAEA]">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100/70 text-brand-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] font-display mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-surface-textMuted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-[#F0F0F0] space-y-2.5">
                    <div className="text-[11px] font-mono text-surface-textMuted uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#333333]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs text-brand-700 font-medium">
                  <span>Custom implementation</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Strip */}
        <div className="mt-16 pt-10 border-t border-[#EAEAEA]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-surface-textMuted block">
                Engineered With Modern Stack
              </span>
              <span className="text-sm font-medium text-[#171717]">
                Production tools powering our deployed applications
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="px-3.5 py-2 rounded-lg bg-white border border-[#EAEAEA] text-xs font-mono text-[#333333] hover:border-brand-200 transition-colors flex items-center gap-2 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  <span className="font-semibold text-[#171717]">{tech.name}</span>
                  <span className="text-surface-textMuted text-[10px]">({tech.role})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
