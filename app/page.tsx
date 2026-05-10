import Link from 'next/link';
import { Dna, HeartHandshake, ShieldCheck, Users } from 'lucide-react';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Volledige discretie',
    text: 'Uw verhaal en gegevens worden zorgvuldig en vertrouwelijk behandeld in elke stap van het onderzoek.',
  },
  {
    icon: HeartHandshake,
    title: 'Persoonlijke begeleiding',
    text: 'U krijgt betrokken en empathische ondersteuning tijdens een vaak emotionele zoektocht.',
  },
  {
    icon: Dna,
    title: 'Combinatie van DNA en genealogie',
    text: 'DNA-matches worden gecombineerd met stambomen en archiefonderzoek voor de hoogste kans op resultaat.',
  },
  {
    icon: Users,
    title: 'Ervaring met complexe familievragen',
    text: 'Voor donorkinderen, geadopteerden en iedereen met vragen over biologische afkomst.',
  },
];

const faqs = [
  {
    q: 'Hoe werkt DNA-onderzoek?',
    a: 'U bestelt via mij een MyHeritage DNA-test. Na de afname en ontvangst van de resultaten start ik het genealogisch onderzoek op basis van DNA-matches, stambomen en archiefbronnen.',
  },
  {
    q: 'Hoe lang duurt een onderzoek?',
    a: 'Dit verschilt per dossier. De doorlooptijd hangt af van de hoeveelheid bruikbare DNA-matches en de beschikbaarheid van genealogische bronnen.',
  },
  {
    q: 'Wat als er geen match gevonden wordt?',
    a: 'Dan betaalt u geen onderzoekskosten. Het onderzoek verloopt op no cure no pay basis; alleen de eenmalige DNA-test blijft van toepassing.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="rounded-3xl bg-gradient-to-br from-rose to-white p-8 md:p-14">
          <p className="mb-3 inline-flex rounded-full bg-white px-4 py-1 text-xs font-medium tracking-wide text-pine">DNA & Genealogie met zorg</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-ink md:text-5xl">
            Op zoek naar uw biologische ouder?
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-700">
            Professioneel DNA- en genealogisch onderzoek met persoonlijke begeleiding en volledige discretie.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-pine px-6 py-3 font-medium text-white transition hover:bg-pineLight">Start uw zoektocht</Link>
            <Link href="/werkwijze" className="rounded-xl border border-pine px-6 py-3 font-medium text-pine transition hover:bg-pine/5">Meer informatie</Link>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card">
              <Icon className="mb-4 h-8 w-8 text-pine" />
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="card">
          <h2 className="text-2xl font-semibold">Veelgestelde vragen</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-clay/50 bg-sand/40 p-4">
                <summary className="cursor-pointer font-medium">{faq.q}</summary>
                <p className="mt-3 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <Link href="/veelgestelde-vragen" className="mt-6 inline-block rounded-xl border border-pine px-5 py-3 font-medium text-pine transition hover:bg-pine/5">Bekijk alle vragen</Link>
        </div>
      </section>
    </>
  );
}
