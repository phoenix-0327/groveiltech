import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Compass, FileCode2, Terminal, CloudUpload, Sparkles } from 'lucide-react';

const stepIcons = [
  Compass,
  FileCode2,
  Terminal,
  CloudUpload,
  Sparkles,
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-surface-secondary border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-3">
            05 // OUR PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-display leading-tight">
            From the first conversation to launch.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-textMuted max-w-2xl">
            A staged, transparent delivery workflow that ensures you always test a working prototype early before full deployment.
          </p>
        </div>

        {/* Minimal Horizontal Timeline */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Compass;
              return (
                <div
                  key={step.number}
                  className="p-6 rounded-xl bg-white border border-[#EAEAEA] hover:border-brand-200 hover:shadow-subtle transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-brand-700 px-2 py-0.5 rounded bg-brand-50 border border-brand-100">
                        {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-[#EAEAEA] flex items-center justify-center text-surface-textMuted group-hover:text-brand-700 group-hover:bg-brand-50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-[#171717] font-display mb-2">
                      {step.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#555555] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Pill */}
                  <div className="pt-3 border-t border-[#F0F0F0]">
                    <div className="text-[10px] font-mono text-surface-textMuted uppercase mb-1">
                      Deliverable
                    </div>
                    <div className="text-[11px] font-medium text-[#171717]">
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Staged Delivery Note */}
        <div className="mt-12 text-center text-xs font-mono text-surface-textMuted">
          Average turnaround: Working core demonstration ready within 14–21 business days.
        </div>

      </div>
    </section>
  );
};
