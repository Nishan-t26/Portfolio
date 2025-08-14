import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      
      value: "nishantshamra7408@gmail.com",
      href: "mailto:nishantshamra7408@gmail.com",
    },
    {
      icon: Phone,
     
      value: "+91 637-569-9408",
      href: "tel:+916375699408",
    },
  
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nishan-t26",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/nishant-sharma-ns",
      color: "hover:text-blue-400",
    },
   
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          {/* <div className="lg:col-span-2">
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass-card border-primary/20 focus:border-primary/40 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass-card border-primary/20 focus:border-primary/40 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="glass-card border-primary/20 focus:border-primary/40 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="glass-card border-primary/20 focus:border-primary/40 transition-all duration-300 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full hero-gradient text-white font-semibold py-6 text-lg rounded-xl shadow-glow-primary hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div> */}

          {/* Contact Info & Social Links */}
          <div className="space-y-2">
            {/* Contact Information */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                   
                    href={info.href}
                    className="flex items-center  gap-3 p-3 rounded-lg glass-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                     
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            

            {/* Availability Status */}
           
          </div>
          
            <div> <Card className="glass-card border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <Badge className="bg-green-500/20 text-green-400 border-0">
                    Open to work
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new job opportunities. Let's
                  build something amazing together!
                </p>
              </CardContent>
            </Card></div>

            <div ><Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg glass-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group ${social.color}`}
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
