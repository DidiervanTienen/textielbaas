"use client";

import { useState, type FormEvent } from "react";

const KLEDING_TYPES = [
  "Bedrijfskleding",
  "Custom kleding",
  "Teamwear / sportkleding",
  "Anders",
];

export function OfferteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const naam = data.get("naam");
    const email = data.get("email");
    const telefoon = data.get("telefoon");
    const type = data.get("type");
    const aantal = data.get("aantal");
    const bericht = data.get("bericht");

    const body = [
      `Naam: ${naam}`,
      `E-mail: ${email}`,
      telefoon ? `Telefoon: ${telefoon}` : null,
      `Type kleding: ${type}`,
      aantal ? `Aantal: ${aantal}` : null,
      "",
      `Omschrijving:\n${bericht}`,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:textielbaas@gmail.com?subject=${encodeURIComponent(
      `Offerteaanvraag: ${type}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Naam
        </span>
        <input
          required
          name="naam"
          type="text"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-thread"
        />
      </label>

      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          E-mail
        </span>
        <input
          required
          name="email"
          type="email"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-thread"
        />
      </label>

      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Telefoon (optioneel)
        </span>
        <input
          name="telefoon"
          type="tel"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-thread"
        />
      </label>

      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Type kleding
        </span>
        <select
          required
          name="type"
          defaultValue=""
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-thread"
        >
          <option value="" disabled>
            Kies een type
          </option>
          {KLEDING_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Aantal (optioneel)
        </span>
        <input
          name="aantal"
          type="text"
          placeholder="bv. 15 stuks"
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-thread"
        />
      </label>

      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Omschrijving van je project
        </span>
        <textarea
          required
          name="bericht"
          rows={5}
          placeholder="Vertel over je logo, kledingstuk, kleuren en gewenste levertijd..."
          className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-thread"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-thread px-7 py-3.5 font-mono-label text-[13px] uppercase tracking-[0.06em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
        >
          Verstuur aanvraag
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          {status === "sent"
            ? "Je e-mailprogramma is geopend met je aanvraag klaar om te versturen."
            : "We openen je e-mailprogramma zodat je de aanvraag rechtstreeks naar ons kunt versturen."}
        </p>
      </div>
    </form>
  );
}
