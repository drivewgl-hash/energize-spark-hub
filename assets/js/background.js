// Interactive Background with Particles
class InteractiveBackground {
    constructor() {
        this.canvas = document.getElementById('background-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0, radius: 150 };
        this.animationId = null;
        
        this.particleColor = 'rgba(154, 247, 34, 0.5)';
        this.particleCount = 80;
        
        this.init();
        this.setupEventListeners();
    }
    
    init() {
        this.resizeCanvas();
        this.initParticles();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.mouse.radius = (this.canvas.height / 110) * (this.canvas.width / 110);
    }
    
    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            const size = Math.random() * 2 + 1;
            const x = Math.random() * (this.canvas.width - size * 2) + size;
            const y = Math.random() * (this.canvas.height - size * 2) + size;
            const directionX = (Math.random() * 0.4) - 0.2;
            const directionY = (Math.random() * 0.4) - 0.2;
            
            this.particles.push({
                x,
                y,
                directionX,
                directionY,
                size,
                color: this.particleColor
            });
        }
    }
    
    drawParticle(particle) {
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fillStyle = particle.color;
        this.ctx.fill();
    }
    
    updateParticle(particle) {
        if (particle.x > this.canvas.width || particle.x < 0) {
            particle.directionX = -particle.directionX;
        }
        if (particle.y > this.canvas.height || particle.y < 0) {
            particle.directionY = -particle.directionY;
        }

        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouse.radius + particle.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = this.mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * 3;
            const directionY = forceDirectionY * force * 3;

            particle.x -= directionX;
            particle.y -= directionY;
        }

        particle.x += particle.directionX;
        particle.y += particle.directionY;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            this.updateParticle(particle);
            this.drawParticle(particle);
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.initParticles();
        });
        
        window.addEventListener('mousemove', (event) => {
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY;
        });
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.resizeCanvas);
        window.removeEventListener('mousemove', this.handleMouseMove);
    }
}

// Initialize background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.interactiveBackground = new InteractiveBackground();
});