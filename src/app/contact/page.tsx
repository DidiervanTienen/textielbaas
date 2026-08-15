import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StitchDivider } from "@/components/stitch-divider";

export const metadata: Metadata = {
  title: "Contact — TEXTIELBAAS",
  description: "Neem contact op met TEXTIELBAAS in Akersloot.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Persoonlijk contact, geen callcenter."
        intro="Heb je een vraag over bedrijfskleding, custom kleding of bedrukken en borduren? Neem gerust contact op."
      />

      <div className="mx-auto max-w-6xl px-6">
        <StitchDivider />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <Reveal>
            <p className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Atelier
            </p>
            <p className="mt-3 text-foreground/85">Lange Dresch 7<br />Akersloot</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              E-mail
            </p>
            <a
              href="mailto:djvt.10@gmail.com"
              className="mt-3 block text-foreground/85 transition-colors hover:text-thread"
            >
              djvt.10@gmail.com
            </a>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Telefoon
            </p>
            <a
              href="tel:+31686662826"
              className="mt-3 block text-foreground/85 transition-colors hover:text-thread"
            >
              06-86662826
            </a>
          </Reveal>
        </div>

        <p className="mt-14 max-w-lg text-foreground/70">
          Liever direct een offerte aanvragen met details over je project?{" "}
          <a href="/offerte" className="text-thread underline underline-offset-4">
            Ga naar de offertepagina
          </a>
          .
        </p>
      </section>
    </>
  );
}
