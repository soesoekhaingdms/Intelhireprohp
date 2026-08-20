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
  { name: "Customer Support", icon: <ShieldCheck className="w-5 h-5" aria-hidden /> },
  { name: "Sales", icon: <Star className="w-5 h-5" aria-hidden /> },
  { name: "Content", icon: <Star className="w-5 h-5" aria-hidden /> },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">

      <div className="w-full text-xs text-center py-2 bg-[var(--brand-muted)] text-[var(--brand)]">
        <span className="font-medium">New:</span>{" "}
        Start receiving verified remote work opportunities within a few days — no application fee.
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
              How It Works
            </a>
            <a href="#jobs" className="hover:text-slate-900">
              Jobs
            </a>
            <a href="#req" className="hover:text-slate-900">
              Requirements
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#apply" className="btn-primary px-4">
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      <section className="relative bg-[var(--brand-muted)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[var(--brand)]">
            Start Working Today
          </h1>

          <p className="mt-5 text-slate-700 text-lg">
            Work from anywhere! Online work gives you the flexibility to earn from home.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-600 text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>No upfront fees</span>

            <CheckCircle className="w-4 h-4" />
            <span>
              Average matching time <strong>48 hours</strong>
            </span>

            <CheckCircle className="w-4 h-4" />
            <span>Secure payment system</span>
          </div>
        </div>
      </section>

      <ApplicationForm />

      <section id="how" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Browse by Category</h2>

          <p className="text-slate-600 mt-2">
            Discover flexible work opportunities across popular categories.
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
            We Are Accepting Applications for Part-Time and Full-Time Work!
          </h2>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">

            <Card title="Part-Time Work">
              <ul className="space-y-2 text-slate-700">
                <li>
                  Depending on the tasks completed, you can earn{" "}
                  <strong>₹500–₹4,500 per day</strong>
                </li>

                <li>
                  Receive <strong>daily payments</strong> after completing your tasks
                </li>

                <li>
                  Work for <strong>1–3 hours per day</strong>
                </li>

                <li>
                  Complete simple online tasks using your smartphone
                </li>

                <li>
                  Basic digital knowledge is an advantage
                </li>

                <li>
                  Flexible work-from-home schedule
                </li>
              </ul>
            </Card>

            <Card title="Full-Time Work">
              <ul className="space-y-2 text-slate-700">
                <li>
                  Depending on the tasks completed, you can earn{" "}
                  <strong>₹7,000 or more per day</strong>
                </li>

                <li>
                  Work with a flexible schedule
                </li>

                <li>
                  Complete online tasks using your smartphone
                </li>

                <li>
                  Basic digital knowledge is an advantage
                </li>

                <li>
                  Work conveniently from home
                </li>
              </ul>
            </Card>

            <Card title="Flexible Work with Attractive Bonuses">
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Work for 5 consecutive days:</strong>{" "}
                  complete five consecutive working days to become eligible for an additional bonus.
                </li>

                <li>
                  <strong>Continue for 15 days:</strong>{" "}
                  longer participation may qualify you for additional rewards.
                </li>

                <li>
                  <strong>Continue throughout the month:</strong>{" "}
                  additional bonuses may be available based on completed work and eligibility.
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
              Find Your Opportunity Here!
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold mt-2">
              Work From Home
            </h3>

            <p className="mt-3 text-white/80 max-w-3xl">
              Enjoy flexible work, manage your own schedule, and work online using your preferred device.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat number="183,2+" label="APPLICATIONS" />
              <Stat number="12,500+" label="TASKS ASSIGNED" />
              <Stat number="300+" label="OUR TEAM" />
              <Stat number="4.81" label="SATISFACTION" />
            </div>
          </div>
        </div>
      </section>

      <section id="req" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl font-bold mb-6">
            Requirements
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            <Req
              icon={<Smartphone className="w-5 h-5" />}
              text="Work conveniently using your smartphone"
            />

            <Req
              icon={<Monitor className="w-5 h-5" />}
              text="A smartphone and internet connection are required"
            />

            <Req
              icon={<IdCard className="w-5 h-5" />}
              text="Applicants aged 18 or above can apply"
            />

            <Req
              icon={<Users className="w-5 h-5" />}
              text="Open to all eligible applicants"
            />

            <Req
              icon={<Lightbulb className="w-5 h-5" />}
              text="Basic digital knowledge is an advantage"
            />

          </div>
        </div>
      </section>

      <section id="why" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "Trust & Security",
              desc: "A structured application and verification process.",
            },
            {
              icon: <Rocket className="w-5 h-5" />,
              title: "Start in 1–2 Days",
              desc: "Many applicants can begin within 1–2 days after completing the application process.",
            },
            {
              icon: <Star className="w-5 h-5" />,
              title: "Flexible Opportunities",
              desc: "Opportunities are matched according to suitability and availability.",
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
              Ready to Apply?
            </h3>

            <p className="mt-2 text-slate-300">
              Complete the application form and our recruitment team will contact you through Telegram.
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="#apply" className="btn-primary px-6">
              Apply Now
            </Link>

            <button className="btn-secondary px-6">
              Contact Support
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
              HirePro helps people discover flexible and remote work opportunities.
            </p>
          </div>

          <Column
            title="Company"
            items={["About Us", "Careers", "Blog"]}
          />

          <Column
            title="Support"
            items={["Help Center", "Safety", "Contact"]}
          />

          <Column
            title="Legal"
            items={["Terms", "Privacy", "Cookies"]}
          />

        </div>

        <div className="text-xs text-slate-400 text-center mt-6">
          © {new Date().getFullYear()} HirePro, Inc. All rights reserved.
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
      q: "Who can apply?",
      a: "Anyone aged 18 or above who has a smartphone and an internet connection can apply.",
    },
    {
      q: "Is this remote work?",
      a: "Yes. The work can be completed remotely from a suitable location with internet access.",
    },
    {
      q: "How can I apply?",
      a: "Complete and submit the application form. Our recruitment team will contact you through Telegram.",
    },
    {
      q: "How quickly can I start?",
      a: "Many applicants can begin within 1–2 days after completing the application process.",
    },
    {
      q: "How many hours do I need to work each day?",
      a: "It is usually around 1–3 hours per day for flexible tasks, depending on the available work.",
    },
  ];

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl font-bold mb-6 text-[var(--brand)]">
          Frequently Asked Questions
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
