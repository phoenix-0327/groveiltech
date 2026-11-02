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
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            CONCEPT · PHASE 1
          </span>
        );
      case 'LIVE':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            LIVE DEPLOYMENT
          </span>
        );
      case 'PILOT LAUNCH':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
            PILOT LAUNCH
          </span>
        );
      case 'IN DEVELOPMENT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            IN ACTIVE DEVELOPMENT
          </span>
        );
      case 'BUILT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-surface-secondary text-[#333] border border-[#EAEAEA]">
            BUILT & OPERATIONAL
          </span>
        );
      case 'PROTOTYPE':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200">
            CLINICAL PROTOTYPE
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-3">
            03 // OUR WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-display leading-tight">
            Products built to solve actual problems.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-textMuted max-w-2xl">
            Every project starts with a real-world problem. Here are some of the systems we've designed and developed.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pb-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-brand-700 text-white shadow-xs'
                : 'bg-surface-secondary text-surface-textMuted hover:text-[#171717] hover:bg-[#EAEAEA]'
            }`}
          >
            All Products ({PROJECTS.length})
          </button>
          <button
            onClick={() => setActiveFilter('live')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'live'
                ? 'bg-brand-700 text-white shadow-xs'
                : 'bg-surface-secondary text-surface-textMuted hover:text-[#171717] hover:bg-[#EAEAEA]'
            }`}
          >
            Live Deployments & Pilots ({PROJECTS.filter(p => p.category === 'live').length})
          </button>
          <button
            onClick={() => setActiveFilter('web-mobile')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'web-mobile'
                ? 'bg-brand-700 text-white shadow-xs'
                : 'bg-surface-secondary text-surface-textMuted hover:text-[#171717] hover:bg-[#EAEAEA]'
            }`}
          >
            Web & Mobile ({PROJECTS.filter(p => p.category === 'web-mobile').length})
          </button>
          <button
            onClick={() => setActiveFilter('ai-iot')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'ai-iot'
                ? 'bg-brand-700 text-white shadow-xs'
                : 'bg-surface-secondary text-surface-textMuted hover:text-[#171717] hover:bg-[#EAEAEA]'
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
                className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#EAEAEA] bg-surface-secondary/40 hover:bg-surface-secondary/70 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Status & Highlight Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      {getStatusBadge(project.status)}
                      {project.highlight && (
                        <span className="text-xs font-mono font-medium text-brand-700 px-2 py-0.5 rounded bg-brand-50 border border-brand-100">
                          {project.highlight}
                        </span>
                      )}
                    </div>

                    {/* Project Title & Headline */}
                    <div>
                      <div className="text-xs font-mono text-brand-700 font-semibold uppercase tracking-wider mb-1">
                        {project.name.toUpperCase()}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] font-display">
                        {project.title}
                      </h3>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="pt-2 border-t border-[#EAEAEA] space-y-2">
                      <div className="text-[11px] font-mono text-surface-textMuted uppercase tracking-wider">
                        Key Features & Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {project.features.slice(0, 6).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-1.5 text-[#333333]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Tags & Actions */}
                    <div className="pt-3 border-t border-[#EAEAEA] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono text-surface-textMuted mr-1">Stack:</span>
                        {project.technology.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white border border-[#EAEAEA] text-[11px] font-mono font-medium text-[#171717]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-surface-secondary border border-[#EAEAEA] text-xs font-medium text-[#171717] transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-surface-textMuted" />
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
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-700 hover:bg-brand-800 text-xs font-medium text-white transition-colors"
                        >
                          <span>{project.id === 'groveil' ? 'View Groveil' : 'Build Similar'}</span>
                          <ArrowRight className="w-3 h-3" />
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
