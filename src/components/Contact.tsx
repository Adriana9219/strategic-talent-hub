import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
              Contacto
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hablemos
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Si el talento y la transformación importan para tu negocio, conversemos. 
              Estoy siempre abierta a explorar cómo puedo ayudar a las organizaciones 
              a construir mejores equipos y evolucionar más rápido.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Barcelona, 08015, España</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Phone className="w-5 h-5 text-accent" />
                <span>+34 692 124 361</span>
              </div>
              <a 
                href="mailto:adrianathalie.92@gmail.com"
                className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span>adrianathalie.92@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/adrianachavez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="mailto:adrianathalie.92@gmail.com"
                className="w-12 h-12 bg-section-alt rounded-xl flex items-center justify-center hover:bg-accent/20 transition-colors border border-border"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl border border-border"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground"
                  placeholder="Tu empresa (opcional)"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none text-foreground"
                  placeholder="Cuéntame sobre tu desafío..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Iniciar conversación
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
