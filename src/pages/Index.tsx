import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Technologies from "@/components/technologies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Technologies></Technologies>
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/30">
        <p className="text-sm text-muted-foreground font-body">
          © 2026 Meherun Nesa Enta. Built with passion & clean code.
        </p>
      </footer>
    </div>
  );
};

export default Index;
