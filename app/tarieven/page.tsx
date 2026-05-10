export default function TarievenPage() {
  return (
    <section className="section">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="card">
          <h1 className="text-3xl font-bold text-pine">Tarieven</h1>
          <div className="mt-6 space-y-3 text-lg">
            <p><strong>DNA-test:</strong> eenmalig €29</p>
            <p><strong>Onderzoek:</strong> no cure no pay</p>
            <p><strong>Bij succes:</strong> €1.000</p>
            <p><strong>Bij geen resultaat:</strong> geen onderzoekskosten</p>
          </div>
        </article>
        <article className="card bg-rose/60">
          <h2 className="text-2xl font-semibold">Eerlijk en transparant</h2>
          <p className="mt-4 text-slate-700">
            U loopt geen financieel risico op het onderzoeksdeel. Alleen wanneer ik succesvol de biologische ouder(s)
            identificeer, betaalt u de onderzoekskosten.
          </p>
        </article>
      </div>
    </section>
  );
}
