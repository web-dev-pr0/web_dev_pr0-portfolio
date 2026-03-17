const projects = [
  {
    title: "Bloomie",
    description:
      "An interactive gardening companion that helps you design and visualize your perfect garden layout with a drag-and-drop grid planner, plant database, and seasonal planting calendar.",
    image: "/bloomie-preview.png",
    imageAlt: "Bloomie gardening app with garden planner and plant information",
    liveUrl: "https://bloomie-nu.vercel.app/",
    repoUrl: "https://github.com/web-dev-pr0/bloomie",
    tags: [
      { label: "React", color: "bg-primary/10 text-primary" },
      { label: "TypeScript", color: "bg-cyan-500/10 text-cyan-400" },
      { label: "Tailwind", color: "bg-purple-500/10 text-purple-400" },
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-20" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="font-display text-3xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card rounded-3xl overflow-hidden group"
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10" />
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={project.imageAlt}
                src={project.image}
              />
            </div>

            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-3 py-1 ${tag.color} text-[10px] font-bold rounded-full uppercase`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4">
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-bold transition-all cursor-pointer text-center">
                    View Project
                  </a>
                ) : (
                  <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-bold transition-all cursor-pointer">
                    View Project
                  </button>
                )}
                {project.repoUrl ? (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View source code for ${project.title}`} className="glass-card hover:bg-white/10 px-4 py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      code
                    </span>
                  </a>
                ) : (
                  <button aria-label={`View source code for ${project.title}`} className="glass-card hover:bg-white/10 px-4 py-3 rounded-xl transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      code
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
