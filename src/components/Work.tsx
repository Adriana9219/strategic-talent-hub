import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    challenge: "Tech startup scaling from 20 to 100 employees",
    strategy: "Built talent acquisition framework from scratch, implemented AI-powered sourcing",
    result: "85% offer acceptance rate, 40% faster time-to-hire",
    tags: ["Recruiting", "AI", "Strategy"],
  },
  {
    challenge: "Manufacturing company with 35% annual turnover",
    strategy: "Diagnosed culture gaps, redesigned onboarding, implemented engagement programs",
    result: "Reduced turnover to 18% within 12 months",
    tags: ["HR", "Consulting", "Culture"],
  },
  {
    challenge: "Regional bank digital transformation",
    strategy: "Identified digital talent gaps, recruited key tech leaders, upskilled existing teams",
    result: "Launched mobile banking platform with hybrid team",
    tags: ["Digital", "Leadership", "Recruiting"],
  },
  {
    challenge: "E-commerce company AI integration",
    strategy: "Implemented AI tools for candidate screening, automated initial assessments",
    result: "60% reduction in screening time, improved candidate quality",
    tags: ["AI", "Process", "Efficiency"],
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
            Work & Impact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Real challenges.{" "}
            <span className="text-accent">Measurable results.</span>
          </h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.challenge}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {caseItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {caseItem.challenge}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                <span className="font-medium text-foreground/80">Strategy: </span>
                {caseItem.strategy}
              </p>

              <div className="flex items-center gap-2 text-accent font-semibold">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">{caseItem.result}</span>
              </div>
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
            Let's create similar results
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
