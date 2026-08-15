import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StitchDivider } from "@/components/stitch-divider";
import { OfferteForm } from "@/components/offerte-form";

export const metadata: Metadata = {
  title: "Offerte aanvragen — TEXTIELBAAS",
  description: "Vraag een vrijblijvende offerte aan voor bedrijfskleding of custom kleding.",
};

export default function OffertePage() {
  return (
    <>
      <PageHero
        eyebrow="Offerte aanvragen"
        title="Vertel ons over je project."
        intro="Vul het formulier in — we nemen binnen korte tijd contact met je op met een vrijblijvende offerte op maat."
      />

      <div className="mx-auto max-w-6xl px-6">
        <StitchDivider />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <OfferteForm />
        </Reveal>
      </section>
    </>
  );
}
