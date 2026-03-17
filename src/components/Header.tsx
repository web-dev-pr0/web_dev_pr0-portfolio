import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-6">
      <header className="max-w-6xl mx-auto glass-card rounded-2xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">code</span>
          </div>
          <h2 className="font-display font-bold text-lg tracking-tight">
            web_dev_pr0
          </h2>
        </a>

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

        <button className="hidden md:block bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer">
          Resume
        </button>

        <button
          className="md:hidden flex items-center justify-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {menuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 glass-card rounded-2xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer">
            Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
