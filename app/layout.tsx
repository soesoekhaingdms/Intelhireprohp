// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "HirePro Deutschland | Flexible Online-Jobs",

  description:
    "Entdecken Sie flexible Online-Arbeitsmöglichkeiten in Deutschland. Arbeiten Sie ortsunabhängig und finden Sie passende Vollzeit- oder Teilzeitmöglichkeiten.",

  openGraph: {
    title: "HirePro Deutschland | Flexible Online-Jobs",

    description:
      "Entdecken Sie flexible Online-Arbeitsmöglichkeiten in Deutschland. Arbeiten Sie ortsunabhängig und finden Sie passende Vollzeit- oder Teilzeitmöglichkeiten.",

    url: "https://www.intelhirepropl.com/",

    siteName: "HirePro Deutschland",

    locale: "de_DE",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "HirePro Deutschland | Flexible Online-Jobs",

    description:
      "Entdecken Sie flexible Online-Arbeitsmöglichkeiten in Deutschland. Arbeiten Sie ortsunabhängig und finden Sie passende Vollzeit- oder Teilzeitmöglichkeiten.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
