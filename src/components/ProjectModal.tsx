import React from 'react';
import type { Project } from '../types';
import { X, CheckCircle2, Layers, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactForSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactForSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-[#EAEAEA] shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-surface-textMuted hover:text-[#171717] hover:bg-surface-secondary transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold tracking-wider ${
              project.status === 'LIVE'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                : project.status === 'PILOT LAUNCH'
                ? 'bg-amber-50 text-amber-700 border border-amber-100'
                : project.status === 'CONCEPT'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-surface-secondary text-surface-textMuted border border-[#EAEAEA]'
            }`}>
              {project.status === 'CONCEPT' ? 'CONCEPT · PHASE 1' : project.status}
            </span>
            {project.highlight && (
              <span className="text-xs font-mono text-brand-700 font-medium">
                · {project.highlight}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171717]">
            {project.name} — {project.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-surface-textMuted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem vs Solution Editorial */}
        {project.fullArchitecture && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-surface-secondary border border-[#EAEAEA]">
            <div>
              <div className="text-xs font-mono font-semibold text-rose-700 uppercase mb-1">
                The Practical Problem
              </div>
              <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                {project.fullArchitecture.problem}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-brand-700 uppercase mb-1">
                Our Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                {project.fullArchitecture.solution}
              </p>
            </div>
          </div>
        )}

        {/* Architectural Layers */}
        {project.fullArchitecture?.stack && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-surface-textMuted">
              <Layers className="w-4 h-4 text-brand-700" />
              <span>System Architecture & Technologies</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.fullArchitecture.stack.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-[#EAEAEA] bg-white">
                  <div className="text-xs font-semibold text-[#171717]">{item.layer}</div>
                  <div className="text-xs font-mono text-brand-800 mt-0.5">{item.tools}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Checklist */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-surface-textMuted">
            Core Verified Features
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#333333]">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-surface-textMuted font-mono">
            Designed & Maintained by Groveil Coimbatore Team
          </div>
          <button
            onClick={() => {
              onClose();
              onContactForSimilar(project.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand-700 hover:bg-brand-800 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            <span>Discuss a Similar Solution</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
