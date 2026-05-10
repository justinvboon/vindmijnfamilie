import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://vindmijnfamilie.nl'),
  title: {
    default: 'vindmijnfamilie.nl | DNA- en genealogisch onderzoek',
    template: '%s | vindmijnfamilie.nl',
  },
  description:
    'Professioneel DNA- en genealogisch onderzoek voor mensen die op zoek zijn naar hun biologische ouder(s). Met volledige discretie, respect en persoonlijke begeleiding.',
  keywords: [
    'biologische ouder zoeken',
    'DNA onderzoek',
    'genealogisch onderzoek',
    'donorkind',
    'geadopteerd',
    'afkomstonderzoek',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
