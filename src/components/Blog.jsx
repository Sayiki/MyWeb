// src/components/Blog.jsx
export default function Blog() {
  const posts = [
    {
      title: "Framework Valley: React",
      date: "Oct 2025",
      link: "https://www.codedex.io/certificates/cc9ff1c7-3a48-4191-9f99-93f422c685e1"
    },

  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16">
      <div className="absolute inset-0 bg-slate-950/92" />
      <div className="relative mx-auto w-full max-w-4xl space-y-10 text-white">
        <header className="space-y-3 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-blue-200/80">
            Certified Learning
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] md:text-4xl">
            Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-blue-100/80">
            Credentials that reinforce my commitment to modern web development and backend expertise.
          </p>
        </header>
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <li
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_48px_rgba(30,64,175,0.25)] backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(56,189,248,0.35)]"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 text-left"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-blue-200/85">
                  {post.date}
                </span>
                <span className="text-lg font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-200 group-hover:text-cyan-300">
                  {post.title}
                </span>
                <span className="inline-flex items-center text-xs uppercase tracking-[0.32em] text-blue-100/75">
                  View certificate
                  <svg className="ml-2 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 16 16 8M10.5 8H16v5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
