import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight, BarChart3, Bot, CalendarDays, Layers3, ShoppingBag, Sparkles, Users } from "lucide-react";

const items=[
  ["ecommerce","/demo/ecommerce",ShoppingBag,"#d2ff52","Commerce"],["dashboard","/demo/dashboard",BarChart3,"#8172ff","Analytics"],
  ["management","/demo/management",Layers3,"#ff9456","Productivity"],["booking","/demo/booking",CalendarDays,"#d96b5d","Booking"],
  ["automation","/demo/automation",Bot,"#a8ff56","AI Agents"],["social","/demo/social",Users,"#ff6452","Content"],
] as const;

const Preview=({type,accent}:{type:string;accent:string})=><div className={`work-preview wp-${type.toLowerCase()}`} style={{"--wa":accent} as React.CSSProperties}>
  <header><i/><i/><i/><span/></header><aside><b/><b/><b/><b/></aside><main><h4/><p/><section><i/><i/><i/></section><div><i/><i/><i/><i/><i/><i/></div></main><em/>
</div>;

export default function Projects(){
  const {t}=useTranslation();
  return <section id="projects" className="work-section"><div className="work-wrap">
    <header className="work-heading"><div><span><Sparkles size={14}/>{t("projects.subtitle")}</span><h2>{t("projects.heading")} <em>{t("projects.headingHighlight")}</em></h2></div><p>{t("projects.description")}</p></header>
    <div className="work-grid">{items.map(([key,url,Icon,accent,type],i)=><Link to={url} className="work-card" key={key}>
      <header><span>0{i+1}</span><b>Abrir demo <ArrowUpRight size={15}/></b></header><Preview type={type} accent={accent}/>
      <section><i style={{background:accent}}><Icon size={18}/></i><div><h3>{t(`projects.items.${key}.title`)}</h3><p>{t(`projects.items.${key}.description`)}</p></div></section>
      <footer><span>{type}</span><span>React</span><span>Responsive</span></footer>
    </Link>)}</div>
  </div></section>
}
