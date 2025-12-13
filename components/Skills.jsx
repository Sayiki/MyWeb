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
    <section className="relative overflow-hidden px-6 pb-24 pt-20">
      <div className="relative mx-auto w-full max-w-5xl space-y-12">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Core Toolkit
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-500">
            Proficiency expressed on a 1 – 10 scale across tools I use most often.
          </p>
        </header>
        <div className="grid gap-10 md:grid-cols-2">
          {Object.entries(columns).map(([columnKey, columnSkills]) => (
            <ul key={columnKey} className="space-y-6">
              {columnSkills.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-2xl border border-[#E4E5E9] bg-[#E4E5E9] px-6 py-5 transition-transform duration-150 hover:-translate-y-1"
                >
                  <p className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-800">
                    {skill.name}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-slate-500">
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
