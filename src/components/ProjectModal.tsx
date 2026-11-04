import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, CheckCircle2, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

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
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E0E0E] rounded-2xl border border-[#262626] shadow-2xl p-6 sm:p-8 space-y-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#A3A3A3] hover:text-white hover:bg-[#1C1C1C] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold tracking-wider ${
              project.status === 'LIVE'
                ? 'bg-[#102014] text-[#22C55E] border border-[#22C55E]/40'
                : project.status === 'PILOT LAUNCH'
                ? 'bg-[#241B08] text-[#FACC15] border border-[#FACC15]/40'
                : project.status === 'CONCEPT'
                ? 'bg-[#1E110A] text-brand-500 border border-brand-500/40'
                : 'bg-[#181818] text-[#A3A3A3] border border-[#262626]'
            }`}>
              {project.status === 'CONCEPT' ? 'CONCEPT · PHASE 1' : project.status}
            </span>
            {project.highlight && (
              <span className="text-xs font-mono text-[#FACC15] font-medium">
                · {project.highlight}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            {project.name} — {project.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem vs Solution Editorial */}
        {project.fullArchitecture && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-[#141414] border border-[#262626]">
            <div>
              <div className="text-xs font-mono font-semibold text-rose-500 uppercase mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                The Practical Bottleneck
              </div>
              <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
                {project.fullArchitecture.problem}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-brand-500 uppercase mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                Our Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
                {project.fullArchitecture.solution}
              </p>
            </div>
          </div>
        )}

        {/* Architectural Layers */}
        {project.fullArchitecture?.stack && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
              <Layers className="w-4 h-4 text-brand-500" />
              <span>System Architecture &amp; Technologies</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.fullArchitecture.stack.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-[#262626] bg-[#141414]">
                  <div className="text-xs font-semibold text-white font-display">{item.layer}</div>
                  <div className="text-xs font-mono text-brand-500 mt-1">{item.tools}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Checklist */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
            Core Verified Features &amp; Capabilities
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D4]">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#737373] font-mono">
            Architected &amp; Built by Groveil · Coimbatore, IN
          </div>
          <button
            onClick={() => {
              onClose();
              onContactForSimilar(project.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand-500 hover:bg-[#FF6B1A] text-black text-xs font-bold transition-colors shadow-xs"
          >
            <span>Discuss a Similar Solution</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
