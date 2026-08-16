import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StitchDivider } from "@/components/stitch-divider";

export const metadata: Metadata = {
  title: "Over ons — TEXTIELBAAS",
  description: "Het atelier achter TEXTIELBAAS, gevestigd in Akersloot.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title="Een atelier, geen webshop."
        intro="TEXTIELBAAS is opgericht vanuit de overtuiging dat kleding met een logo persoonlijk aandacht verdient, geen anoniem bestelformulier, maar echt contact."
      />

      <div className="mx-auto max-w-6xl px-6">
        <StitchDivider />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/80">
            Bij TEXTIELBAAS draait het om kleding die past bij jouw bedrijf, team of
            idee. Wij helpen je van ontwerp tot eindproduct en zorgen voor een
            duidelijke offerte op maat.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Vanuit ons atelier in Akersloot bedrukken en borduren we met zorg, voor
            bedrijven, teams en particulieren door heel Nederland. Elk project krijgt
            persoonlijk advies over de beste techniek, het juiste kledingstuk en de
            stofkleur die precies klopt.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border bg-linen-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Laten we kennismaken
            </h2>
            <p className="mx-auto mt-4 max-w-md text-foreground/70">
              Neem contact op of vraag direct een offerte aan voor jouw
              kledingproject.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/offerte"
                className="rounded-full bg-thread px-7 py-3.5 font-mono-label text-[13px] uppercase tracking-[0.06em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Vraag offerte aan
              </Link>
              <Link
                href="/contact"
                className="font-mono-label text-[13px] uppercase tracking-[0.06em] text-foreground/80 transition-colors hover:text-thread"
              >
                Contactgegevens →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
