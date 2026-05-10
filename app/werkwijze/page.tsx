const stappen = [
  'U bestelt via mij een MyHeritage DNA-test.',
  'De DNA-test wordt thuis afgenomen en opgestuurd.',
  'Na ontvangst van de DNA-resultaten start het genealogisch onderzoek.',
  'Op basis van DNA-matches, stambomen en archiefonderzoek probeer ik de biologische ouder(s) te identificeren.',
  'Tijdens het hele proces wordt vertrouwelijk en zorgvuldig gewerkt, met persoonlijke begeleiding.',
];

export default function WerkwijzePage() {
  return (
    <section className="section">
      <div className="card">
        <h1 className="text-3xl font-bold text-pine">Werkwijze</h1>
        <ol className="mt-6 space-y-4">
          {stappen.map((stap, i) => (
            <li key={stap} className="flex gap-4 rounded-xl bg-sand/50 p-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pine text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p>{stap}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
