import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StitchDivider } from "@/components/stitch-divider";

export const metadata: Metadata = {
  title: "Werkwijze — TEXTIELBAAS",
  description: "Van eerste idee tot afgewerkt kledingstuk, in vijf overzichtelijke stappen.",
};

const STEPS = [
  {
    number: "01",
    title: "Idee of logo delen",
    body: "Stuur je logo, ontwerp of inspiratie via de offerte-pagina, mail of telefoon.",
  },
  {
    number: "02",
    title: "Advies & offerte",
    body: "Wij adviseren over kledingstuk, techniek en stofkleuren en sturen een duidelijke offerte op maat.",
  },
  {
    number: "03",
    title: "Akkoord & proefdruk",
    body: "Na akkoord maken we waar nodig een digitale proef, zodat je precies weet hoe het eindresultaat wordt.",
  },
  {
    number: "04",
    title: "Bedrukken of borduren",
    body: "In ons atelier in Akersloot wordt elk stuk zorgvuldig bedrukt of geborduurd.",
  },
  {
    number: "05",
    title: "Levering",
    body: "Binnen ± 2–3 weken ontvang je je kleding, klaar voor gebruik.",
  },
];

export default function WerkwijzePage() {
  return (
    <>
      <PageHero
        eyebrow="Werkwijze"
        title="Van idee tot afgewerkt kledingstuk."
        intro="Geen standaard webshop, maar persoonlijk contact in elke stap: zo weet je altijd waar je aan toe bent."
      />

      <div className="mx-auto max-w-6xl px-6">
        <StitchDivider />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <ol className="space-y-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <li className="flex gap-6">
                <span className="font-mono-label text-sm text-thread">{step.number}</span>
                <div>
                  <h3 className="font-display text-xl text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{step.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-border bg-linen-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Klaar om te beginnen?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-foreground/70">
              Vraag vrijblijvend een offerte aan, dan nemen wij binnen korte tijd
              contact met je op.
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
