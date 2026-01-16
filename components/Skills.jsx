import { useState, useRef, useEffect } from "react";

// Icons - using CDN images for better quality
const icons = {
  Python: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-8 w-8" />
  ),
  React: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 w-8" />
  ),
  Laravel: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" className="h-8 w-8" />
  ),
  "Node.js": (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-8 w-8" />
  ),
  "Next.js": (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-8 w-8" />
  ),
  MySQL: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-8 w-8" />
  ),
  Figma: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-8 w-8" />
  ),
  CodeIgniter: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" alt="CodeIgniter" className="h-8 w-8" />
  ),
  Tailwind: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="h-8 w-8" />
  ),
  Bootstrap: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="h-8 w-8" />
  ),
  Postman: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" className="h-8 w-8" />
  ),
  "Spring Boot": (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="h-8 w-8" />
  ),
  PostgreSQL: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-8 w-8" />
  ),
};

const skills = [
  { name: "Python", level: "Advanced", proficiency: 5 },
  { name: "React", level: "Advanced", proficiency: 4 },
  { name: "Laravel", level: "Advanced", proficiency: 4 },
  { name: "Node.js", level: "Intermediate", proficiency: 4 },
  { name: "Next.js", level: "Advanced", proficiency: 4 },
  { name: "MySQL", level: "Intermediate", proficiency: 3 },
  { name: "Figma", level: "Intermediate", proficiency: 3 },
  { name: "CodeIgniter", level: "Intermediate", proficiency: 3 },
  { name: "Tailwind", level: "Advanced", proficiency: 4 },
  { name: "Bootstrap", level: "Advanced", proficiency: 4 },
  { name: "Postman", level: "Advanced", proficiency: 4 },
  { name: "Spring Boot", level: "Intermediate", proficiency: 3 },
  { name: "PostgreSQL", level: "Intermediate", proficiency: 3 },
];

export default function Skills() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const itemWidth = 180; // width + gap
        const totalWidth = skills.length * itemWidth;
        const newPos = prev + 1;
        // Reset position when we've scrolled through one set
        if (newPos >= totalWidth) {
          return 0;
        }
        return newPos;
      });
    }, 30); // Slow smooth scroll

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setScrollPosition((prev) => Math.max(0, prev - 180));
  };

  const handleNext = () => {
    setScrollPosition((prev) => prev + 180);
  };

  return (
    <section className="relative overflow-x-hidden px-6 pb-24 pt-20">
      <div className="relative mx-auto w-full max-w-6xl space-y-12">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Core Toolkit
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl">
            Technology Stack
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-500">
            Tools and technologies I work with daily
          </p>
        </header>

        {/* Carousel Container */}
        <div className="relative">
          {/* Skills Carousel */}
          <div
            ref={containerRef}
            className="overflow-visible px-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setHoveredSkill(null);
            }}
          >
            <div
              ref={scrollRef}
              className="flex gap-5 transition-transform duration-100 ease-linear"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="group relative flex-shrink-0"
                  onMouseEnter={() => setHoveredSkill(`${skill.name}-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Proficiency Popup */}
                  <div
                    className={`absolute bottom-full left-1/2 z-50 mb-3 w-48 -translate-x-1/2 rounded-xl border border-[#E4E5E9] bg-white p-4 shadow-lg transition-all duration-200 ${
                      hoveredSkill === `${skill.name}-${index}`
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-6 w-6">{icons[skill.name]}</span>
                      <span className="font-semibold text-slate-800">{skill.name}</span>
                    </div>
                    <span className="mt-2 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600">
                      {skill.level}
                    </span>
                    <div className="mt-3">
                      <p className="text-xs text-slate-500">Proficiency Level</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-700">{skill.proficiency}/5</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                          <div
                            className="h-full rounded-full bg-sky-500 transition-all duration-300"
                            style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Arrow pointer */}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-white" />
                  </div>

                  {/* Skill Card */}
                  <div className="flex h-32 w-40 flex-col items-center justify-center rounded-2xl border border-[#E4E5E9] bg-[#E4E5E9] p-4 transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
                    <span className="flex h-10 w-10 items-center justify-center">{icons[skill.name]}</span>
                    <p className="mt-3 text-center text-sm font-medium text-slate-700">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Play/Pause Controls */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="m14 7-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              {isPaused ? (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                  </svg>
                  Pause
                </>
              )}
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="m10 7 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-slate-400">
            Hover to pause • Use arrows to navigate
          </p>
        </div>
      </div>
    </section>
  );
}
