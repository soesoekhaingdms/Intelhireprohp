// app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Rocket,
  Star,
  Globe2,
  CheckCircle,
  Smartphone,
  Monitor,
  IdCard,
  Users,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import ApplicationForm from "./components/ApplicationForm";

const categories = [
  { name: "Design", icon: <Star className="h-5 w-5" aria-hidden /> },
  { name: "Marketing", icon: <Rocket className="h-5 w-5" aria-hidden /> },
  { name: "Operations", icon: <Globe2 className="h-5 w-5" aria-hidden /> },
  {
    name: "Kundenservice",
    icon: <ShieldCheck className="h-5 w-5" aria-hidden />,
  },
  { name: "Vertrieb", icon: <Star className="h-5 w-5" aria-hidden /> },
  { name: "Content", icon: <Star className="h-5 w-5" aria-hidden /> },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[var(--page)] text-[var(--text)]">
      <div className="border-b border-[#30290d] bg-[#17140b] px-4 py-2 text-center text-xs text-[#e6d9a9] sm:text-sm">
        <span className="font-semibold text-[var(--brand)]">Neu:</span>{" "}
        Flexible Online-Arbeitsmöglichkeiten – ohne Bewerbungsgebühr.
      </div>

      <header className="sticky top-0 z-30 border-b border-[#252a30] bg-[#0b0e11]/95 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--brand)] font-black text-[#111] shadow-lg shadow-yellow-500/10">
              HP
            </div>
            <span className="font-semibold tracking-tight text-white">HirePro</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-[#9da3ab] md:flex">
            <a href="#how" className="nav-link">
              So funktioniert es
            </a>
            <a href="#jobs" className="nav-link">
              Jobs
            </a>
            <a href="#req" className="nav-link">
              Voraussetzungen
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
          </nav>

          <Link href="#apply" className="btn-primary whitespace-nowrap px-4 py-2.5 text-sm sm:px-5">
            Jetzt bewerben
          </Link>
        </div>
      </header>

      <main>
        <section className="border-b border-[#20252b] bg-[radial-gradient(circle_at_top_right,_rgba(240,185,11,0.10),_transparent_38%)]">
          <div className="mx-auto max-w-4xl px-4 py-9 sm:px-6 md:py-11">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#50420e] bg-[#17140b] px-3 py-1.5 text-xs font-medium text-[#e6d9a9]">
              <span aria-hidden>🇩🇪</span>
              Deutschland
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Starten Sie <span className="text-[var(--brand)]">jetzt</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#b9bec6] sm:text-lg">
              Arbeiten Sie flexibel und ortsunabhängig. Entdecken Sie
              Online-Arbeitsmöglichkeiten, die sich an Ihren Alltag anpassen.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#aab0b8]">
              <HeroPoint text="Keine Bewerbungsgebühr" />
              <HeroPoint text="Einfacher Bewerbungsprozess" />
              <HeroPoint text="Flexible Arbeitsmöglichkeiten" />
            </div>
          </div>
        </section>

        <section className="container-page py-7 sm:py-8">
          <ApplicationForm />
        </section>

        <section id="how" className="section-compact border-t border-[#1d2228]">
          <div className="container-page">
            <SectionHeading
              eyebrow="Bereiche"
              title="Möglichkeiten nach Kategorie entdecken"
              description="Entdecken Sie flexible Arbeitsmöglichkeiten in verschiedenen Bereichen."
            />

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="card-like flex items-center gap-2.5 px-3 py-3.5 transition hover:-translate-y-0.5 hover:border-[#5b4b11]"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#201c0c] text-[var(--brand)]">
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium text-[#e6e8ea]">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="jobs" className="section-compact bg-[var(--surface-soft)]">
          <div className="container-page">
            <SectionHeading
              eyebrow="Arbeitsmodelle"
              title="Vollzeit- und Teilzeitmöglichkeiten"
              description="Vergleichen Sie flexible Optionen und wählen Sie ein Modell, das zu Ihrer Verfügbarkeit passt."
            />

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <Card title="Teilzeit">
                <ul className="space-y-2.5 text-sm leading-relaxed text-[#b6bbc3]">
                  <li>
                    Je nach Tätigkeit und Arbeitsumfang sind etwa{" "}
                    <strong>30–389 € pro Tag</strong> möglich
                  </li>
                  <li>
                    Teilzeitbeschäftigte können etwa{" "}
                    <strong>1.890–2.690 € brutto pro Monat</strong> verdienen
                  </li>
                  <li>Flexible Arbeitszeiten je nach verfügbaren Aufgaben</li>
                  <li>Online-Aufgaben bequem per Smartphone erledigen</li>
                  <li>Grundlegende digitale Kenntnisse sind von Vorteil</li>
                  <li>Flexibles Arbeiten von zu Hause</li>
                </ul>
              </Card>

              <Card title="Vollzeit">
                <ul className="space-y-2.5 text-sm leading-relaxed text-[#b6bbc3]">
                  <li>
                    Vollzeitbeschäftigte können etwa{" "}
                    <strong>3.590–4.850 € brutto pro Monat</strong> verdienen
                  </li>
                  <li>
                    Je nach Tätigkeit und Arbeitsumfang sind bis zu{" "}
                    <strong>389 € pro Tag</strong> möglich
                  </li>
                  <li>Flexible Arbeitszeiten je nach Tätigkeit</li>
                  <li>Online-Aufgaben können per Smartphone erledigt werden</li>
                  <li>Grundlegende digitale Kenntnisse sind von Vorteil</li>
                  <li>Bequem von zu Hause arbeiten</li>
                </ul>
              </Card>

              <Card title="Flexible Arbeit mit zusätzlichen Vorteilen">
                <ul className="space-y-3 text-sm leading-relaxed text-[#b6bbc3]">
                  <li>
                    <strong>Flexible Teilnahme:</strong> wählen Sie verfügbare
                    Aufgaben entsprechend Ihrer Zeit und Verfügbarkeit.
                  </li>
                  <li>
                    <strong>Langfristige Möglichkeiten:</strong> regelmäßige
                    Teilnahme kann Zugang zu weiteren verfügbaren Aufgaben
                    ermöglichen.
                  </li>
                  <li>
                    <strong>Zusätzliche Möglichkeiten:</strong> bestimmte
                    Aufgaben oder Programme können abhängig von Qualifikation
                    und Verfügbarkeit angeboten werden.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-compact">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="overflow-hidden rounded-2xl border border-[#5b4b11] bg-gradient-to-br from-[#19160c] via-[#111418] to-[#0d1014] p-6 shadow-2xl shadow-black/20 sm:p-7">
              <p className="text-sm font-semibold text-[var(--brand)]">
                Finden Sie Ihre passende Möglichkeit
              </p>
              <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Arbeiten von zu Hause
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#aeb4bc] sm:text-base">
                Nutzen Sie flexible Arbeitsmöglichkeiten, organisieren Sie Ihre
                Zeit und erledigen Sie geeignete Aufgaben online.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat number="183,2+" label="BEWERBUNGEN" />
                <Stat number="12.500+" label="AUFGABEN" />
                <Stat number="300+" label="TEAM" />
                <Stat number="4,81" label="ZUFRIEDENHEIT" />
              </div>
            </div>
          </div>
        </section>

        <section id="req" className="section-compact border-y border-[#1d2228] bg-[var(--surface-soft)]">
          <div className="container-page">
            <SectionHeading
              eyebrow="Voraussetzungen"
              title="Was Sie benötigen"
              description="Die wichtigsten Voraussetzungen auf einen Blick."
            />

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Req
                icon={<Smartphone className="h-5 w-5" />}
                text="Flexible Online-Arbeit über das Smartphone"
              />
              <Req
                icon={<Monitor className="h-5 w-5" />}
                text="Smartphone und Internetverbindung erforderlich"
              />
              <Req
                icon={<IdCard className="h-5 w-5" />}
                text="Bewerber müssen mindestens 18 Jahre alt sein"
              />
              <Req
                icon={<Users className="h-5 w-5" />}
                text="Offen für geeignete und qualifizierte Bewerber"
              />
              <Req
                icon={<Lightbulb className="h-5 w-5" />}
                text="Grundlegende digitale Kenntnisse sind von Vorteil"
              />
            </div>
          </div>
        </section>

        <section id="why" className="section-compact">
          <div className="container-page grid gap-4 lg:grid-cols-3">
            {[
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "Strukturierter Bewerbungsprozess",
                desc: "Ein einfacher Prozess zur Übermittlung und Prüfung Ihrer Bewerbung.",
              },
              {
                icon: <Rocket className="h-5 w-5" />,
                title: "Einfacher Einstieg",
                desc: "Nach der Bewerbung erhalten geeignete Kandidaten weitere Informationen zu verfügbaren Möglichkeiten.",
              },
              {
                icon: <Star className="h-5 w-5" />,
                title: "Flexible Möglichkeiten",
                desc: "Verfügbare Möglichkeiten richten sich nach Qualifikation, Tätigkeit und Verfügbarkeit.",
              },
            ].map((feature) => (
              <div key={feature.title} className="card-like p-5">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#201c0c] text-[var(--brand)]">
                  {feature.icon}
                </div>
                <p className="font-semibold text-white">{feature.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#aeb4bc]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection />

        <section className="border-t border-[#30290d] bg-[#17140b] py-9 sm:py-10">
          <div className="container-page flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h3 className="m-0 text-2xl font-semibold text-white">
                Bereit für Ihre Bewerbung?
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-[#b6bbc3]">
                Füllen Sie das Bewerbungsformular aus. Nach erfolgreicher
                Übermittlung können Sie Ihre Bewerbung über Telegram fortsetzen.
              </p>
            </div>

            <Link href="#apply" className="btn-primary whitespace-nowrap px-6">
              Jetzt bewerben
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#22272d] bg-[#090b0e] py-8">
        <div className="container-page grid gap-7 text-sm text-[#8f959e] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand)] font-black text-[#111]">
              HP
            </div>
            <p className="text-sm leading-relaxed text-[#8f959e]">
              HirePro hilft Menschen dabei, flexible und ortsunabhängige
              Arbeitsmöglichkeiten zu entdecken.
            </p>
          </div>

          <Column title="Unternehmen" items={["Über uns", "Karriere", "Blog"]} />
          <Column title="Support" items={["Hilfe", "Sicherheit", "Kontakt"]} />
          <Column
            title="Rechtliches"
            items={["Bedingungen", "Datenschutz", "Cookies"]}
          />
        </div>

        <div className="mt-6 text-center text-xs text-[#666d76]">
          © {new Date().getFullYear()} HirePro, Inc. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}

function HeroPoint({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle className="h-4 w-4 text-[var(--brand)]" />
      {text}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#9da3ab] sm:text-base">
        {description}
      </p>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-like p-5">
      <p className="mb-3 text-base font-bold text-[var(--brand)]">{title}</p>
      {children}
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-[#2b3036] bg-[#0b0e11]/80 p-3">
      <div className="text-xl font-semibold text-white sm:text-2xl">{number}</div>
      <div className="mt-1 text-[10px] tracking-widest text-[#8f959e]">
        {label}
      </div>
    </div>
  );
}

function Req({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="card-like flex items-center gap-3 p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#201c0c] text-[var(--brand)]">
        {icon}
      </div>
      <p className="text-sm leading-snug text-[#d1d4d8]">{text}</p>
    </div>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 font-semibold text-[#e5e7e9]">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item}>
            <a className="footer-link" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQSection() {
  const items = [
    {
      q: "Wer kann sich bewerben?",
      a: "Bewerben können sich Personen ab 18 Jahren, die über ein Smartphone und eine Internetverbindung verfügen.",
    },
    {
      q: "Ist die Arbeit remote?",
      a: "Ja. Geeignete Aufgaben können online von einem Ort mit zuverlässiger Internetverbindung erledigt werden.",
    },
    {
      q: "Wie kann ich mich bewerben?",
      a: "Füllen Sie das Bewerbungsformular aus und senden Sie es ab. Nach erfolgreicher Übermittlung erscheint eine Schaltfläche, mit der Sie Ihre Bewerbung über Telegram fortsetzen können.",
    },
    {
      q: "Wie geht es nach der Bewerbung weiter?",
      a: "Nach Eingang Ihrer Bewerbung werden die Angaben geprüft. Geeignete Kandidaten erhalten anschließend weitere Informationen zu verfügbaren Möglichkeiten.",
    },
    {
      q: "Wie flexibel sind die Arbeitszeiten?",
      a: "Die Arbeitszeiten hängen von der jeweiligen Tätigkeit, den verfügbaren Aufgaben und der gewählten Arbeitsform ab.",
    },
  ];

  return (
    <section id="faq" className="section-compact border-t border-[#1d2228] bg-[var(--surface-soft)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Häufig gestellte Fragen"
          description="Antworten auf die wichtigsten Fragen zur Bewerbung."
        />

        <div className="mt-5 space-y-2.5">
          {items.map((item, index) => (
            <FAQItem key={index} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-xl border bg-[var(--surface)] transition ${
        open ? "border-[#6a5711]" : "border-[#30363d]"
      }`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[#eef0f2]">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--brand)] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-[#2a3036] px-4 pb-4 pt-3 text-sm leading-relaxed text-[#aeb4bc]">
          {a}
        </div>
      )}
    </div>
  );
}
