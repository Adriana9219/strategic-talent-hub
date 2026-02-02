import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Globe, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    value: "+7",
    label: "Años en Talento & RRHH",
  },
  {
    icon: Globe,
    value: "2",
    label: "Países",
  },
  {
    icon: Users,
    value: "+20",
    label: "Líderes Desarrollados",
  },
  {
    icon: Zap,
    value: "20%",
    label: "Aumento Índice Engagement",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-section-alt py-32 lg:py-48">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <p className="text-accent font-black text-sm tracking-widest uppercase mb-4 block">
                SOBRE MÍ
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[1.1]">
                Visión Estratégica.{" "}
                <span className="text-accent">Enfoque Humano.</span>
              </h2>
            </motion.div>

            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">


              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Mi enfoque es el HR Business Partnering estratégico, la detección y atracción de talento especializado, e implementación de planes de desarrollo que impacten directamente en resultados de negocio.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Actualmente cursando un Máster en Marketing Digital e IA Generativa, combino mi expertise en RRHH con tecnología de punta para transformar la gestión del talento y acelerar el crecimiento organizacional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 font-heading font-black text-accent hover:text-accent/80 transition text-lg group"
                >
                  Conversemos
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-background border-2 border-accent p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors" />
                </div>
                <p className="font-heading font-black text-3xl text-accent mb-1 group-hover:scale-110 transition-transform">
                  {item.value}
                </p>
                <p className="text-foreground/70 font-semibold text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
