import { type FormEvent } from "react";

const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-20" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="font-display text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                aria-required="true"
                className="w-full glass-card rounded-xl px-4 py-3 border-none focus:ring-2 focus:ring-primary text-white placeholder:text-slate-600 outline-none transition-all"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                aria-required="true"
                className="w-full glass-card rounded-xl px-4 py-3 border-none focus:ring-2 focus:ring-primary text-white placeholder:text-slate-600 outline-none transition-all"
                placeholder="john@example.com"
                type="email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              className="w-full glass-card rounded-xl px-4 py-3 border-none focus:ring-2 focus:ring-primary text-white placeholder:text-slate-600 outline-none transition-all resize-none"
              placeholder="How can I help you?"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
