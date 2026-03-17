const projects = [
  {
    title: "Neo Dashboard",
    description:
      "A high-performance analytics dashboard for crypto assets with real-time updates and interactive charts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAK5rwS93gDixCAXGeXifjXfxynRveB37H46amIZioOP8dKmVWDUkTtSTCDECK1aDBNnbJtZyskh6UfXBUcMNQdmUM7Qb65-zCWX_0RQtXiaerzaHwgzPTENmyVFX9VZ6HMOAu8bjH-tdJg7ApMoq1unhFQfmf8-rfeHxKVvPvnOI4Osigx5S44D1YPAYr7sxFjDYB9zXbkf-16Dn2yCaXcjZXSrL8-xo2_t8kBkb5lxuqZl6SHhBIvY9mCcLvfjvEIoTgSWwXGqxc1",
    imageAlt: "Dashboard interface preview with charts",
    tags: [
      { label: "React", color: "bg-primary/10 text-primary" },
      { label: "Tailwind", color: "bg-purple-500/10 text-purple-400" },
    ],
  },
  {
    title: "Lumina Shop",
    description:
      "Modern e-commerce platform featuring glassmorphism UI components and server-side rendering for speed.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEF3qZfVm3PwS2G-lNLOWx5klpT-EfvfItblwjiYawR5gy-HBKHpIjfPS_wkqB_XqJQi4pgH8N7aKcirvrHxFUdcfIj1Ayw9vt7_p9FDg9Lz4TqJpBtMvbhxz5QgQCr6p3Tv0gE_1gGAKClZT6iSZQwkXlgMuqZPfXsP6cabCTofUa57nG_v4vnoQasyzuWiEywa-dEA4H-lUAL72bdW4pQKiRkbGmUPxfl4CFEk1mAFHPwSOFNhWqTc0lj61aY-C2BO0_pautwh_D",
    imageAlt: "E-commerce mobile app design with product cards",
    tags: [
      { label: "TypeScript", color: "bg-cyan-500/10 text-cyan-400" },
      { label: "Next.js", color: "bg-pink-500/10 text-pink-400" },
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
                <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-bold transition-all cursor-pointer">
                  View Project
                </button>
                <button aria-label={`View source code for ${project.title}`} className="glass-card hover:bg-white/10 px-4 py-3 rounded-xl transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">
                    code
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
