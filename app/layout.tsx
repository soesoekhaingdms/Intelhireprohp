// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'HirePro Polska | Oferty pracy online',

  description:
    'Odkryj elastyczne możliwości pracy online w Polsce. Pracuj zdalnie, korzystaj z elastycznego grafiku i dowiedz się więcej o dostępnych możliwościach.',

  openGraph: {
    title: 'HirePro Polska | Oferty pracy online',

    description:
      'Odkryj elastyczne możliwości pracy online w Polsce. Pracuj zdalnie, korzystaj z elastycznego grafiku i dowiedz się więcej o dostępnych możliwościach.',

    url: 'https://www.intelhirepropl.com/',

    siteName: 'HirePro Polska',

    locale: 'pl_PL',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'HirePro Polska | Oferty pracy online',

    description:
      'Odkryj elastyczne możliwości pracy online w Polsce. Pracuj zdalnie, korzystaj z elastycznego grafiku i dowiedz się więcej o dostępnych możliwościach.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
