// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'HirePro Polska | Oferty pracy online',
  description:
    'Odkryj oferty pracy online z HirePro w Polsce. Pracuj z domu, wykonuj proste zadania i korzystaj z elastycznych możliwości pracy.',
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
