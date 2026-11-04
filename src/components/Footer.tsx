import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { COMPANY_INFO, SERVICES, PROJECTS } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-[#262626] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#262626]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" showTagline={true} />
            
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed max-w-sm pt-1">
              A software engineering studio in Coimbatore, Tamil Nadu. We engineer dependable digital tools that replace paper registers, scattered spreadsheets and manual workflows.
            </p>

            <div className="pt-2 text-xs font-mono text-[#FACC15] font-medium">
              “Built for the real world.”
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-brand-500/60 transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-brand-500/60 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-brand-500/60 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#A3A3A3]">
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => scrollToSection(e, '#process')} className="hover:text-white transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Services
            </div>
            <ul className="space-y-2 text-xs text-[#A3A3A3]">
              {SERVICES.map((s) => (
                <li key={s.number}>
                  <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Featured Projects
            </div>
            <ul className="space-y-2 text-xs text-[#A3A3A3]">
              {PROJECTS.map((p) => (
                <li key={p.id} className="flex items-center justify-between">
                  <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-white transition-colors">
                    {p.name}
                  </a>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                    p.status === 'LIVE' 
                      ? 'bg-[#102014] text-emerald-400 border border-emerald-800/80' 
                      : p.status === 'CONCEPT'
                      ? 'bg-[#1E110A] text-brand-500 border border-brand-500/30'
                      : p.status === 'PILOT LAUNCH'
                      ? 'bg-[#241B08] text-[#FACC15] border border-[#FACC15]/30'
                      : 'bg-[#141414] text-[#A3A3A3] border border-[#262626]'
                  }`}>
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>
            © 2026 GROVEIL Software Studio. Coimbatore, Tamil Nadu, India.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[#FACC15]">
              The Invisible Shield All Over The Field
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-xs font-medium text-white hover:border-brand-500/50 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
