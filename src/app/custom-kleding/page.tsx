import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StitchDivider } from "@/components/stitch-divider";

export const metadata: Metadata = {
  title: "Custom kleding — TEXTIELBAAS",
  description:
    "Unieke, custom kleding voor events, vriendengroepen en sportteams — bedrukt of geborduurd.",
};

const CASES = [
  {
    title: "Events & feesten",
    body: "Vrijgezellenfeesten, festivals of familiedagen — kleding met een ontwerp dat het moment vastlegt.",
    image: "/images/custom-kleding/events.png",
  },
  {
    title: "Vriendengroepen",
    body: "Matching hoodies of shirts met een eigen ontwerp, al vanaf één stuk mogelijk.",
    image: "/images/custom-kleding/vriendengroepen.png",
  },
  {
    title: "Sportteams",
    body: "Teamshirts met naam en nummer, in de kleuren en stijl die bij je team passen.",
    image: "/images/custom-kleding/sportteams.png",
  },
];

export default function CustomKledingPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom kleding"
        title="Jouw idee, vertaald naar kleding."
        intro="Voor events, vriendengroepen, sportteams en eigen ontwerpen — wij denken mee van eerste schets tot afgewerkt kledingstuk. Al vanaf één stuk."
      />

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/custom-kleding/sfeerfoto.png"
              alt="Custom kleding met eigen ontwerp voor teams en groepen"
              fill
              className="object-cover"
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
            />
          </div>
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
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
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
              Heb je een idee voor custom kleding?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-foreground/70">
              Stuur je ontwerp, logo of inspiratie mee en ontvang een offerte op maat.
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
