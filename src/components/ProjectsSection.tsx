import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from "lucide-react";
import algo from "./../assets/algo-visulaizer.png";
import travel from "./../assets/travelsy.jpg";
import editor from "./../assets/image.png";
import { useRef, useState, useEffect } from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Shorting and pathfinder visualizer",
      description:
        "Built an interactive Algorithm Visualizer using React to demonstrate step-by-step execution of pathfinding and sorting algorithms.",
      image: algo,
      technologies: ["React", "JavaScript"],
      features: ["Shorting", "Path-finder", "ConvexHull"],
      github: "https://github.com/Nishan-t26/sorting-and-pathfinder-visualizer",
      demo: "https://sorting-and-pathfinder-visualizer-tau.vercel.app",
      status: "",
    },
    {
      title: "Travelsy",
      description:
        "Created a full-stack online application that allows digital access to historical locations with real-time reservations, Stripe integration for payments.",
      image: travel,
      technologies: [
        "React",
        "Javascript",
        "AWS S3",
        "MongoDB",
        "Express",
        "NodeJs",
        "Stripe API integration",
      ],
      features: ["Book Ticket", "QR code generation", "Team lead", "Payment Integration(Stripe)"],
      github: "https://github.com/Nishan-t26/Travelsy",
      status: "",
    },
    {
      title: "Face detection Using cascade method and Image modifier",
      description:
        "Developed a Python‑based image processing application featuring face detection with automatic cropping.",
      image: editor,
      technologies: [
        "Python",
        "Haar CaseCade",
        "OpenCV",
        "Numpy",
        "CustomTkinter",
        "MatplotLib",
        "PIL",
        "Tkinter",
      ],
      features: ["Face Detection", "Auto Crop", "Edge Detections", "OCR"],
      github: "https://github.com/Nishan-t26/Face-detection-Using-cascade-method-and-Image-modifier",
      status: "",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-500/20 text-green-400";
      case "Active Development":
        return "bg-blue-500/20 text-blue-400";
      case "Beta":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const ScrollableBadges = ({ technologies }: { technologies: string[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/40 hover:bg-background/60 p-1 rounded-full shadow-sm transition-all duration-200"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4 text-foreground/70" />
        </button>
      )}

      {/* Badge container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-1"
      >
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-xs border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-300 whitespace-nowrap"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Right arrow */}
      {canScrollRight && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/40 hover:bg-background/60 p-1 rounded-full shadow-sm transition-all duration-200"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4 text-foreground/70" />
        </button>
      )}
    </div>
  );
};


  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and
            creative problem-solving across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`${getStatusColor(project.status)} border-0`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-1 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">
                    Technologies:
                  </h4>
                  <ScrollableBadges technologies={project.technologies} />
                </div>

                <div className="flex gap-2 pt-2">
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
