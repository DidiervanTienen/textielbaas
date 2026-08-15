"use client";

import { useState } from "react";

const THREADS = [
  { name: "indigo", label: "Indigo", value: "var(--thread-indigo)" },
  { name: "rust", label: "Roest", value: "var(--thread-rust)" },
  { name: "moss", label: "Mos", value: "var(--thread-moss)" },
  { name: "mustard", label: "Oker", value: "var(--thread-mustard)" },
  { name: "clay", label: "Terracotta", value: "var(--thread-clay)" },
  { name: "teal", label: "Petrol", value: "var(--thread-teal)" },
] as const;

export function ThreadSwatches({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<(typeof THREADS)[number]["name"]>("indigo");

  function pick(thread: (typeof THREADS)[number]) {
    setActive(thread.name);
    document.documentElement.style.setProperty("--thread-accent", thread.value);
  }

  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <span className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        Kies je garenkleur
      </span>
      <div className="flex items-center gap-2.5">
        {THREADS.map((thread) => (
          <button
            key={thread.name}
            type="button"
            onClick={() => pick(thread)}
            aria-label={`Garenkleur ${thread.label}`}
            aria-pressed={active === thread.name}
            className="group relative h-8 w-8 shrink-0 cursor-pointer rounded-full transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          >
            <span
              className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
              style={{ backgroundColor: thread.value }}
            />
            <span
              className="absolute -inset-1 rounded-full border transition-opacity duration-200"
              style={{
                borderColor: thread.value,
                opacity: active === thread.name ? 1 : 0,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
