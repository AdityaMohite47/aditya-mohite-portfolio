import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Campus Canteen System",
    summary: "Backend-driven system with chat-based ordering, MongoDB storage, and vendor dashboard.",
    techStack: ["LangGraph", "Gemini API", "MongoDB", "Python"],
    github: "https://github.com",
  },
  {
    title: "Machine Learning Projects",
    summary: "Supervised ML workflows including preprocessing, training, evaluation, and analysis.",
    techStack: ["Scikit-learn", "Pandas", "NumPy", "Python"],
    github: "https://github.com",
  },
  {
    title: "Django Backend with Gemini API",
    summary: "Django backend integrating LLM APIs for dynamic AI-driven responses.",
    techStack: ["Django", "Gemini API", "REST APIs", "Python"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of projects showcasing backend development, machine learning, and LLM integration.
        </p>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <article 
              key={project.title}
              className="group p-6 md:p-8 rounded-xl bg-card border border-border card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 md:flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-4 !py-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
