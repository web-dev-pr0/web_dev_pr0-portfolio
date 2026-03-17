const aboutImage = `${import.meta.env.BASE_URL}laptop-on-a-desk.png`;

const About = () => {
  return (
    <section className="py-20" id="about" aria-labelledby="about-heading">
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="about-heading" className="font-display text-3xl font-bold mb-6">About Me</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Based in Greece, I combine creative passion with technical
              excellence. I specialize in building performant and engaging
              interfaces that prioritize user experience without sacrificing
              speed.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With a focus on modern web technologies, I transform complex
              requirements into seamless digital experiences. My approach is
              rooted in clean code, accessibility, and modern design principles.
            </p>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2">
            <div
              className="w-full h-full rounded-xl bg-cover bg-center"
              role="img"
              aria-label="Modern workspace with laptop and aesthetic lighting"
              style={{ backgroundImage: `url('${aboutImage}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
