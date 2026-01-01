import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [glowingCells, setGlowingCells] = useState<number[]>([]);
  
  useEffect(() => {
    const totalCells = 80; // Approximate number of visible cells
    
    const interval = setInterval(() => {
      // Randomly select 2-4 cells to glow
      const numCells = Math.floor(Math.random() * 3) + 2;
      const newGlowing: number[] = [];
      for (let i = 0; i < numCells; i++) {
        newGlowing.push(Math.floor(Math.random() * totalCells));
      }
      setGlowingCells(newGlowing);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Generate grid cells
  const gridCells = Array.from({ length: 80 }, (_, i) => i);

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background grid with glowing cells */}
      <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-10 lg:grid-cols-16 gap-0">
        {gridCells.map((index) => (
          <div
            key={index}
            className={`border border-foreground/[0.03] transition-all duration-1000 ${
              glowingCells.includes(index) 
                ? 'bg-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.4)]' 
                : 'bg-transparent'
            }`}
            style={{ aspectRatio: '1' }}
          />
        ))}
      </div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      
      {/* Terminal window */}
      <div className="relative z-10 glass-card p-1 max-w-2xl w-full animate-fade-up">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
          <span className="ml-4 text-muted-foreground text-sm font-mono">terminal</span>
        </div>
        
        {/* Terminal content */}
        <div className="p-8 md:p-12">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-primary">$</span> whoami
          </div>
          
          <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Lucio Carrera</span>
            <span className="inline-block w-[3px] h-10 md:h-14 bg-primary ml-2 align-middle animate-blink" />
          </h1>
          
          <p className="font-mono text-lg md:text-xl text-muted-foreground mt-6 animate-fade-up animation-delay-200">
            <span className="text-primary">&gt;</span> Desarrollador Full Stack
          </p>
          
          <p className="text-muted-foreground/70 mt-4 max-w-md animate-fade-up animation-delay-300">
            Transformando ideas en soluciones digitales de alto impacto
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-fade-in animation-delay-600"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
