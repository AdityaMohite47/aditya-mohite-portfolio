const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aditya Mohite. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
