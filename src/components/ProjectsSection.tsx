import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
      features: ["Real-time inventory", "Payment processing", "Admin dashboard", "Mobile responsive"],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express", "Docker"],
      features: ["Real-time collaboration", "Advanced reporting", "Team management", "File sharing"],
      github: "#",
      demo: "#",
      status: "Active Development"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning dashboard that provides intelligent insights and predictive analytics for business data with interactive visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI", "Docker"],
      features: ["ML predictions", "Interactive charts", "Data visualization", "API integration"],
      github: "#",
      demo: "#",
      status: "Beta"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-500/20 text-green-400";
      case "Active Development": return "bg-blue-500/20 text-blue-400";
      case "Beta": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving across various domains.
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
                  <Badge className={`${getStatusColor(project.status)} border-0`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;