import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  HandHeart, 
  Users, 
  Building2, 
  GraduationCap, 
  Lightbulb,
  Gift,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  User
} from 'lucide-react';

const volunteerOpportunities = [
  {
    title: "Educação e Cultura",
    description: "Apoie atividades educativas, oficinas de arte, música e teatro para crianças e adolescentes.",
    icon: GraduationCap,
    requirements: ["Ensino médio completo", "Facilidade com crianças", "Criatividade"],
    schedule: "Terças e quintas, 14h às 17h"
  },
  {
    title: "Apoio Psicossocial",
    description: "Ajude no acompanhamento familiar e em atividades de fortalecimento de vínculos comunitários.",
    icon: Heart,
    requirements: ["Formação em Psicologia ou Serviço Social", "Experiência com famílias"],
    schedule: "Segundas e quartas, 9h às 12h"
  },
  {
    title: "Eventos e Mobilização",
    description: "Participe da organização de eventos comunitários, campanhas e ações de mobilização social.",
    icon: Calendar,
    requirements: ["Disponibilidade flexível", "Habilidades organizacionais"],
    schedule: "Conforme demanda dos eventos"
  },
  {
    title: "Gestão e Administrativo",
    description: "Contribua com conhecimentos em gestão, marketing, contabilidade ou tecnologia.",
    icon: Lightbulb,
    requirements: ["Formação específica na área", "Conhecimento em ferramentas digitais"],
    schedule: "Home office ou presencial flexível"
  }
];

const partnershipOptions = [
  {
    title: "Patrocínio de Projetos",
    description: "Apoie financeiramente nossos projetos específicos e tenha seu nome associado à transformação social.",
    icon: Gift,
    benefits: ["Relatórios de impacto detalhados", "Participação em eventos", "Certificado de responsabilidade social"]
  },
  {
    title: "Parcerias Estratégicas",
    description: "Desenvolva projetos em conjunto, unindo recursos e expertise para amplificar o impacto social.",
    icon: HandHeart,
    benefits: ["Co-criação de projetos", "Sharing de conhecimento", "Networking social"]
  },
  {
    title: "Voluntariado Corporativo",
    description: "Engaje seus colaboradores em ações voluntárias que fortalecem a cultura organizacional.",
    icon: Users,
    benefits: ["Team building social", "Desenvolvimento humano", "Engajamento dos colaboradores"]
  },
  {
    title: "Fornecimento e Serviços",
    description: "Doe produtos, serviços ou conhecimento técnico para apoiar nossas operações e projetos.",
    icon: Building2,
    benefits: ["Otimização de recursos", "Impacto direto", "Reconhecimento público"]
  }
];

export const JoinUsSection = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <section className="py-20 bg-instituto-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
            Faça Parte da Transformação
          </h2>
          <p className="text-xl text-instituto-text/70 max-w-3xl mx-auto">
            Existem diversas formas de contribuir para a construção de uma sociedade mais 
            justa e solidária. Descubra como você pode participar!
          </p>
        </div>

        {/* Tabs for Different Audiences */}
        <Tabs defaultValue="individual" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger 
              value="individual" 
              className="data-[state=active]:bg-instituto-accent data-[state=active]:text-instituto-primary font-semibold"
            >
              <User className="w-4 h-4 mr-2" />
              Pessoa Física
            </TabsTrigger>
            <TabsTrigger 
              value="company"
              className="data-[state=active]:bg-instituto-accent data-[state=active]:text-instituto-primary font-semibold"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Empresas
            </TabsTrigger>
          </TabsList>

          {/* Individual Tab */}
          <TabsContent value="individual">
            <div className="bg-instituto-white rounded-2xl p-8 shadow-card mb-12">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-instituto-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-instituto-primary mb-4">
                  Seja um Voluntário
                </h3>
                <p className="text-lg text-instituto-text/80 max-w-2xl mx-auto">
                  O voluntariado é uma forma poderosa de contribuir diretamente para a 
                  transformação de vidas. Encontre a oportunidade perfeita para você!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {volunteerOpportunities.map((opportunity, index) => {
                  const IconComponent = opportunity.icon;
                  const isOpen = activeAccordion === index;
                  
                  return (
                    <Card key={index} className="card-elevated">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <IconComponent className="w-8 h-8 text-instituto-accent mr-3" />
                          <CardTitle className="text-instituto-primary text-xl">
                            {opportunity.title}
                          </CardTitle>
                        </div>
                        <p className="text-instituto-text/80">
                          {opportunity.description}
                        </p>
                      </CardHeader>
                      
                      <CardContent>
                        <Button
                          variant="ghost"
                          onClick={() => setActiveAccordion(isOpen ? null : index)}
                          className="w-full justify-between text-instituto-primary hover:text-instituto-accent p-0 h-auto font-semibold"
                        >
                          Ver Detalhes
                          <ArrowRight 
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isOpen ? 'rotate-90' : ''
                            }`} 
                          />
                        </Button>
                        
                        <div className={`
                          overflow-hidden transition-all duration-300 ease-out
                          ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                        `}>
                          <div className="border-t border-instituto-background pt-4 space-y-4">
                            <div>
                              <h5 className="font-semibold text-instituto-primary mb-2">Requisitos:</h5>
                              <ul className="space-y-1">
                                {opportunity.requirements.map((req, idx) => (
                                  <li key={idx} className="text-sm text-instituto-text/80 flex items-start">
                                    <span className="text-instituto-accent mr-2">•</span>
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center text-sm text-instituto-text/70">
                              <Clock className="w-4 h-4 text-instituto-secondary mr-2" />
                              {opportunity.schedule}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center mt-8">
                <Button variant="cta" size="lg">
                  Quero ser Voluntário
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Company Tab */}
          <TabsContent value="company">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {partnershipOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 text-instituto-accent mr-3" />
                        <CardTitle className="text-instituto-primary text-xl">
                          {option.title}
                        </CardTitle>
                      </div>
                      <p className="text-instituto-text/80 leading-relaxed">
                        {option.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div>
                        <h5 className="font-semibold text-instituto-primary mb-3">Benefícios:</h5>
                        <ul className="space-y-2 mb-6">
                          {option.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-instituto-text/80 flex items-start">
                              <span className="text-instituto-accent mr-2">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="w-full border-instituto-accent text-instituto-accent hover:bg-instituto-accent hover:text-instituto-primary">
                          Saiba Mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Information */}
        <div className="bg-gradient-hero rounded-2xl p-12 shadow-elevated text-center">
          <h3 className="text-3xl font-bold text-instituto-text-light mb-4">
            Pronto para Começar?
          </h3>
          <p className="text-xl text-instituto-text-light/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como sua contribuição pode fazer a diferença 
            na vida de muitas pessoas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-instituto-text-light/90">
              <MapPin className="w-5 h-5 mr-2" />
              Av. Salim Antônio Curiati, 136
            </div>
            <div className="flex items-center text-instituto-text-light/90">
              <Clock className="w-5 h-5 mr-2" />
              Seg-Sex: 08h às 18h
            </div>
          </div>
          
          <Button variant="accent" size="lg" className="group">
            Entrar em Contato
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};