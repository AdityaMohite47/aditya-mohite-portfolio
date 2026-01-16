import { Github, Youtube } from "lucide-react";

/* ---------------- Types ---------------- */

type ProjectLink = {
  type: "github" | "youtube";
  url: string;
};

type Project = {
  title: string;
  summary: string;
  techStack: string[];
  links: ProjectLink[];
};

/* ---------------- Data ---------------- */

const projects: Project[] = [
  {
    title: "Campus Canteen System Backend",
    summary:
      "Backend-driven system with chat-based ordering, MongoDB storage, and vendor dashboard.",
    techStack: ["LangGraph", "Gemini API", "MongoDB", "Python"],
    links: [
      {
        type: "github",
        url: "https://github.com/AdityaMohite47/CampusCanteen-BE",
      },
      {
        type: "youtube",
        url: "https://youtu.be/900mPHrd1K8",
      },
    ],
  },
  {
  title: "Machine Learning With Udemy Course",
  summary: "Follow along project implementations from a ML course on Udemy.",
  techStack: [
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib & Seaborn",
    "Python",
  ],
  links: [
    {
      type: "github",
      url: "https://github.com/AdityaMohite47/Machine_Learning_with_Udemy",
    },
  ],
},
  {
    title: "Machine Learning Projects",
    summary:
      "Supervised ML workflows including preprocessing, training, evaluation, and analysis.",
    techStack: ["Scikit-learn", "Pandas", "NumPy", "Python"],
    links: [
      {
        type: "github",
        url: "https://github.com/AdityaMohite47/Machine-Learning-Practice",
      },
    ],
  },
  {
    title: "Django Backend with Gemini API",
    summary:
      "Django backend integrating LLM APIs for dynamic AI-driven responses.",
    techStack: ["Django", "Gemini API", "REST APIs", "Python"],
    links: [
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=JPifD5EUVow",
      },
    ],
  },
];

/* ---------------- Component ---------------- */

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
                {/* Project Info */}
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

                {/* Action Buttons */}
                <div className="flex gap-3 md:flex-shrink-0 flex-wrap">
                  {project.links.map((link) => (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline !px-4 !py-2 text-sm"
                      aria-label={
                        link.type === "youtube"
                          ? `Watch demo for ${project.title}`
                          : `View repository for ${project.title}`
                      }
                    >
                      {link.type === "youtube" ? (
                        <>
                          <Youtube className="w-4 h-4" />
                          Watch Demo
                        </>
                      ) : (
                        <>
                          <Github className="w-4 h-4" />
                          View Repository
                        </>
                      )}
                    </a>
                  ))}
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