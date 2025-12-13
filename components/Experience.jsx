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
    <section className="relative overflow-hidden px-6 pb-24 pt-20">
      <div className="relative mx-auto w-full max-w-6xl space-y-12 text-slate-800">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Career Timeline</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl">Experience</h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-500">
            Highlights from recent roles covering delivery, collaboration, and technical impact.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-6 transition-transform duration-150 hover:-translate-y-1"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-slate-400">{exp.year}</span>
              <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.2em] text-slate-900">
                {exp.title}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">{exp.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
