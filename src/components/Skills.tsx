const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++"],
  },
  {
    title: "Backend & APIs",
    skills: ["Django", "REST APIs", "API Design"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Databases",
    skills: ["MongoDB"],
  },
  {
    title: "LLM / AI Tooling",
    skills: ["LangChain", "LangGraph", "Gemini API"],
  },
  {
    title: "Tooling",
    skills: ["Git", "GitHub", "Version Control"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
