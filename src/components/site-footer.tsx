import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import { InstagramIcon } from "@/components/icons/instagram-icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-linen-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <Image
            src="/images/logo/full-logo.png"
            alt="Textielbaas"
            width={3977}
            height={1988}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Bedrijfskleding en custom kleding met bedrukking of borduring.
            Persoonlijk advies, duidelijke offerte, zorgvuldige afwerking.
          </p>
          <a
            href="https://www.instagram.com/textielbaas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Textielbaas op Instagram"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-thread hover:text-thread"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        <div>
          <p className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Snel naar
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/85 transition-colors hover:text-thread"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/offerte"
                className="text-sm text-foreground/85 transition-colors hover:text-thread"
              >
                Offerte aanvragen
              </Link>
            </li>
            <li>
              <Link
                href="/over-ons"
                className="text-sm text-foreground/85 transition-colors hover:text-thread"
              >
                Over ons
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/85">
            <li>Lange Dresch 7, Akersloot</li>
            <li>
              <a href="mailto:textielbaas@gmail.com" className="transition-colors hover:text-thread">
                textielbaas@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+31686662826" className="transition-colors hover:text-thread">
                06-86662826
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TEXTIELBAAS. Alle rechten voorbehouden.</p>
          <p>Gevestigd in Akersloot — actief in heel Nederland.</p>
        </div>
      </div>
    </footer>
  );
}
