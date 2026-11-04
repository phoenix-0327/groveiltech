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
    <section id="process" className="py-20 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase mb-3">
            05 // OUR PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
            Five stages. One dependable outcome.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
            A staged, transparent delivery workflow. We build alongside real users so you can test a functioning core demo before committing to full deployment.
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
                  className="p-6 rounded-2xl bg-[#121212] border border-[#262626] hover:border-brand-500/50 hover:bg-[#161616] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-brand-500 px-2.5 py-0.5 rounded-full bg-[#1E110A] border border-brand-500/30">
                        {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-[#A3A3A3] group-hover:text-brand-500 group-hover:bg-[#20120A] group-hover:border-brand-500/30 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-brand-500 transition-colors">
                      {step.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#A3A3A3] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Pill */}
                  <div className="pt-3 border-t border-[#262626]">
                    <div className="text-[10px] font-mono text-[#737373] uppercase mb-1">
                      Deliverable
                    </div>
                    <div className="text-[11px] font-medium text-brand-500 font-mono">
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Staged Delivery Note */}
        <div className="mt-12 text-center text-xs font-mono text-[#737373]">
          Target delivery timeline: Working core demonstration ready within 14–21 business days.
        </div>

      </div>
    </section>
  );
};
