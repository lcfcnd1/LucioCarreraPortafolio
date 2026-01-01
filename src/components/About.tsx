import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code2, value: "50+", label: "Proyectos completados" },
    { icon: Users, value: "30+", label: "Clientes satisfechos" },
    { icon: Rocket, value: "5+", label: "Años de experiencia" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="font-mono text-primary text-sm tracking-wider">// SOBRE MÍ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Desarrollo soluciones que 
              <span className="text-gradient"> impulsan negocios</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador apasionado por crear experiencias digitales excepcionales. 
                Mi enfoque combina código limpio, diseño intuitivo y las mejores prácticas de la industria.
              </p>
              <p>
                Trabajo con startups y empresas establecidas para transformar sus visiones en 
                productos digitales que generan resultados reales. Cada proyecto es una oportunidad 
                para superar expectativas.
              </p>
              <p>
                Mi compromiso: entregar soluciones escalables, mantenibles y que realmente 
                resuelvan problemas de negocio.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-card p-6 flex items-center gap-6 hover:border-primary/30 transition-colors group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
