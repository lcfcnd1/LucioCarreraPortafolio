import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-mono text-xl font-bold">
            <span className="text-gradient">SQSOFT</span>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm font-mono">
            © {currentYear} SQSOFT
          </p>
        </div>
      </div>
      
      {/* Made with love */}
      <div className="mt-8 pt-6 border-t border-border/30 text-center">
        <p className="text-muted-foreground text-xs font-mono">
          Made with <span className="text-red-500">♥</span> with{" "}
          <span className="text-foreground">React</span> •{" "}
          <span className="text-foreground">TypeScript</span> •{" "}
          <span className="text-foreground">Tailwind CSS</span> •{" "}
          <span className="text-foreground">Vite</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
