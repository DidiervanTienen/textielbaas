"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo/mark.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="font-display text-xl tracking-tight text-foreground">
            textielbaas
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={pathname === link.href}
              className="nav-link font-mono-label text-[13px] uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/offerte"
            className="hidden rounded-full bg-thread px-5 py-2.5 font-mono-label text-[13px] uppercase tracking-[0.06em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Vraag offerte aan
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className="h-px w-5 bg-foreground transition-transform duration-300"
              style={open ? { transform: "translateY(3.5px) rotate(45deg)" } : undefined}
            />
            <span
              className="h-px w-5 bg-foreground transition-opacity duration-300"
              style={open ? { opacity: 0 } : undefined}
            />
            <span
              className="h-px w-5 bg-foreground transition-transform duration-300"
              style={open ? { transform: "translateY(-3.5px) rotate(-45deg)" } : undefined}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/70 bg-background px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-mono-label text-sm uppercase tracking-[0.06em] text-foreground/85"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/offerte"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-thread px-5 py-2.5 text-center font-mono-label text-[13px] uppercase tracking-[0.06em] text-primary-foreground"
          >
            Vraag offerte aan
          </Link>
        </nav>
      )}
    </header>
  );
}
