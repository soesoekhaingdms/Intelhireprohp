'use client';

import React, { useMemo, useState } from 'react';
import { fbqTrack } from '@/lib/pixel';

const BOT_USERNAME = process.env.NEXT_PUBLIC_BOT_USERNAME || 'applyyourjobhere_bot';

const COUNTRIES = [
  { iso: 'pl', name: 'Polska', dial: '+48' },
  { iso: 'tr', name: 'Turcja', dial: '+90' },
  { iso: 'sy', name: 'Syria', dial: '+963' },
  { iso: 'in', name: 'Indie', dial: '+91' },
  { iso: 'us', name: 'USA/Kanada', dial: '+1' },
  { iso: 'my', name: 'Malezja', dial: '+60' },
  { iso: 'id', name: 'Indonezja', dial: '+62' },
  { iso: 'ph', name: 'Filipiny', dial: '+63' },
  { iso: 'vn', name: 'Wietnam', dial: '+84' },
  { iso: 'th', name: 'Tajlandia', dial: '+66' },
  { iso: 'mm', name: 'Myanmar', dial: '+95' },
  { iso: 'bd', name: 'Bangladesz', dial: '+880' },
  { iso: 'pk', name: 'Pakistan', dial: '+92' },
  { iso: 'np', name: 'Nepal', dial: '+977' },
  { iso: 'lk', name: 'Sri Lanka', dial: '+94' },
  { iso: 'au', name: 'Australia', dial: '+61' },
  { iso: 'za', name: 'Republika Południowej Afryki', dial: '+27' },
  { iso: 'de', name: 'Niemcy', dial: '+49' },
  { iso: 'fr', name: 'Francja', dial: '+33' },
  { iso: 'gb', name: 'Wielka Brytania', dial: '+44' },
  { iso: 'ae', name: 'Zjednoczone Emiraty Arabskie', dial: '+971' },
  { iso: 'sg', name: 'Singapur', dial: '+65' },
];

const isMobile = () =>
  /iPhone|iPad|iPod|Android/i.test(
    typeof navigator === 'undefined' ? '' : navigator.userAgent
  );

const onlyDigits = (value: string) => value.replace(/\D+/g, '');

const normalizeLocalPhone = (dial: string, value: string) => {
  const countryCode = onlyDigits(dial);
  let localNumber = onlyDigits(value);

  while (localNumber.startsWith('00')) {
    localNumber = localNumber.slice(2);
  }

  if (
    countryCode &&
    localNumber.startsWith(countryCode) &&
    localNumber.length > countryCode.length
  ) {
    localNumber = localNumber.slice(countryCode.length);
  }

  localNumber = localNumber.replace(/^0+/, '');

  return localNumber;
};

type LeadApiResponse = {
  ok?: boolean;
  workCode?: string;
  isNew?: boolean;
  error?: string;
};

export default function ApplicationForm() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('');

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [okMsg, setOkMsg] = useState<string | null>(null);

  const phoneLocalNumber = useMemo(
    () => normalizeLocalPhone(selectedCountry.dial, phone),
    [selectedCountry, phone]
  );

  const phoneE164 = useMemo(() => {
    const countryCode = onlyDigits(selectedCountry.dial);
    return countryCode && phoneLocalNumber ? `+${countryCode}${phoneLocalNumber}` : '';
  }, [selectedCountry, phoneLocalNumber]);

  const openTelegram = () => {
    const tgWeb = `https://t.me/${BOT_USERNAME}`;
    const tgApp = `tg://resolve?domain=${BOT_USERNAME}`;
    const tgIntent = `intent://resolve?domain=${BOT_USERNAME}#Intent;scheme=tg;package=org.telegram.messenger;end`;

    setTimeout(() => {
      if (isMobile()) {
        location.href = tgApp;

        setTimeout(() => {
          if (document.visibilityState === 'hidden') return;

          const onAndroid = /Android/i.test(navigator.userAgent);

          if (onAndroid) {
            location.href = tgIntent;

            setTimeout(() => {
              if (document.visibilityState === 'hidden') return;
              location.href = tgWeb;
            }, 400);
          } else {
            location.href = tgWeb;
          }
        }, 600);
      } else {
        window.open(tgWeb, '_blank', 'noopener,noreferrer');
      }
    }, 120);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (saving) return;

    setError(null);
    setOkMsg(null);

    const ageNum = Number(age || '0');

    if (!name.trim()) {
      return setError('Wpisz swoje imię.');
    }

    if (!phoneE164) {
      return setError('Wpisz numer telefonu używany w Telegramie.');
    }

    if (!ageNum || ageNum < 23 || ageNum > 99) {
      return setError('Wpisz prawidłowy wiek. Zakres wieku: 23–99.');
    }

    const payload = {
      name: name.trim(),
      email: '',
      countryIso: selectedCountry.iso,
      dial: selectedCountry.dial,
      phone: phoneLocalNumber,
      phoneE164,
      gender,
      age: ageNum,
      note: null as string | null,
    };

    setSaving(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as LeadApiResponse | null;

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || 'Nie udało się zapisać zgłoszenia.');
      }

      if (data.isNew === true) {
        try {
          fbqTrack('CompleteRegistration', { action: 'unique_phone_submit' });
        } catch {
          // Jeśli zgłoszenie zostało zapisane, użytkownik może kontynuować nawet wtedy, gdy piksel nie zostanie wysłany.
        }
      }

      setOkMsg('Zapisano! Otwieranie Telegrama…');
      setSaving(false);
      openTelegram();
    } catch {
      setSaving(false);
      setError('Nie udało się zapisać zgłoszenia. Spróbuj ponownie.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          Nasz zespół rekrutacyjny skontaktuje się z kandydatami przez Telegram.
          Wpisz numer telefonu, którego używasz w Telegramie.
        </p>

        <label className="block text-sm font-medium text-slate-700 mt-2">* Imię</label>
        <input
          type="text"
          placeholder="Wpisz swoje imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full h-12 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-100"
        />

        <label className="block text-sm font-medium text-slate-700 mt-6">
          * Numer telefonu Telegram
        </label>

        <div className="mt-2 grid grid-cols-10 gap-3">
          <select
            value={selectedCountry.iso}
            onChange={(e) =>
              setSelectedCountry(
                COUNTRIES.find((country) => country.iso === e.target.value) || COUNTRIES[0]
              )
            }
            className="col-span-3 h-12 rounded-xl border border-slate-300 px-3 bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            {COUNTRIES.map((country) => (
              <option key={country.iso} value={country.iso}>
                {country.dial} — {country.name}
              </option>
            ))}
          </select>

          <input
            type="tel"
            inputMode="numeric"
            placeholder="Wpisz tylko cyfry"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="col-span-7 h-12 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <p className="mt-1 text-xs text-slate-500">
          Ten numer zostanie sprawdzony w Telegramie:&nbsp;
          <strong>{phoneE164 || '—'}</strong>
        </p>

        <label className="block text-sm font-medium text-slate-700 mt-6">* Płeć</label>
        <div className="mt-2 flex items-center gap-6">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            <span>Mężczyzna</span>
          </label>

          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            <span>Kobieta</span>
          </label>
        </div>

        <label className="block text-sm font-medium text-slate-700 mt-6">* Wiek</label>
        <input
          type="number"
          min={23}
          max={99}
          placeholder="Wpisz swój wiek"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-2 w-full h-12 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="submit"
          disabled={saving}
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-6 h-12 hover:bg-blue-700 disabled:opacity-60"
        >
          {saving ? 'Zapisywanie…' : 'Zapisz'}
        </button>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        {okMsg && (
          <p id="apply-status" className="mt-4 text-sm text-green-600">
            {okMsg}
          </p>
        )}
      </div>
    </form>
  );
}
