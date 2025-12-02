const MAX_RATING = 10;

const skillItems = [
  { name: "Python", rating: 6, column: "left" },
  { name: "React", rating: 7, column: "left" },
  { name: "Laravel", rating: 8, column: "left" },
  { name: "Node.js", rating: 7, column: "right" },
  { name: "SQL", rating: 6, column: "right" },
  { name: "Docker", rating: 7, column: "right" }
];

const columns = {
  left: skillItems.filter((item) => item.column === "left"),
  right: skillItems.filter((item) => item.column === "right")
};

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16">
      <div className="absolute inset-0 bg-slate-950/92" />
      <div className="absolute inset-y-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[140px]" />
      <div className="relative mx-auto w-full max-w-5xl space-y-12 text-white">
        <header className="space-y-3 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-blue-200/80">Core Toolkit</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] md:text-4xl">My Skills</h2>
          <p className="mx-auto max-w-2xl text-sm text-blue-100/80">
            Proficiency expressed on a 1 – 10 scale across tools I use most often.
          </p>
        </header>
        <div className="grid gap-10 md:grid-cols-2">
          {Object.entries(columns).map(([columnKey, columnSkills]) => (
            <ul key={columnKey} className="space-y-6">
              {columnSkills.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-[0_18px_36px_rgba(30,64,175,0.2)] backdrop-blur transition-transform duration-200 hover:-translate-y-1"
                >
                  <p className="text-lg font-semibold uppercase tracking-[0.28em] text-white">
                    {skill.name}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-blue-100/80">
                    Rating: {skill.rating}/{MAX_RATING}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
