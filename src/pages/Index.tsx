import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Consulting from "@/components/Consulting";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Consulting />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
