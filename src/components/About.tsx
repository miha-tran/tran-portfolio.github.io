import { Card } from "@/components/ui/card";
import { GraduationCap, Microscope, Award, BookOpen } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Microscope,
      title: "Nanoscale Characterization",
      description: "Advanced microscopy and spectroscopy techniques for material analysis at the nanoscale."
    },
    {
      icon: Award,
      title: "Material Design",
      description: "Innovative approaches to designing materials with tailored properties for specific applications."
    },
    {
      icon: BookOpen,
      title: "Research & Development",
      description: "Extensive experience in leading R&D projects from conception to implementation."
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "PhD in Materials Science with focus on advanced materials and characterization methods."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As a PhD in Materials Science, I specialize in developing cutting-edge materials 
              and characterization techniques. My research focuses on bridging the gap between 
              fundamental science and practical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey in Materials Science began with a fascination for understanding 
                how atomic-scale structures influence macroscopic properties. Throughout my 
                PhD and subsequent research, I've developed expertise in various characterization 
                techniques and have contributed to advancing our understanding of complex materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've worked on diverse projects ranging from sustainable materials to 
                high-performance composites, always with an eye toward real-world applications 
                and environmental sustainability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-card border-0 hover:scale-105"
                >
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2 text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
              <h4 className="text-lg font-semibold mb-2">Education</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>PhD Materials Science</strong><br />University Name (2019-2023)</p>
                <p><strong>MS Materials Engineering</strong><br />University Name (2017-2019)</p>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
              <h4 className="text-lg font-semibold mb-2">Key Skills</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>SEM/TEM Microscopy</p>
                <p>XRD Analysis</p>
                <p>Spectroscopy Techniques</p>
                <p>Material Synthesis</p>
                <p>Data Analysis</p>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft">
              <h4 className="text-lg font-semibold mb-2">Research Interests</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Sustainable Materials</p>
                <p>Nanocomposites</p>
                <p>Smart Materials</p>
                <p>Surface Science</p>
                <p>Energy Materials</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;