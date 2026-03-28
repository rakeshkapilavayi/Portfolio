import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, BarChart3 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack AI",
      description: "Building end-to-end AI solutions from data pipelines to production deployment with FastAPI & Streamlit"
    },
    {
      icon: Brain,
      title: "GenAI & Agentic Systems",
      description: "Creating intelligent agents and RAG systems using LangChain, CrewAI, and LangGraph"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Delivering insights through Power BI dashboards, data modeling, and analytics"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI Engineer pursuing B.Tech AIML (CGPA 8.98) — specialized in Python & SQL, with deep expertise
            across ML, DL, GenAI, and Agentic AI. I build end-to-end AI solutions from data collection
            to production deployment with clean, polished frontends.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently interning at Tady Tech where I've developed a 94% accurate deficiency prediction ML model, 
                designed ontology pipelines, and built NLP-based email classification systems deployed in production.
              </p>
              <p>
                Previously at AtliQ Technologies, I built ML prediction systems with XGBoost and MLflow, 
                conducted EDA on promotional campaigns, and developed CNN-based classification models achieving 97% accuracy.
              </p>
              <p>
                I'm passionate about bridging the gap between AI research and real-world applications — 
                from GenAI chatbots with semantic routing to automated EDA platforms and medical image diagnosis systems.
              </p>
            </div>
          </div>

          <div className="grid gap-6 animate-fade-in-right">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-gradient hover-lift transition-smooth border border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg primary-gradient">
                      <highlight.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
