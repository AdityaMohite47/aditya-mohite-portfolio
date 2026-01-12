import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating or hiring? I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:aditya@example.com"
              className="btn-primary"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
