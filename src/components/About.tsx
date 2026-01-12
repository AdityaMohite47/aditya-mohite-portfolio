const About = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">About</h2>
        
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a final-year B.Sc. Computer Science student with a strong foundation in Python and a genuine interest in building systems that work. My focus is on backend development, machine learning applications, and exploring how LLMs can be integrated into practical workflows.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I've spent considerable time working with Django and FastAPI for API development, MongoDB for data persistence, and tools like LangChain and LangGraph for building AI-driven applications. I approach each project with a focus on clean architecture and maintainable code.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently seeking internship or entry-level software engineering roles where I can contribute to meaningful projects while continuing to learn from experienced engineers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
