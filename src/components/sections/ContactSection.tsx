import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Send,
  MessageCircle,
  Users,
  Building2
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: "Telefone",
    info: "(11) 5555-2499",
    description: "Horário comercial: Segunda a Sexta, 08h às 18h",
    action: "tel:+5511555524999"
  },
  {
    icon: Mail,
    title: "E-mail",
    info: "contato@energizandovidas.org.br",
    description: "Respondemos em até 24 horas",
    action: "mailto:contato@energizandovidas.org.br"
  },
  {
    icon: Instagram,
    title: "Instagram",
    info: "@energizandovidasinstituto",
    description: "Acompanhe nosso dia a dia e projetos",
    action: "https://www.instagram.com/energizandovidasinstituto"
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Av. Salim Antônio Curiati, 136, sala 3",
    description: "Jurubatuba, São Paulo - SP, CEP: 04690-050",
    action: "https://maps.google.com/?q=Av.+Salim+Antonio+Curiati+136+Jurubatuba+São+Paulo"
  }
];

const contactReasons = [
  {
    icon: Users,
    title: "Quero ser voluntário",
    description: "Informações sobre oportunidades de voluntariado"
  },
  {
    icon: Building2,
    title: "Parceria empresarial",
    description: "Propostas de parcerias e patrocínios"
  },
  {
    icon: MessageCircle,
    title: "Dúvidas gerais",
    description: "Informações sobre nossos projetos e atividades"
  }
];

export const ContactSection = () => {
  return (
    <section className="py-20 bg-instituto-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-instituto-text/70 max-w-3xl mx-auto">
            Estamos prontos para ouvir você! Entre em contato e descubra como podemos 
            construir juntos um futuro mais solidário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="card-elevated hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-instituto-accent/10 p-3 rounded-lg mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-instituto-accent" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-xl font-bold text-instituto-primary mb-2">
                            {method.title}
                          </h4>
                          <p className="text-instituto-primary font-semibold mb-1">
                            {method.info}
                          </p>
                          <p className="text-instituto-text/70 text-sm mb-4">
                            {method.description}
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(method.action, '_blank')}
                            className="border-instituto-accent text-instituto-accent hover:bg-instituto-accent hover:text-instituto-primary"
                          >
                            {method.title === 'Telefone' ? 'Ligar' : 
                             method.title === 'E-mail' ? 'Enviar E-mail' :
                             method.title === 'Instagram' ? 'Seguir' : 'Ver no Mapa'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Contact Reasons */}
            <div>
              <h3 className="text-2xl font-bold text-instituto-primary mb-6">
                Como podemos ajudar?
              </h3>
              <div className="space-y-4">
                {contactReasons.map((reason, index) => {
                  const IconComponent = reason.icon;
                  return (
                    <div key={index} className="flex items-start p-4 bg-instituto-white rounded-lg shadow-card">
                      <IconComponent className="w-6 h-6 text-instituto-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-instituto-primary mb-1">
                          {reason.title}
                        </h4>
                        <p className="text-instituto-text/70 text-sm">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-instituto-primary flex items-center">
                  <Send className="w-6 h-6 text-instituto-accent mr-3" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-instituto-primary mb-2">
                      Nome Completo *
                    </label>
                    <Input 
                      placeholder="Seu nome"
                      className="border-instituto-background focus:border-instituto-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-instituto-primary mb-2">
                      E-mail *
                    </label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="border-instituto-background focus:border-instituto-accent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-instituto-primary mb-2">
                      Telefone
                    </label>
                    <Input 
                      placeholder="(11) 99999-9999"
                      className="border-instituto-background focus:border-instituto-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-instituto-primary mb-2">
                      Assunto *
                    </label>
                    <select className="w-full p-3 border border-instituto-background rounded-md focus:border-instituto-accent focus:outline-none">
                      <option>Voluntariado</option>
                      <option>Parceria</option>
                      <option>Doação</option>
                      <option>Informações</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-instituto-primary mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    placeholder="Conte-nos como podemos ajudar ou como você gostaria de contribuir..."
                    rows={6}
                    className="border-instituto-background focus:border-instituto-accent resize-none"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1.5"
                  />
                  <label htmlFor="privacy" className="text-sm text-instituto-text/70">
                    Aceito os termos de uso e política de privacidade. Concordo em receber 
                    informações sobre os projetos do Instituto Energizando Vidas.
                  </label>
                </div>

                <Button variant="cta" size="lg" className="w-full group">
                  Enviar Mensagem
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-sm text-instituto-text/60">
                  Respondemos todas as mensagens em até 24 horas úteis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-16 bg-instituto-white rounded-2xl p-8 shadow-card text-center">
          <Clock className="w-12 h-12 text-instituto-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-instituto-primary mb-4">
            Horário de Funcionamento
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h4 className="font-semibold text-instituto-primary mb-2">Atendimento Presencial</h4>
              <p className="text-instituto-text/80">
                Segunda a Sexta: 08h às 18h<br />
                Sábados: 08h às 12h<br />
                Domingos: Fechado
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-instituto-primary mb-2">Atendimento Online</h4>
              <p className="text-instituto-text/80">
                E-mail: 24h (resposta em até 24h)<br />
                Redes Sociais: Segunda a Sexta<br />
                WhatsApp: Horário comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};