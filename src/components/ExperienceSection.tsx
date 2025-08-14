import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Rean WaterTech PVT. LTD.",
      location: "Jodhpur, Rajasthan",
      period: "March 2024 - Present",
     description: 
        "Developed and deployed full-stack web solutions using ReactJS, NodeJS, and the MERN stack, delivering systems for HR management, project tracking, and automated billing that streamlined operations and reduced manual effort. Built a Python-based web bot for automated tender data extraction from government portals. Implemented CI/CD pipelines, standardized testing with Jest, containerized services using Docker, and optimized production deployments via NGINX with SSL, caching, and reverse proxy configurations.",

      achievements: [
        "Improved HR operations efficiency by developing a ReactJS and NodeJS-based management system with optimized concurrency and memory usage",
        "Enhanced project visibility and delivery speed by building a MERN stack project management system with real-time tracking features",
        "Reduced billing errors and manual workload through an automated billing software for water utility services, supporting bill generation, payment tracking, and customer management",
        "Automated extraction of government tender data using a Python-based web bot, reducing manual data collection time significantly",
        "Standardized npm build/test/lint scripts, implemented unit and API testing with Jest, and automated deployments with CI/CD pipelines",
        "Deployed production-ready systems via NGINX with SSL encryption, caching, and optimized reverse proxy configurations for high availability",
      ],


      technologies: [
        "React",
        "ReactNative",
        "Node",
        "Express",
        "Azure Api",
        "LDAP",
        "AWS",
        "REST APIs",
        "Python",
      ],
    },
    {
      title: "Linux Trainee",
      company: "Red Hat",
      location: "Jodhpur, Rajasthan",
      period: "Jul 2023 - Aug 2023",
      description: 
  "Completed Red Hat Certified System Administrator (RHCSA) and Red Hat Certified Engineer (RHCE) training, gaining practical experience in Linux system administration, networking, shell scripting, and automation. Developed skills in system installation, configuration, security management, and troubleshooting, along with proficiency in automation tools like Ansible.",

achievements: [
  "Installed, configured, and managed Linux systems, including user accounts, storage volumes, and system services",
  "Implemented basic to advanced security measures, including user privilege management and firewall configuration",
  "Developed shell scripts to automate repetitive administrative tasks, reducing manual intervention",
  "Configured and managed networking services such as DNS, DHCP, and HTTP for Linux-based systems",
  "Automated server provisioning and configuration management using Ansible playbooks",
  "Troubleshot system and network issues, ensuring minimal downtime and optimal performance",
],

      technologies: [
        "Red Hat enterprise (RHEL9)",
        "Linux",
        "Ansible",
        "VMware",
        "YMAL playbooks"
      ],
    },
    {
      title: "Python Trainee",
      company: "CETPA INFOTECH PVT. LTD.",
      location: "Noida, Uttar Pradesh",
      period: "May 2023 - Jul 2023",
      description: 
        "Completed Python programming training with a focus on GUI development using Tkinter, gaining hands-on experience in application design, event-driven programming, and user interface implementation. Acquired practical exposure to company workflows, processes, and operational structures.",

      achievements: [
        "Developed desktop-based GUI applications using Python Tkinter for interactive user interfaces",
        "Implemented event-driven programming concepts to handle dynamic user input and actions",
        "Created modular and reusable Python code for improved maintainability",
        "Integrated Tkinter widgets and layouts to build functional, user-friendly interfaces",
        "Gained practical understanding of software development workflows and team collaboration processes",
      ],
      technologies: [
        "Python",
        "Tkinter",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of growth, learning, and delivering impactful solutions
            across diverse projects and teams.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title + exp.company}
              className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    Key Achievements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-300"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
