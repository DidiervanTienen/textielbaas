import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StitchDivider } from "@/components/stitch-divider";
import { FabricSwatches } from "@/components/fabric-swatches";
import { PlaceholderPhoto } from "@/components/placeholder-photo";

export const metadata: Metadata = {
  title: "Bedrukken & borduren — TEXTIELBAAS",
  description:
    "DTF-print en borduren — wij adviseren de beste afwerking en stofkleur voor jouw ontwerp.",
};

const TECHNIQUES = [
  {
    title: "DTF-print",
    body: "Full colour, fijne details en foto-realistische ontwerpen. Geschikt voor kleine en grote oplages.",
    image: "/images/bedrukken-borduren/dtf.png",
  },
  {
    title: "Borduren",
    body: "Een klassieke, premium afwerking in elke stofkleur. Ideaal voor borstlogo's op poloshirts en jassen.",
    image: "/images/bedrukken-borduren/borduren.png",
  },
];

export default function BedrukkenBordurenPage() {
  return (
    <>
      <PageHero
        eyebrow="Bedrukken & borduren"
        title="Van borstlogo tot rugprint."
        intro="Elke techniek heeft zijn eigen kracht. Wij adviseren welke afwerking het beste bij jouw ontwerp, stof en budget past."
      />

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <PlaceholderPhoto
            label="Bedrukken & borduren — sfeerfoto"
            hint="Aanbevolen: close-up van een bedrukt of geborduurd logo"
            aspect="aspect-[21/9]"
          />
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <StitchDivider />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {TECHNIQUES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full items-center gap-5 overflow-hidden rounded-2xl border border-border bg-linen-deep p-5">
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <StitchDivider />
      </div>

      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <Reveal>
          <p className="font-mono-label text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Stofkleuren
          </p>
          <h2 className="mt-5 font-display text-2xl text-foreground sm:text-3xl">
            Stof in de kleur die bij jouw merk past.
          </h2>
          <div className="mt-8 inline-flex flex-col items-center rounded-2xl border border-border bg-linen-deep px-8 py-7">
            <FabricSwatches />
          </div>
          <p className="mx-auto mt-6 max-w-sm text-sm text-foreground/60">
            Neem contact met ons op voor het volledige overzicht van kleuren,
            stoffen en producten.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block font-mono-label text-[12px] uppercase tracking-[0.08em] text-thread transition-colors hover:text-foreground"
          >
            Neem contact op →
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-border bg-linen-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Twijfel je over de beste techniek?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-foreground/70">
              Stuur je logo mee, dan adviseren we welke afwerking het beste resultaat
              geeft.
            </p>
            <Link
              href="/offerte"
              className="mt-8 inline-flex rounded-full bg-thread px-7 py-3.5 font-mono-label text-[13px] uppercase tracking-[0.06em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Vraag offerte aan
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
