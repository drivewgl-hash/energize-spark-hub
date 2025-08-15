import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Star } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.ibb.co/Pz61YpJM/image.png')",
        }}
      >
        <div className="absolute inset-0 bg-instituto-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo Arc */}
        <div className="mb-12 animate-float">
          <img 
            src="https://i.ibb.co/nNDK7jV/logo.png" 
            alt="Instituto Energizando Vidas" 
            className="w-full max-w-md mx-auto h-auto filter drop-shadow-2xl"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-instituto-text-light mb-6 max-w-4xl mx-auto leading-tight">
          Transformando{' '}
          <span className="text-instituto-accent">Comunidades</span>{' '}
          através da{' '}
          <span className="text-instituto-accent">Solidariedade</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-instituto-text-light/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Há mais de uma década levando esperança, educação e desenvolvimento 
          para comunidades em situação de vulnerabilidade social
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => onNavigate('projetos')}
            className="group"
          >
            Conheça Nossos Projetos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => onNavigate('faca-parte')}
            className="border-instituto-text-light text-instituto-text-light hover:bg-instituto-text-light hover:text-instituto-primary"
          >
            Faça Parte da Mudança
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Heart className="text-instituto-accent mr-2" size={32} />
              <span className="text-4xl font-bold text-instituto-text-light">12+</span>
            </div>
            <p className="text-instituto-text-light/80 font-medium">Anos de Atuação</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="text-instituto-accent mr-2" size={32} />
              <span className="text-4xl font-bold text-instituto-text-light">5000+</span>
            </div>
            <p className="text-instituto-text-light/80 font-medium">Pessoas Impactadas</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Star className="text-instituto-accent mr-2" size={32} />
              <span className="text-4xl font-bold text-instituto-text-light">50+</span>
            </div>
            <p className="text-instituto-text-light/80 font-medium">Projetos Realizados</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-instituto-accent rounded-full opacity-70"></div>
      </div>
    </section>
  );
};