import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Heart } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Festa Julina Comunitária",
    description: "Evento anual que celebra as tradições brasileiras, fortalecendo vínculos comunitários através de apresentações culturais, comidas típicas e brincadeiras tradicionais.",
    image: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?w=400&h=250&fit=crop",
    category: "Cultural",
    participants: "500+ famílias",
    location: "Jurubatuba",
    date: "Julho 2024",
    theme: "theme-julina",
    borderColor: "border-red-500",
    highlights: [
      "Apresentações de quadrilha",
      "Barracas de comidas típicas",
      "Oficinas de artesanato",
      "Brincadeiras tradicionais"
    ]
  },
  {
    id: 2,
    title: "Bazar Solidário",
    description: "Iniciativa de economia solidária que promove a reutilização de materiais e gera renda para famílias em situação de vulnerabilidade.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
    category: "Social",
    participants: "150 famílias",
    location: "Vila Jurubatuba",
    date: "Mensal",
    theme: "theme-bazar",
    borderColor: "border-purple-600",
    highlights: [
      "Roupas e acessórios",
      "Móveis e utensílios",
      "Livros e brinquedos",
      "Geração de renda local"
    ]
  },
  {
    id: 3,
    title: "Padaria Comunitária",
    description: "Projeto de capacitação profissional em panificação, oferecendo formação técnica e oportunidades de geração de renda para jovens e adultos.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=250&fit=crop",
    category: "Capacitação",
    participants: "30 pessoas",
    location: "Centro Comunitário",
    date: "Em andamento",
    theme: "theme-padaria",
    borderColor: "border-orange-600",
    highlights: [
      "Curso de panificação",
      "Técnicas de confeitaria",
      "Gestão de pequenos negócios",
      "Certificação profissional"
    ]
  },
  {
    id: 4,
    title: "Selo de Qualidade Comunitária",
    description: "Programa de certificação para produtos locais, valorizando a produção comunitária e promovendo o desenvolvimento econômico local.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
    category: "Desenvolvimento",
    participants: "25 produtores",
    location: "Região Sul",
    date: "2024",
    theme: "theme-selo",
    borderColor: "border-instituto-accent",
    highlights: [
      "Certificação de qualidade",
      "Apoio técnico",
      "Marketing local",
      "Rede de produtores"
    ]
  },
  {
    id: 5,
    title: "Programa Cuidando de Crianças",
    description: "Atividades educativas e recreativas para crianças e adolescentes em situação de vulnerabilidade, promovendo desenvolvimento integral.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop",
    category: "Educação",
    participants: "120 crianças",
    location: "Múltiplos locais",
    date: "Permanente",
    theme: "theme-criancas",
    borderColor: "border-pink-500",
    highlights: [
      "Reforço escolar",
      "Atividades esportivas",
      "Oficinas de arte",
      "Apoio psicossocial"
    ]
  },
  {
    id: 6,
    title: "Natal Solidário",
    description: "Campanha anual de distribuição de presentes e cestas básicas para famílias em situação de vulnerabilidade durante o período natalino.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=250&fit=crop",
    category: "Assistencial",
    participants: "800 famílias",
    location: "Comunidades atendidas",
    date: "Dezembro",
    theme: "theme-natal",
    borderColor: "border-green-600",
    highlights: [
      "Distribuição de presentes",
      "Cestas básicas",
      "Festa de confraternização",
      "Participação de voluntários"
    ]
  }
];

export const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-instituto-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-instituto-primary via-transparent to-instituto-secondary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
            Nossos Projetos
          </h2>
          <p className="text-xl text-instituto-text/70 max-w-3xl mx-auto">
            Conheça as iniciativas que estão transformando vidas e fortalecendo 
            comunidades em São Paulo
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              data-index={index}
              className={`
                opacity-0 translate-y-8 transition-all duration-700 ease-out
                ${visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : ''}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className={`h-full card-elevated ${project.borderColor} border-l-4 hover:border-l-8 transition-all duration-300`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <Badge 
                    className="absolute top-3 right-3 bg-instituto-accent text-instituto-primary font-semibold"
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-instituto-primary text-xl font-bold leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-instituto-text/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-instituto-text/70">
                      <Users className="w-4 h-4 mr-2 text-instituto-secondary" />
                      {project.participants}
                    </div>
                    <div className="flex items-center text-sm text-instituto-text/70">
                      <MapPin className="w-4 h-4 mr-2 text-instituto-secondary" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-instituto-text/70">
                      <Calendar className="w-4 h-4 mr-2 text-instituto-secondary" />
                      {project.date}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-instituto-primary mb-2">Destaques:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-instituto-text/80 flex items-start">
                          <span className="text-instituto-accent mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-elevated">
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-instituto-accent w-12 h-12" />
          </div>
          <h3 className="text-3xl font-bold text-instituto-text-light mb-4">
            Quer fazer parte desta transformação?
          </h3>
          <p className="text-xl text-instituto-text-light/90 mb-8 max-w-2xl mx-auto">
            Cada projeto nasce do sonho compartilhado de uma comunidade mais justa e solidária. 
            Venha construir o futuro conosco!
          </p>
        </div>
      </div>
    </section>
  );
};