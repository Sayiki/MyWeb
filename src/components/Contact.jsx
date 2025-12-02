// src/components/Contact.jsx
export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16">
      <div className="absolute inset-0 bg-slate-950/92" />
      <div className="relative mx-auto w-full max-w-4xl space-y-8 text-white">
        <header className="space-y-3 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-blue-200/80">
            Let’s collaborate
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] md:text-4xl">
            Contact
          </h2>
          <p className="mx-auto max-w-xl text-sm text-blue-100/80">
            Share a quick note and I’ll get back to you about opportunities,
            collaborations, or questions.
          </p>
        </header>
        <form className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_48px_rgba(30,64,175,0.25)] backdrop-blur md:grid-cols-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-blue-100/60 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 md:col-span-1"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-blue-100/60 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 md:col-span-1"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="md:col-span-2 w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-blue-100/60 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_18px_40px_rgba(37,99,235,0.38)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_24px_55px_rgba(59,130,246,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:translate-y-0"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

