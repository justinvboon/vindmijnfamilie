import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/over-mij', label: 'Over mij' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/tarieven', label: 'Tarieven' },
  { href: '/veelgestelde-vragen', label: 'Veelgestelde vragen' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-clay/40 bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-pine">
          vindmijnfamilie.nl
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-pineLight">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
