import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Marcos brought a strategic perspective to our hiring that we desperately needed. He didn't just fill roles — he helped us rethink how we build teams.",
    author: "Sarah Chen",
    role: "CEO, TechVentures Inc.",
    type: "Leader",
  },
  {
    quote: "His understanding of both the human and technical sides of recruiting is rare. The AI tools he implemented saved us hundreds of hours while improving candidate quality.",
    author: "Michael Torres",
    role: "VP of Engineering, DataFlow",
    type: "Hiring Manager",
  },
  {
    quote: "Working with Marcos transformed our HR function. His consulting approach is practical, data-driven, and always focused on real business impact.",
    author: "Elena Rodriguez",
    role: "CHRO, Global Manufacturing Co.",
    type: "HR Leader",
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
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Trusted by <span className="text-accent">leaders</span>
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
