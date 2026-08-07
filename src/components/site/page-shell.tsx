import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Eyebrow, Reveal } from "./primitives";
import { DISCLAIMER_TEXT } from "./footer";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-ivory">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--charcoal)_20%,color-mix(in_oklab,var(--emerald-deep)_78%,transparent)_65%,transparent)]" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-25" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-x border-ivory/12 py-16 lg:py-24 lg:px-10">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-extrabold uppercase sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl border-l-2 border-ivory/20 pl-5 leading-relaxed text-ivory/70">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="space-y-6 border border-border bg-card p-7 text-sm leading-relaxed text-foreground/80 sm:p-10 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-foreground [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function DisclaimerBlock() {
  return (
    <div className="border-l-2 border-primary bg-primary/6 p-5 text-xs leading-relaxed text-foreground/70">
      <strong className="block text-foreground">Independent service disclaimer</strong>
      <span className="mt-2 block">{DISCLAIMER_TEXT}</span>
    </div>
  );
}

export function CtaStrip() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-5 border-2 border-ink border border-border bg-card p-8 text-center sm:p-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            See what's serviceable at your address
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/internet"
              className="bg-ink px-8 py-4 text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary-foreground"
            >
              View plans
            </Link>
            <Link
              to="/contact"
              className="border border-ink px-8 py-4 text-[11px] font-extrabold tracking-[0.2em] uppercase"
            >
              Talk to an Expert
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { icon: React.ComponentType<{ className?: string }>; title: string; copy: string }[];
}) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 70}
              className="edge-hover border border-border bg-card p-7"
            >
              <span className="grid size-12 place-items-center border border-ink text-ink">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}