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
    <section className="py-16 lg:py-20 bg-instituto-background">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="mb-16 lg:mb-20">
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
        <div className="mb-16 lg:mb-20">
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

        {/* Linha do Tempo Histórica */}
        <div className="pt-16 lg:pt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-instituto-primary mb-6">
              Saiba mais sobre nossa atuação através da Linha do Tempo
            </h2>
            <p className="text-xl text-instituto-text/70 max-w-3xl mx-auto">
              Uma jornada de transformação social iniciada em 2022
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Linha central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-instituto-primary via-instituto-secondary to-instituto-accent h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2022 - Início */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-instituto-primary text-instituto-white px-6 py-3 rounded-full text-xl font-bold shadow-elevated">
                    2022
                  </div>
                </div>
                
                {/* Janeiro 2022 */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                    <div className="bg-instituto-white rounded-2xl p-6 shadow-card">
                      <h3 className="text-xl font-bold text-instituto-primary mb-3">Janeiro de 2022 – Nasce a semente</h3>
                      <p className="text-instituto-text/80 leading-relaxed">
                        Em meio à crise da pandemia, o grupo WGL, sensibilizado com a fome nas periferias de São Paulo, 
                        inicia a doação de cestas básicas em parceria com o Instituto Vocação (antiga Ação Comunitária do Brasil), 
                        no Jardim Icaraí. Famílias foram selecionadas por assistentes sociais e acompanhadas individualmente.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>

                {/* Jan/Mar 2022 */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2"></div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="bg-instituto-white rounded-2xl p-6 shadow-card">
                      <h3 className="text-xl font-bold text-instituto-primary mb-3">Jan/Mar 2022 – Mobilização com voluntários</h3>
                      <p className="text-instituto-text/80 leading-relaxed">
                        Funcionários da WGL se voluntariam e visitas institucionais fortalecem os laços com o Instituto Vocação, 
                        por meio do apoio à campanha da Nota Fiscal Paulista.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Abril 2022 */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                    <div className="bg-instituto-white rounded-2xl p-6 shadow-card">
                      <h3 className="text-xl font-bold text-instituto-primary mb-3">Abril de 2022 – Expansão para novas comunidades</h3>
                      <p className="text-instituto-text/80 leading-relaxed">
                        A atuação se estende ao bairro Jardim São Bernardo, com doações realizadas diretamente a famílias 
                        indicadas pela direção da WGL.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>

                {/* Junho 2022 */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2"></div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="bg-instituto-white rounded-2xl p-6 shadow-card">
                      <h3 className="text-xl font-bold text-instituto-primary mb-3">Junho de 2022 – Nova parceria nasce com a Aprisco</h3>
                      <p className="text-instituto-text/80 leading-relaxed">
                        Em apoio a Organização Aprisco, são realizadas entregas de alimentos no Jardim Gaivotas, 
                        ocupação com mais de 200 famílias. Rodas de conversas e acolhimentos comunitários fortalecem os vínculos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Setembro 2022 */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                    <div className="bg-instituto-white rounded-2xl p-6 shadow-card">
                      <h3 className="text-xl font-bold text-instituto-primary mb-3">Setembro de 2022 – Desafios e autonomia</h3>
                      <p className="text-instituto-text/80 leading-relaxed">
                        Dificuldades operacionais motivam a ruptura com a Aprisco e com apoio da voluntária Glória Gomes, 
                        inicia-se um trabalho independente, com base no cadastro de famílias em situação de extrema 
                        vulnerabilidade social da Prefeitura de São Paulo.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>

                {/* Outubro 2022 */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2"></div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="bg-instituto-white rounded-2xl p-6 shadow-card">
                      <h3 className="text-xl font-bold text-instituto-primary mb-3">Outubro de 2022 – Ação direta e contínua</h3>
                      <p className="text-instituto-text/80 leading-relaxed">
                        Começam as entregas mensais de cestas básicas, diretamente nas casas das famílias. 
                        Além das doações, inicia-se acompanhamento social e orientação sobre direitos e benefícios sociais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-instituto-secondary text-instituto-white px-6 py-3 rounded-full text-xl font-bold shadow-elevated">
                    2023
                  </div>
                </div>
                
                {/* Chegada de 2023 */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                    <div className="bg-instituto-white rounded-2xl p-6 shadow-card">
                      <h3 className="text-xl font-bold text-instituto-primary mb-3">Chegada do novo ano 2023 – Construção de um novo ciclo</h3>
                      <p className="text-instituto-text/80 leading-relaxed">
                        Com base nas vivências anteriores, o Instituto Energizando Vidas, amadurece a missão de promover 
                        autonomia das famílias atendidas. Define-se o foco: formação técnico-profissional, empoderamento e inclusão produtiva.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>

                {/* Julho 2023 */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2"></div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="bg-instituto-white rounded-2xl p-6 shadow-card">
                      <h3 className="text-xl font-bold text-instituto-primary mb-3">Julho de 2023 – Capacitação e futuro</h3>
                      <p className="text-instituto-text/80 leading-relaxed">
                        Lançamento da primeira capacitação gratuita, com foco em empreendedorismo e empregabilidade. 
                        A sede do Instituto Energizando Vidas, passa a ser polo de formação e transformação social.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Missão Definida */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                    <div className="bg-gradient-to-br from-instituto-primary to-instituto-secondary text-instituto-white rounded-2xl p-6 shadow-elevated">
                      <h3 className="text-xl font-bold mb-3">Definida a Missão do Instituto Energizando Vidas</h3>
                      <p className="mb-4">Promover dignidade, autonomia financeira e inclusão social por meio da:</p>
                      <ul className="text-left space-y-2">
                        <li>• Distribuição de cestas básicas</li>
                        <li>• Acompanhamento familiar</li>
                        <li>• Formação profissional e cidadã</li>
                        <li>• Estímulo ao empreendedorismo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-instituto-accent rounded-full border-4 border-instituto-white shadow-lg"></div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-instituto-accent text-instituto-primary px-6 py-3 rounded-full text-xl font-bold shadow-elevated">
                    2024
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-instituto-primary/5 to-instituto-secondary/5 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-instituto-primary mb-6 text-center">
                    Ano de 2024 - Um Ano de Impacto Ampliado
                  </h3>
                  <p className="text-instituto-text/80 text-center mb-8 text-lg">
                    Marcado por grandes desafios sociais, mas também por importantes conquistas através do trabalho coletivo.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-instituto-white rounded-xl p-6 shadow-card">
                      <h4 className="font-bold text-instituto-primary mb-3">Entregas de Cestas Básicas</h4>
                      <ul className="text-sm space-y-1 text-instituto-text/80">
                        <li>• 110 famílias beneficiadas a cada 2 meses</li>
                        <li>• Total distribuído: 660 cestas</li>
                        <li>• Parceria: Programa Cidade Solidária</li>
                        <li>• Gestão digital das informações</li>
                      </ul>
                    </div>
                    
                    <div className="bg-instituto-white rounded-xl p-6 shadow-card">
                      <h4 className="font-bold text-instituto-primary mb-3">Dia das Crianças</h4>
                      <ul className="text-sm space-y-1 text-instituto-text/80">
                        <li>• Evento realizado no pátio da WGL</li>
                        <li>• 126 crianças atendidas</li>
                        <li>• 100 voluntários engajados</li>
                      </ul>
                    </div>
                    
                    <div className="bg-instituto-white rounded-xl p-6 shadow-card">
                      <h4 className="font-bold text-instituto-primary mb-3">Apoio ao Rio Grande do Sul</h4>
                      <ul className="text-sm space-y-1 text-instituto-text/80">
                        <li>• Campanha de emergência</li>
                        <li>• 12 carretas com doações</li>
                        <li>• Mobilização via redes sociais</li>
                      </ul>
                    </div>
                    
                    <div className="bg-instituto-white rounded-xl p-6 shadow-card md:col-span-2 lg:col-span-3">
                      <h4 className="font-bold text-instituto-primary mb-3">Natal Solidário</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-instituto-text/80 mb-2">
                            <strong>Clube Ébanos (Capela do Socorro):</strong> 135 crianças
                          </p>
                          <p className="text-sm text-instituto-text/80">
                            <strong>EMEF Melli (Osasco):</strong> 246 crianças
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-instituto-text/80 mb-2">
                            <strong>Total:</strong> 381 kits natalinos distribuídos
                          </p>
                          <p className="text-sm text-instituto-text/80">
                            <strong>Atrações:</strong> brincadeiras, alimentação, kits da marca Terrinha, roupas e brinquedos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-instituto-accent/10 rounded-xl p-6 text-center">
                    <h4 className="font-bold text-instituto-primary mb-3">Impacto Geral em 2024</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-3xl font-bold text-instituto-primary">500</span>
                        <p className="text-instituto-text/80">Famílias impactadas diretamente</p>
                      </div>
                      <div>
                        <span className="text-3xl font-bold text-instituto-primary">507</span>
                        <p className="text-instituto-text/80">Crianças beneficiadas em eventos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2025 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-gradient-to-r from-instituto-primary to-instituto-accent text-instituto-white px-6 py-3 rounded-full text-xl font-bold shadow-elevated">
                    2025
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-instituto-primary to-instituto-secondary text-instituto-white rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Ano de 2025 - Novos Desafios e Ampliação da Missão
                  </h3>
                  
                  <div className="mb-8">
                    <p className="text-instituto-white/90 leading-relaxed mb-4">
                      O ano novo trouxe uma grande oportunidade de reflexão interna da Diretoria Executiva e voluntários 
                      do Instituto Energizando Vidas, que culminou na redefinição da estrutura de governança, 
                      procurando atender as normas emanadas das diversas legislações que regem o terceiro setor no Brasil.
                    </p>
                    <p className="text-instituto-white/90 leading-relaxed">
                      Com isso, foi necessária a contratação de consultora externa com forte conhecimento do setor social e, 
                      seguimos esperançosos e felizes por sentir desde já, as mudanças estratégicas deste ano de 2025.
                    </p>
                  </div>
                  
                  <div className="bg-instituto-white/10 rounded-xl p-6">
                    <h4 className="font-bold mb-4 text-instituto-accent">Principais metas para o novo ano:</h4>
                    <ul className="space-y-3 text-instituto-white/90">
                      <li>• Realizar ações sociais e desenvolver projetos de capacitação e geração de renda para fortalecer o atendimento às 157 famílias beneficiárias diretas</li>
                      <li>• Promover eventos temáticos (Festa Julina, Dia das Crianças, Natal) com integração comunitária</li>
                      <li>• Realizar ações de conscientização e saúde (como o Outubro Rosa)</li>
                      <li>• Implementar projetos de geração de renda e empregabilidade em parcerias com Mãos e Mentes Paulistanas, AeC, Padaria Artesanal e Container Social - Tapioca e Açaí da Esperança</li>
                      <li>• Mobilizar a comunidade para apoio e doações</li>
                      <li>• Reestruturar as ações procurando atender demandas específicas de promover o protagonismo nas famílias em extrema vulnerabilidade social da zona sul da cidade de São Paulo</li>
                      <li>• Implementar o Programa SELO CIDADANIA, visando atender 500 famílias por Polo a ser implementado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};