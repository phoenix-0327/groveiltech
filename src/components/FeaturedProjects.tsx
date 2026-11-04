import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import type { Project } from '../types';
import { 
  GroveilMockup,
  AttendHubMockup, 
  IICTrackerMockup, 
  Nutri360Mockup, 
  VisionMockup, 
  DailyTargetMockup, 
  PainSenseMockup 
} from './ProjectMockups';
import { CheckCircle2, ArrowRight, Eye } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onContactWithProject: (projectName: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onContactWithProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'live' | 'web-mobile' | 'ai-iot'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const renderMockup = (mockupType: string) => {
    switch (mockupType) {
      case 'groveil':
        return <GroveilMockup />;
      case 'attendhub':
        return <AttendHubMockup />;
      case 'iic':
        return <IICTrackerMockup />;
      case 'nutri360':
        return <Nutri360Mockup />;
      case 'vision':
        return <VisionMockup />;
      case 'dailytarget':
        return <DailyTargetMockup />;
      case 'painsense':
        return <PainSenseMockup />;
      default:
        return <GroveilMockup />;
    }
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'CONCEPT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#1E110A] text-brand-500 border border-brand-500/40">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            CONCEPT · PHASE 1
          </span>
        );
      case 'LIVE':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#102014] text-[#22C55E] border border-[#22C55E]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse"></span>
            LIVE DEPLOYMENT
          </span>
        );
      case 'PILOT LAUNCH':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#241B08] text-[#FACC15] border border-[#FACC15]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] animate-pulse"></span>
            PILOT LAUNCH
          </span>
        );
      case 'IN DEVELOPMENT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#0C1929] text-[#38BDF8] border border-[#38BDF8]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
            IN ACTIVE DEVELOPMENT
          </span>
        );
      case 'BUILT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#181818] text-[#D4D4D4] border border-[#262626]">
            BUILT & OPERATIONAL
          </span>
        );
      case 'PROTOTYPE':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#1F102A] text-[#C084FC] border border-[#C084FC]/40">
            CLINICAL PROTOTYPE
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            <span>03 // OUR WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
            Technology that moves beyond the screen.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
            Every project starts with a real-world bottleneck. From edge-sensing rovers and high-throughput campus infrastructure to clinical research prototypes, here is what we’ve engineered.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pb-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-brand-500 text-black font-bold shadow-xs'
                : 'bg-[#141414] text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] border border-[#262626]'
            }`}
          >
            All Products ({PROJECTS.length})
          </button>
          <button
            onClick={() => setActiveFilter('live')}
            className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              activeFilter === 'live'
                ? 'bg-brand-500 text-black font-bold shadow-xs'
                : 'bg-[#141414] text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] border border-[#262626]'
            }`}
          >
            Live Deployments & Pilots ({PROJECTS.filter(p => p.category === 'live').length})
          </button>
          <button
            onClick={() => setActiveFilter('web-mobile')}
            className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              activeFilter === 'web-mobile'
                ? 'bg-brand-500 text-black font-bold shadow-xs'
                : 'bg-[#141414] text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] border border-[#262626]'
            }`}
          >
            Web & Mobile ({PROJECTS.filter(p => p.category === 'web-mobile').length})
          </button>
          <button
            onClick={() => setActiveFilter('ai-iot')}
            className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              activeFilter === 'ai-iot'
                ? 'bg-brand-500 text-black font-bold shadow-xs'
                : 'bg-[#141414] text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] border border-[#262626]'
            }`}
          >
            Hardware & Vision AI ({PROJECTS.filter(p => p.category === 'ai-iot').length})
          </button>
        </div>

        {/* Alternating Project Showcase */}
        <div className="mt-10 space-y-16 lg:space-y-24">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#262626] bg-[#121212] hover:border-brand-500/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Status & Highlight Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      {getStatusBadge(project.status)}
                      {project.highlight && (
                        <span className="text-xs font-mono font-medium text-[#FACC15] px-2.5 py-0.5 rounded-full bg-[#241B08] border border-[#FACC15]/40">
                          {project.highlight}
                        </span>
                      )}
                    </div>

                    {/* Project Title & Headline */}
                    <div>
                      <div className="text-xs font-mono text-brand-500 font-bold uppercase tracking-wider mb-1">
                        {project.name.toUpperCase()}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                        {project.title}
                      </h3>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="pt-2 border-t border-[#262626] space-y-2">
                      <div className="text-[11px] font-mono text-[#737373] uppercase tracking-wider">
                        Key Features & Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {project.features.slice(0, 6).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-1.5 text-[#D4D4D4]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Tags & Actions */}
                    <div className="pt-3 border-t border-[#262626] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono text-[#737373] mr-1">Stack:</span>
                        {project.technology.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-[#181818] border border-[#262626] text-[11px] font-mono font-medium text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] hover:bg-[#202020] border border-[#262626] text-xs font-medium text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#A3A3A3]" />
                          <span>Inspect Architecture</span>
                        </button>

                        <button
                          onClick={() => {
                            if (project.id === 'groveil') {
                              onSelectProject(project);
                            } else {
                              onContactWithProject(project.name);
                            }
                          }}
                          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-brand-500 hover:bg-[#FF6B1A] text-xs font-bold text-black transition-colors"
                        >
                          <span>{project.id === 'groveil' ? 'View Groveil' : 'Build Similar'}</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Visual Column: Realistic Illustrative Product Mockup */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="transform transition-transform hover:-translate-y-1 duration-200">
                      {renderMockup(project.mockupType)}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
