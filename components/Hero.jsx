export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6">
        <div className="rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-10 md:p-14">
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            Hi, I'm Arzaq Ajradika
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-500 md:text-lg">
            A passionate software engineer
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              Download Resume
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3v12m0 0 4-4m-4 4-4-4M5 18h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Sayiki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E5E9] bg-[#E4E5E9] text-slate-600 transition-transform duration-150 hover:-translate-y-0.5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.523 2 12a10 10 0 0 0 6.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.035 1.532 1.035.892 1.534 2.341 1.09 2.91.834.091-.65.35-1.09.636-1.34-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.276.098-2.66 0 0 .84-.27 2.75 1.026a9.562 9.562 0 0 1 2.5-.336 9.54 9.54 0 0 1 2.5.336c1.909-1.296 2.748-1.026 2.748-1.026.546 1.384.203 2.406.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.694-4.566 4.943.359.31.678.92.678 1.855 0 1.339-.012 2.419-.012 2.747 0 .269.18.58.688.481A10.004 10.004 0 0 0 22 12c0-5.477-4.477-10-10-10Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arzaq-ajradika-5a8715232"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E5E9] bg-[#E4E5E9] text-slate-600 transition-transform duration-150 hover:-translate-y-0.5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.116 20.452H3.556V9h3.56v11.452Z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6281317130656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E5E9] bg-[#E4E5E9] text-slate-600 transition-transform duration-150 hover:-translate-y-0.5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.787 11.787 0 0 0 12.004 0C5.375 0 .016 5.358.016 11.987a11.87 11.87 0 0 0 1.543 5.87L0 24l6.29-1.646a11.94 11.94 0 0 0 5.714 1.456h.005c6.63 0 11.989-5.358 11.99-11.989A11.874 11.874 0 0 0 20.52 3.48Zm-8.516 18.53h-.004a9.9 9.9 0 0 1-5.034-1.377l-.36-.214-3.733.977.998-3.637-.235-.374A9.86 9.86 0 0 1 2.02 11.99c0-5.473 4.456-9.926 9.989-9.926a9.87 9.87 0 0 1 9.94 9.926 9.87 9.87 0 0 1-9.945 9.92Zm5.455-7.41c-.297-.149-1.759-.868-2.031-.966-.273-.099-.472-.148-.67.149-.197.297-.77.967-.943 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.391-1.478-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.074-.149-.669-1.613-.916-2.21-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.215 3.074.148.198 2.096 3.2 5.084 4.487.711.307 1.264.49 1.695.63.712.227 1.36.195 1.873.118.572-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.41-.074-.123-.272-.198-.57-.348Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
