import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import GitHubStats from "./GitHubStats";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-container pt-20">
      <div className="w-full py-20 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Software Engineer
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Aditya Mohite
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Entry-Level Software Engineer building backend systems and ML-driven applications using Python, LangGraph, and APIs
            </p>

            <p
              className="text-muted-foreground mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Focused on practical software solutions, backend development, and modern LLM workflows
            </p>

            {/* Primary CTA */}
            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Resume + Social Icons */}
            <div
              className="flex flex-wrap items-center gap-4 justify-center md:justify-start mt-6 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="./public/Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

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
                  href="https://www.linkedin.com/in/aditya--mohite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohiteaditya075@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <GitHubStats />
          </div>

          {/* Profile Image (FIXED) */}
          <div
            className="flex-shrink-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Outer circular outline */}
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary to-primary/30 p-2">
                {/* Image container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src="./profile.jpeg"
                    alt="Aditya Mohite profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;