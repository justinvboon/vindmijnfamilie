export default function ContactPage() {
  return (
    <section className="section">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="card">
          <h1 className="text-3xl font-bold text-pine">Contact</h1>
          <p className="mt-4 text-slate-700">
            Wilt u uw zoektocht starten of eerst uw situatie bespreken? Neem gerust contact op. U ontvangt zo snel mogelijk een reactie.
          </p>
          <div className="mt-6 space-y-2 text-slate-700">
            <p><strong>E-mail:</strong> info@vindmijnfamilie.nl</p>
            <p><strong>Reactietijd:</strong> binnen 2 werkdagen</p>
          </div>
        </article>
        <form className="card space-y-4">
          <h2 className="text-2xl font-semibold">Neem contact op</h2>
          <label className="block text-sm font-medium">Naam
            <input type="text" className="mt-1 w-full rounded-lg border border-clay bg-white px-3 py-2" placeholder="Uw naam" />
          </label>
          <label className="block text-sm font-medium">E-mail
            <input type="email" className="mt-1 w-full rounded-lg border border-clay bg-white px-3 py-2" placeholder="uw@email.nl" />
          </label>
          <label className="block text-sm font-medium">Bericht
            <textarea className="mt-1 min-h-28 w-full rounded-lg border border-clay bg-white px-3 py-2" placeholder="Vertel kort waar u hulp bij zoekt." />
          </label>
          <button type="submit" className="rounded-xl bg-pine px-5 py-3 font-medium text-white transition hover:bg-pineLight">Neem contact op</button>
        </form>
      </div>
    </section>
  );
}
