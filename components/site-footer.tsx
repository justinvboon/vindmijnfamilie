export function SiteFooter() {
  return (
    <footer className="border-t border-clay/40 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} vindmijnfamilie.nl — Discreet DNA- en genealogisch onderzoek.</p>
        <p>Persoonlijke begeleiding voor donorkinderen, geadopteerden en mensen met familievragen.</p>
      </div>
    </footer>
  );
}
