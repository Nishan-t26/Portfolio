import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:hello@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300 mb-2"
            >
              Nishant Sharma
            </button>
            <p className="text-muted-foreground">
              Building the future with code, creativity, and passion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          {/* <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> © {currentYear}
            </p>
          </div> */}
        </div>

        {/* Bottom Border */}
        {/* <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            Designed and developed with modern web technologies
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;