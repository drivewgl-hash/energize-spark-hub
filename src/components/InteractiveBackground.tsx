import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
}

interface InteractiveBackgroundProps {
  className?: string;
  particleColor?: string;
  particleCount?: number;
}

export const InteractiveBackground = ({ 
  className = "fixed inset-0 z-0", 
  particleColor = "rgba(154, 247, 34, 0.5)",
  particleCount = 80
}: InteractiveBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouseRef.current.radius = (canvas.height / 110) * (canvas.width / 110);
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        
        particlesRef.current.push({
          x,
          y,
          directionX,
          directionY,
          size,
          color: particleColor
        });
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    const updateParticle = (particle: Particle) => {
      if (particle.x > canvas.width || particle.x < 0) {
        particle.directionX = -particle.directionX;
      }
      if (particle.y > canvas.height || particle.y < 0) {
        particle.directionY = -particle.directionY;
      }

      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseRef.current.radius + particle.size) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouseRef.current.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * 3;
        const directionY = forceDirectionY * force * 3;

        particle.x -= directionX;
        particle.y -= directionY;
      }

      particle.x += particle.directionX;
      particle.y += particle.directionY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particleColor, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ pointerEvents: 'none' }}
    />
  );
};