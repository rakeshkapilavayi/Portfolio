import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Rakesh Kapilavayi</h3>
            <p className="text-muted-foreground">
              Data Science Undergraduate & ML Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/rakeshkapilavayi" 
              className="p-3 rounded-full card-gradient hover-lift transition-smooth border border-primary/20"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rakesh-kapilavayi-48b9a0342/" 
              className="p-3 rounded-full card-gradient hover-lift transition-smooth border border-primary/20"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full card-gradient hover-lift transition-smooth border border-primary/20"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-primary" fill="currentColor" /> 
              © {currentYear} Rakesh Kapilavayi
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;