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
  { name: "Design", icon: <Star className="w-5 h-5" aria-hidden /> },
  { name: "Marketing", icon: <Rocket className="w-5 h-5" aria-hidden /> },
  { name: "Operations", icon: <Globe2 className="w-5 h-5" aria-hidden /> },
  {
    name: "Kundenservice",
    icon: <ShieldCheck className="w-5 h-5" aria-hidden />,
  },
  { name: "Vertrieb", icon: <Star className="w-5 h-5" aria-hidden /> },
  { name: "Content", icon: <Star className="w-5 h-5" aria-hidden /> },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <div className="w-full text-xs text-center py-2 bg-[var(--brand-muted)] text-[var(--brand)]">
        <span className="font-medium">Neu:</span>{" "}
        Entdecken Sie flexible Online-Arbeitsmöglichkeiten – ohne
        Bewerbungsgebühr.
      </div>

      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold">
              HP
            </div>
            <span className="font-semibold tracking-tight">HirePro</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#how" className="hover:text-slate-900">
              So funktioniert es
            </a>

            <a href="#jobs" className="hover:text-slate-900">
              Jobs
            </a>

            <a href="#req" className="hover:text-slate-900">
              Voraussetzungen
            </a>

            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#apply" className="btn-primary px-4">
              Jetzt bewerben
            </Link>
          </div>
        </div>
      </header>

      <section className="relative bg-[var(--brand-muted)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[var(--brand)]">
            Starten Sie jetzt
          </h1>

          <p className="mt-5 text-slate-700 text-lg">
            Arbeiten Sie flexibel und ortsunabhängig. Entdecken Sie
            Online-Arbeitsmöglichkeiten, die sich an Ihren Alltag anpassen.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-600 text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Keine Bewerbungsgebühr</span>

            <CheckCircle className="w-4 h-4" />
            <span>
              Schneller und einfacher <strong>Bewerbungsprozess</strong>
            </span>

            <CheckCircle className="w-4 h-4" />
            <span>Flexible Arbeitsmöglichkeiten</span>
          </div>
        </div>
      </section>

      <ApplicationForm />

      <section id="how" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Möglichkeiten nach Kategorie entdecken
          </h2>

          <p className="text-slate-600 mt-2">
            Entdecken Sie flexible Arbeitsmöglichkeiten in verschiedenen
            Bereichen.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map((c) => (
              <div
                key={c.name}
                className="card-like px-3 py-3 text-left flex items-center gap-2 hover:shadow-card"
              >
                <div className="w-8 h-8 rounded-xl bg-[var(--brand-muted)] text-[var(--brand)] flex items-center justify-center">
                  {c.icon}
                </div>

                <span className="text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Vollzeit- und Teilzeitmöglichkeiten
          </h2>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <Card title="Teilzeit">
              <ul className="space-y-2 text-slate-700">
                <li>
                  Je nach Tätigkeit und Arbeitsumfang sind etwa{" "}
                  <strong>30–389 € pro Tag</strong> möglich
                </li>

                <li>
                  Teilzeitbeschäftigte können etwa{" "}
                  <strong>1.890–2.690 € brutto pro Monat</strong> verdienen
                </li>

                <li>Flexible Arbeitszeiten je nach verfügbaren Aufgaben</li>

                <li>
                  Online-Aufgaben bequem per Smartphone erledigen
                </li>

                <li>
                  Grundlegende digitale Kenntnisse sind von Vorteil
                </li>

                <li>Flexibles Arbeiten von zu Hause</li>
              </ul>
            </Card>

            <Card title="Vollzeit">
              <ul className="space-y-2 text-slate-700">
                <li>
                  Vollzeitbeschäftigte können etwa{" "}
                  <strong>3.590–4.850 € brutto pro Monat</strong> verdienen
                </li>

                <li>
                  Je nach Tätigkeit und Arbeitsumfang sind bis zu{" "}
                  <strong>389 € pro Tag</strong> möglich
                </li>

                <li>Flexible Arbeitszeiten je nach Tätigkeit</li>

                <li>
                  Online-Aufgaben können per Smartphone erledigt werden
                </li>

                <li>
                  Grundlegende digitale Kenntnisse sind von Vorteil
                </li>

                <li>Bequem von zu Hause arbeiten</li>
              </ul>
            </Card>

            <Card title="Flexible Arbeit mit zusätzlichen Vorteilen">
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Flexible Teilnahme:</strong>{" "}
                  wählen Sie verfügbare Aufgaben entsprechend Ihrer Zeit und
                  Verfügbarkeit.
                </li>

                <li>
                  <strong>Langfristige Möglichkeiten:</strong>{" "}
                  regelmäßige Teilnahme kann Zugang zu weiteren verfügbaren
                  Aufgaben ermöglichen.
                </li>

                <li>
                  <strong>Zusätzliche Möglichkeiten:</strong>{" "}
                  bestimmte Aufgaben oder Programme können abhängig von
                  Qualifikation und Verfügbarkeit angeboten werden.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 sm:p-10 text-white"
            style={{
              background:
                "linear-gradient(0deg, rgba(37,99,235,0.25), rgba(37,99,235,0.25)), #0f172a",
            }}
          >
            <p className="text-blue-300 font-semibold">
              Finden Sie Ihre passende Möglichkeit
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold mt-2">
              Arbeiten von zu Hause
            </h3>

            <p className="mt-3 text-white/80 max-w-3xl">
              Nutzen Sie flexible Arbeitsmöglichkeiten, organisieren Sie Ihre
              Zeit und erledigen Sie geeignete Aufgaben online.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat number="183,2+" label="BEWERBUNGEN" />
              <Stat number="12.500+" label="AUFGABEN" />
              <Stat number="300+" label="TEAM" />
              <Stat number="4,81" label="ZUFRIEDENHEIT" />
            </div>
          </div>
        </div>
      </section>

      <section id="req" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">
            Voraussetzungen
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Req
              icon={<Smartphone className="w-5 h-5" />}
              text="Flexible Online-Arbeit über das Smartphone"
            />

            <Req
              icon={<Monitor className="w-5 h-5" />}
              text="Smartphone und Internetverbindung erforderlich"
            />

            <Req
              icon={<IdCard className="w-5 h-5" />}
              text="Bewerber müssen mindestens 23 Jahre alt sein"
            />

            <Req
              icon={<Users className="w-5 h-5" />}
              text="Offen für geeignete und qualifizierte Bewerber"
            />

            <Req
              icon={<Lightbulb className="w-5 h-5" />}
              text="Grundlegende digitale Kenntnisse sind von Vorteil"
            />
          </div>
        </div>
      </section>

      <section id="why" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "Strukturierter Bewerbungsprozess",
              desc: "Ein einfacher Prozess zur Übermittlung und Prüfung Ihrer Bewerbung.",
            },
            {
              icon: <Rocket className="w-5 h-5" />,
              title: "Einfacher Einstieg",
              desc: "Nach der Bewerbung erhalten geeignete Kandidaten weitere Informationen zu verfügbaren Möglichkeiten.",
            },
            {
              icon: <Star className="w-5 h-5" />,
              title: "Flexible Möglichkeiten",
              desc: "Verfügbare Möglichkeiten richten sich nach Qualifikation, Tätigkeit und Verfügbarkeit.",
            },
          ].map((f) => (
            <div key={f.title} className="card-like p-6">
              <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center bg-[var(--brand-muted)] text-[var(--brand)]">
                {f.icon}
              </div>

              <p className="font-semibold">{f.title}</p>

              <p className="text-slate-600 mt-2 text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-semibold">
              Bereit für Ihre Bewerbung?
            </h3>

            <p className="mt-2 text-slate-300">
              Füllen Sie das Bewerbungsformular aus. Unser Recruiting-Team
              kontaktiert geeignete Bewerber über Telegram.
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="#apply" className="btn-primary px-6">
              Jetzt bewerben
            </Link>

            <button className="btn-secondary px-6">
              Support kontaktieren
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-600">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold mb-3">
              HP
            </div>

            <p>
              HirePro hilft Menschen dabei, flexible und ortsunabhängige
              Arbeitsmöglichkeiten zu entdecken.
            </p>
          </div>

          <Column
            title="Unternehmen"
            items={["Über uns", "Karriere", "Blog"]}
          />

          <Column
            title="Support"
            items={["Hilfe", "Sicherheit", "Kontakt"]}
          />

          <Column
            title="Rechtliches"
            items={["Bedingungen", "Datenschutz", "Cookies"]}
          />
        </div>

        <div className="text-xs text-slate-400 text-center mt-6">
          © {new Date().getFullYear()} HirePro, Inc. Alle Rechte vorbehalten.
        </div>
      </footer>
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
    <div className="card-like p-6">
      <p className="text-lg font-bold text-[var(--brand)] mb-3">
        {title}
      </p>

      {children}
    </div>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">{number}</div>

      <div className="text-[10px] tracking-widest text-white/70">
        {label}
      </div>
    </div>
  );
}

function Req({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="size-12 shrink-0 rounded-full bg-[var(--brand)] text-white grid place-items-center ring-4 ring-[var(--brand-muted)]">
        <div className="w-[18px] h-[18px]">
          {icon}
        </div>
      </div>

      <p className="text-sm leading-snug">
        {text}
      </p>
    </div>
  );
}

function Column({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p className="font-semibold text-slate-900 mb-2">
        {title}
      </p>

      <ul className="space-y-1">
        {items.map((t) => (
          <li key={t}>
            <a className="hover:underline" href="#">
              {t}
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
      a: "Bewerben können sich Personen ab 23 Jahren, die über ein Smartphone und eine Internetverbindung verfügen.",
    },
    {
      q: "Ist die Arbeit remote?",
      a: "Ja. Geeignete Aufgaben können online von einem Ort mit zuverlässiger Internetverbindung erledigt werden.",
    },
    {
      q: "Wie kann ich mich bewerben?",
      a: "Füllen Sie das Bewerbungsformular aus und senden Sie es ab. Unser Recruiting-Team kontaktiert geeignete Bewerber über Telegram.",
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
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-[var(--brand)]">
          Häufig gestellte Fragen
        </h2>

        <div className="space-y-3">
          {items.map((it, i) => (
            <FAQItem
              key={i}
              q={it.q}
              a={it.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  q,
  a,
}: {
  q: string;
  a: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`card-like ${
        open ? "ring-2 ring-[var(--brand)]" : ""
      }`}
    >
      <button
        className="w-full flex items-center justify-between text-left p-4 sm:p-5"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">
          {q}
        </span>

        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-600 border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}
