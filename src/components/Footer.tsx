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
    <footer className="bg-white border-t border-[#EAEAEA] text-[#171717] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#EAEAEA]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" showTagline={true} />
            
            <p className="text-xs sm:text-sm text-surface-textMuted leading-relaxed max-w-sm pt-1">
              A student-founded software engineering studio in Coimbatore, Tamil Nadu. We replace paper registers, scattered spreadsheets and manual workflows with high-performance digital tools.
            </p>

            <div className="pt-2 text-xs font-mono text-brand-800 font-medium">
              “Building practical software for real-world problems.”
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-secondary border border-[#EAEAEA] flex items-center justify-center text-surface-textMuted hover:text-[#171717] hover:border-brand-300 transition-colors"
                aria-label="GitHub Organization"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-secondary border border-[#EAEAEA] flex items-center justify-center text-surface-textMuted hover:text-[#171717] hover:border-brand-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-surface-secondary border border-[#EAEAEA] flex items-center justify-center text-surface-textMuted hover:text-[#171717] hover:border-brand-300 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#555]">
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-[#171717] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-[#171717] transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-[#171717] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-[#171717] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => scrollToSection(e, '#process')} className="hover:text-[#171717] transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-[#171717] transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
              Services
            </div>
            <ul className="space-y-2 text-xs text-[#555]">
              {SERVICES.map((s) => (
                <li key={s.number}>
                  <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-[#171717] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
              Featured Projects
            </div>
            <ul className="space-y-2 text-xs text-[#555]">
              {PROJECTS.map((p) => (
                <li key={p.id} className="flex items-center justify-between">
                  <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-[#171717] transition-colors">
                    {p.name}
                  </a>
                  <span className="text-[10px] font-mono text-surface-textMuted">
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-textMuted">
          <div>
            © 2026 GROVEIL Software Studio. All rights reserved. Coimbatore, Tamil Nadu, India.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">
              Clean Minimal · Linear & Apple Inspired
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-secondary hover:bg-[#EAEAEA] border border-[#EAEAEA] text-xs font-medium text-[#171717] transition-colors"
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
