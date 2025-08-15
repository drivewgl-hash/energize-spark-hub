import { Target, Eye, Heart } from 'lucide-react';

const mvvData = [
  {
    icon: Target,
    title: "Nossa Missão",
    content: "Promover a transformação social através de projetos educacionais, culturais e de assistência social, fortalecendo vínculos comunitários e desenvolvendo o potencial humano de pessoas em situação de vulnerabilidade.",
    color: "text-red-500",
    theme: "border-red-500"
  },
  {
    icon: Eye,
    title: "Nossa Visão",
    content: "Ser reconhecida como uma organização de referência na transformação de comunidades, criando um futuro mais justo e igualitário através do desenvolvimento integral do ser humano.",
    color: "text-instituto-secondary",
    theme: "border-instituto-secondary"
  },
  {
    icon: Heart,
    title: "Nossos Valores",
    content: "Solidariedade, transparência, respeito à diversidade, comprometimento social, sustentabilidade e valorização do ser humano como protagonista da própria transformação.",
    color: "text-yellow-500",
    theme: "border-yellow-500"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-instituto-background">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                  alt="Instituto Energizando Vidas em ação"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-instituto-primary/20 to-transparent" />
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
                Quem Somos
              </h2>
              <div className="space-y-6 text-lg text-instituto-text/80">
                <p>
                  O <strong className="text-instituto-primary">Instituto Energizando Vidas</strong> nasceu 
                  da necessidade de criar pontes entre a sociedade civil e comunidades em situação 
                  de vulnerabilidade social, promovendo desenvolvimento humano integral.
                </p>
                <p>
                  Atuamos há mais de uma década no território de São Paulo, desenvolvendo projetos 
                  que fortalecem vínculos familiares e comunitários, promovem a educação e cultura, 
                  e criam oportunidades de geração de renda.
                </p>
                <p>
                  Nossa abordagem é <strong className="text-instituto-secondary">humanizada e participativa</strong>, 
                  sempre respeitando a diversidade e valorizando o protagonismo das pessoas 
                  atendidas em seus processos de transformação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
              Nossos Pilares
            </h2>
            <p className="text-xl text-instituto-text/70 max-w-3xl mx-auto">
              Os valores que nos guiam na construção de um futuro mais justo e igualitário
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mvvData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className={`
                    bg-instituto-white rounded-2xl p-8 shadow-card hover:shadow-elevated
                    transition-all duration-300 hover:-translate-y-2 min-h-[400px]
                    flex flex-col items-center text-center border-l-4 ${item.theme}
                  `}
                >
                  <div className="mb-6">
                    <IconComponent className={`w-16 h-16 ${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-instituto-primary mb-6">
                    {item.title}
                  </h3>
                  <p className="text-instituto-text/80 leading-relaxed flex-grow">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};