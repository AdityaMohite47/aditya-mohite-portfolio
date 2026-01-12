import { GraduationCap, Code, Lightbulb } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science",
    description: "Final-year student with strong academic foundation in computer science fundamentals, algorithms, and software development.",
  },
  {
    icon: Code,
    title: "Self-Driven Development",
    description: "Built multiple projects independently, focusing on backend systems, ML applications, and modern LLM tooling.",
  },
  {
    icon: Lightbulb,
    title: "Applied Learning",
    description: "Emphasis on practical, hands-on experience with real-world technologies rather than theoretical knowledge alone.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Experience & Learning</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="group">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <exp.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
