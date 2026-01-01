

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma completa de comercio electrónico con gestión de inventario, pagos integrados y panel de administración.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    },
    {
      title: "Dashboard Analytics",
      description: "Sistema de análisis de datos en tiempo real con visualizaciones interactivas y reportes automatizados.",
      tags: ["TypeScript", "Next.js", "D3.js", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "App de Gestión",
      description: "Aplicación de gestión empresarial con módulos de RRHH, finanzas y CRM integrados.",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Sistema de Reservas",
      description: "Plataforma de reservas online para restaurantes con calendario interactivo y notificaciones en tiempo real.",
      tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
    {
      title: "Fintech App",
      description: "Aplicación financiera con seguimiento de gastos, presupuestos inteligentes y análisis de inversiones.",
      tags: ["React", "GraphQL", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    },
    {
      title: "Social Media Dashboard",
      description: "Panel de control para gestión de redes sociales con programación de posts y métricas unificadas.",
      tags: ["Angular", "NestJS", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">// PROYECTOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Trabajo <span className="text-gradient">destacado</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi capacidad para entregar 
            soluciones completas y de alta calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
