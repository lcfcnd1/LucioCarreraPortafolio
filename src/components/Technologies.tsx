import { useTranslation } from "react-i18next";

const Technologies = () => {
  const { t } = useTranslation();
  
  const techCategories = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    },
    {
      title: "DevOps & Tools",
      items: ["Docker", "AWS", "Git", "CI/CD", "Vercel"],
    },
    {
      title: "IA",
      items: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face"],
    },
  ];

  return (
    <section id="tech" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">// {t('technologies.subtitle')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            {t('technologies.heading')} <span className="text-gradient">{t('technologies.headingHighlight')}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('technologies.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-primary text-sm mb-4 pb-3 border-b border-border/50">
                {`{${category.title}}`}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, index) => (
                  <li 
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:w-2 group-hover:h-2 transition-all" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
