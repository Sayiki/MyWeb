// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "EduSkill",
      image: "/pictures/eduskill.png",
      link: "#"
    },
    {
      title: "Symptosense (Disease Prediction App)",
      image: "/pictures/symptosense.png",
      link: "https://symptosense.humicprototyping.com"
    },
    {
      title: "Caldera Insight",
      image: "https://via.placeholder.com/300",
      link: "#"
    }
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20">
      <div className="relative mx-auto w-full max-w-6xl space-y-12 text-slate-800">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Selected Work
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-500">
            A snapshot of recent builds covering education platforms, smart diagnostics, and real-time communication.
          </p>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-6 transition-transform duration-150 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden rounded-2xl bg-[#EDEEF3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col justify-between">
                <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-900">
                  {project.title}
                </h3>
                <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 transition-colors duration-150 group-hover:text-sky-700">
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