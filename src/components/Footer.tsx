import { Github, LinkedinIcon, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent">
                Dr. Materials Science
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Advancing materials science through innovative research, 
                characterization, and sustainable material development.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </a>
                <a href="#projects" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Publications
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <BookOpen className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 Dr. Materials Science Portfolio. Built with passion for scientific advancement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;