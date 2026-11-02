import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'How We Work', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onStartProject) {
      onStartProject();
    } else {
      const target = document.querySelector('#contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'glass-nav border-[#EAEAEA] shadow-subtle'
          : 'bg-white/95 backdrop-blur-md border-[#EAEAEA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Official Company Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Groveil Home"
          >
            <Logo size="md" />
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-50 border border-brand-100 text-[11px] font-medium text-brand-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
              Coimbatore
            </div>
          </a>

          {/* Center/Right: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3.5 py-2 text-[14px] font-medium text-[#404040] hover:text-[#171717] rounded-md transition-colors hover:bg-[#F7F8FA]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleCtaClick}
              className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-700 hover:bg-brand-800 rounded-lg transition-all duration-150 shadow-sm active:scale-[0.98] border border-brand-800"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={handleCtaClick}
              className="px-3 py-1.5 text-xs font-medium text-white bg-brand-700 rounded-md border border-brand-800"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#404040] hover:text-[#171717] hover:bg-surface-secondary rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAEAEA] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block px-3 py-2.5 text-base font-medium text-[#333333] hover:text-[#171717] hover:bg-surface-secondary rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#EAEAEA] flex flex-col gap-2">
            <button
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-brand-700 hover:bg-brand-800 rounded-lg transition-colors"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <div className="text-center text-xs text-surface-textMuted py-1 font-mono">
              Coimbatore · Tamil Nadu · India
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
