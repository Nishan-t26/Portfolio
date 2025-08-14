import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={"prog.jpg"}
                alt="Professional Profile"
                className="w-32 h-32 rounded-full border-4 border-primary/30 shadow-glow-primary"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up-delay-1">
            <span className="text-gradient">Nishant Sharma</span>
            <br />
            <span className="text-foreground">Full-Stack Developer</span>
          </h1>

          {/* Subtitle */}
          {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up-delay-2">
            Crafting exceptional digital experiences with modern technologies
            and innovative solutions
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up-delay-3">
            <Button
              size="lg"
              className="hero-gradient text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-glow-primary hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 fade-in-up-delay-3">
            <a
              href="https://github.com/nishan-t26"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nishant-sharma-ns/"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nishantsharma7408.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
