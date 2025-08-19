// Main Application Controller
class InstitutoApp {
    constructor() {
        this.init();
    }
    
    init() {
        // Initialize all components
        console.log('Instituto Energizando Vidas - Website Initialized');
        
        // Setup global event listeners
        this.setupGlobalEvents();
        
        // Initialize scroll to top functionality
        this.initializeScrollToTop();
        
        // Initialize smooth scrolling for internal links
        this.initializeSmoothScrolling();
        
        // Initialize accessibility features
        this.initializeAccessibility();
    }
    
    setupGlobalEvents() {
        // Handle window resize
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
        
        // Handle page visibility change
        document.addEventListener('visibilitychange', () => {
            this.handleVisibilityChange();
        });
        
        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => this.handleResize(), 500);
        });
    }
    
    handleResize() {
        // Recalculate canvas sizes if needed
        if (window.interactiveBackground) {
            window.interactiveBackground.resizeCanvas();
            window.interactiveBackground.initParticles();
        }
        
        // Update navigation if needed
        if (window.navigationController) {
            window.navigationController.closeMobileMenu();
        }
    }
    
    handleVisibilityChange() {
        if (document.hidden) {
            // Page is hidden, pause animations
            this.pauseAnimations();
        } else {
            // Page is visible, resume animations
            this.resumeAnimations();
        }
    }
    
    pauseAnimations() {
        // Pause background animations when page is not visible
        if (window.interactiveBackground && window.interactiveBackground.animationId) {
            cancelAnimationFrame(window.interactiveBackground.animationId);
        }
    }
    
    resumeAnimations() {
        // Resume background animations when page becomes visible
        if (window.interactiveBackground) {
            window.interactiveBackground.animate();
        }
    }
    
    initializeScrollToTop() {
        // Create scroll to top button
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '<i data-lucide="chevron-up"></i>';
        scrollButton.className = 'fixed bottom-8 right-8 z-40 bg-instituto-accent text-instituto-primary p-3 rounded-full shadow-elevated opacity-0 transition-all duration-300 hover:scale-110';
        scrollButton.id = 'scroll-to-top';
        scrollButton.style.transform = 'translateY(100px)';
        
        document.body.appendChild(scrollButton);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollButton.style.opacity = '1';
                scrollButton.style.transform = 'translateY(0)';
            } else {
                scrollButton.style.opacity = '0';
                scrollButton.style.transform = 'translateY(100px)';
            }
        });
        
        // Scroll to top on click
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Initialize icon
        lucide.createIcons();
    }
    
    initializeSmoothScrolling() {
        // Add smooth scrolling to all internal links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
    
    initializeAccessibility() {
        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            // Skip to main content with Alt+M
            if (e.altKey && e.key === 'm') {
                e.preventDefault();
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.focus();
                    mainContent.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Skip to navigation with Alt+N
            if (e.altKey && e.key === 'n') {
                e.preventDefault();
                const navigation = document.getElementById('navigation');
                if (navigation) {
                    const firstNavLink = navigation.querySelector('button, a');
                    if (firstNavLink) {
                        firstNavLink.focus();
                    }
                }
            }
        });
        
        // Add focus visible styles
        const style = document.createElement('style');
        style.textContent = `
            .focus-visible {
                outline: 2px solid hsl(85, 95%, 56%);
                outline-offset: 2px;
            }
            
            button:focus-visible,
            a:focus-visible,
            input:focus-visible,
            textarea:focus-visible,
            select:focus-visible {
                outline: 2px solid hsl(85, 95%, 56%);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Utility function for debouncing
    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }
    
    // Utility function for throttling
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Global utility functions
window.utils = {
    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount);
    },
    
    // Format date
    formatDate(date) {
        return new Intl.DateTimeFormat('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },
    
    // Validate email
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Validate phone
    validatePhone(phone) {
        const re = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        return re.test(phone);
    },
    
    // Animate element
    animateElement(element, animation, duration = 1000) {
        element.style.animation = `${animation} ${duration}ms ease-out forwards`;
        
        return new Promise(resolve => {
            setTimeout(() => {
                element.style.animation = '';
                resolve();
            }, duration);
        });
    },
    
    // Load image with loading state
    loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }
};

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.institutoApp = new InstitutoApp();
});

// Handle any unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});

// Handle any JavaScript errors
window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);
});