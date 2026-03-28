import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Tady Tech",
      location: "Remote",
      period: "Sep 2025 - Present",
      description: [
        "Developed a 94% accurate deficiency prediction ML model and deployed it using FastAPI with integrated UI.",
        "Designed Ontology pipeline using WebProtege and GraphDB with SPARQL-powered endpoints for data retrieval.",
        "Built NLP-based email classification system for MailSortAI integrating Google OAuth API for automated routing.",
        "Deployed full-stack production application with trained ML model and custom frontend interface for clients."
      ],
      technologies: ["Python", "FastAPI", "NLP", "GraphDB", "SPARQL", "WebProtege"]
    },
    {
      title: "AI Intern",
      company: "AtliQ Technologies",
      location: "Remote",
      period: "Jul 2025 - Sep 2025",
      description: [
        "Built beverage price prediction ML system using XGBoost, MLflow tracking, and deployed Streamlit application.",
        "Conducted EDA on promotional campaigns analyzing sales uplift, city responsiveness, and revenue impact insights.",
        "Developed CNN-based fruit freshness classification model using Transfer Learning achieving 97% accuracy."
      ],
      technologies: ["XGBoost", "MLflow", "Streamlit", "CNN", "Transfer Learning", "Pandas"]
    },
    {
      title: "B.Tech Student - AI & ML",
      company: "Vishnu Institute of Technology",
      location: "Bhimavaram, Andhra Pradesh",
      period: "Aug 2023 - Present",
      description: [
        "Pursuing B.Tech in Artificial Intelligence and Machine Learning with CGPA 8.98.",
        "Completed certifications in ML, Deep Learning, and Computer Vision from Codebasics and Udemy."
      ],
      technologies: ["Python", "Machine Learning", "Deep Learning", "Statistics", "Mathematics"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in AI/ML engineering and data science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block glow-primary"></div>
                  
                  <Card className="card-gradient hover-lift transition-smooth border border-primary/20 md:ml-20">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2 list-disc list-inside">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-primary/10 hover:bg-primary/20 transition-smooth text-foreground border border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
