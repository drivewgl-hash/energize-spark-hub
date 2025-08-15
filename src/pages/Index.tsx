import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { PartnershipsSection } from '@/components/sections/PartnershipsSection';
import { TransparencySection } from '@/components/sections/TransparencySection';
import { JoinUsSection } from '@/components/sections/JoinUsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('inicio');

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCurrentSection('inicio');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'inicio':
        return (
          <>
            <HeroSection onNavigate={handleSectionChange} />
            <AboutSection />
          </>
        );
      case 'projetos':
        return <ProjectsSection />;
      case 'parcerias':
        return <PartnershipsSection />;
      case 'transparencia':
        return <TransparencySection />;
      case 'faca-parte':
        return <JoinUsSection />;
      case 'contatos':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection onNavigate={handleSectionChange} />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-instituto-primary particle-bg font-poppins">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={handleSectionChange} 
      />

      {/* Main Content */}
      <main className="relative z-10 pt-20 lg:pt-24">
        {renderSection()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleSectionChange} />
    </div>
  );
};

export default Index;
