import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
const profilePhoto = "/uploads/rakeshuu.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 glow-primary animate-glow-pulse">
              <img src={profilePhoto} alt="Rakesh Kapilavayi" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-left">
            Hi, I'm{" "}
            <span className="text-gradient">Rakesh Kapilavayi</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-right">
            AI Engineer | Full-Stack AI Developer
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            From collecting data to deploying full-stack AI applications with polished frontends.
            Specialized in ML, DL, GenAI, Agentic AI, and strong statistical foundations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button size="lg" className="primary-gradient hover-glow transition-smooth" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="card-gradient border-primary/30 hover-lift" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-12 animate-fade-in">
            <a href="https://github.com/rakeshkapilavayi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full card-gradient hover-lift transition-smooth border border-primary/20" aria-label="GitHub Profile">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/rakeshkapilavayi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full card-gradient hover-lift transition-smooth border border-primary/20" aria-label="LinkedIn Profile">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rakeshkapilvayi978@gmail.com" className="p-3 rounded-full card-gradient hover-lift transition-smooth border border-primary/20" aria-label="Email Contact">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="animate-bounce">
            <button onClick={() => scrollToSection('about')} className="p-2 rounded-full hover-glow transition-smooth" aria-label="Scroll to About section">
              <ArrowDown className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
