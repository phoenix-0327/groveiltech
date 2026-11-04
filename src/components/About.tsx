import React from 'react';
import { Wrench, Users, Rocket, RefreshCw } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Practical Engineering',
      description: 'No unnecessary complexity. Proven frameworks, resilient databases, and fast edge runtimes that deliver reliable operational performance.',
      icon: Wrench,
      highlight: 'Pragmatic & Fast'
    },
    {
      number: '02',
      title: 'User-Focused Development',
      description: 'Building alongside invigilators, coordinators and administrators. We observe real operational friction before writing a single line of code.',
      icon: Users,
      highlight: 'Zero Clutter'
    },
    {
      number: '03',
      title: 'Real-World Deployment',
      description: 'Solutions tested in real operational environments with high concurrency, offline constraints, and tens of thousands of student records.',
      icon: Rocket,
      highlight: 'High Concurrency'
    },
    {
      number: '04',
      title: 'Continuous Improvement',
      description: 'Post-launch refinement, operational monitoring and feedback-driven improvements. We stay with our deployments after go-live.',
      icon: RefreshCw,
      highlight: 'Active Support'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#0A0A0A] border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            <span>01 // ABOUT US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
            Software should solve problems, not create more of them.
          </h2>
        </div>

        {/* Narrative & Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-[#D4D4D4] leading-relaxed">
            <p className="text-lg sm:text-xl text-white font-normal leading-relaxed">
              Colleges, clubs and small businesses still rely on paper registers and scattered spreadsheets. Enterprise software often does not fit their needs.
            </p>
            <p className="font-semibold text-brand-500 text-lg">
              We build software that replaces those manual processes.
            </p>
            <p className="text-[#A3A3A3] text-base">
              We are a software engineering studio in Coimbatore. We design, develop and operate production web applications, mobile tools, and connected hardware.
            </p>
            <p className="text-[#A3A3A3] text-base">
              Our flagship deployments are actively in use across academic institutions and plantations. We build alongside the people who operate the software every day.
            </p>

            {/* Editorial Highlight Quote Box */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-start gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-500 mt-2 flex-shrink-0"></span>
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-brand-500 font-semibold">
                    Guiding Principle
                  </div>
                  <blockquote className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
                    “Built with real users. Designed for real-world problems.”
                  </blockquote>
                  <div className="text-xs text-[#737373] font-mono">
                    Coimbatore, Tamil Nadu · Software Development Studio
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Four Engineering Pillars (01 to 04) */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.number}
                  className="p-6 rounded-2xl border border-[#262626] bg-[#121212] hover:border-brand-500/50 hover:bg-[#161616] transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-brand-500">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-brand-500 px-2 py-0.5 rounded bg-[#1E110A] border border-brand-500/30">
                        {block.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {block.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#A3A3A3]">
                      {block.highlight}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed pl-11">
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
