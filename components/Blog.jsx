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
    <section className="relative overflow-hidden px-6 pb-24 pt-20">
      <div className="relative mx-auto w-full max-w-4xl space-y-10 text-slate-800">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Certified Learning
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl">
            Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-500">
            Credentials that reinforce my commitment to modern web development and backend expertise.
          </p>
        </header>
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <li
              key={index}
              className="group rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-6 transition-transform duration-150 hover:-translate-y-1"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 text-left"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {post.date}
                </span>
                <span className="text-lg font-semibold uppercase tracking-[0.24em] text-slate-900 transition-colors duration-150 group-hover:text-sky-600">
                  {post.title}
                </span>
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 transition-colors duration-150 group-hover:text-sky-700">
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
