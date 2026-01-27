import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategic Recruiting",
    description: "Talent acquisition aligned with business goals",
    points: [
      "Leadership & key roles hiring",
      "Quality-focused, data-informed decisions",
      "Employer value proposition design",
    ],
  },
  {
    icon: Heart,
    title: "HR & Talent Consulting",
    description: "Building organizations that perform and retain",
    points: [
      "HR Business Partnering",
      "Talent development & succession",
      "Culture, engagement & performance",
    ],
  },
  {
    icon: Cpu,
    title: "Digital & AI for People",
    description: "Technology that amplifies human potential",
    points: [
      "AI applied to recruiting & HR processes",
      "Digital tools for efficiency & decisions",
      "Modern employer branding & communication",
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
            What I help organizations{" "}
            <span className="text-accent">do better</span>
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
