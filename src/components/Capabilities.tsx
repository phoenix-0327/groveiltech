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
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-3">
            04 // WHY WORK WITH US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-display leading-tight">
            Small team. Serious engineering.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-textMuted max-w-2xl">
            We avoid unnecessary overhead and vanity metrics. Instead, we focus on rock-solid fundamentals that keep software fast, reliable and maintainable.
          </p>
        </div>

        {/* Clean Editorial Layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {CAPABILITIES.map((item, idx) => {
            const Icon = capabilityIcons[idx] || Shield;
            return (
              <div 
                key={idx}
                className="group flex flex-col justify-between pt-6 border-t border-[#EAEAEA] hover:border-brand-600 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-[#EAEAEA] flex items-center justify-center text-brand-700 group-hover:bg-brand-50 group-hover:border-brand-200 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-surface-textMuted uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#171717] font-display mb-2 group-hover:text-brand-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F0F0F0] flex items-center justify-between text-xs font-mono text-surface-textMuted">
                  <span>Standard:</span>
                  <span className="font-semibold text-brand-800">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-16 p-6 rounded-xl bg-surface-secondary border border-[#EAEAEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-700 font-semibold">
              The Groveil Development Standard
            </div>
            <div className="text-sm font-medium text-[#171717]">
              Every project comes with clean source code ownership, structured database schemas, and complete documentation.
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-md bg-white border border-[#EAEAEA] text-xs font-mono text-surface-textMuted">
            Coimbatore Software Studio
          </div>
        </div>

      </div>
    </section>
  );
};
