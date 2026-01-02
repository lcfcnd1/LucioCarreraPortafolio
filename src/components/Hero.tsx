import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Hero = () => {
  const { t } = useTranslation();
  const [glowingCell, setGlowingCell] = useState<number | null>(null);
  
  // Calculate grid based on screen size
  const cols = 30;
  const rows = 15;
  const totalCells = cols * rows;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowingCell(Math.floor(Math.random() * totalCells));
    }, 1200);

    return () => clearInterval(interval);
  }, [totalCells]);

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background grid with glowing cells */}
      <div 
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalCells }).map((_, index) => (
          <div
            key={index}
            className={`border border-foreground/[0.04] transition-all duration-700 ${
              glowingCell === index 
                ? 'bg-primary/25 shadow-[0_0_20px_hsl(var(--primary)/0.5)]' 
                : 'bg-transparent'
            }`}
          />
        ))}
      </div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>
      
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
            <span className="text-primary">&gt;</span> {t('hero.title')}
          </p>
          
          <p className="text-muted-foreground/70 mt-4 max-w-md animate-fade-up animation-delay-300">
            {t('hero.description')}
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-fade-in animation-delay-600"
        aria-label="Ir a la sección Sobre mí"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
