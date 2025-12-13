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
    <footer className="relative overflow-hidden border-t border-[#E4E5E9] bg-[#EDEEF3] text-slate-600">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900">Arzaq Ajradika</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Software engineer crafting reliable, scalable products with modern web and cloud tooling.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  href: "https://github.com/Sayiki",
                  label: "GitHub",
                  classes: "text-slate-600 hover:text-slate-900",
                  svg: (
                    <path d="M12 2C6.477 2 2 6.523 2 12a10 10 0 0 0 6.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.035 1.532 1.035.892 1.534 2.341 1.09 2.91.834.091-.65.35-1.09.636-1.34-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.276.098-2.66 0 0 .84-.27 2.75 1.026a9.562 9.562 0 0 1 2.5-.336 9.54 9.54 0 0 1 2.5.336c1.909-1.296 2.748-1.026 2.748-1.026.546 1.384.203 2.406.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.694-4.566 4.943.359.31.678.92.678 1.855 0 1.339-.012 2.419-.012 2.747 0 .269.18.58.688.481A10.004 10.004 0 0 0 22 12c0-5.477-4.477-10-10-10Z" />
                  )
                },
                {
                  href: "https://www.linkedin.com/in/arzaq-ajradika-5a8715232",
                  label: "LinkedIn",
                  classes: "text-slate-600 hover:text-slate-900",
                  svg: (
                    <path d="M20.452 20.452h-3.555v-5.569c0-1.328-.026-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.346V9h3.412v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.268 2.37 4.268 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.116 20.452H3.556V9h3.56v11.452Z" />
                  )
                },
                {
                  href: "https://wa.me/6281317130656",
                  label: "WhatsApp",
                  classes: "text-slate-600 hover:text-slate-900",
                  svg: (
                    <path d="M20.52 3.48A11.787 11.787 0 0 0 12.004 0C5.375 0 .016 5.358.016 11.987a11.87 11.87 0 0 0 1.543 5.87L0 24l6.29-1.646a11.94 11.94 0 0 0 5.714 1.456h.005c6.63 0 11.989-5.358 11.99-11.989A11.874 11.874 0 0 0 20.52 3.48Zm-8.516 18.53h-.004a9.9 9.9 0 0 1-5.034-1.377l-.36-.214-3.733.977.998-3.637-.235-.374A9.86 9.86 0 0 1 2.02 11.99c0-5.473 4.456-9.926 9.989-9.926a9.87 9.87 0 0 1 9.94 9.926 9.87 9.87 0 0 1-9.945 9.92Zm5.455-7.41c-.297-.149-1.759-.868-2.031-.966-.273-.099-.472-.148-.67.149-.197.297-.77.967-.943 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.391-1.478-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.074-.149-.669-1.613-.916-2.21-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.215 3.074.148.198 2.096 3.2 5.084 4.487.711.307 1.264.49 1.695.63.712.227 1.36.195 1.873.118.572-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.41-.074-.123-.272-.198-.57-.348Z" />
                  )
                },
                {
                  href: "mailto:arzaqajradika1@gmail.com",
                  label: "Email",
                  classes: "text-slate-600 hover:text-slate-900",
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
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E5E9] bg-[#E4E5E9] transition-transform duration-150 hover:-translate-y-1 ${item.classes}`}
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
            <h4 className="text-lg font-semibold text-slate-900">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <Link
                    to={link.target}
                    smooth
                    duration={500}
                    offset={-76}
                    className="cursor-pointer transition-colors duration-150 hover:text-sky-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-900">Get in touch</h4>
            <p className="text-sm text-slate-500">
              Ready to collaborate on something meaningful? Let’s plan it together.
            </p>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-76}
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="m5 7 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Send me a message
            </Link>
            <div className="flex items-center gap-2 text-xs text-emerald-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Usually responds within 24 hours
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200/70 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Arzaq Ajradika. Crafted with care.</span>
          <span className="flex items-center gap-2 text-slate-500">
            Made with
            <svg className="h-4 w-4 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.1 21.35 10 19.24C5.4 14.36 2 11.27 2 7.5 2 5 4 3 6.5 3c1.74 0 3.41.99 4.22 2.47h.56C12.09 3.99 13.76 3 15.5 3 18 3 20 5 20 7.5c0 3.77-3.4 6.86-8 11.74l-1.9 2.11Z" />
            </svg>
            using Next.js
          </span>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-slate-500 transition-colors duration-150 hover:text-sky-600"
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
