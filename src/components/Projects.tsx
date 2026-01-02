import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      key: "ecommerce",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=70&fm=webp",
    },
    {
      key: "dashboard",
      tags: ["TypeScript", "Next.js", "D3.js", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70&fm=webp",
    },
    {
      key: "management",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=70&fm=webp",
    },
    {
      key: "booking",
      tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=70&fm=webp",
    },
    {
      key: "fintech",
      tags: ["React", "GraphQL", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=70&fm=webp",
    },
    {
      key: "social",
      tags: ["Angular", "NestJS", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=70&fm=webp",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">// {t('projects.subtitle')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            {t('projects.heading')} <span className="text-gradient">{t('projects.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article 
              key={project.key}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(`projects.items.${project.key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {t(`projects.items.${project.key}.description`)}
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
