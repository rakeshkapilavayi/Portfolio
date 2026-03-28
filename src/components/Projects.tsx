import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Presentation } from "lucide-react";
import datapulseImg from "@/assets/datapulse.png";

// Add your other images to src/assets/ and import them here:
import cashswapImg from "@/assets/cashswap.png";
import osccImg from "@/assets/oscc.png";

const Projects = () => {
  const projects = [
    {
      title: "CashSwap Chat Assistant",
      subtitle: "GenAI | RAG + SQL Automation",
      period: "Sep 2025",
      description: "Built a GenAI RAG chatbot using LLaMA (GROQ API) with semantic intent routing for FAQs, real-time user search, and small talk on a live P2P fintech platform. Implemented NL-to-SQL over SQLite and RAG pipeline using ChromaDB + Sentence Transformers. Deployed Python/Flask API and React frontend on Render + Vercel.",
      technologies: ["RAG", "ChromaDB", "SQLite", "Semantic Routing", "Flask", "React"],
      image: cashswapImg,
      github: "https://github.com/rakeshkapilavayi/cashswap",
      live: "https://cashswapp.vercel.app/",
      presentation: "https://youtu.be/PI1X0xdHDb0?si=stGhAH4BL9jVaYza"
    },
    {
      title: "DataPulse – Automated EDA",
      subtitle: "Data Science Tooling & AutoML",
      period: "Sep 2025 - Feb 2026",
      description: "Built and deployed a production-ready full-stack AutoML platform with React frontend on Vercel. Implemented automated EDA, dataset profiling, missing value handling, IQR-based outlier detection, and end-to-end ML pipelines with cross-validation and exportable PDF reports.",
      technologies: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Plotly", "React"],
      image: datapulseImg,
      github: "https://github.com/rakeshkapilavayi",
      live: "https://datapulsee.vercel.app",
      presentation: "https://docs.google.com/presentation/d/1hYkOR_c-dFoSfC-CNLnb2XTXO7werZcg/edit?usp=drivesdk&ouid=110197932671723001631&rtpof=true&sd=true"
    },
    {
      title: "OSCC Classification",
      subtitle: "Medical AI | Deep Learning",
      period: "Aug 2025",
      description: "Developed a PyTorch-based CNN model to classify OSCC vs. Normal histopathology images. Applied image preprocessing, augmentation, and sampling for multi-magnification and imbalanced data. Achieved 89% accuracy / 0.85 F1-score with a Streamlit UI for real-time medical image diagnosis.",
      technologies: ["CNN", "Transfer Learning", "PyTorch", "Image Preprocessing", "Streamlit"],
      image: osccImg,
      github: "https://github.com/rakeshkapilavayi/OSCC-Classifiication",
      live: "https://rakesh-project-oscc-classifier.streamlit.app/",
      presentation: "https://drive.google.com/file/d/1sxTmarKh8X0cFNhqxzoLd-AMGq8AP0Cn/view?usp=drive_link"
    }
  ];

  const fallback = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop";

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end AI solutions from data pipelines to production deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-gradient hover-lift transition-smooth border border-primary/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || fallback}
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{project.subtitle} • {project.period}</p>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && project.github !== "#" && (
                      <Button size="sm" variant="outline" className="border-primary/30 hover-glow transition-smooth" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && project.live !== "#" && (
                      <Button size="sm" className="primary-gradient hover-glow transition-smooth" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.presentation && project.presentation !== "#" && (
                      <Button size="sm" variant="outline" className="border-primary/30 hover-glow transition-smooth" asChild>
                        <a href={project.presentation} target="_blank" rel="noopener noreferrer">
                          <Presentation className="w-4 h-4 mr-2" />
                          Docs
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover-glow transition-smooth"
            onClick={() => {
              const el = document.getElementById('all-projects');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View All Projects →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;