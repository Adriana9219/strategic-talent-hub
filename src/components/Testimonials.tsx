import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Adriana aportó una perspectiva estratégica a nuestros procesos de selección que necesitábamos urgentemente. No solo cubrió posiciones — nos ayudó a repensar cómo construimos equipos.",
    author: "Director General",
    role: "Empresa Multinacional, Ecuador",
    type: "Liderazgo",
  },
  {
    quote: "Su capacidad para combinar el lado humano con datos y métricas es excepcional. Los programas de engagement que implementó mejoraron significativamente nuestro clima laboral.",
    author: "Gerente de Operaciones",
    role: "Sector Retail",
    type: "Cultura",
  },
  {
    quote: "Trabajar con Adriana transformó nuestra función de RRHH. Su enfoque de consultoría es práctico, orientado a resultados y siempre enfocado en el impacto real del negocio.",
    author: "Directora de RRHH",
    role: "Empresa de Servicios",
    type: "Consultoría",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-section-alt py-24 lg:py-32">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Confianza de <span className="text-accent">líderes</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-card p-8 rounded-2xl border border-border relative"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                {testimonial.type}
              </span>

              <blockquote className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div>
                <p className="font-heading font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
