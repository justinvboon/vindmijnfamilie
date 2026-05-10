const vragen = [
  {
    vraag: 'Hoe werkt DNA-onderzoek?',
    antwoord:
      'Na bestelling van de MyHeritage DNA-test volgt de afname thuis. Na de uitslag analyseer ik DNA-matches en combineer ik deze met genealogische bronnen.',
  },
  {
    vraag: 'Hoe lang duurt een onderzoek?',
    antwoord:
      'Gemiddeld enkele weken tot enkele maanden. De duur is afhankelijk van de kwaliteit van DNA-matches en de beschikbare documentatie.',
  },
  {
    vraag: 'Wat als er geen match gevonden wordt?',
    antwoord:
      'Wanneer het onderzoek niet succesvol is, rekent vindmijnfamilie.nl geen onderzoekskosten. U betaalt dan alleen de DNA-test.',
  },
  {
    vraag: 'Hoe vertrouwelijk is het onderzoek?',
    antwoord:
      'Zeer vertrouwelijk. Persoonsgegevens en onderzoeksinformatie worden strikt discreet behandeld en alleen gebruikt voor het afgesproken doel.',
  },
  {
    vraag: 'Waarom werken jullie op no cure no pay basis?',
    antwoord:
      'Omdat dit eerlijk en toegankelijk is: u betaalt alleen voor het onderzoek als er daadwerkelijk een resultaat wordt behaald.',
  },
];

export default function VeelgesteldeVragenPage() {
  return (
    <section className="section">
      <div className="card">
        <h1 className="text-3xl font-bold text-pine">Veelgestelde vragen</h1>
        <div className="mt-6 space-y-4">
          {vragen.map((item) => (
            <article key={item.vraag} className="rounded-xl border border-clay/50 p-5">
              <h2 className="text-lg font-semibold">{item.vraag}</h2>
              <p className="mt-2 text-slate-600">{item.antwoord}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
