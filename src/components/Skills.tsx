const skills = [
  { name: "HTML5", icon: "html", color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "CSS3", icon: "css", color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "JavaScript", icon: "javascript", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "TypeScript", icon: "terminal", color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "React", icon: "dynamic_form", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "Tailwind CSS", icon: "style", color: "text-primary", bg: "bg-primary/10" },
];

const Skills = () => {
  return (
    <section className="py-20" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="font-display text-3xl font-bold mb-12 text-center">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-primary/50 transition-colors group"
          >
            <div
              className={`size-12 rounded-xl ${skill.bg} flex items-center justify-center ${skill.color} group-hover:scale-110 transition-transform`}
            >
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                {skill.icon}
              </span>
            </div>
            <span className="font-bold text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
