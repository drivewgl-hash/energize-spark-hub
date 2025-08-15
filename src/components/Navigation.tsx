import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'inicio', label: 'Página Inicial' },
  { id: 'projetos', label: 'Nossos Projetos' },
  { id: 'parcerias', label: 'Parcerias' },
  { id: 'transparencia', label: 'Transparência' },
  { id: 'faca-parte', label: 'Faça Parte' },
  { id: 'contatos', label: 'Contatos' },
];

export const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 90) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? 'bg-instituto-primary/90 backdrop-blur-md shadow-card' : 'bg-transparent'}
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <img 
            src="https://i.ibb.co/nNDK7jV/logo.png" 
            alt="Instituto Energizando Vidas" 
            className={`transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16 lg:h-18'}`}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                relative font-semibold text-sm xl:text-base transition-colors duration-300
                ${currentSection === item.id 
                  ? 'text-instituto-accent' 
                  : 'text-instituto-text-light hover:text-instituto-accent'
                }
                interactive-underline
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-instituto-text-light hover:text-instituto-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`
          lg:hidden absolute top-full left-0 w-full bg-instituto-white shadow-elevated
          transition-all duration-300 overflow-hidden
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                block w-full text-left px-6 py-3 font-semibold transition-colors duration-300
                ${currentSection === item.id 
                  ? 'text-instituto-accent bg-instituto-background' 
                  : 'text-instituto-text hover:text-instituto-accent hover:bg-instituto-background'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};