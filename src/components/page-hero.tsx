import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-16">
      <Reveal>
        <p className="font-mono-label text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] font-normal tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">{intro}</p>
      </Reveal>
    </section>
  );
}
