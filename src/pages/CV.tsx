import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getIcon } from "@/lib/icon-map";
import { Progress } from "@/components/ui/progress";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface CVData {
  informacion_personal: {
    nombre: string;
    titulo: string;
    resumen: string;
    detalles: {
      campo: string;
      valor: string;
      icono: string;
    }[];
  };
  contacto: {
    datos: {
      plataforma: string;
      valor: string;
      icono: string;
    }[];
  };
   redes_sociales: {
    datos: {
      plataforma: string;
      usuario: string;
      icono: string;
    }[];
  };
  perfil_personal: {
    items: {
      habilidad: string;
      icono: string;
    }[];
  };
  experiencia: {
    trabajos: {
      empresa: string;
      periodo: string;
      puesto: string;
      responsabilidades: string[];
    }[];
  };
  habilidades: {
    tecnicas: {
      items: {
        tecnologia: string;
        experiencia: string;
      }[];
    };
    blandas: {
      items: string[];
    };
     otras_habilidades: {
        items: {
            habilidad: string;
            icono: string;
        }[];
    };
  };
  formacion_academica: {
    items: {
      institucion: string;
      titulo: string;
    }[];
  };
  idiomas: {
    items: {
      idioma: string;
      nivel: string;
    }[];
  };
  hobbies: {
    items: {
        nombre: string;
        icono: string;
    }[];
  };
    secciones_adicionales: {
        items: {
            titulo: string;
            texto: string;
            icono: string;
        }[];
    };
}

const CV = () => {
  const { t, i18n } = useTranslation();
  const [cvData, setCvData] = useState<CVData | null>(null);

  useEffect(() => {
    const lang = i18n.language.split('-')[0];
    const file = lang === 'es' ? 'luciocarreracv.json' : 'luciocarreracv.en.json';
    fetch(`/${file}`)
      .then((res) => res.json())
      .then((data) => setCvData(data));
  }, [i18n.language]);

  if (!cvData) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Cargando...</div>;
  }

  const {
    informacion_personal,
    contacto,
    redes_sociales,
    perfil_personal,
    experiencia,
    habilidades,
    formacion_academica,
    idiomas,
    hobbies,
    secciones_adicionales,
  } = cvData;

  const maxExperience = Math.max(...habilidades.tecnicas.items.map(skill => parseInt(skill.experiencia)));

  const getContactLink = (plataforma: string, valor: string) => {
    if (plataforma === "E-mail") return `mailto:${valor}`;
    if (plataforma === "WhatsApp") return `https://wa.me/${valor.replace('+', '')}`;
    return `tel:${valor}`;
  }
  
  const getSocialLink = (plataforma: string, usuario: string) => {
    if(plataforma === "Instagram") return `https://instagram.com/${usuario}`;
    return "#";
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        <div className="flex justify-between items-center mb-8">
            <Button asChild variant="outline">
                <Link to="/#">{t('cv.back_button', 'Volver')}</Link>
            </Button>
            <LanguageSwitcher />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna Izquierda */}
          <div className="md:col-span-1 space-y-8">
            <div className="flex flex-col items-center">
              <Avatar className="w-40 h-40 border-4 border-primary">
                <AvatarImage src="/perfil.jpg" alt={informacion_personal.nombre} />
                <AvatarFallback>{informacion_personal.nombre.charAt(0)}</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl font-heading font-bold text-center mt-4">{informacion_personal.nombre}</h1>
              <h2 className="text-xl text-primary font-semibold text-center">{informacion_personal.titulo}</h2>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                {informacion_personal.detalles.map((detail, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-primary">{getIcon(detail.icono)}</div>
                    <div>
                      <p className="font-semibold">{detail.campo}</p>
                      <p className="text-muted-foreground">{detail.valor}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
                <CardHeader><CardTitle className="font-heading text-primary">{t('cv.contact')}</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    {contacto.datos.map((c, i) => (
                        <a key={i} href={getContactLink(c.plataforma, c.valor)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-primary transition-colors">
                            <div className="text-primary">{getIcon(c.icono)}</div>
                            <span>{c.valor}</span>
                        </a>
                    ))}
                </CardContent>
            </Card>
             <Card>
                <CardHeader><CardTitle className="font-heading text-primary">{t('cv.social')}</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    {redes_sociales.datos.map((rs, i) => (
                        <a key={i} href={getSocialLink(rs.plataforma, rs.usuario)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-primary transition-colors">
                           <div className="text-primary">{getIcon(rs.icono)}</div>
                            <span>{rs.usuario}</span>
                        </a>
                    ))}
                </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="font-heading text-primary">{t('cv.personal_profile')}</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {perfil_personal.items.map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <div className="text-primary mt-1">{getIcon(item.icono)}</div>
                     <span>{item.habilidad}</span>
                   </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="font-heading text-primary">{t('cv.hobbies')}</CardTitle></CardHeader>
              <CardContent className="flex justify-around">
                {hobbies.items.map((hobbie, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 text-muted-foreground">
                     <div className="text-primary w-8 h-8">{getIcon(hobbie.icono)}</div>
                     <span className="text-sm">{hobbie.nombre}</span>
                   </div>
                ))}
              </CardContent>
            </Card>

          </div>

          {/* Columna Derecha */}
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader><CardTitle className="font-heading text-2xl">{t('cv.professional_summary')}</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">{informacion_personal.resumen}</p></CardContent>
            </Card>
            
            <Card>
                <CardHeader><CardTitle className="font-heading text-2xl flex items-center gap-3"><div className="text-primary">{getIcon("maletin_de_trabajo")}</div> {t('cv.work_experience')}</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                    {experiencia.trabajos.map((job, i) =>(
                        <div key={i}>
                            <h3 className="text-lg font-semibold">{job.puesto} <span className="text-primary">@ {job.empresa}</span></h3>
                            <p className="text-sm text-muted-foreground mb-2">{job.periodo}</p>
                            <ul className="space-y-1 list-disc list-inside">
                                {job.responsabilidades.map((resp, j) => <li key={j}>{resp}</li>)}
                            </ul>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader><CardTitle className="font-heading text-2xl flex items-center gap-3"><div className="text-primary">{getIcon("engranaje")}</div> {t('cv.technical_skills')}</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    {habilidades.tecnicas.items.map((skill, i) => (
                        <div key={i}>
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold">{skill.tecnologia}</span>
                                <span className="text-sm text-muted-foreground">{skill.experiencia}</span>
                            </div>
                            <Progress value={(parseInt(skill.experiencia) / maxExperience) * 100} />
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader><CardTitle className="font-heading text-xl flex items-center gap-3"><div className="text-primary">{getIcon("silueta_de_usuario")}</div> {t('cv.soft_skills')}</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        {habilidades.blandas.items.map((skill, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="text-primary">{getIcon("marca_de_verificacion_naranja_(check)")}</div>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="font-heading text-xl flex items-center gap-3"><div className="text-primary">{getIcon("estrella")}</div> {t('cv.other_skills')}</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                        {habilidades.otras_habilidades.items.map((skill, i) => (
                             <div key={i} className="flex items-center gap-3">
                                 <div className="text-primary">{getIcon(skill.icono)}</div>
                                <span>{skill.habilidad}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

             <Card>
                <CardHeader><CardTitle className="font-heading text-2xl flex items-center gap-3"><div className="text-primary">{getIcon("birrete_de_graduacion")}</div> {t('cv.education')}</CardTitle></CardHeader>
                <CardContent>
                     {formacion_academica.items.map((form, i) => (
                        <div key={i}>
                            <h3 className="font-semibold">{form.institucion}</h3>
                            <p>{form.titulo}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader><CardTitle className="font-heading text-xl flex items-center gap-3"><div className="text-primary">{getIcon("globo_terraqueo")}</div> {t('cv.languages')}</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {idiomas.items.map((lang, i) => (
                            <div key={i}>
                                <div className="flex justify-between">
                                  <p className="font-semibold">{lang.idioma}</p>
                                  <p className="text-sm text-muted-foreground">{lang.nivel}</p>
                                </div>
                                <Progress value={60} className="mt-2" />
                            </div>
                        ))}
                    </CardContent>
                </Card>
                 <Card className="bg-primary/5">
                    <CardHeader><CardTitle className="font-heading text-xl">{t('cv.objectives')}</CardTitle></CardHeader>
                    <CardContent className="space-y-6">
                        {secciones_adicionales.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="text-primary w-8 h-8">{getIcon(item.icono)}</div>
                                <div>
                                    <h4 className="font-semibold">{item.titulo}</h4>
                                    <p className="text-sm text-muted-foreground">{item.texto}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
