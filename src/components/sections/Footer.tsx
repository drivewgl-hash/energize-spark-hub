import { Instagram, MapPin, Clock, Mail, Phone } from 'lucide-react';
import logoPrincipal from '@/assets/logo-principal.png';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-instituto-primary text-instituto-text-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Mission - Centralizado */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <button
              onClick={() => onNavigate('inicio')}
              className="block mb-6 transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={logoPrincipal}
                alt="Instituto Energizando Vidas"
                className="h-24 w-auto mx-auto"
              />
            </button>
            <p className="text-instituto-text-light/80 leading-relaxed mb-6">
              Transformando comunidades através da educação, cultura e solidariedade há mais de uma década.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://www.instagram.com/energizandovidasinstituto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-instituto-text-light hover:text-instituto-accent transition-colors duration-300"
                title="Siga-nos no Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-instituto-accent mb-6">
              Navegação
            </h4>
            <nav className="space-y-3">
              {[
                { id: 'inicio', label: 'Página Inicial' },
                { id: 'projetos', label: 'Nossos Projetos' },
                { id: 'parcerias', label: 'Parcerias' },
                { id: 'transparencia', label: 'Transparência' },
                { id: 'faca-parte', label: 'Faça Parte' },
                { id: 'contatos', label: 'Contatos' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-instituto-accent mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-instituto-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-instituto-text-light/80 leading-relaxed">
                    Av. Salim Antônio Curiati, 136, sala 3<br />
                    Jurubatuba, São Paulo - SP<br />
                    CEP: 04690-050
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-instituto-accent mr-3 flex-shrink-0" />
                <div>
                  <p className="text-instituto-text-light/80">
                    <strong>Funcionamento:</strong><br />
                    Segunda a Sexta, 08h - 18h
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-instituto-accent mr-3 flex-shrink-0" />
                <a 
                  href="mailto:contato@energizandovidas.org.br" 
                  className="text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300"
                >
                  contato@energizandovidas.org.br
                </a>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-instituto-accent mr-3 flex-shrink-0" />
                <a 
                  href="tel:+551112345678" 
                  className="text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300"
                >
                  (11) 1234-5678
                </a>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div>
            <h4 className="text-xl font-bold text-instituto-accent mb-6">
              Nossa Localização
            </h4>
            <div className="rounded-lg overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.778229411293!2d-46.71185622374362!3d-23.64790006437934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5114067a518d%3A0x7952c13a301a1e0b!2sAv.%20Salim%20Ant%C3%B4nio%20Curiati%2C%20136%20-%20Jurubatuba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004690-050!5e0!3m2!1spt-BR!2sbr!4v1723741433063!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Instituto Energizando Vidas"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-instituto-text-light/20 pt-8 text-center">
          <p className="text-instituto-text-light/70">
            &copy; 2024 Instituto Energizando Vidas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};