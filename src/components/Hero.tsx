const Hero = () => {
  return (
    <section className="py-20 lg:py-32 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-bold text-primary mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        AVAILABLE FOR HIRE
      </div>

      <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 leading-none tracking-tight">
        web_dev_pr0
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-cyan-400">
          Front End Developer
        </span>
      </h1>

      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-[1.4]">
        Building modern, fast, and interactive web experiences. Specialized in
        crafting performance-driven interfaces with a touch of Mediterranean
        creativity.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20"
          href="#projects"
        >
          View Projects
        </a>
        <a
          className="glass-card hover:bg-white/10 px-8 py-4 rounded-2xl font-bold transition-all"
          href="#contact"
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default Hero;
