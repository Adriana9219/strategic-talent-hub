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
    value: "Regional",
    label: "Roles Estratégicos",
  },
  {
    icon: Users,
    value: "Liderazgo",
    label: "& Posiciones Clave",
  },
  {
    icon: Zap,
    value: "Digital",
    label: "Marketing & IA",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
              Sobre Mí
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Visión estratégica.{" "}
              <span className="text-accent">Enfoque humano.</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Business Partner con más de 7 años de experiencia liderando la gestión integral del talento 
                y los procesos de Recursos Humanos a nivel regional, en empresas de España y Ecuador.
              </p>
              <p>
                Mi enfoque está en el HR Business Partnering estratégico, la detección y atracción de 
                talento especializado (comercial y corporativo), y la implementación de planes de 
                desarrollo que impactan directamente en el negocio.
              </p>
              <p>
                Actualmente cursando un Máster en Marketing Digital e IA Generativa, combino mi experiencia 
                en RRHH con las últimas herramientas tecnológicas para transformar la gestión del talento.
              </p>
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
                className="bg-section-alt p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-heading font-bold text-2xl text-foreground mb-1">
                  {item.value}
                </p>
                <p className="text-muted-foreground text-sm">
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
