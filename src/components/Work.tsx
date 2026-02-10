import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Jefe Regional de Talento Humano",
    company: "MARCIMEX",
    location: "Ecuador",
    period: "Nov 2021 - Jun 2024",
    metrics: [
      { number: "15%", label: "Reducción en tiempo de contratación" },
      { number: "20%", label: "Aumento engagement regional" },
      { number: "98%", label: "Cumplimiento en programas de capacitación" },
    ],
    functions: [
      "Reducción del 15% en Time-to-Hire para posiciones estratégicas",
      "Aumento del 20% en índices de Engagement regional",
      "98% de cumplimiento en programas de capacitación",
      "Liderazgo integral de procesos RRHH a nivel regional",
    ],
    tags: ["Liderazgo Regional", "Talento", "Cultura"],
  },
  {
    role: "Analista de Capacitación",
    company: "HANDYTEC ACADEMY",
    location: "Ecuador",
    period: "Nov 2020 - Oct 2021",
    metrics: [
      { number: "+50", label: "Programas de Data Science y Big Data implementados" },
      { number: "+500", label: "Usuarios" },
      { number: "+500", label: "Usuarios gestionados" },
    ],
    functions: [
      "Diseño e implementación de programas educativos corporativos",
      "Gestión y optimización de la plataforma e-learning",
      "Coordinación de instructores y evaluación de programas",
    ],
    tags: ["Formación", "E-learning", "Operaciones"],
  },
  {
    role: "Técnico de Recursos Humanos",
    company: "GRUPO GESTIONEX / IBERDROLA",
    location: "Barcelona, España",
    period: "Feb 2018 - Feb 2019",
    metrics: [
      { number: "+2000", label: "Perfiles comerciales reclutados" },
      { number: "40%", label: "Reducción en tiempo de contratación" },
    ],
    functions: [
      "Reclutamiento de perfiles comerciales y selección masiva",
      "Desarrollo de procesos de onboarding y capacitación inicial",
      "Colaboración con equipos comerciales para necesidades de talento",
    ],
    tags: ["Reclutamiento", "Hunting", "Selección Masiva"],
  },
  {
    role: "Consultora Técnico de Formación",
    company: "GRUPO NORTE",
    location: "España",
    period: "Jun 2017 - Ene 2018",
    metrics: [
      { number: "+10", label: "Propuestas formativas diseñadas" },
      { number: "+200", label: "Perfiles de formadores reclutados" },
    ],
    functions: [
      "Diseño de propuestas formativas a medida",
      "Optimización de plataformas E-learning",
      "Selección y coordinación de formadores",
    ],
    tags: ["Formación", "Digital"],
  },
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="bg-background py-32 lg:py-48">
      <div className="section-container" ref={ref}>
        {/* Section Header - BOLD & DOMINANT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-accent font-black text-lg tracking-widest uppercase mb-4 block">
            EXPERIENCIA QUE GENERA RESULTADOS
          </p>
          <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1]">
            Trayectoria Probada
          </h2>
          <div className="w-24 h-2 bg-accent mt-8" />
        </motion.div>

        {/* Experience Cards - Full Impact Layout */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-12 items-stretch ${
                index % 2 === 1 ? "lg:grid-cols-2 lg:direction-rtl" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary text-primary-foreground text-xs font-black rounded tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <h3 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-3 leading-tight">
                  {exp.role}
                </h3>

                <p className="text-accent font-black text-2xl mb-4 uppercase tracking-wide">
                  {exp.company}
                </p>

                <div className="flex flex-wrap gap-6 text-foreground/70 text-base font-semibold mb-8">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    {exp.period}
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-section-alt rounded-lg border-2 border-accent">
                  {exp.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-accent font-black text-3xl md:text-4xl leading-tight">
                        {metric.number}
                      </p>
                      <p className="text-foreground/70 font-semibold text-sm mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Achievements moved to visual block */}
              </div>

              {/* Visual Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.1 }}
                className={`bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 flex flex-col justify-center h-full ${index % 2 === 1 ? "lg:order-1" : ""} group hover:shadow-2xl transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-accent rounded-lg group-hover:rotate-12 transition-transform duration-300" />
                  <ul className="space-y-3">
                    {exp.functions.map((fn) => (
                      <li key={fn} className="flex items-start gap-3 text-primary-foreground/90 font-medium">
                        <ArrowUpRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{fn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 pt-16 border-t-4 border-accent"
        >
          <p className="text-foreground/70 font-semibold text-lg mb-6">
            ¿Listo para construir resultados similares?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ x: 10 }}
            className="inline-flex items-center gap-3 font-heading text-3xl font-black text-foreground hover:text-accent transition-colors"
          >
            Conectemos
            <ArrowUpRight className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
