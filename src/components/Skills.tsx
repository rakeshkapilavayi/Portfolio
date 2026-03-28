import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Libraries",
      skills: ["Python", "SQL", "Java", "NumPy", "Pandas", "Scikit-Learn", "PyTorch", "OpenCV", "NLTK", "SpaCy"]
    },
    {
      title: "ML & Deep Learning",
      skills: ["Classification", "Regression", "Clustering", "CNN", "RNN", "LSTM", "Transformers", "Transfer Learning", "NLP", "Computer Vision"]
    },
    {
      title: "Generative AI & LLM",
      skills: ["LangChain", "LangGraph", "CrewAI", "RAG", "Vector Databases", "Fine-tuning", "Agentic AI", "Workflow Automation"]
    },
    {
      title: "Business Intelligence",
      skills: ["Power BI", "DAX", "Data Modeling", "Excel", "Power Query", "ETL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter", "Google Colab", "Git", "GitHub", "VS Code", "MLflow", "DagsHub", "Streamlit", "Docker", "FastAPI"]
    },
    {
      title: "Specialized Skills",
      skills: ["Ontology Design", "SPARQL", "GraphDB", "WebProtege", "Plotly", "TensorFlow"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to build intelligent AI/ML solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="card-gradient hover-lift transition-smooth border border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/10 hover:bg-primary/20 transition-smooth text-foreground border border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
