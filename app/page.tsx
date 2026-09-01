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
  { name: "Projektowanie", icon: <Star className="w-5 h-5" aria-hidden /> },
  { name: "Marketing", icon: <Rocket className="w-5 h-5" aria-hidden /> },
  { name: "Operacje", icon: <Globe2 className="w-5 h-5" aria-hidden /> },
  { name: "Obsługa klienta", icon: <ShieldCheck className="w-5 h-5" aria-hidden /> },
  { name: "Sprzedaż", icon: <Star className="w-5 h-5" aria-hidden /> },
  { name: "Treści", icon: <Star className="w-5 h-5" aria-hidden /> },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">

      <div className="w-full text-xs text-center py-2 bg-[var(--brand-muted)] text-[var(--brand)]">
        <span className="font-medium">Nowość:</span>{" "}
        Zacznij otrzymywać zweryfikowane oferty pracy zdalnej w ciągu kilku dni — bez opłaty za zgłoszenie.
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
              Jak to działa
            </a>
            <a href="#jobs" className="hover:text-slate-900">
              Praca
            </a>
            <a href="#req" className="hover:text-slate-900">
              Wymagania
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#apply" className="btn-primary px-4">
              Aplikuj teraz
            </Link>
          </div>
        </div>
      </header>

      <section className="relative bg-[var(--brand-muted)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[var(--brand)]">
            Zacznij pracę już teraz
          </h1>

          <p className="mt-5 text-slate-700 text-lg">
            Pracuj z dowolnego miejsca! Praca online daje elastyczność i możliwość zarabiania z domu.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-600 text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Bez opłat wstępnych</span>

            <CheckCircle className="w-4 h-4" />
            <span>
              Średni czas dopasowania <strong>48 godzin</strong>
            </span>

            <CheckCircle className="w-4 h-4" />
            <span>Bezpieczny system płatności</span>
          </div>
        </div>
      </section>

      <ApplicationForm />

      <section id="how" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Przeglądaj według kategorii</h2>

          <p className="text-slate-600 mt-2">
            Odkryj elastyczne możliwości pracy w popularnych kategoriach.
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
            Przyjmujemy zgłoszenia do pracy dorywczej i stałej!
          </h2>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">

            <Card title="Praca dorywcza">
              <ul className="space-y-2 text-slate-700">
                <li>
                  W zależności od wykonanych zadań możesz zarobić{" "}
                  <strong>40–200 PLN dziennie</strong>
                </li>

                <li>
                  Otrzymuj <strong>codzienne wypłaty</strong> po wykonaniu zadań
                </li>

                <li>
                  Pracuj <strong>1–3 godziny dziennie</strong>
                </li>

                <li>
                  Wykonuj proste zadania online za pomocą smartfona
                </li>

                <li>
                  Podstawowa wiedza cyfrowa jest dodatkowym atutem
                </li>

                <li>
                  Elastyczny harmonogram pracy z domu
                </li>
              </ul>
            </Card>

            <Card title="Praca stała">
              <ul className="space-y-2 text-slate-700">
                <li>
                  W zależności od wykonanych zadań możesz zarobić{" "}
                  <strong>400 PLN lub więcej dziennie</strong>
                </li>

                <li>
                  Pracuj według elastycznego harmonogramu
                </li>

                <li>
                  Wykonuj zadania online za pomocą smartfona
                </li>

                <li>
                  Podstawowa wiedza cyfrowa jest dodatkowym atutem
                </li>

                <li>
                  Pracuj wygodnie z domu
                </li>
              </ul>
            </Card>

            <Card title="Elastyczna praca z atrakcyjnymi bonusami">
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Pracuj przez 5 kolejnych dni:</strong>{" "}
                  wykonaj zadania przez pięć kolejnych dni, aby kwalifikować się do dodatkowego bonusu.
                </li>

                <li>
                  <strong>Kontynuuj przez 15 dni:</strong>{" "}
                  dłuższy udział może kwalifikować Cię do dodatkowych nagród.
                </li>

                <li>
                  <strong>Kontynuuj przez cały miesiąc:</strong>{" "}
                  dodatkowe bonusy mogą być dostępne na podstawie wykonanej pracy i kwalifikacji.
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
              Znajdź tutaj swoją możliwość!
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold mt-2">
              Praca z domu
            </h3>

            <p className="mt-3 text-white/80 max-w-3xl">
              Korzystaj z elastycznej pracy, zarządzaj własnym czasem i pracuj online na wybranym urządzeniu.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat number="183,2+" label="ZGŁOSZENIA" />
              <Stat number="12,500+" label="PRZYDZIELONE ZADANIA" />
              <Stat number="300+" label="NASZ ZESPÓŁ" />
              <Stat number="4.81" label="SATYSFAKCJA" />
            </div>
          </div>
        </div>
      </section>

      <section id="req" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl font-bold mb-6">
            Wymagania
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            <Req
              icon={<Smartphone className="w-5 h-5" />}
              text="Pracuj wygodnie za pomocą smartfona"
            />

            <Req
              icon={<Monitor className="w-5 h-5" />}
              text="Wymagany jest smartfon i połączenie z internetem"
            />

            <Req
              icon={<IdCard className="w-5 h-5" />}
              text="Aplikować mogą osoby w wieku 23 lat lub starsze"
            />

            <Req
              icon={<Users className="w-5 h-5" />}
              text="Oferta otwarta dla wszystkich kwalifikujących się kandydatów"
            />

            <Req
              icon={<Lightbulb className="w-5 h-5" />}
              text="Podstawowa wiedza cyfrowa jest dodatkowym atutem"
            />

          </div>
        </div>
      </section>

      <section id="why" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "Zaufanie i bezpieczeństwo",
              desc: "Ustrukturyzowany proces zgłoszenia i weryfikacji.",
            },
            {
              icon: <Rocket className="w-5 h-5" />,
              title: "Start w 1–2 dni",
              desc: "Wielu kandydatów może rozpocząć w ciągu 1–2 dni po zakończeniu procesu zgłoszenia.",
            },
            {
              icon: <Star className="w-5 h-5" />,
              title: "Elastyczne możliwości",
              desc: "Możliwości są dopasowywane do kwalifikacji i dostępności.",
            },
          ].map((f) => (
            <div key={f.title} className="card-like p-6">
              <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center bg-[var(--brand-muted)] text-[var(--brand)]">
                {f.icon}
              </div>

              <p className="font-semibold">{f.title}</p>
              <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h3 className="text-3xl font-semibold">
              Gotowy/gotowa do aplikowania?
            </h3>

            <p className="mt-2 text-slate-300">
              Wypełnij formularz zgłoszeniowy, a nasz zespół rekrutacyjny skontaktuje się z Tobą przez Telegram.
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="#apply" className="btn-primary px-6">
              Aplikuj teraz
            </Link>

            <button className="btn-secondary px-6">
              Kontakt z pomocą
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
              HirePro pomaga ludziom odkrywać elastyczne i zdalne możliwości pracy.
            </p>
          </div>

          <Column
            title="Firma"
            items={["O nas", "Kariera", "Blog"]}
          />

          <Column
            title="Wsparcie"
            items={["Centrum pomocy", "Bezpieczeństwo", "Kontakt"]}
          />

          <Column
            title="Informacje prawne"
            items={["Warunki", "Prywatność", "Pliki cookie"]}
          />

        </div>

        <div className="text-xs text-slate-400 text-center mt-6">
          © {new Date().getFullYear()} HirePro, Inc. Wszelkie prawa zastrzeżone.
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
        <div className="w-[18px] h-[18px]">{icon}</div>
      </div>

      <p className="text-sm leading-snug">{text}</p>
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
      q: "Kto może aplikować?",
      a: "Aplikować może każda osoba w wieku 23 lat lub starsza, która ma smartfon i połączenie z internetem.",
    },
    {
      q: "Czy to jest praca zdalna?",
      a: "Tak. Praca może być wykonywana zdalnie z odpowiedniego miejsca z dostępem do internetu.",
    },
    {
      q: "Jak mogę aplikować?",
      a: "Wypełnij i wyślij formularz zgłoszeniowy. Nasz zespół rekrutacyjny skontaktuje się z Tobą przez Telegram.",
    },
    {
      q: "Jak szybko mogę zacząć?",
      a: "Wielu kandydatów może rozpocząć w ciągu 1–2 dni po zakończeniu procesu zgłoszenia.",
    },
    {
      q: "Ile godzin dziennie muszę pracować?",
      a: "Zazwyczaj jest to około 1–3 godzin dziennie przy elastycznych zadaniach, w zależności od dostępnej pracy.",
    },
  ];

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl font-bold mb-6 text-[var(--brand)]">
          Najczęściej zadawane pytania
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
        <span className="font-semibold">{q}</span>

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
