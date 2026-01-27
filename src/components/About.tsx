import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Globe, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    value: "7+",
    label: "Years in Talent & HR",
  },
  {
    icon: Globe,
    value: "Regional",
    label: "& Strategic Roles",
  },
  {
    icon: Users,
    value: "Leadership",
    label: "& Critical Hiring",
  },
  {
    icon: Zap,
    value: "Digital",
    label: "Transformation & AI",
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
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Strategic mindset.{" "}
              <span className="text-accent">Human insight.</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over 7 years navigating the intersection of talent, business, and technology, 
                I've evolved from traditional HR into a strategic partner for organizations navigating complexity.
              </p>
              <p>
                My journey spans talent acquisition, HR business partnering, and consulting — always 
                with a lens on how digital transformation and AI can amplify human potential, not replace it.
              </p>
              <p>
                I believe the best recruiting isn't about filling seats. It's about understanding 
                where a business is going and finding the people who can take it there.
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
