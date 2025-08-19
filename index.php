<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instituto Energizando Vidas - Transformando comunidades através da educação e solidariedade</title>
    <meta name="description" content="O Instituto Energizando Vidas atua na transformação de comunidades através de projetos educacionais, assistência social e desenvolvimento comunitário em São Paulo." />
    <meta name="author" content="Instituto Energizando Vidas" />
    <meta name="keywords" content="instituto, ong, educação, assistência social, projetos sociais, São Paulo, Jurubatuba, comunidade" />

    <meta property="og:title" content="Instituto Energizando Vidas - Transformando Comunidades" />
    <meta property="og:description" content="Conheça nossos projetos educacionais e sociais que transformam vidas em São Paulo. Faça parte desta missão!" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/styles.css">
    
    <!-- Tailwind Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'poppins': ['Poppins', 'sans-serif'],
                    },
                    colors: {
                        'instituto': {
                            'primary': 'hsl(223, 100%, 13%)',
                            'secondary': 'hsl(212, 97%, 40%)',
                            'accent': 'hsl(85, 95%, 56%)',
                            'text': 'hsl(223, 100%, 13%)',
                            'text-light': 'hsl(210, 17%, 95%)',
                            'white': 'hsl(0, 0%, 100%)',
                            'background': 'hsl(210, 17%, 95%)',
                        }
                    },
                    backgroundImage: {
                        'gradient-hero': 'linear-gradient(45deg, hsl(223, 100%, 13%), hsl(212, 97%, 40%))',
                        'gradient-primary': 'linear-gradient(135deg, hsl(223, 100%, 13%), hsl(212, 97%, 40%))',
                        'gradient-accent': 'linear-gradient(135deg, hsl(85, 95%, 56%), hsl(85, 85%, 66%))',
                    },
                    boxShadow: {
                        'card': '0 15px 35px rgba(0, 0, 0, 0.08)',
                        'elevated': '0 20px 40px rgba(0, 0, 0, 0.1)',
                        'glow': '0 0 40px hsl(85deg 95% 56% / 0.3)',
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-instituto-background text-instituto-text font-poppins">
    <!-- Interactive Background Canvas -->
    <canvas id="background-canvas" class="fixed inset-0 z-0 pointer-events-none"></canvas>
    
    <!-- Navigation -->
    <header id="navigation" class="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div class="container mx-auto px-4 flex items-center justify-between h-20 lg:h-24">
            <!-- Logo -->
            <button onclick="navigateToSection('inicio')" class="flex items-center transition-transform duration-300 hover:scale-105">
                <img 
                    src="https://i.ibb.co/nNDK7jV/logo.png" 
                    alt="Instituto Energizando Vidas" 
                    id="logo-img"
                    class="transition-all duration-300 h-16 lg:h-18"
                />
            </button>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-8">
                <button onclick="navigateToSection('inicio')" data-section="inicio" class="nav-link relative font-semibold text-sm xl:text-base transition-colors duration-300 text-instituto-text-light hover:text-instituto-accent interactive-underline">
                    Página Inicial
                </button>
                <button onclick="navigateToSection('projetos')" data-section="projetos" class="nav-link relative font-semibold text-sm xl:text-base transition-colors duration-300 text-instituto-text-light hover:text-instituto-accent interactive-underline">
                    Nossos Projetos
                </button>
                <button onclick="navigateToSection('parcerias')" data-section="parcerias" class="nav-link relative font-semibold text-sm xl:text-base transition-colors duration-300 text-instituto-text-light hover:text-instituto-accent interactive-underline">
                    Parcerias
                </button>
                <button onclick="navigateToSection('transparencia')" data-section="transparencia" class="nav-link relative font-semibold text-sm xl:text-base transition-colors duration-300 text-instituto-text-light hover:text-instituto-accent interactive-underline">
                    Transparência
                </button>
                <button onclick="navigateToSection('faca-parte')" data-section="faca-parte" class="nav-link relative font-semibold text-sm xl:text-base transition-colors duration-300 text-instituto-text-light hover:text-instituto-accent interactive-underline">
                    Faça Parte
                </button>
                <button onclick="navigateToSection('recompensas')" data-section="recompensas" class="nav-link relative font-semibold text-sm xl:text-base transition-colors duration-300 text-instituto-text-light hover:text-instituto-accent interactive-underline">
                    Nossa Loja de Recompensas
                </button>
                <button onclick="navigateToSection('contatos')" data-section="contatos" class="nav-link relative font-semibold text-sm xl:text-base transition-colors duration-300 text-instituto-text-light hover:text-instituto-accent interactive-underline">
                    Contatos
                </button>
            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="lg:hidden text-instituto-text-light hover:text-instituto-accent">
                <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="lg:hidden absolute top-full left-0 w-full bg-instituto-white shadow-elevated transition-all duration-300 overflow-hidden max-h-0 opacity-0">
            <nav class="py-4">
                <button onclick="navigateToSection('inicio')" class="mobile-nav-link block w-full text-left px-6 py-3 font-semibold transition-colors duration-300 text-instituto-text hover:text-instituto-accent hover:bg-instituto-background">
                    Página Inicial
                </button>
                <button onclick="navigateToSection('projetos')" class="mobile-nav-link block w-full text-left px-6 py-3 font-semibold transition-colors duration-300 text-instituto-text hover:text-instituto-accent hover:bg-instituto-background">
                    Nossos Projetos
                </button>
                <button onclick="navigateToSection('parcerias')" class="mobile-nav-link block w-full text-left px-6 py-3 font-semibold transition-colors duration-300 text-instituto-text hover:text-instituto-accent hover:bg-instituto-background">
                    Parcerias
                </button>
                <button onclick="navigateToSection('transparencia')" class="mobile-nav-link block w-full text-left px-6 py-3 font-semibold transition-colors duration-300 text-instituto-text hover:text-instituto-accent hover:bg-instituto-background">
                    Transparência
                </button>
                <button onclick="navigateToSection('faca-parte')" class="mobile-nav-link block w-full text-left px-6 py-3 font-semibold transition-colors duration-300 text-instituto-text hover:text-instituto-accent hover:bg-instituto-background">
                    Faça Parte
                </button>
                <button onclick="navigateToSection('recompensas')" class="mobile-nav-link block w-full text-left px-6 py-3 font-semibold transition-colors duration-300 text-instituto-text hover:text-instituto-accent hover:bg-instituto-background">
                    Nossa Loja de Recompensas
                </button>
                <button onclick="navigateToSection('contatos')" class="mobile-nav-link block w-full text-left px-6 py-3 font-semibold transition-colors duration-300 text-instituto-text hover:text-instituto-accent hover:bg-instituto-background">
                    Contatos
                </button>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main id="main-content" class="relative z-10">
        <!-- All sections will be loaded here -->
    </main>

    <!-- Footer -->
    <footer class="bg-instituto-primary text-instituto-text-light py-16">
        <div class="container mx-auto px-4">
            <div class="space-y-12">
                <!-- Logo & Mission - Centralizado -->
                <div class="lg:col-span-4 flex flex-col items-center text-center mb-8">
                    <button onclick="navigateToSection('inicio')" class="block mb-6 transition-transform duration-300 hover:scale-105">
                        <img 
                            src="https://i.ibb.co/nNDK7jV/logo.png"
                            alt="Instituto Energizando Vidas"
                            class="h-24 w-auto mx-auto border-4 border-instituto-white rounded-xl shadow-elevated"
                        />
                    </button>
                    <p class="text-instituto-text-light/80 leading-relaxed mb-6 max-w-2xl">
                        Transformando comunidades através da educação, cultura e solidariedade há mais de uma década.
                    </p>
                    <div class="flex justify-center">
                        <a 
                            href="https://www.instagram.com/energizandovidasinstituto" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="text-instituto-text-light hover:text-instituto-accent transition-all duration-300 p-3 border-4 border-instituto-white rounded-full hover:bg-instituto-white hover:text-instituto-primary shadow-elevated"
                            title="Siga-nos no Instagram"
                        >
                            <i data-lucide="instagram" class="w-8 h-8"></i>
                        </a>
                    </div>
                </div>

                <div class="grid lg:grid-cols-3 gap-8">
                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-xl font-bold text-instituto-accent mb-6">
                            Navegação
                        </h4>
                        <nav class="space-y-3">
                            <button onclick="navigateToSection('inicio')" class="block text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300">
                                Página Inicial
                            </button>
                            <button onclick="navigateToSection('projetos')" class="block text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300">
                                Nossos Projetos
                            </button>
                            <button onclick="navigateToSection('parcerias')" class="block text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300">
                                Parcerias
                            </button>
                            <button onclick="navigateToSection('transparencia')" class="block text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300">
                                Transparência
                            </button>
                            <button onclick="navigateToSection('faca-parte')" class="block text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300">
                                Faça Parte
                            </button>
                            <button onclick="navigateToSection('recompensas')" class="block text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300">
                                Nossa Loja de Recompensas
                            </button>
                            <button onclick="navigateToSection('contatos')" class="block text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300">
                                Contatos
                            </button>
                        </nav>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="text-xl font-bold text-instituto-accent mb-6">
                            Contato
                        </h4>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <i data-lucide="map-pin" class="w-5 h-5 text-instituto-accent mr-3 mt-1 flex-shrink-0"></i>
                                <div>
                                    <p class="text-instituto-text-light/80 leading-relaxed">
                                        Av. Salim Antônio Curiati, 136, sala 3<br />
                                        Jurubatuba, São Paulo - SP<br />
                                        CEP: 04690-050
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex items-center">
                                <i data-lucide="clock" class="w-5 h-5 text-instituto-accent mr-3 flex-shrink-0"></i>
                                <div>
                                    <p class="text-instituto-text-light/80">
                                        <strong>Funcionamento:</strong><br />
                                        Segunda a Sexta, 08h - 18h
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <i data-lucide="mail" class="w-5 h-5 text-instituto-accent mr-3 flex-shrink-0"></i>
                                <a 
                                    href="mailto:contato@energizandovidas.org.br" 
                                    class="text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300"
                                >
                                    contato@energizandovidas.org.br
                                </a>
                            </div>

                            <div class="flex items-center">
                                <i data-lucide="phone" class="w-5 h-5 text-instituto-accent mr-3 flex-shrink-0"></i>
                                <a 
                                    href="tel:+5511555524999" 
                                    class="text-instituto-text-light/80 hover:text-instituto-accent transition-colors duration-300"
                                >
                                    (11) 5555-2499
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Location Map -->
                    <div>
                        <h4 class="text-xl font-bold text-instituto-accent mb-6">
                            Nossa Localização
                        </h4>
                        <div class="rounded-lg overflow-hidden shadow-card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.778229411293!2d-46.71185622374362!3d-23.64790006437934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5114067a518d%3A0x7952c13a301a1e0b!2sAv.%20Salim%20Ant%C3%B4nio%20Curiati%2C%20136%20-%20Jurubatuba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004690-050!5e0!3m2!1spt-BR!2sbr!4v1723741433063!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="200"
                                style="border: 0"
                                allowfullscreen
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Localização do Instituto Energizando Vidas">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-instituto-text-light/20 pt-8 text-center">
                <p class="text-instituto-text-light/70">
                    &copy; 2024 Instituto Energizando Vidas. Todos os direitos reservados.
                </p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="assets/js/background.js"></script>
    <script src="assets/js/navigation.js"></script>
    <script src="assets/js/sections.js"></script>
    <script src="assets/js/main.js"></script>
    
    <!-- Initialize Lucide Icons -->
    <script>
        lucide.createIcons();
    </script>
</body>
</html>