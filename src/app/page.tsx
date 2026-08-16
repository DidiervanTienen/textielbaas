import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { StitchDivider } from "@/components/stitch-divider";
import { StitchedUnderline } from "@/components/stitched-underline";
import { FabricSwatches } from "@/components/fabric-swatches";

const FACTS = [
  { label: "Technieken", value: "DTF-print · Borduren" },
  { label: "Stofkleuren", value: "Ruime keuze" },
  { label: "Oplage", value: "Vanaf 1 stuk" },
  { label: "Levertijd", value: "± 2–3 weken" },
];

const SERVICES = [
  {
    href: "/bedrijfskleding",
    title: "Bedrijfskleding",
    body: "Professionele kleding voor personeel, teams en organisaties.",
    image: "/images/bedrijfskleding/sfeerfoto.png",
  },
  {
    href: "/custom-kleding",
    title: "Custom kleding",
    body: "Unieke kleding voor events, vriendengroepen, sportteams en eigen ideeën.",
    image: "/images/custom-kleding/sfeerfoto.png",
  },
  {
    href: "/bedrukken-borduren",
    title: "Bedrukken & borduren",
    body: "Van borstlogo tot rugprint: wij denken mee over de beste afwerking.",
    image: "/images/bedrukken-borduren/borduren.png",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
          <div>
            <p className="animate-rise font-mono-label text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Atelier · Akersloot
            </p>
            <h1
              className="animate-rise mt-5 font-display text-5xl leading-[1.05] font-normal tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.08s" }}
            >
              Kleding met <StitchedUnderline delay={0.9}>karakter</StitchedUnderline>,
              <br />
              kleding met <StitchedUnderline delay={1.15}>logo</StitchedUnderline>.
            </h1>
            <p
              className="animate-rise mt-7 max-w-md text-lg leading-relaxed text-foreground/75"
              style={{ animationDelay: "0.16s" }}
            >
              Bedrijfskleding, teamwear en custom kleding — bedrukt of geborduurd.
              Persoonlijk afgestemd, zorgvuldig afgewerkt.
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.24s" }}
            >
              <Link
                href="/offerte"
                className="rounded-full bg-thread px-6 py-3.5 font-mono-label text-[13px] uppercase tracking-[0.06em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Vraag offerte aan
              </Link>
              <Link
                href="/werkwijze"
                className="font-mono-label text-[13px] uppercase tracking-[0.06em] text-foreground/80 transition-colors hover:text-thread"
              >
                Bekijk onze werkwijze →
              </Link>
            </div>
          </div>

          <Reveal delay={0.3} className="rounded-2xl border border-border bg-linen-deep p-7">
            <p className="text-sm leading-relaxed text-foreground/75">
              Elk stuk wordt met zorg bedrukt of geborduurd, in de stofkleur die
              bij jouw merk past.
            </p>
            <FabricSwatches className="mt-6" />
            <p className="mt-6 text-sm text-foreground/60">
              Neem contact met ons op voor het volledige overzicht van kleuren,
              stoffen en producten.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <StitchDivider />
      </div>

      {/* Facts strip */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-xl text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <p className="mt-10 font-display text-lg text-foreground/70 italic">
          Persoonlijk advies, altijd.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <StitchDivider />
      </div>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.href} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-linen-deep transition-colors duration-300 hover:border-thread"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{service.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono-label text-[12px] uppercase tracking-[0.08em] text-thread opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lees meer →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <StitchDivider />
      </div>

      {/* About */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <p className="font-mono-label text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Over Textielbaas
          </p>
          <p className="mt-6 font-display text-2xl leading-snug text-foreground sm:text-3xl">
            Bij TEXTIELBAAS draait het om kleding die past bij jouw bedrijf, team of
            idee. Wij helpen je van ontwerp tot eindproduct en zorgen voor een
            duidelijke offerte op maat. Geen standaard webshop, maar persoonlijk
            contact en advies.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-linen-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Klaar voor jouw kledingproject?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-foreground/70">
              Stuur je idee of logo en ontvang binnen korte tijd een vrijblijvende
              offerte op maat.
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
