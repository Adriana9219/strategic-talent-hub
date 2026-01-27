import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Reclutamiento Estratégico",
    description: "Atracción de talento alineada con objetivos de negocio",
    points: [
      "Selección de posiciones clave y liderazgo",
      "Hunting y reclutamiento especializado",
      "Reducción del Time-to-Hire en un 15%",
    ],
  },
  {
    icon: Heart,
    title: "HR Business Partnering",
    description: "Construyendo organizaciones que performan y retienen",
    points: [
      "Gestión del ciclo de desempeño",
      "Planes de carrera y sucesión",
      "Cultura, engagement y clima laboral",
    ],
  },
  {
    icon: Cpu,
    title: "Digital & IA para Personas",
    description: "Tecnología que amplifica el potencial humano",
    points: [
      "IA aplicada a procesos de RRHH",
      "Plataformas E-learning y formación digital",
      "Marketing digital y employer branding",
    ],
  },
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="bg-section-alt py-24 lg:py-32">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Lo que ayudo a las organizaciones a{" "}
            <span className="text-accent">hacer mejor</span>
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <pillar.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {pillar.description}
              </p>

              <ul className="space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
