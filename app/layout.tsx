// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'HirePro Polska | Oferty pracy online',
  description:
    'Odkryj z HirePro możliwości pracy online w Polsce. Pracuj z domu, wykonuj proste zadania i otrzymuj dzienne wynagrodzenie.',
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
