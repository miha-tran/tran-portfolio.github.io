import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Advanced Nanocomposite Development",
      description: "Design and synthesis of high-performance polymer nanocomposites with enhanced mechanical properties.",
      fullDescription: "This project focused on developing novel polymer-based nanocomposites by incorporating various nanofillers including carbon nanotubes, graphene, and ceramic nanoparticles. The research involved systematic characterization of mechanical, thermal, and electrical properties using state-of-the-art techniques. Results showed significant improvements in tensile strength (40% increase) and thermal stability (50°C higher decomposition temperature).",
      tags: ["Nanocomposites", "Polymer Science", "Material Characterization"],
      year: "2023",
      status: "Published",
      link: "#",
      github: "#"
    },
    {
      title: "Sustainable Material Synthesis",
      description: "Development of eco-friendly synthesis methods for advanced materials using green chemistry principles.",
      fullDescription: "Investigated alternative synthesis routes for high-performance materials using environmentally benign solvents and renewable precursors. The project resulted in a novel synthesis method that reduces waste by 70% while maintaining material properties. This work has implications for large-scale sustainable manufacturing of advanced materials.",
      tags: ["Green Chemistry", "Sustainability", "Synthesis"],
      year: "2022",
      status: "In Review",
      link: "#",
      github: "#"
    },
    {
      title: "Smart Material Characterization Platform",
      description: "Development of an automated characterization platform for rapid screening of smart materials.",
      fullDescription: "Created an integrated characterization platform combining multiple analytical techniques (XRD, SEM, AFM) with machine learning algorithms for rapid material property prediction. The platform reduces characterization time by 80% and has been adopted by three research institutions for high-throughput materials discovery.",
      tags: ["Automation", "Machine Learning", "Characterization"],
      year: "2023",
      status: "Completed",
      link: "#",
      github: "#"
    },
    {
      title: "Energy Storage Material Optimization",
      description: "Optimization of electrode materials for next-generation battery technologies.",
      fullDescription: "Focused on developing high-capacity anode materials for lithium-ion batteries through compositional and morphological engineering. Achieved 25% improvement in specific capacity and enhanced cycling stability. The work involved comprehensive electrochemical testing and post-mortem analysis to understand degradation mechanisms.",
      tags: ["Energy Storage", "Electrochemistry", "Battery Materials"],
      year: "2022",
      status: "Published",
      link: "#",
      github: "#"
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my latest research projects spanning materials synthesis, characterization, 
              and application development.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge 
                          variant={project.status === 'Published' ? 'default' : 
                                 project.status === 'In Review' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {project.year}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                {expandedProject === index && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4 mb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </Button>
                      <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Github className="w-4 h-4 mr-2" />
                        Code Repository
                      </Button>
                    </div>
                  </CardContent>
                )}

                <div className="px-6 pb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleProject(index)}
                    className="w-full justify-center hover:bg-primary/10 transition-colors"
                  >
                    {expandedProject === index ? (
                      <>
                        Show Less
                        <ChevronUp className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Learn More
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;