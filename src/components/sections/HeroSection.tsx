import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Star } from 'lucide-react';
import logoPrincipal from '@/assets/logo-principal.png';

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
        {/* Logo Principal */}
        <div className="mb-8 animate-float">
          <img 
            src={logoPrincipal}
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-instituto-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-instituto-white/20 text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="text-instituto-accent mr-2" size={28} />
              <span className="text-3xl lg:text-4xl font-bold text-instituto-text-light">3+</span>
            </div>
            <p className="text-instituto-text-light/80 font-medium text-sm lg:text-base">Anos de Atuação</p>
          </div>
          <div className="bg-instituto-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-instituto-white/20 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="text-instituto-accent mr-2" size={28} />
              <span className="text-3xl lg:text-4xl font-bold text-instituto-text-light">500+</span>
            </div>
            <p className="text-instituto-text-light/80 font-medium text-sm lg:text-base">Pessoas Impactadas</p>
          </div>
          <div className="bg-instituto-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-instituto-white/20 text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="text-instituto-accent mr-2" size={28} />
              <span className="text-3xl lg:text-4xl font-bold text-instituto-text-light">15+</span>
            </div>
            <p className="text-instituto-text-light/80 font-medium text-sm lg:text-base">Projetos Realizados</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-6 bg-instituto-accent rounded-full opacity-70"></div>
      </div>
    </section>
  );
};