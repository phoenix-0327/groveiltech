import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'How We Work', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-[#262626] shadow-2xl'
          : 'bg-[#0A0A0A]/80 backdrop-blur-md border-[#262626]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Official Company Logo & Location indicator */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="group flex items-center gap-3 transition-opacity hover:opacity-90"
              aria-label="GROVEIL Home"
            >
              <Logo size="md" />
            </a>

            {/* Subtle Coimbatore Pulse Tag */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-[11px] font-mono text-[#D4D4D4]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="font-medium">Coimbatore, IN</span>
            </div>
          </div>

          {/* Center: Desktop Navigation with active pill tracking */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'text-[#FF5500] bg-[#1E110A] font-semibold border border-[#FF5500]/30 shadow-xs'
                      : 'text-[#A3A3A3] hover:text-white hover:bg-[#161616]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleCtaClick}
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-black bg-[#FF5500] hover:bg-[#FF6B1A] rounded-lg transition-all duration-150 shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={handleCtaClick}
              className="px-3 py-1.5 text-xs font-bold text-black bg-[#FF5500] rounded-lg"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#262626] bg-[#0E0E0E] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'font-semibold text-[#FF5500] bg-[#1E110A] border border-[#FF5500]/30'
                      : 'text-[#A3A3A3] hover:text-white hover:bg-[#161616] font-medium'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#262626] flex flex-col gap-2">
            <button
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center px-4 py-2.5 text-xs font-bold text-black bg-[#FF5500] hover:bg-[#FF6B1A] rounded-lg transition-colors"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
            <div className="text-center text-[11px] text-[#737373] py-1 font-mono">
              Coimbatore · Tamil Nadu · India
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
