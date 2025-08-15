import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Building2, Users, ArrowRight } from 'lucide-react';

const partnersData = [
  {
    name: "Prefeitura de São Paulo",
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=80&fit=crop",
    category: "Governo"
  },
  {
    name: "Banco Social",
    logo: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=150&h=80&fit=crop",
    category: "Financeiro"
  },
  {
    name: "Empresa Solidária",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=80&fit=crop",
    category: "Privado"
  },
  {
    name: "ONG Parceira",
    logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=150&h=80&fit=crop",
    category: "Terceiro Setor"
  },
  {
    name: "Instituto Educacional",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=150&h=80&fit=crop",
    category: "Educação"
  },
  {
    name: "Fundação Cultural",
    logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=80&fit=crop",
    category: "Cultura"
  }
];

export const PartnershipsSection = () => {
  const [visiblePartners, setVisiblePartners] = useState<number[]>([]);
  const partnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisiblePartners(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    partnerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Interactive canvas for partnerships background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(154, 247, 34, 0.6)';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(154, 247, 34, ${0.3 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="py-20 bg-instituto-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
            Nossas Parcerias
          </h2>
          <p className="text-xl text-instituto-text/70 max-w-3xl mx-auto">
            Juntos somos mais fortes. Conheça as organizações que caminham conosco 
            na transformação social
          </p>
        </div>

        {/* Partnership Content */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Handshake className="text-instituto-accent w-12 h-12 mr-4" />
                  <h3 className="text-3xl font-bold text-instituto-primary">
                    Construindo Pontes
                  </h3>
                </div>
                
                <p className="text-lg text-instituto-text/80 leading-relaxed">
                  Acreditamos que a <strong className="text-instituto-primary">colaboração</strong> é 
                  fundamental para amplificar nosso impacto social. Por isso, desenvolvemos 
                  parcerias estratégicas com diversos setores da sociedade.
                </p>
                
                <p className="text-lg text-instituto-text/80 leading-relaxed">
                  Desde <strong className="text-instituto-secondary">órgãos públicos</strong> até 
                  empresas privadas, ONGs e instituições de ensino, cada parceria 
                  representa uma oportunidade de unir forças na construção de um futuro mais justo.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <Building2 className="text-instituto-accent w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-instituto-primary">25+</div>
                    <div className="text-sm text-instituto-text/70">Parcerias Ativas</div>
                  </div>
                  <div className="text-center">
                    <Users className="text-instituto-accent w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-instituto-primary">15</div>
                    <div className="text-sm text-instituto-text/70">Setores Diferentes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Visual */}
            <div className="lg:w-1/2">
              <div className="relative bg-gradient-to-br from-instituto-primary to-instituto-secondary rounded-2xl p-8 shadow-elevated overflow-hidden min-h-[400px]">
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="relative z-10 text-center text-instituto-text-light">
                  <h4 className="text-2xl font-bold mb-4">Rede de Colaboração</h4>
                  <p className="text-instituto-text-light/90">
                    Cada conexão representa uma oportunidade de transformação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-instituto-primary text-center mb-8">
            Alguns de Nossos Parceiros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnersData.map((partner, index) => (
              <div
                key={index}
                ref={(el) => (partnerRefs.current[index] = el)}
                data-index={index}
                className={`
                  opacity-0 translate-y-4 transition-all duration-500 ease-out
                  ${visiblePartners.includes(index) ? 'opacity-100 translate-y-0' : ''}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="card-elevated hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4 text-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-16 object-cover rounded-lg mb-3 filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <p className="text-sm font-medium text-instituto-text">{partner.name}</p>
                    <p className="text-xs text-instituto-text/60">{partner.category}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-instituto-white rounded-2xl p-12 shadow-card">
          <h3 className="text-3xl font-bold text-instituto-primary mb-4">
            Quer ser nosso parceiro?
          </h3>
          <p className="text-xl text-instituto-text/70 mb-8 max-w-2xl mx-auto">
            Se sua organização compartilha dos nossos valores e quer contribuir para 
            a transformação social, vamos conversar!
          </p>
          <Button variant="cta" size="lg" className="group">
            Entre em Contato
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};