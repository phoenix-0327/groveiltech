import React from 'react';
import { Wrench, Users, Rocket, RefreshCw } from 'lucide-react';

export const About: React.FC = () => {
  const featureBlocks = [
    {
      title: 'Practical Engineering',
      description: 'We avoid over-engineering. We pick proven frameworks, resilient database architectures, and fast edge runtimes that deliver reliable performance.',
      icon: Wrench,
      highlight: 'Pragmatic & Fast'
    },
    {
      title: 'User-Focused Development',
      description: 'We sit right next to the people who use our apps — hall invigilators, college coordinators, and administrators — to make interfaces frictionless.',
      icon: Users,
      highlight: 'Zero Clutter'
    },
    {
      title: 'Real-World Deployment',
      description: 'Our software is battle-tested in active campus environments with high concurrency, offline requirements, and tens of thousands of student records.',
      icon: Rocket,
      highlight: 'High Concurrency'
    },
    {
      title: 'Continuous Improvement',
      description: 'Software is never finished on day one. We stay with our deployments, gather real operational telemetry, and push rapid updates after launch.',
      icon: RefreshCw,
      highlight: 'Active Support'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-3">
            01 // ABOUT US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-display leading-tight">
            Software should solve problems, not create more of them.
          </h2>
        </div>

        {/* Narrative & Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-lg text-[#333333] leading-relaxed">
            <p>
              Colleges, clubs and small businesses still rely on paper registers and scattered spreadsheets. Enterprise software often does not fit their needs.
            </p>
            <p className="font-medium text-[#171717]">
              We build software that replaces those manual processes.
            </p>
            <p className="text-surface-textMuted text-base">
              We are a student-founded team in Coimbatore. We design, develop and run web applications, mobile applications and dashboards.
            </p>
            <p className="text-surface-textMuted text-base">
              Our first products are already in use. We build alongside the people who use them and continuously improve our solutions after launch.
            </p>

            {/* Editorial Highlight Quote Box */}
            <div className="mt-8 p-6 rounded-xl bg-brand-50 border border-brand-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-600 mt-2 flex-shrink-0"></span>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-semibold mb-1">
                    Guiding Principle
                  </div>
                  <blockquote className="text-xl sm:text-2xl font-bold font-display text-brand-900 leading-snug">
                    “Built with real users. Designed for real-world problems.”
                  </blockquote>
                  <div className="mt-2 text-xs text-brand-800/80 font-mono">
                    Coimbatore, Tamil Nadu · Student Software Initiative
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Four Minimal Feature Blocks (2x2 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {featureBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-[#EAEAEA] bg-surface-secondary/60 hover:bg-white hover:border-brand-200 hover:shadow-subtle transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#EAEAEA] text-brand-700 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white border border-[#EAEAEA] text-surface-textMuted">
                      {block.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#171717] font-display mb-1.5">
                    {block.title}
                  </h3>
                  <p className="text-xs text-surface-textMuted leading-relaxed">
                    {block.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
