"use client";

import { useState } from "react";

const FABRIC_COLORS = [
  { name: "wit", label: "Wit", value: "#f5f4f0" },
  { name: "ivoor", label: "Ivoor", value: "#f0e9d8" },
  { name: "ecru", label: "Ecru", value: "#e8ddc4" },
  { name: "zand", label: "Zand", value: "#d9c7a3" },
  { name: "beige", label: "Beige", value: "#c8b28e" },
  { name: "taupe", label: "Taupe", value: "#a8927c" },
  { name: "kiezel", label: "Kiezel", value: "#9c9284" },
  { name: "grijs", label: "Grijs", value: "#8b8b87" },
  { name: "zilvergrijs", label: "Zilvergrijs", value: "#b5b0a6" },
  { name: "antraciet", label: "Antraciet", value: "#3f3d3a" },
  { name: "zwart", label: "Zwart", value: "#171512" },
  { name: "indigo", label: "Indigo", value: "#29304a" },
  { name: "marineblauw", label: "Marineblauw", value: "#1c2740" },
  { name: "middernachtblauw", label: "Middernachtblauw", value: "#141b30" },
  { name: "kobaltblauw", label: "Kobaltblauw", value: "#2a4a9e" },
  { name: "staalblauw", label: "Staalblauw", value: "#4d6a75" },
  { name: "denim", label: "Denim", value: "#4a6a8a" },
  { name: "hemelsblauw", label: "Hemelsblauw", value: "#6fa8d6" },
  { name: "petrol", label: "Petrol", value: "#1f5c58" },
  { name: "turquoise", label: "Turquoise", value: "#2f8f8a" },
  { name: "mos", label: "Mos", value: "#556b45" },
  { name: "bosgroen", label: "Bosgroen", value: "#25422b" },
  { name: "olijf", label: "Olijf", value: "#6b6b3a" },
  { name: "legergroen", label: "Legergroen", value: "#5c5f3f" },
  { name: "salie", label: "Salie", value: "#8a9a7e" },
  { name: "mint", label: "Mint", value: "#a7cdb8" },
  { name: "smaragd", label: "Smaragd", value: "#1f7a52" },
  { name: "limoen", label: "Limoen", value: "#9db83a" },
  { name: "bordeaux", label: "Bordeaux", value: "#5c1f2e" },
  { name: "kersenrood", label: "Kersenrood", value: "#a3222f" },
  { name: "rood", label: "Rood", value: "#c1272d" },
  { name: "roest", label: "Roest", value: "#a8532f" },
  { name: "terracotta", label: "Terracotta", value: "#b5654a" },
  { name: "koraal", label: "Koraal", value: "#e07a5f" },
  { name: "fuchsia", label: "Fuchsia", value: "#c23b7a" },
  { name: "roze", label: "Roze", value: "#e8a1b8" },
  { name: "oudroze", label: "Oudroze", value: "#c99b9c" },
  { name: "oker", label: "Oker", value: "#b98a2e" },
  { name: "mosterd", label: "Mosterd", value: "#c9992e" },
  { name: "amber", label: "Amber", value: "#d9922f" },
  { name: "zonnegeel", label: "Zonnegeel", value: "#e8bd3a" },
  { name: "perzik", label: "Perzik", value: "#eec19a" },
  { name: "oranje", label: "Oranje", value: "#d9611f" },
  { name: "aubergine", label: "Aubergine", value: "#432038" },
  { name: "paars", label: "Paars", value: "#5e3a7e" },
  { name: "lila", label: "Lila", value: "#9c86b4" },
  { name: "lavendel", label: "Lavendel", value: "#b7abd4" },
  { name: "pruim", label: "Pruim", value: "#6b3a52" },
  { name: "chocoladebruin", label: "Chocoladebruin", value: "#3f2a1f" },
  { name: "kastanje", label: "Kastanje", value: "#6b3a2a" },
  { name: "cognac", label: "Cognac", value: "#8a4e2a" },
  { name: "camel", label: "Camel", value: "#b98a5a" },
  { name: "zandbruin", label: "Zandbruin", value: "#a4784f" },
  { name: "klei", label: "Klei", value: "#914f42" },
  { name: "goud", label: "Goud", value: "#c9a24a" },
] as const;

export function FabricSwatches({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<(typeof FABRIC_COLORS)[number]["name"]>("indigo");

  function pick(color: (typeof FABRIC_COLORS)[number]) {
    setActive(color.name);
    document.documentElement.style.setProperty("--thread-accent", color.value);
  }

  const activeColor = FABRIC_COLORS.find((color) => color.name === active);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          Kies je stofkleur
        </span>
        {activeColor && (
          <span className="font-mono-label text-[11px] uppercase tracking-[0.1em] text-thread">
            {activeColor.label}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {FABRIC_COLORS.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => pick(color)}
            aria-label={`Stofkleur ${color.label}`}
            aria-pressed={active === color.name}
            className="group relative h-7 w-7 shrink-0 cursor-pointer rounded-full transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
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
    </div>
  );
}
