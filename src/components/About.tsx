import { Code2, Rocket, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Code2, value: "50+", label: t('about.stats.projects') },
    { icon: Users, value: "30+", label: t('about.stats.clients') },
    { icon: Rocket, value: "5+", label: t('about.stats.experience') },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="font-mono text-primary text-sm tracking-wider">// {t('about.subtitle')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              {t('about.heading')} 
              <span className="text-gradient"> {t('about.headingHighlight')}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t('about.description')}
              </p>
              <p>
                {t('about.paragraph2')}
              </p>
              <p>
                {t('about.paragraph3')}
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
