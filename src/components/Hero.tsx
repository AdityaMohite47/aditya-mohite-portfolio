import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import GitHubStats from "./GitHubStats";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-container">
      <div className="w-full py-20 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Software Engineer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Aditya Mohite
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Entry-Level Software Engineer building backend systems and ML-driven applications using Python, LangGraph, and APIs
            </p>
            <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Focused on practical software solutions, backend development, and modern LLM workflows
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Resume + Social Icons Row */}
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start mt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a 
                href="/resume.pdf" 
                download="Aditya_Mohite_Resume.pdf"
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/AdityaMohite47" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/adityamohite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:aditya.mohite@example.com"
                  className="social-icon"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* GitHub Stats */}
            <GitHubStats />
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <svg 
                    className="w-24 h-24 opacity-50" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl border border-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
