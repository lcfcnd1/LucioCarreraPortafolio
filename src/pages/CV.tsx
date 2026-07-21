import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CVData {
  informacion_personal: {
    nombre: string;
    titulo: string;
    resumen: string;
  };
  contacto: {
    email: string;
    celular: string;
  };
  experiencia: {
    empresa: string;
    periodo: string;
    puesto: string;
    responsabilidades: string[];
  }[];
  habilidades: {
    tecnicas: { tecnologia: string; experiencia: string }[];
    blandas: string[];
    otras_habilidades: string[];
  };
  formacion_academica: {
    institucion: string;
    titulo: string;
  }[];
  idiomas: {
    idioma: string;
    nivel: string;
  }[];
}

const CV = () => {
  const [cvData, setCvData] = useState<CVData | null>(null);

  useEffect(() => {
    fetch("/luciocarreracv.json")
      .then((res) => res.json())
      .then((data) => setCvData(data));
  }, []);

  if (!cvData) {
    return <div>Cargando...</div>;
  }

  const {
    informacion_personal,
    contacto,
    experiencia,
    habilidades,
    formacion_academica,
    idiomas,
  } = cvData;

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-8">
        <Button asChild variant="outline" className="mb-4">
            <Link to="/#">Volver</Link>
        </Button>
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-8">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/perfil.jpg" alt={informacion_personal.nombre} />
            <AvatarFallback>
              {informacion_personal.nombre.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-4xl font-bold">{informacion_personal.nombre}</h1>
            <h2 className="text-xl text-muted-foreground">
              {informacion_personal.titulo}
            </h2>
            <div className="flex gap-2 justify-center sm:justify-start mt-2">
                <a href={`mailto:${contacto.email}`}>
                    <Button variant="outline">{contacto.email}</Button>
                </a>
                <a href={`https://wa.me/${contacto.celular.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">WhatsApp</Button>
                </a>
            </div>
          </div>
        </header>

        <Separator className="my-8" />

        <main className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Resumen</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{informacion_personal.resumen}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experiencia Laboral</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiencia.map((exp, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{exp.puesto} - {exp.empresa}</h3>
                  <p className="text-sm text-muted-foreground">{exp.periodo}</p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsabilidades.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Habilidades</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Técnicas</h4>
              <div className="flex flex-wrap gap-2">
                {habilidades.tecnicas.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill.tecnologia} ({skill.experiencia})
                  </Badge>
                ))}
              </div>
               <Separator className="my-4" />
                <h4 className="font-semibold mb-2">Otras</h4>
              <div className="flex flex-wrap gap-2">
                {habilidades.otras_habilidades.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Formación Académica</CardTitle>
              </CardHeader>
              <CardContent>
                {formacion_academica.map((form, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{form.institucion}</h3>
                    <p>{form.titulo}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Idiomas</CardTitle>
              </CardHeader>
              <CardContent>
                {idiomas.map((lang, index) => (
                  <div key={index}>
                    <p>{lang.idioma}: {lang.nivel}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CV;
