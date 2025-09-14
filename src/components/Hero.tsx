import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Materials Science Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Dr.</span>{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Materials Science
              </span>
              <br />
              <span className="text-foreground">Researcher</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              PhD in Materials Science with expertise in advanced materials research, 
              nanoscale characterization, and innovative material design solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-float transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-gradient-card hover:shadow-card transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center animate-float">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">Years Research</div>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  8+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;