import React from 'react';
import { CAPABILITIES } from '../data/content';
import { Shield, Database, FileSpreadsheet, BellRing, CreditCard, Layers } from 'lucide-react';

const capabilityIcons = [
  Shield,
  Database,
  FileSpreadsheet,
  BellRing,
  CreditCard,
  Layers,
];

export const Capabilities: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase mb-3">
            04 // WHY WORK WITH US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
            The Groveil Engineering Standard.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
            We avoid unnecessary complexity and vanity metrics. Instead, we engineer rock-solid digital tools with fast scan loops, resilient database schemas and direct staff usability.
          </p>
        </div>

        {/* Clean Editorial Layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {CAPABILITIES.map((item, idx) => {
            const Icon = capabilityIcons[idx] || Shield;
            return (
              <div 
                key={idx}
                className="group flex flex-col justify-between pt-6 border-t border-[#262626] hover:border-brand-500 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#181818] border border-[#262626] flex items-center justify-center text-brand-500 group-hover:bg-[#20120A] group-hover:border-brand-500/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-[#737373] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-brand-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono text-[#737373]">
                  <span>Standard:</span>
                  <span className="font-semibold text-brand-500">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-500 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              The Groveil Delivery Promise
            </div>
            <div className="text-sm sm:text-base font-semibold text-white font-display">
              100% clean source code transfer, database migrations, and operational documentation with zero vendor lock-in.
            </div>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              When we hand over software, your internal team or administrators have full control over credentials, deployments, and source files.
            </p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-[#181818] border border-[#262626] text-xs font-mono text-[#A3A3A3] shrink-0">
            Coimbatore Software Studio
          </div>
        </div>

      </div>
    </section>
  );
};
