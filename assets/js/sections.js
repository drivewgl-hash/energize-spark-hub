// Sections Controller
class SectionsController {
    constructor() {
        this.mainContent = document.getElementById('main-content');
        this.currentSection = 'inicio';
        this.loadSection('inicio');
    }
    
    async loadSection(sectionId) {
        this.currentSection = sectionId;
        
        try {
            const response = await fetch(`sections/${sectionId}.php`);
            if (!response.ok) {
                throw new Error(`Failed to load section: ${sectionId}`);
            }
            
            const html = await response.text();
            this.mainContent.innerHTML = html;
            
            // Initialize section-specific JavaScript
            this.initializeSectionJS(sectionId);
            
            // Re-initialize Lucide icons
            lucide.createIcons();
            
        } catch (error) {
            console.error('Error loading section:', error);
            this.mainContent.innerHTML = `
                <div class="min-h-screen flex items-center justify-center">
                    <div class="text-center">
                        <h2 class="text-2xl font-bold text-instituto-primary mb-4">Erro ao carregar seção</h2>
                        <p class="text-instituto-text/70">Não foi possível carregar o conteúdo solicitado.</p>
                        <button onclick="navigateToSection('inicio')" class="btn-cta mt-4">
                            Voltar ao Início
                        </button>
                    </div>
                </div>
            `;
        }
    }
    
    initializeSectionJS(sectionId) {
        switch (sectionId) {
            case 'inicio':
                this.initializeHeroSection();
                this.initializeAboutSection();
                break;
            case 'projetos':
                this.initializeProjectsSection();
                break;
            case 'parcerias':
                this.initializePartnershipsSection();
                break;
            case 'transparencia':
                this.initializeTransparencySection();
                break;
            case 'faca-parte':
                this.initializeJoinUsSection();
                break;
            case 'recompensas':
                this.initializeRewardsSection();
                break;
            case 'contatos':
                this.initializeContactSection();
                break;
        }
    }
    
    initializeHeroSection() {
        // Hero section animations and interactions
        const heroElements = document.querySelectorAll('.animate-float');
        heroElements.forEach(element => {
            element.style.animationDelay = Math.random() * 2 + 's';
        });
    }
    
    initializeAboutSection() {
        // About section intersection observer for animations
        this.setupIntersectionObserver('.animate-fade-in-up');
    }
    
    initializeProjectsSection() {
        // Projects section intersection observer
        this.setupIntersectionObserver('.project-card', (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }, index * 150);
                }
            });
        });
    }
    
    initializePartnershipsSection() {
        // Initialize partnerships canvas
        this.initializePartnershipsCanvas();
        this.setupIntersectionObserver('.partner-card');
    }
    
    initializeTransparencySection() {
        // Transparency section animations
        this.setupIntersectionObserver('.document-card', (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }, index * 150);
                }
            });
        });
    }
    
    initializeJoinUsSection() {
        // Initialize tabs
        this.initializeTabs();
        
        // Initialize accordion
        this.initializeAccordion();
    }
    
    initializeRewardsSection() {
        // Rewards section animations
        this.setupIntersectionObserver('.reward-card');
    }
    
    initializeContactSection() {
        // Contact form validation and submission
        this.initializeContactForm();
    }
    
    initializePartnershipsCanvas() {
        const canvas = document.getElementById('partnerships-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const particles = [];
        
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
    }
    
    initializeTabs() {
        const tabTriggers = document.querySelectorAll('.tab-trigger');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const targetTab = trigger.getAttribute('data-tab');
                
                // Remove active class from all triggers and contents
                tabTriggers.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked trigger and corresponding content
                trigger.classList.add('active');
                document.getElementById(targetTab)?.classList.add('active');
            });
        });
    }
    
    initializeAccordion() {
        const accordionButtons = document.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetContent = button.nextElementSibling;
                const isOpen = button.classList.contains('active');
                
                // Close all accordions
                accordionButtons.forEach(btn => {
                    btn.classList.remove('active');
                    const content = btn.nextElementSibling;
                    if (content) {
                        content.classList.add('max-h-0', 'opacity-0');
                        content.classList.remove('max-h-96', 'opacity-100');
                    }
                });
                
                // Open clicked accordion if it wasn't open
                if (!isOpen && targetContent) {
                    button.classList.add('active');
                    targetContent.classList.remove('max-h-0', 'opacity-0');
                    targetContent.classList.add('max-h-96', 'opacity-100');
                }
            });
        });
    }
    
    initializeContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.innerHTML = '<span class="loading"></span> Enviando...';
            submitButton.disabled = true;
            
            try {
                const response = await fetch('contact-handler.php', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Show success message
                    this.showNotification('Mensagem enviada com sucesso!', 'success');
                    form.reset();
                } else {
                    // Show error message
                    this.showNotification(result.message || 'Erro ao enviar mensagem', 'error');
                }
            } catch (error) {
                this.showNotification('Erro ao enviar mensagem', 'error');
            } finally {
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }
    
    setupIntersectionObserver(selector, callback = null) {
        const elements = document.querySelectorAll(selector);
        
        const observer = new IntersectionObserver((entries) => {
            if (callback) {
                callback(entries);
            } else {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-fade-in-up');
                        }, index * 150);
                    }
                });
            }
        }, { threshold: 0.2 });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg text-white font-semibold transition-all duration-300 transform translate-x-full ${
            type === 'success' ? 'bg-green-600' : 
            type === 'error' ? 'bg-red-600' : 
            'bg-blue-600'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Hide notification after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
}

// Initialize sections controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.sectionsController = new SectionsController();
});