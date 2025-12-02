// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "EduSkill",
      image: "public/pictures/eduskill.png",
      link: "#"
    },
    {
      title: "Symptosense (Disease Prediction App)",
      image: "public/pictures/symptosense.png",
      link: "https://symptosense.humicprototyping.com"
    },
    {
      title: "Chat App",
      image: "https://via.placeholder.com/300",
      link: "#"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16">
      <div className="absolute inset-0 bg-slate-950/92" />
      <div className="relative mx-auto w-full max-w-6xl space-y-12 text-white">
        <header className="space-y-3 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-blue-200/80">
            Selected Work
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] md:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-blue-100/80">
            A snapshot of recent builds covering education platforms, smart diagnostics, and real-time communication.
          </p>
        </header>
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_48px_rgba(30,64,175,0.25)] backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(56,189,248,0.35)]"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/55" />
              </div>
              <div className="mt-6 flex flex-1 flex-col justify-between">
                <h3 className="text-lg font-semibold uppercase tracking-[0.22em] text-white">
                  {project.title}
                </h3>
                <span className="mt-4 inline-flex items-center text-sm uppercase tracking-[0.28em] text-blue-200 transition-colors duration-200 group-hover:text-cyan-300">
                  View project
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17 17 7M9.5 7H17v7.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}