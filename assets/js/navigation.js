// Navigation Controller
class NavigationController {
    constructor() {
        this.currentSection = 'inicio';
        this.isScrolled = false;
        this.isHidden = false;
        this.lastScrollY = 0;
        this.isMobileMenuOpen = false;
        
        this.setupEventListeners();
        this.updateActiveNavigation();
    }
    
    setupEventListeners() {
        // Scroll events
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn?.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Escape key to reset to inicio
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.navigateToSection('inicio');
            }
        });
    }
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        const navigation = document.getElementById('navigation');
        const logoImg = document.getElementById('logo-img');
        
        // Update scrolled state
        this.isScrolled = currentScrollY > 50;
        
        // Update hidden state
        if (currentScrollY > this.lastScrollY && currentScrollY > 90) {
            this.isHidden = true;
        } else {
            this.isHidden = false;
        }
        
        // Apply classes
        if (this.isScrolled) {
            navigation.classList.add('nav-scrolled');
            logoImg.classList.add('h-14');
            logoImg.classList.remove('h-16', 'lg:h-18');
        } else {
            navigation.classList.remove('nav-scrolled');
            logoImg.classList.remove('h-14');
            logoImg.classList.add('h-16', 'lg:h-18');
        }
        
        if (this.isHidden) {
            navigation.classList.add('nav-hidden');
        } else {
            navigation.classList.remove('nav-hidden');
        }
        
        this.lastScrollY = currentScrollY;
    }
    
    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.querySelector('#mobile-menu-btn i');
        
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        
        if (this.isMobileMenuOpen) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-96', 'opacity-100');
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            mobileMenu.classList.remove('max-h-96', 'opacity-100');
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        
        // Re-initialize Lucide icons
        lucide.createIcons();
    }
    
    navigateToSection(sectionId) {
        this.currentSection = sectionId;
        this.updateActiveNavigation();
        this.closeMobileMenu();
        window.scrollTo(0, 0);
        
        // Load section content
        window.sectionsController?.loadSection(sectionId);
    }
    
    closeMobileMenu() {
        if (this.isMobileMenuOpen) {
            this.toggleMobileMenu();
        }
    }
    
    updateActiveNavigation() {
        // Update desktop navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const section = link.getAttribute('data-section');
            if (section === this.currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Update mobile navigation
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            if (link.textContent.trim() === this.getSectionLabel(this.currentSection)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    getSectionLabel(sectionId) {
        const labels = {
            'inicio': 'Página Inicial',
            'projetos': 'Nossos Projetos',
            'parcerias': 'Parcerias',
            'transparencia': 'Transparência',
            'faca-parte': 'Faça Parte',
            'recompensas': 'Nossa Loja de Recompensas',
            'contatos': 'Contatos'
        };
        return labels[sectionId] || sectionId;
    }
}

// Global navigation function
function navigateToSection(sectionId) {
    window.navigationController?.navigateToSection(sectionId);
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.navigationController = new NavigationController();
});