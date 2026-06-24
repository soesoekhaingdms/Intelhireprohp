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
        <span className="font-medium">Nowość:</span> Zacznij otrzymywać sprawdzone oferty pracy zdalnej w ciągu kilku dni — bez opłaty za zgłoszenie.
      </div>

      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold">HP</div>
            <span className="font-semibold tracking-tight">HirePro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#how" className="hover:text-slate-900">Jak to działa?</a>
            <a href="#jobs" className="hover:text-slate-900">Praca</a>
            <a href="#req" className="hover:text-slate-900">Wymagania</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="#apply" className="btn-primary px-4">Aplikuj teraz</Link>
          </div>
        </div>
      </header>

      <section className="relative bg-[var(--brand-muted)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[var(--brand)]">
            Zacznij pracę już teraz
          </h1>
          <p className="mt-5 text-slate-700 text-lg">
            Pracuj z dowolnego miejsca! Praca online daje możliwość zarabiania bez wychodzenia z domu.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-600 text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Bez opłat z góry</span>
            <CheckCircle className="w-4 h-4" />
            <span>Średni czas dopasowania <strong>48 godzin</strong></span>
            <CheckCircle className="w-4 h-4" />
            <span>Bezpieczny system płatności</span>
          </div>
        </div>
      </section>

      <ApplicationForm />

      <section id="how" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Przeglądaj według kategorii</h2>
          <p className="text-slate-600 mt-2">Znajdź elastyczne możliwości pracy w popularnych obszarach.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map((c) => (
              <div key={c.name} className="card-like px-3 py-3 text-left flex items-center gap-2 hover:shadow-card">
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
          <h2 className="text-2xl font-bold">Przyjmujemy zgłoszenia do pracy dorywczej i stałej!</h2>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <Card title="Praca dorywcza">
              <ul className="space-y-2 text-slate-700">
                <li>W zależności od wykonanych zadań możesz zarobić dziennie <strong>40–200 PLN</strong></li>
                <li>Po ukończeniu zadań otrzymujesz <strong>wypłatę dzienną</strong></li>
                <li>Praca przez <strong>1–3 godziny dziennie</strong></li>
                <li>Proste zadania online możesz wykonywać za pomocą telefonu</li>
                <li>Podstawowa wiedza cyfrowa będzie dodatkowym atutem</li>
                <li>Elastyczne godziny pracy z domu</li>
              </ul>
            </Card>

            <Card title="Praca stała">
              <ul className="space-y-2 text-slate-700">
                <li>W zależności od wykonanych zadań możesz zarobić dziennie <strong>co najmniej 400 PLN</strong></li>
                <li>Praca przez <strong>1–3 godziny dziennie</strong></li>
                <li>Proste zadania online możesz wykonywać za pomocą telefonu</li>
                <li>Podstawowa wiedza cyfrowa będzie dodatkowym atutem</li>
                <li>Elastyczne godziny pracy z domu</li>
              </ul>
            </Card>

            <Card title="Elastyczna praca dorywcza z atrakcyjnymi bonusami!">
              <ul className="space-y-3 text-slate-700">
                <li><strong>Pracuj 5 dni z rzędu:</strong> po 5 dniach ciągłej pracy otrzymasz atrakcyjny bonus.</li>
                <li><strong>Przedłuż do 15 dni:</strong> pracuj 15 dni z rzędu i zdobądź nagrodę ponad dwukrotnie większą niż początkowa kwota.</li>
                <li><strong>Kontynuuj przez cały miesiąc:</strong> jeśli zostaniesz z nami przez pełne 30 dni, otrzymasz bonus nawet <strong>8 razy</strong> większy.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 sm:p-10 text-white"
            style={{ background: `linear-gradient(0deg, rgba(37,99,235,0.25), rgba(37,99,235,0.25)), #0f172a` }}
          >
            <p className="text-blue-300 font-semibold">Znajdź swoją pracę tutaj!</p>
            <h3 className="text-3xl sm:text-4xl font-bold mt-2">Pracuj naprawdę z domu</h3>
            <p className="mt-3 text-white/80 max-w-3xl">
              Pracuj elastycznie, ustalaj własny harmonogram i spędzaj więcej czasu z rodziną. Zadania możesz wykonywać z dowolnego urządzenia online.
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
          <h2 className="text-2xl font-bold mb-6">Wymagania</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Req icon={<Smartphone className="w-5 h-5" />} text="Twój telefon może stać się źródłem dochodu" />
            <Req icon={<Monitor className="w-5 h-5" />} text="Posiadanie smartfona jest wymagane" />
            <Req icon={<IdCard className="w-5 h-5" />} text="Osoby powyżej 23 roku życia mogą aplikować" />
            <Req icon={<Users className="w-5 h-5" />} text="Kandydaci i kandydatki mogą aplikować" />
            <Req icon={<Lightbulb className="w-5 h-5" />} text="Podstawowa wiedza cyfrowa będzie dodatkowym atutem" />
          </div>
        </div>
      </section>

      <section id="why" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            { icon: <ShieldCheck className="w-5 h-5" />, title: "Zaufanie i bezpieczeństwo", desc: "Stopniowe płatności i weryfikacja tożsamości." },
            { icon: <Rocket className="w-5 h-5" />, title: "Start w 1–2 dni", desc: "Większość kandydatów zaczyna w ciągu 1–2 dni od wysłania formularza." },
            { icon: <Star className="w-5 h-5" />, title: "Starannie wybrani kandydaci", desc: "Oceniamy umiejętności, dopasowanie i dostępne godziny pracy." },
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
            <h3 className="text-3xl font-semibold">Gotowy/gotowa do aplikowania?</h3>
            <p className="mt-2 text-slate-300">Wypełnij formularz, a zespół rekrutacyjny skontaktuje się z Tobą przez Telegram.</p>
          </div>
          <div className="flex gap-3">
            <Link href="#apply" className="btn-primary px-6">Aplikuj teraz</Link>
            <button className="btn-secondary px-6">Skontaktuj się z pomocą</button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-600">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold mb-3">HP</div>
            <p>HirePro pomaga znaleźć zaufane możliwości pracy dorywczej i zdalnej.</p>
          </div>
          <Column title="Firma" items={["O nas", "Kariera", "Blog"]} />
          <Column title="Wsparcie" items={["Centrum pomocy", "Bezpieczeństwo", "Kontakt"]} />
          <Column title="Informacje prawne" items={["Warunki", "Prywatność", "Pliki cookie"]} />
        </div>
        <div className="text-xs text-slate-400 text-center mt-6">
          © {new Date().getFullYear()} HirePro, Inc. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-like p-6">
      <p className="text-lg font-bold text-[var(--brand)] mb-3">{title}</p>
      {children}
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">{number}</div>
      <div className="text-[10px] tracking-widest text-white/70">{label}</div>
    </div>
  );
}

function Req({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="size-12 shrink-0 rounded-full bg-[var(--brand)] text-white grid place-items-center ring-4 ring-[var(--brand-muted)]">
        <div className="w-[18px] h-[18px]">{icon}</div>
      </div>
      <p className="text-sm leading-snug">{text}</p>
    </div>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-semibold text-slate-900 mb-2">{title}</p>
      <ul className="space-y-1">
        {items.map((t) => (
          <li key={t}>
            <a className="hover:underline" href="#">{t}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQSection() {
  const items = [
    { q: "Kto może aplikować?", a: "Każdy, kto ma 23 lata lub więcej, smartfon i połączenie z internetem, może aplikować." },
    { q: "Czy ta praca jest zdalna?", a: "Tak, praca jest w pełni zdalna. Możesz pracować z dowolnego miejsca." },
    { q: "Jak mogę aplikować?", a: "Wypełnij i wyślij formularz zgłoszeniowy. Zespół rekrutacyjny skontaktuje się z Tobą przez Telegram." },
    { q: "Jak szybko mogę zacząć?", a: "Większość kandydatów zaczyna w ciągu 1–2 dni od wysłania formularza." },
    { q: "Ile godzin dziennie muszę pracować?", a: "Zwykle 1–3 godziny dziennie. Harmonogram pracy jest elastyczny." },
  ];

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-[var(--brand)]">Najczęściej zadawane pytania</h2>
        <div className="space-y-3">
          {items.map((it, i) => <FAQItem key={i} q={it.q} a={it.a} />)}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`card-like ${open ? "ring-2 ring-[var(--brand)]" : ""}`}>
      <button className="w-full flex items-center justify-between text-left p-4 sm:p-5" onClick={() => setOpen(!open)}>
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-600 border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}
