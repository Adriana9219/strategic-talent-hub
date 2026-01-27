import { Linkedin, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Sobre mí", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Trayectoria", href: "#work" },
  { name: "Contacto", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="hero-gradient pt-16 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-hero-foreground/10">
          {/* Brand */}
          <div>
            <a href="#home" className="font-heading font-bold text-2xl text-hero-foreground inline-block mb-4">
              <span className="text-accent">A</span>driana Chávez
            </a>
            <p className="text-hero-foreground/60 text-sm leading-relaxed max-w-xs">
              HR Business Partner & Consultora ayudando a las organizaciones a contratar 
              mejor, desarrollar equipos de alto rendimiento y evolucionar más rápido.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-hero-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-hero-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-hero-foreground mb-4">
              Contacto
            </h4>
            <a
              href="mailto:adrianathalie.92@gmail.com"
              className="text-hero-foreground/60 hover:text-accent transition-colors text-sm block mb-4"
            >
              adrianathalie.92@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/adrianachavez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-hero-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-hero-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="mailto:adrianathalie.92@gmail.com"
                className="w-10 h-10 bg-hero-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Mail className="w-4 h-4 text-hero-foreground group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-hero-foreground/40 text-sm">
            © {new Date().getFullYear()} Adriana Chávez. Todos los derechos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-accent-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
