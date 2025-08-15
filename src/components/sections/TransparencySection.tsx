import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Shield, Eye, BarChart3, Users } from 'lucide-react';

const documentsData = [
  {
    title: "Estatuto Social",
    description: "Documento que rege as atividades e organização do instituto",
    type: "PDF",
    icon: FileText,
    year: "2024"
  },
  {
    title: "Relatório de Atividades 2023",
    description: "Resumo completo das ações e projetos realizados no último ano",
    type: "PDF",
    icon: BarChart3,
    year: "2023"
  },
  {
    title: "Demonstrativo Financeiro",
    description: "Prestação de contas e transparência na gestão dos recursos",
    type: "PDF",
    icon: Shield,
    year: "2023"
  },
  {
    title: "Certificado CNPJ",
    description: "Comprovação da regularidade jurídica da organização",
    type: "PDF",
    icon: FileText,
    year: "2024"
  },
  {
    title: "Relatório de Impacto Social",
    description: "Análise dos resultados e benefícios gerados para a comunidade",
    type: "PDF",
    icon: Users,
    year: "2023"
  },
  {
    title: "Política de Privacidade",
    description: "Como tratamos e protegemos os dados pessoais",
    type: "PDF",
    icon: Eye,
    year: "2024"
  }
];

const transparencyPrinciples = [
  {
    icon: Shield,
    title: "Integridade",
    description: "Agimos com honestidade e ética em todas as nossas ações e decisões."
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Mantemos abertura total sobre nossas atividades, finanças e resultados."
  },
  {
    icon: Users,
    title: "Responsabilidade",
    description: "Prestamos contas à sociedade sobre o uso dos recursos e impactos gerados."
  },
  {
    icon: BarChart3,
    title: "Eficiência",
    description: "Buscamos sempre a melhor aplicação dos recursos para maximizar o impacto social."
  }
];

export const TransparencySection = () => {
  const [visibleDocuments, setVisibleDocuments] = useState<number[]>([]);
  const documentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleDocuments(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    documentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-instituto-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
            Transparência
          </h2>
          <p className="text-xl text-instituto-text/70 max-w-3xl mx-auto">
            Nossa credibilidade se constrói através da transparência total em nossas ações, 
            financiamento e resultados
          </p>
        </div>

        {/* Transparency Principles */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-instituto-primary text-center mb-12">
            Nossos Princípios
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transparencyPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="card-elevated text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-12 h-12 text-instituto-accent" />
                    </div>
                    <h4 className="text-xl font-bold text-instituto-primary mb-3">
                      {principle.title}
                    </h4>
                    <p className="text-instituto-text/80 leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Intro Text */}
        <div className="bg-instituto-white rounded-2xl p-12 mb-16 shadow-card">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <Shield className="w-24 h-24 text-instituto-accent mx-auto" />
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-bold text-instituto-primary mb-4">
                Compromisso com a Transparência
              </h3>
              <p className="text-lg text-instituto-text/80 leading-relaxed mb-4">
                Acreditamos que a <strong className="text-instituto-primary">transparência</strong> é 
                fundamental para construir confiança e credibilidade com nossos doadores, 
                parceiros e beneficiários.
              </p>
              <p className="text-lg text-instituto-text/80 leading-relaxed">
                Por isso, disponibilizamos publicamente todos os documentos que comprovam 
                nossa <strong className="text-instituto-secondary">idoneidade</strong>, gestão responsável 
                e impacto social real.
              </p>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-instituto-primary text-center mb-12">
            Documentos e Relatórios
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentsData.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (documentRefs.current[index] = el)}
                  data-index={index}
                  className={`
                    opacity-0 translate-y-8 transition-all duration-700 ease-out
                    ${visibleDocuments.includes(index) ? 'opacity-100 translate-y-0' : ''}
                  `}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="card-elevated h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <IconComponent className="w-8 h-8 text-instituto-accent" />
                        <span className="text-sm font-medium text-instituto-text/60 bg-instituto-background px-2 py-1 rounded">
                          {doc.year}
                        </span>
                      </div>
                      <CardTitle className="text-instituto-primary text-xl">
                        {doc.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-instituto-text/80 mb-6 leading-relaxed">
                        {doc.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full group border-instituto-accent text-instituto-accent hover:bg-instituto-accent hover:text-instituto-primary"
                      >
                        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Baixar {doc.type}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-elevated">
          <h3 className="text-3xl font-bold text-instituto-text-light mb-4">
            Dúvidas sobre nossa prestação de contas?
          </h3>
          <p className="text-xl text-instituto-text-light/90 mb-8 max-w-2xl mx-auto">
            Estamos sempre disponíveis para esclarecer qualquer questão sobre 
            nossas atividades e gestão financeira.
          </p>
          <Button variant="accent" size="lg">
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};