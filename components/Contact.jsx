// src/components/Contact.jsx
export default function Contact() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20">
      <div className="relative mx-auto w-full max-w-4xl space-y-8 text-slate-800">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Let’s collaborate
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-slate-900 md:text-4xl">
            Contact
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-500">
            Share a quick note and I’ll get back to you about opportunities,
            collaborations, or questions.
          </p>
        </header>
        <form className="grid gap-6 rounded-3xl border border-[#E4E5E9] bg-[#E4E5E9] p-8 md:grid-cols-2">
          <input
            type="text"
            placeholder="Name"
            className="md:col-span-1 w-full rounded-2xl border border-[#E4E5E9] bg-white px-5 py-3 text-sm text-slate-700 placeholder-slate-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
          />
          <input
            type="email"
            placeholder="Email"
            className="md:col-span-1 w-full rounded-2xl border border-[#E4E5E9] bg-white px-5 py-3 text-sm text-slate-700 placeholder-slate-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="md:col-span-2 w-full rounded-2xl border border-[#E4E5E9] bg-white px-5 py-3 text-sm text-slate-700 placeholder-slate-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-black px-10 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

