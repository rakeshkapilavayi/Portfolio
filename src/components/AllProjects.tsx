import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Presentation, ChevronDown, ChevronUp, Brain, BarChart3, Eye, Cpu, Rocket } from "lucide-react";
import { useState } from "react";
import beverageImage from "@/assets/beverages.png";
import healthinsuranceImage from "@/assets/healthinsurance.png";
import personalityImage from "@/assets/personality.png";
import cardamageImage from "@/assets/cardamage.png";
import fruitfreshnessImage from "@/assets/fruitfreshness.png";
import ecommerceImage from "@/assets/ecommerce.png";
import realestateImage from "@/assets/realestate.png";
import cashswapImg from "@/assets/cashswap.png";
import osccImg from "@/assets/oscc.png";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  presentation?: string;
  image: string;
};

const categories = ["All", "Machine Learning", "Deep Learning", "Generative AI"] as const;

const projects: { category: string; items: Project[] }[] = [
  {
    category: "Machine Learning",
    items: [
      {
        title: "Beverage Price Prediction",
        description:
          "An interactive Streamlit app that predicts optimal market price range for beverages based on customer demographics, preferences, and lifestyle choices using a trained ML model with one-hot encoding and feature engineering.",
        technologies: ["Scikit-Learn", "Streamlit", "Pandas", "Joblib", "XGBoost"],
        github: "https://github.com/rakeshkapilavayi/Beverage-Price-Prediction",
        live: "https://beverage-price-prediction.streamlit.app",
        presentation: "https://drive.google.com/file/d/16awukKFEqLW7YqqCbyUuWJNd1dJW8uVC/view?usp=drive_link",
        image: beverageImage,
      },
      {
        title: "Health Insurance Premium Predictor",
        description:
          "Intelligent web app that estimates individual health insurance premiums using a dual-model approach — Linear Regression for younger users and XGBoost for the rest — based on demographics, lifestyle, and medical inputs.",
        technologies: ["XGBoost", "Linear Regression", "Streamlit", "Scikit-Learn", "Joblib"],
        github: "https://github.com/rakeshkapilavayi/Health-Insurance-Premium-Predictor",
        live: "https://health-insurance-premium-predictor.streamlit.app",
        presentation: "https://github.com/rakeshkapilavayi/Health-Insurance-Premium-Predictor/blob/main/Health-Insurance-Presentation.pdf",
        image: healthinsuranceImage,
      },
      {
        title: "Personality Predictor",
        description:
          "ML-based personality classifier that predicts Introvert or Extrovert based on social behavior inputs. Uses polynomial features, custom metrics, imputation, scaling, and categorical encoding with a Streamlit UI.",
        technologies: ["Scikit-Learn", "Streamlit", "Pandas", "NumPy", "Pickle"],
        github: "https://github.com/rakeshkapilavayi/Personality-Predictor",
        live: "https://personality-predictor.streamlit.app",
        presentation: "https://github.com/rakeshkapilavayi/Personality-Predictor/blob/main/README.md",
        image: personalityImage,
      },
    ],
  },
  {
    category: "Deep Learning",
    items: [
      {
        title: "Car Damage Detector",
        description:
          "Intelligent web app that detects and classifies vehicle damage from images using a fine-tuned ResNet50 model. Classifies into 6 categories across front/rear normal, crushed, and breakage states.",
        technologies: ["PyTorch", "ResNet50", "Transfer Learning", "Streamlit", "PIL"],
        github: "https://github.com/vaibhavgarg2004/Car-Damage-Detector",
        live: "https://rakesh-project-car-damage-detector.streamlit.app/",
        presentation: "https://github.com/rakeshkapilavayi/Car-Damage-Detector/blob/main/Car-Damage-Detector-Presentation.pdf",
        image: cardamageImage,
      },
      {
        title: "FreshHarvest – Fruit Freshness Detection",
        description:
          "AI-powered quality inspection system that automates fruit freshness detection using a fine-tuned ResNet50 model. Classifies 8 fruit types as fresh or stale with ~92% validation accuracy.",
        technologies: ["PyTorch", "ResNet50", "Transfer Learning", "Streamlit", "torchvision"],
        github: "https://github.com/rakeshkapilavayi/Fruit-Freshness-classifier",
        live: "https://rakesh-project-fruit-freshness-classifier.streamlit.app",
        presentation: "https://github.com/rakeshkapilavayi/Fruit-Freshness-classifier/blob/main/Readme.md",
        image: fruitfreshnessImage,
      },
      {
        title: "OSCC Classification",
        description:
          "PyTorch-based CNN model to classify OSCC vs. Normal histopathology images. Applied image preprocessing, augmentation, and sampling for multi-magnification and imbalanced data. Achieved 89% accuracy / 0.85 F1-score.",
        technologies: ["CNN", "Transfer Learning", "PyTorch", "Image Preprocessing", "Streamlit"],
        github: "https://github.com/rakeshkapilavayi/OSCC-Classifiication",
        live: "https://rakesh-project-oscc-classifier.streamlit.app/",
        presentation: "https://drive.google.com/file/d/1sxTmarKh8X0cFNhqxzoLd-AMGq8AP0Cn/view?usp=drive_link",
        image: osccImg,
      },
    ],
  },
  {
    category: "Generative AI",
    items: [
      {
        title: "E-Commerce Chat Assistant",
        description:
          "Intelligent e-commerce chatbot with semantic intent routing for FAQs (RAG via ChromaDB), real-time SQL product search, and small talk. Powered by LLaMA-3.3 via GROQ API with a Streamlit interface.",
        technologies: ["RAG", "ChromaDB", "SQLite", "Semantic Routing", "LLaMA", "Streamlit"],
        github: "https://github.com/rakeshkapilavayi/E-Commerce-Chat-Assistant",
        live: "https://rakesh-project-ecommerce-chat-bot.streamlit.app/",
        presentation: "https://github.com/rakeshkapilavayi/E-Commerce-Chat-Assistant/blob/main/README.md",
        image: ecommerceImage,
      },
      {
        title: "CashSwap Chat Assistant",
        description:
          "GenAI RAG chatbot using LLaMA (GROQ API) with semantic intent routing for FAQs, real-time user search, and small talk on a live P2P fintech platform. Deployed Flask API + React frontend on Render + Vercel.",
        technologies: ["RAG", "ChromaDB", "SQLite", "Semantic Routing", "Flask", "React"],
        github: "https://github.com/rakeshkapilavayi/cashswap",
        live: "https://cashswapp.vercel.app/",
        presentation: "https://youtu.be/PI1X0xdHDb0?si=stGhAH4BL9jVaYza",
        image: cashswapImg,
      },
      {
        title: "Real Estate Research Tool",
        description:
          "AI-powered research tool for real estate analysis. Streamlit-based interface that helps users research properties, market trends, and investment insights using intelligent data processing.",
        technologies: ["Streamlit", "Python", "LLM", "Data Analysis"],
        github: "https://github.com/rakeshkapilavayi/Real-Estate-Research-Tool",
        live: "https://rakesh-project-real-estate-tool.streamlit.app/",
        presentation: "https://github.com/rakeshkapilavayi/Real-Estate-Research-Tool/blob/main/README.md",
        image: realestateImage,
      },
    ],
  },
];

const allItems = projects.flatMap((g) => g.items.map((p) => ({ ...p, category: g.category })));

// ─── What I Can Build Section ────────────────────────────────────────────────

const capabilities = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    shortDesc: "Predictive models, automation systems, ML pipelines",
    whatICanBuild: [
      "Predictive models for sales, demand, and risk forecasting",
      "Classification systems for automation workflows",
      "Recommendation engines",
      "Automated ML pipelines for training and evaluation",
      "Production ML APIs using FastAPI",
    ],
    impact: "Built a 94% accurate ML prediction system deployed as a real-world application.",
  },
  {
    icon: Brain,
    title: "Generative AI & Intelligent Assistants",
    shortDesc: "RAG chatbots, AI assistants, knowledge systems",
    whatICanBuild: [
      "Retrieval-Augmented Generation (RAG) systems",
      "AI chat assistants for websites and applications",
      "Natural language to SQL data querying systems",
      "Knowledge-based AI assistants",
      "Semantic search systems using vector databases",
    ],
    impact: "Developed a RAG chatbot with semantic routing and SQL automation.",
  },
  {
    icon: Eye,
    title: "Computer Vision Systems",
    shortDesc: "Image classification, medical AI, visual automation",
    whatICanBuild: [
      "Image classification models",
      "Object detection pipelines",
      "Medical image analysis systems",
      "Real-time camera-based AI systems",
    ],
    impact: "Built CNN-based classification models achieving up to 97% accuracy.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Decision Intelligence",
    shortDesc: "EDA tools, dashboards, business intelligence",
    whatICanBuild: [
      "Automated EDA platforms",
      "Business intelligence dashboards",
      "Data cleaning and preprocessing pipelines",
      "Insight generation systems",
    ],
    impact: "Built DataPulse, an automated data analysis platform generating insights and visual reports.",
  },
  {
    icon: Rocket,
    title: "AI Product Deployment",
    shortDesc: "Full-stack AI apps, APIs, cloud-deployed pipelines",
    whatICanBuild: [
      "ML model APIs",
      "End-to-end AI web applications",
      "Streamlit / FastAPI AI tools",
      "Cloud-deployed ML products",
      "Full AI pipelines from data → model → production",
    ],
    impact: "Deployed multiple full-stack production AI applications with custom frontends.",
  },
];

const WhatICanBuild = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-primary text-sm font-medium">⭐ For Recruiters & Teams</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I Can Build <span className="text-gradient">For Your Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            I design and build production-ready AI systems that transform raw data into intelligent decision-making tools.
            My work combines machine learning, deep learning, and generative AI with practical deployment to solve real-world business problems.
          </p>
          {!open && (
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-8">
              If hired, I can help teams build scalable AI-powered products across data analytics, automation, and intelligent systems.
            </p>
          )}

          <Button
            size="lg"
            className={open ? "border-primary/30 bg-transparent border hover:bg-primary/10 text-foreground" : "primary-gradient hover-glow transition-smooth"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                Close
              </>
            ) : (
              <>
                <Rocket className="w-5 h-5 mr-2" />
                What I Can Build For You
              </>
            )}
          </Button>
        </div>

        {open && (
          <div className="animate-fade-in">
            {/* Quick overview cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {capabilities.slice(0, 4).map((cap, i) => (
                <div
                  key={i}
                  className="card-gradient border border-primary/20 rounded-xl p-5 text-center hover-lift transition-smooth"
                >
                  <div className="p-3 rounded-lg primary-gradient inline-block mb-3">
                    <cap.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="font-semibold text-sm mb-1">{cap.title.split(" ")[0]} {cap.title.split(" ")[1]}</p>
                  <p className="text-xs text-muted-foreground">{cap.shortDesc}</p>
                </div>
              ))}
            </div>

            {/* Detailed capability blocks */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {capabilities.map((cap, i) => (
                <Card
                  key={i}
                  className="card-gradient border border-primary/20 hover-lift transition-smooth"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2.5 rounded-lg primary-gradient">
                        <cap.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{cap.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">What I can build</p>
                      <ul className="space-y-1">
                        {cap.whatICanBuild.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Example impact</p>
                      <p className="text-sm text-muted-foreground">{cap.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto mb-6">
                "I enjoy building AI systems that move beyond experiments and become real products that solve meaningful problems."
              </p>
              <Button
                variant="outline"
                className="border-primary/30 hover-glow transition-smooth"
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Build Something Together →
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ─── All Projects Section ────────────────────────────────────────────────────

const AllProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? allItems
      : allItems.filter((p) => p.category === active);

  return (
    <>
      <section id="all-projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              All <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Browse my complete project portfolio by category.
            </p>

            <Button
              size="lg"
              className={isOpen ? "border-primary/30 bg-transparent border hover:bg-primary/10 text-foreground" : "primary-gradient hover-glow transition-smooth"}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Close Projects
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Explore All Projects
                </>
              )}
            </Button>
          </div>

          {isOpen && (
            <>
              {/* Category filter tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                      active === cat
                        ? "bg-primary text-primary-foreground border-primary shadow-[var(--glow-primary)]"
                        : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {filtered.map((project, index) => (
                  <Card
                    key={project.title}
                    className="card-gradient hover-lift transition-smooth border border-primary/20 overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={project.image || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-smooth hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop";
                        }}
                      />
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="border-primary/40 text-primary text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="border-primary/30 text-primary text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          {project.github && project.github !== "#" && (
                            <Button size="sm" variant="outline" className="border-primary/30 hover-glow transition-smooth text-xs h-8" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-3.5 h-3.5 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.live && project.live !== "#" && (
                            <Button size="sm" className="primary-gradient hover-glow transition-smooth text-xs h-8" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3.5 h-3.5 mr-1" />
                                Live
                              </a>
                            </Button>
                          )}
                          {project.presentation && project.presentation !== "#" && (
                            <Button size="sm" variant="outline" className="border-primary/30 hover-glow transition-smooth text-xs h-8" asChild>
                              <a href={project.presentation} target="_blank" rel="noopener noreferrer">
                                <Presentation className="w-3.5 h-3.5 mr-1" />
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
            </>
          )}
        </div>
      </section>

      {/* What I Can Build Section */}
      <WhatICanBuild />
    </>
  );
};

export default AllProjects;