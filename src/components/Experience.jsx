// src/components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Software Engineer",
      company: "Freelance",
      description: "Delivering full-stack solutions with React, Node.js, and cloud-native services."
    },
    {
      year: "2022 - 2024",
      title: "Product Engineering Intern",
      company: "Startup Inc.",
      description: "Supported feature delivery, wrote API integrations, and tightened QA feedback loops."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16">
      <div className="absolute inset-0 bg-slate-950/92" />
      <div className="relative mx-auto w-full max-w-6xl space-y-12 text-white">
        <header className="space-y-3 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-blue-200/80">Career Timeline</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] md:text-4xl">Experience</h2>
          <p className="mx-auto max-w-2xl text-sm text-blue-100/80">
            Highlights from recent roles covering delivery, collaboration, and technical impact.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_48px_rgba(30,64,175,0.25)] backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(56,189,248,0.35)]"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-blue-200/90">{exp.year}</span>
              <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.28em] text-white">
                {exp.title}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-blue-100/80">{exp.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-200/90">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
