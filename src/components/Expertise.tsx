import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Cpu, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    number: "01",
    title: "Reclutamiento Estratégico",
    tagline: "Talento que transforma",
    description: "Atracción de talento alineada con objetivos de negocio",
    points: [
      "Selección de Ejecutivos y Liderazgo",
      "Hunting y Sourcing Especializado",
      "Optimización del Time-to-Hire",
    ],
  },
  {
    icon: Heart,
    number: "02",
    title: "HR Business Partnering",
    tagline: "Cultura que convierte",
    description: "Construyendo organizaciones que performan y retienen",
    points: [
      "Sistemas de Gestión del Desempeño",
      "Planes de Sucesión y Desarrollo",
      "Engagement y Retención de Talento",
    ],
  },
  {
    icon: Cpu,
    number: "03",
    title: "Digital e IA para Personas",
    tagline: "Tecnología que escala",
    description: "Tecnología que amplifica el potencial humano",
    points: [
      "IA en Reclutamiento y Selección",
      "Plataformas de Aprendizaje Digital",
      "Employer Branding Digital",
    ],
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Consultoría Estratégica",
    tagline: "Estrategia que permanece",
    description: "Consultoría estratégica en transformación de personas",
    points: [
      "Diseño Organizacional",
      "Gestión del Cambio",
      "People Analytics e Insights",
    ],
  },
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="bg-background py-32 lg:py-48">
      <div className="section-container" ref={ref}>
        {/* Header - BOLD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-accent font-black text-lg tracking-widest uppercase mb-4 block">
            EXPERTISE PRINCIPAL
          </p>
          <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] mb-6">
            Lo que entrego
          </h2>
          <p className="text-foreground/70 text-xl max-w-2xl mx-auto font-medium">
            Soluciones estratégicas en reclutamiento, gestión del talento y transformación organizacional.
          </p>
          <div className="w-24 h-2 bg-accent mt-8" />
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group relative overflow-hidden"
            >
              {/* Card Background - Black with hover effect */}
              <div className="relative bg-primary rounded-2xl p-10 h-full hover:bg-primary/90 transition-all duration-300 border-2 border-accent/30 hover:border-accent">
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-accent/30 font-black text-8xl group-hover:text-accent/50 transition-colors">
                  {pillar.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-primary font-black" />
                </div>

                {/* Content */}
                <p className="text-accent font-black text-sm tracking-widest uppercase mb-3">
                  {pillar.tagline}
                </p>

                <h3 className="font-heading text-3xl font-black text-primary-foreground mb-3 leading-tight">
                  {pillar.title}
                </h3>

                <p className="text-primary-foreground/80 text-base leading-relaxed mb-8">
                  {pillar.description}
                </p>

                {/* Points List */}
                <ul className="space-y-4">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-primary-foreground/90 text-sm font-medium"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bottom Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-24 pt-16 border-t-4 border-accent"
        >
          <div className="text-center">
            <p className="text-accent font-black text-4xl md:text-5xl mb-2">+7</p>
            <p className="text-foreground/70 font-semibold">Años de Impacto</p>
          </div>
          <div className="text-center">
            <p className="text-accent font-black text-4xl md:text-5xl mb-2">2</p>
            <p className="text-foreground/70 font-semibold">Países</p>
          </div>
          <div className="text-center">
            <p className="text-accent font-black text-4xl md:text-5xl mb-2">+20</p>
            <p className="text-foreground/70 font-semibold">Líderes Desarrollados</p>
          </div>
          <div className="text-center">
            <p className="text-accent font-black text-4xl md:text-5xl mb-2">20%</p>
            <p className="text-foreground/70 font-semibold">Aumento Índice Engagement</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
