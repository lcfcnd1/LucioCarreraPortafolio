import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Obtener los datos del formulario
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      // Insertar el mensaje en Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([data]);

      if (error) throw error;

      // Mostrar mensaje de éxito
      toast({
        title: t('contact.form.success'),
        description: t('contact.form.successDescription'),
      });
      
      // Limpiar el formulario
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.errorDescription'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">// {t('contact.subtitle')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            {t('contact.heading', { highlight: '' }).split('{highlight}')[0]}
            <span className="text-gradient">{t('contact.highlight')}</span>
            {t('contact.heading', { highlight: '' }).split('{highlight}')[1]}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.info.email')}</h3>
                <a href="mailto:lcfcndw@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  lcfcndw@gmail.com
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.info.location')}</h3>
                <p className="text-muted-foreground">
                  {t('contact.info.locationText')}
                </p>
              </div>
            </div>

            <div className="glass-card p-6 hover:border-primary/30 transition-colors">
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">const</span> response = <span className="text-primary">await</span> contact();
                <br />
                <span className="text-muted-foreground/50">// {t('contact.info.response')}</span>
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t('contact.form.name')}
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('contact.form.email')}
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t('contact.form.subject')}
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t('contact.form.message')}
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={5}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                {isSubmitting ? (
                  t('contact.form.sending')
                ) : (
                  <>
                    {t('contact.form.submit')}
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
