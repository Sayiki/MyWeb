import { Link } from "react-scroll";

export default function Footer() {
  const quickLinks = [
    { label: "Home", target: "home" },
    { label: "Experience", target: "experience" },
    { label: "Projects", target: "projects" },
    { label: "Certificates", target: "blog" },
    { label: "Contact", target: "contact" }
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950/95 text-slate-200">
      <div className="absolute inset-0 bg-slate-950/93" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Arzaq Ajradika</h3>
            <p className="text-sm leading-relaxed text-blue-100/80">
              Software engineer crafting reliable, scalable products with modern web and cloud tooling.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  href: "https://github.com/Sayiki",
                  label: "GitHub",
                  bg: "bg-slate-900/80",
                  svg: (
                    <path d="M12 2C6.477 2 2 6.523 2 12a10 10 0 0 0 6.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.035 1.532 1.035.892 1.534 2.341 1.09 2.91.834.091-.65.35-1.09.636-1.34-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.276.098-2.66 0 0 .84-.27 2.75 1.026a9.562 9.562 0 0 1 2.5-.336 9.54 9.54 0 0 1 2.5.336c1.909-1.296 2.748-1.026 2.748-1.026.546 1.384.203 2.406.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.694-4.566 4.943.359.31.678.92.678 1.855 0 1.339-.012 2.419-.012 2.747 0 .269.18.58.688.481A10.004 10.004 0 0 0 22 12c0-5.477-4.477-10-10-10Z" />
                  )
                },
                {
                  href: "https://www.linkedin.com/in/arzaq-ajradika-5a8715232",
                  label: "LinkedIn",
                  bg: "bg-blue-600/80",
                  svg: (
                    <path d="M20.452 20.452h-3.555v-5.569c0-1.328-.026-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.346V9h3.412v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.268 2.37 4.268 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.116 20.452H3.556V9h3.56v11.452Z" />
                  )
                },
                {
                  href: "mailto:arzaq@example.com",
                  label: "Email",
                  bg: "bg-emerald-600/80",
                  svg: (
                    <path
                      d="M4.5 6.75h14.75c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25H4.5c-.69 0-1.25-.56-1.25-1.25v-8c0-.69.56-1.25 1.25-1.25Zm.75 2.028v6.222h13.25V8.778l-6.46 4.04a1.5 1.5 0 0 1-1.547 0L5.25 8.778Z"
                      fill="currentColor"
                    />
                  )
                }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.bg} text-white shadow-[0_10px_24px_rgba(15,27,57,0.35)] transition-transform duration-150 hover:-translate-y-1`}
                  aria-label={item.label}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    {item.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-100/85">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <Link
                    to={link.target}
                    smooth
                    duration={500}
                    offset={-70}
                    className="cursor-pointer transition-colors duration-150 hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in touch</h4>
            <p className="text-sm text-blue-100/80">
              Ready to collaborate on something meaningful? Let’s plan it together.
            </p>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-70}
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-transform duration-150 hover:-translate-y-0.5 hover:text-cyan-200"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="m5 7 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Send me a message
            </Link>
            <div className="flex items-center gap-2 text-xs text-emerald-200/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Usually responds within 24 hours
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-blue-100/70 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Arzaq Ajradika. Crafted with care.</span>
          <span className="flex items-center gap-2">
            Made with
            <svg className="h-4 w-4 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.1 21.35 10 19.24C5.4 14.36 2 11.27 2 7.5 2 5 4 3 6.5 3c1.74 0 3.41.99 4.22 2.47h.56C12.09 3.99 13.76 3 15.5 3 18 3 20 5 20 7.5c0 3.77-3.4 6.86-8 11.74l-1.9 2.11Z" />
            </svg>
            using React
          </span>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-blue-200/80 transition-colors duration-150 hover:text-cyan-300"
          >
            Professional portfolio
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="m6 14 6-6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
