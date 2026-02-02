import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";
import { useState } from "react";

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20 pb-12">
      <div className="section-container py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-hero-foreground leading-[1.05] mb-6"
            >
              Especialista en RRHH | Marketing Digital e IA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-hero-foreground/80 text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl font-light"
            >
              Generando impacto medible a través del talento, estrategia digital e IA.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-accent font-semibold text-base md:text-lg mb-8 tracking-wide uppercase"
            >
              Human Resources Business Partner | Talent & Culture Strategist | HR Tech & Digital Strategy | Marketing & AI
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="btn-accent inline-flex items-center justify-center gap-2 font-bold text-lg px-8 py-4"
              >
                Ver mi trayectoria
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me/34692124361?text=Hola%20Adriana%2C%20me%20interesa%20tu%20perfil.%20%C2%BFPodemos%20agendar%20una%20breve%20llamada%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar mensaje por WhatsApp"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-hero-foreground text-hero-foreground font-bold px-8 py-4 rounded-lg hover:bg-hero-foreground/10 transition-all duration-200 inline-flex items-center gap-2 text-lg"
              >
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.991 1.523A9.9 9.9 0 005.6 19.6a9.865 9.865 0 008.572-4.745 9.95 9.95 0 002.301-6.273c0-5.456-4.441-9.89-9.9-9.89z" />
                  </svg>
                </div>
                WhatsApp
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-8 border-t border-hero-foreground/20"
            >
              <div className="flex-1">
                <p className="text-hero-foreground/60 text-sm mb-2">LINKEDIN</p>
                <a
                  href="https://www.linkedin.com/in/adriana-chavez-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition font-semibold flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  Connect with me
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full aspect-square max-w-sm lg:max-w-none"
              onMouseEnter={() => setShowOverlay(true)}
              onMouseLeave={() => setShowOverlay(false)}
            >
              {/* Main image with grayscale effect */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={profileImage}
                  alt="Adriana Chávez - Strategic Recruiter"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />

                {/* Black overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showOverlay ? 0.85 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black"
                />

                {/* Text overlay on hover - shows short Sobre mí sentence */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: showOverlay ? 1 : 0,
                    y: showOverlay ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
                >
                  <p className="text-white/90 font-heading text-base lg:text-lg leading-tight max-w-md">
                    Business Partner con más de 7 años de experiencia liderando la gestión integral del talento y procesos de RRHH a nivel regional.
                  </p>
                </motion.div>
              </div>

              {/* Yellow accent border on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showOverlay ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-4 border-accent rounded-lg pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
