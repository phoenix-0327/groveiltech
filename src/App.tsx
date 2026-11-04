import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Capabilities } from './components/Capabilities';
import { Process } from './components/Process';
import { Trust } from './components/Trust';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactInitialProjectType, setContactInitialProjectType] = useState<string>('');
  const [contactInitialDescription, setContactInitialDescription] = useState<string>('');

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactForSimilar = (projectName: string) => {
    setContactInitialProjectType('Custom Software');
    setContactInitialDescription(
      `Hello Groveil team, we are interested in building a solution similar to ${projectName} for our organization...`
    );
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans antialiased selection:bg-brand-500 selection:text-black flex flex-col justify-between">
      
      {/* Sticky Navigation */}
      <Navbar onStartProject={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreWork={scrollToProjects}
          onContact={scrollToContact}
        />

        {/* About Us */}
        <About />

        {/* Services & Tech Strip */}
        <Services />

        {/* Featured Projects (All 6 projects with alternating layout) */}
        <FeaturedProjects
          onSelectProject={(proj) => setSelectedProject(proj)}
          onContactWithProject={handleContactForSimilar}
        />

        {/* Technical Capabilities */}
        <Capabilities />

        {/* Development Process */}
        <Process />

        {/* Trust & Proof Points */}
        <Trust />

        {/* Contact & CTA Form */}
        <Contact
          initialProjectType={contactInitialProjectType}
          initialDescription={contactInitialDescription}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Architecture Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactForSimilar={handleContactForSimilar}
      />

    </div>
  );
};

export default App;
