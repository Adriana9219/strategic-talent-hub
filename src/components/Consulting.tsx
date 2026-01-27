import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, LineChart, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Negocio Primero",
    description: "El talento sirve a la estrategia, no al revés. Cada recomendación comienza entendiendo los objetivos de negocio.",
  },
  {
    icon: LineChart,
    title: "Humano + Data",
    description: "Insight respaldado por evidencia. Combinando profundo entendimiento humano con toma de decisiones basada en datos.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Práctica",
    description: "IA que realmente funciona. Sin buzzwords — solo herramientas y enfoques que entregan valor medible.",
  },
];

const Consulting = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="consulting" className="hero-gradient py-24 lg:py-32">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
            Enfoque
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground max-w-3xl mx-auto">
            Cómo <span className="text-accent">trabajo</span>
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-accent" />
              </div>

              <h3 className="font-heading text-xl font-bold text-hero-foreground mb-4">
                {pillar.title}
              </h3>

              <p className="text-hero-foreground/70 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consulting;
