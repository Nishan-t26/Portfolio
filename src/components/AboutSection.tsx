import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Target, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "5+ years of experience in full-stack development with modern technologies",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Passionate about emerging technologies and implementing creative solutions",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Track record of delivering high-quality projects on time and within budget",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Strong team player with excellent communication and leadership skills",
    },
  ];

  const skills = [
    "ReactJS",
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "Node.js",
    "Linux",
    "AWS",
    "GDB",
    "Google Cloud Storage",
    "MongoDB",
    "LDAP",
    "C/C++",
    "Data Structures",
    "Algorithms",
    "Operating System",
    "VSCode",
    "MySQL Workbench",
    "Postman",
    "Git",
    "Android Studio",
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating
            innovative digital solutions that make a difference.
          </p>
        </div>

        <div className=" gap-12 items-center mb-10">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Full-Stack Developer with 1.5+ years of practical experience in  ReactJS, ReactNative and Node.js,
                 delivering scalable web solutions from concept to deployment. Contributed to HR management, project
                  tracking, and billing automation systems, leveraging MERN stack. 
                  Adept at building interactive applications, optimizing performance
                , and collaborating across teams to deliver impactful results.
              </p>
              {/* <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating user
                experiences that are both beautiful and functional. When I'm not
                coding, you'll find me exploring new technologies, contributing
                to open source, or mentoring aspiring developers.
              </p> */}
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
