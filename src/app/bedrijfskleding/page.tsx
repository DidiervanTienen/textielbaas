import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StitchDivider } from "@/components/stitch-divider";
import { PlaceholderPhoto } from "@/components/placeholder-photo";

export const metadata: Metadata = {
  title: "Bedrijfskleding — TEXTIELBAAS",
  description:
    "Professionele bedrijfskleding en teamwear, bedrukt of geborduurd met jouw logo.",
};

const CASES = [
  {
    title: "Personeel & horeca",
    body: "Poloshirts, werkjassen en schorten met borstlogo — herkenbaar en representatief voor je zaak.",
  },
  {
    title: "Teams & sportverenigingen",
    body: "Trainingspakken en teamshirts met naam, rugnummer en clublogo, in de kleuren van je vereniging.",
  },
  {
    title: "Zorg & dienstverlening",
    body: "Comfortabele, wasbestendige kleding met duidelijke bedrukking voor herkenbaarheid op locatie.",
  },
];

export default function BedrijfskledingPage() {
  return (
    <>
      <PageHero
        eyebrow="Bedrijfskleding"
        title="Kleding die jouw bedrijf representeert."
        intro="Van poloshirt tot werkjas: wij zetten jouw logo strak en duurzaam op professionele bedrijfskleding, afgestemd op je team en budget."
      />

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <PlaceholderPhoto
            label="Bedrijfskleding — sfeerfoto"
            hint="Aanbevolen: brede foto van personeel of team in bedrijfskleding"
            aspect="aspect-[21/9]"
          />
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <StitchDivider />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {CASES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-linen-deep">
                <PlaceholderPhoto label={item.title} className="rounded-none border-x-0 border-t-0" />
                <div className="p-7">
                  <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-linen-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Bedrijfskleding op maat voor jouw team
            </h2>
            <p className="mx-auto mt-4 max-w-md text-foreground/70">
              Stuur je logo en aantallen door, dan stellen wij een duidelijke offerte
              op — inclusief materiaal- en technieksadvies.
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
