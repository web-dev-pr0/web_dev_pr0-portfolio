const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-6">
      <header className="max-w-6xl mx-auto glass-card rounded-2xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">code</span>
          </div>
          <h2 className="font-display font-bold text-lg tracking-tight">
            web_dev_pr0
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20">
          Resume
        </button>
      </header>
    </div>
  );
};

export default Header;
