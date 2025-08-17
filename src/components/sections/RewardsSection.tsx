import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Shirt, Crown, Gift, Heart, DollarSign } from 'lucide-react';

const rewardsData = [
  {
    id: 'livro-ronildo',
    title: 'LIVRO DO RONILDO',
    description: 'Uma obra inspiradora sobre transformação social e superação',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    minDonation: 50,
    category: 'Literatura'
  },
  {
    id: 'camisetas',
    title: 'CAMISETAS INSTITUCIONAIS',
    description: 'Camisetas oficiais do Instituto Energizando Vidas',
    icon: Shirt,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    minDonation: 80,
    category: 'Vestuário'
  },
  {
    id: 'bones',
    title: 'BONÉS INSTITUCIONAIS',
    description: 'Bonés oficiais com a marca do instituto',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop',
    minDonation: 60,
    category: 'Acessórios'
  },
  {
    id: 'kit-solidario',
    title: 'KIT SOLIDÁRIO',
    description: 'Kit especial com produtos artesanais da comunidade',
    icon: Gift,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop',
    minDonation: 120,
    category: 'Kit Especial'
  }
];

const impactInfo = [
  {
    icon: Heart,
    title: 'Sua doação transforma vidas',
    description: 'Cada contribuição nos ajuda a expandir nossos projetos e alcançar mais famílias'
  },
  {
    icon: DollarSign,
    title: 'Transparência total',
    description: 'Todos os recursos são aplicados diretamente em nossos projetos sociais'
  }
];

export const RewardsSection = () => {
  return (
    <section className="py-20 bg-instituto-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
            Nossa Loja de Recompensas
          </h2>
          <p className="text-xl text-instituto-text/70 max-w-4xl mx-auto mb-8">
            Contribua com nossos projetos sociais e receba uma recompensa especial como forma de agradecimento. 
            <strong className="text-instituto-primary"> Não vendemos produtos</strong> - oferecemos recompensas por suas doações!
          </p>
          <div className="bg-instituto-accent/10 border border-instituto-accent rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-instituto-primary font-semibold">
              ⚠️ Importante: O Instituto Energizando Vidas não possui inscrição estadual para vendas. 
              Todos os itens são oferecidos como <strong>recompensas por doações</strong>.
            </p>
          </div>
        </div>

        {/* Impact Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {impactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-instituto-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-instituto-primary mb-3">
                    {info.title}
                  </h3>
                  <p className="text-instituto-text/80">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {rewardsData.map((reward, index) => {
            const IconComponent = reward.icon;
            return (
              <Card key={reward.id} className="card-elevated hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-instituto-accent text-instituto-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {reward.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="w-8 h-8 text-instituto-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-instituto-primary text-xl">
                    {reward.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-instituto-text/80 leading-relaxed">
                    {reward.description}
                  </p>
                  
                  <div className="bg-instituto-accent/10 rounded-lg p-4">
                    <p className="text-instituto-primary font-semibold text-center">
                      {reward.id === 'livro-ronildo' 
                        ? `Doe o valor mínimo de R$ ${reward.minDonation} e receba este livro como recompensa`
                        : reward.id === 'camisetas'
                        ? `Doe o valor mínimo de R$ ${reward.minDonation} e receba esta camiseta institucional`
                        : reward.id === 'bones'
                        ? `Doe o valor mínimo de R$ ${reward.minDonation} e receba este boné institucional`
                        : `Doe o valor mínimo de R$ ${reward.minDonation} e receba este item como recompensa`
                      }
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="cta" 
                      className="w-full group"
                      size="lg"
                    >
                      <Heart className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Fazer Doação - R$ {reward.minDonation}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-instituto-accent text-instituto-accent hover:bg-instituto-accent hover:text-instituto-primary"
                    >
                      Mais Informações
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How it Works */}
        <div className="bg-instituto-white rounded-2xl p-8 shadow-card">
          <h3 className="text-3xl font-bold text-instituto-primary text-center mb-8">
            Como Funciona
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-instituto-primary text-instituto-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-instituto-primary mb-2">Escolha sua Recompensa</h4>
              <p className="text-instituto-text/80 text-sm">
                Selecione o item que mais te interessa como forma de agradecimento
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-instituto-secondary text-instituto-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-instituto-primary mb-2">Faça sua Doação</h4>
              <p className="text-instituto-text/80 text-sm">
                Contribua com o valor mínimo indicado para apoiar nossos projetos
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-instituto-accent text-instituto-primary w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-instituto-primary mb-2">Receba sua Recompensa</h4>
              <p className="text-instituto-text/80 text-sm">
                Entraremos em contato para entregar seu item de agradecimento
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-12 shadow-elevated">
          <h3 className="text-3xl font-bold text-instituto-text-light mb-4">
            Pronto para fazer a diferença?
          </h3>
          <p className="text-xl text-instituto-text-light/90 mb-8 max-w-2xl mx-auto">
            Sua contribuição nos ajuda a transformar vidas e construir um futuro mais justo. 
            Escolha sua recompensa e junte-se a nós nessa missão!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Ver Todas as Recompensas
            </Button>
            <Button variant="outline" size="lg" className="bg-instituto-white/10 border-instituto-white text-instituto-white hover:bg-instituto-white hover:text-instituto-primary">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};