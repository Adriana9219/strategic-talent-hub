import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-background py-32 lg:py-48">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-black text-lg tracking-widest uppercase mb-4 block">
            CONECTEMOS
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6">
            ¿Buscas transformar tu estrategia de talento?
          </h2>
          <p className="text-foreground/70 text-xl max-w-2xl mx-auto font-medium">
            Estoy lista para conversar sobre cómo puedo ayudar a tu organización a atraer, desarrollar y retener el mejor talento.
          </p>
          <div className="w-24 h-2 bg-accent mt-8 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <p className="text-accent font-black text-sm tracking-widest uppercase mb-3 block">
                  INFORMACIÓN DE CONTACTO
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed max-w-lg font-medium">
                  Si buscas liderazgo estratégico en talento, construcción de equipos de alto rendimiento o transformación de tu estrategia de RRHH, estoy aquí para ayudarte.
                </p>
              </div>

              <div className="space-y-6 pt-8 border-t-2 border-accent">
                <div className="group cursor-pointer">
                  <p className="text-accent font-black text-sm tracking-widest uppercase mb-2 block">
                    UBICACIÓN
                  </p>
                  <div className="flex items-center gap-3 text-foreground group-hover:text-accent transition-colors">
                    <MapPin className="w-6 h-6 text-accent shrink-0" />
                    <span className="font-medium text-lg">Barcelona, España & Ecuador</span>
                  </div>
                </div>

                <div>
                  <p className="text-accent font-black text-sm tracking-widest uppercase mb-2 block">
                    EMAIL
                  </p>
                  <a 
                    href="mailto:adrianathalie.92@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group font-medium text-lg"
                  >
                    <Mail className="w-6 h-6 text-accent shrink-0" />
                    <span className="group-hover:underline">adrianathalie.92@gmail.com</span>
                  </a>
                </div>

                <div>
                  <p className="text-accent font-black text-sm tracking-widest uppercase mb-2 block">
                    TELÉFONO
                  </p>
                  <a 
                    href="tel:+34692124361"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group font-medium text-lg"
                  >
                    <Phone className="w-6 h-6 text-accent shrink-0" />
                    <span className="group-hover:underline">+34 692 124 361</span>
                  </a>
                </div>

                <div>
                  <p className="text-accent font-black text-sm tracking-widest uppercase mb-2 block">
                    LINKEDIN
                  </p>
                  <a
                    href="https://linkedin.com/in/adriana-chavez-s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group font-medium text-lg"
                  >
                    <Linkedin className="w-6 h-6 text-accent shrink-0" />
                    <span className="group-hover:underline">Conéctate conmigo</span>
                  </a>
                </div>
              </div>


            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main WhatsApp Button */}
            <motion.a
              href="https://wa.me/34692124361?text=Hola%20Adriana%2C%20me%20interesa%20tu%20perfil.%20%C2%BFPodemos%20agendar%20una%20breve%20llamada%3F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar mensaje por WhatsApp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-green-400 to-green-600 text-white p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all block group"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors shadow-lg">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-2">
                    CONTACTO DIRECTO
                  </p>
                  <h3 className="font-heading text-3xl md:text-4xl font-black text-white mb-2">
                    Escríbeme por WhatsApp
                  </h3>
                </div>
              </div>
            </motion.a>

            {/* Alternative Contact Methods */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="mailto:adrianathalie.92@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-primary-foreground p-6 rounded-xl border-2 border-accent hover:bg-primary/90 transition-all group"
              >
                <Mail className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-black text-sm uppercase tracking-wide mb-1">Email</p>
                <p className="text-xs opacity-75">adrianathalie.92...</p>
              </motion.a>

              <motion.a
                href="tel:+34692124361"
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-primary-foreground p-6 rounded-xl border-2 border-accent hover:bg-primary/90 transition-all group"
              >
                <Phone className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-black text-sm uppercase tracking-wide mb-1">Llamada</p>
                <p className="text-xs opacity-75">+34 692 124 361</p>
              </motion.a>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
