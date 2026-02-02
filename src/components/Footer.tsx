import { Linkedin, Mail, ArrowUp, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Sobre Mí", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experiencia", href: "#work" },
  { name: "Contacto", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-16 pb-16 border-b border-primary-foreground/10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-black text-3xl mb-4">
              Adriana <span className="text-accent">Chávez</span>
            </h3>
            <p className="text-primary-foreground/70 text-base leading-relaxed max-w-xs font-medium">
              Reclutadora Estratégica, HR Business Partner y Consultora Digital
            </p>
            <p className="text-primary-foreground/50 text-sm mt-4 font-light">
              Transformando organizaciones a través de talento estratégico e innovación digital centrada en personas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-primary-foreground mb-6 uppercase tracking-wider text-sm">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-medium text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-black text-primary-foreground mb-6 uppercase tracking-wider text-sm">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:adrianathalie.92@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
              >
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-medium">adrianathalie.92@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-medium">España & Ecuador</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/34692124361?text=Hola%20Adriana%2C%20me%20interesa%20tu%20perfil.%20%C2%BFPodemos%20agendar%20una%20breve%20llamada%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar mensaje por WhatsApp"
                className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#1ebe57] transition-all group shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/adriana-chavez-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-all group shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6 text-primary font-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-primary-foreground/50 text-sm font-light">
            © 2025 Adriana Chávez. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-all group shadow-lg hover:shadow-xl"
          >
            <ArrowUp className="w-6 h-6 text-primary font-black group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
