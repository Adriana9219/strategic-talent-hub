import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="section-container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium tracking-wide">
                Strategic Recruiter & Consultant
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-hero-foreground leading-[1.1] mb-6">
              Talent, Strategy & Technology —{" "}
              <span className="text-accent">aligned for real business impact.</span>
            </h1>

            <p className="text-hero-foreground/70 text-lg md:text-xl mb-4 max-w-xl">
              Strategic Recruiter | HR Consultant | Digital & AI Enthusiast
            </p>

            <p className="text-hero-foreground/60 text-base md:text-lg mb-10 max-w-xl">
              Helping companies hire smarter, build better teams, and evolve faster
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                View my work
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline-hero inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Let's talk
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-accent/5 rounded-3xl blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
              
              <img
                src={profileImage}
                alt="Marcos - Strategic Recruiter & Consultant"
                className="relative w-72 md:w-80 lg:w-96 aspect-[4/5] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-charcoal border border-hero-foreground/10 px-4 py-3 rounded-xl shadow-lg"
              >
                <p className="text-accent font-heading font-bold text-2xl">7+</p>
                <p className="text-hero-foreground/70 text-sm">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
