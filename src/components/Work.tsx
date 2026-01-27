import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Jefe Regional de Talento Humano",
    company: "MARICIMEX",
    location: "Ecuador",
    period: "Nov 2021 - Jun 2024",
    achievements: [
      "Reducción del 15% en Time-to-Hire para posiciones estratégicas",
      "Aumento del 20% en índices de Engagement regional",
      "98% de cumplimiento en programas de capacitación",
    ],
    tags: ["Liderazgo Regional", "Talento", "Cultura"],
  },
  {
    role: "Analista de Capacitación",
    company: "HANDYTEC ACADEMY",
    location: "Ecuador",
    period: "Nov 2020 - Oct 2021",
    achievements: [
      "Implementación estratégica de programas educativos",
      "Gestión global de capacitaciones y plataformas",
      "Reclutamiento de instructores internacionales",
    ],
    tags: ["Formación", "E-learning", "Operaciones"],
  },
  {
    role: "Técnico de Recursos Humanos",
    company: "GRUPOGESTIONEX / IBERDROLA",
    location: "Barcelona, España",
    period: "Feb 2018 - Feb 2019",
    achievements: [
      "Liderazgo en reclutamiento de perfiles comerciales",
      "Selección masiva y técnicas de Hunting",
      "Ampliación significativa de la base de talento",
    ],
    tags: ["Reclutamiento", "Hunting", "Selección Masiva"],
  },
  {
    role: "Consultora Técnico de Formación",
    company: "GRUPO NORTE",
    location: "España",
    period: "Jun 2017 - Ene 2018",
    achievements: [
      "Diseño de propuestas formativas a medida",
      "Optimización de plataformas E-learning",
      "Selección especializada de formadores",
    ],
    tags: ["Consultoría", "Formación", "Digital"],
  },
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="bg-background py-24 lg:py-32">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
            Trayectoria & Impacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Experiencia real.{" "}
            <span className="text-accent">Resultados medibles.</span>
          </h2>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {exp.role}
              </h3>
              
              <p className="text-accent font-semibold mb-3">{exp.company}</p>

              <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2 text-sm text-foreground/80">
                    <ArrowUpRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Creemos resultados similares
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
