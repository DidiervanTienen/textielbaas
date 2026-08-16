"use client";

import { useState } from "react";

const FABRIC_COLORS = [
  { name: "zwart", label: "Zwart", value: "#171512" },
  { name: "marineblauw", label: "Marineblauw", value: "#1c2740" },
  { name: "mos", label: "Mos", value: "#556b45" },
  { name: "terracotta", label: "Terracotta", value: "#b5654a" },
  { name: "zand", label: "Zand", value: "#d9c7a3" },
] as const;

export function FabricSwatches({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<(typeof FABRIC_COLORS)[number]["name"]>("marineblauw");

  function pick(color: (typeof FABRIC_COLORS)[number]) {
    setActive(color.name);
    document.documentElement.style.setProperty("--thread-accent", color.value);
  }

  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {FABRIC_COLORS.map((color) => (
        <button
          key={color.name}
          type="button"
          onClick={() => pick(color)}
          aria-label={`Stofkleur ${color.label}`}
          aria-pressed={active === color.name}
          className="group relative h-8 w-8 shrink-0 cursor-pointer rounded-full transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        >
          <span
            className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
            style={{ backgroundColor: color.value }}
          />
          <span
            className="absolute -inset-1 rounded-full border transition-opacity duration-200"
            style={{
              borderColor: color.value,
              opacity: active === color.name ? 1 : 0,
            }}
          />
        </button>
      ))}
    </div>
  );
}
