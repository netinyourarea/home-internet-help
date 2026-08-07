import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Cable,
  CheckCircle2,
  Clapperboard,
  Gauge,
  Headset,
  MapPin,
  MonitorPlay,
  Quote,
  Radio,
  Router,
  ShieldCheck,
  Signal,
  Sparkles,
  Tv,
  Users,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { Counter, Eyebrow, Reveal } from "./primitives";
import { CoverageFinder } from "./coverage-finder";
import { IMG } from "@/lib/images";

/* ------------------------------- HERO ------------------------------- */

const HERO_STATS = [
  { v: "2 Gbps", l: "Top fiber tier" },
  { v: "260+", l: "TV channels" },
  { v: "48 hrs", l: "Typical install" },
  { v: "24k+", l: "Homes connected" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <div className="grid-lines absolute inset-0 -z-10 opacity-25" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,color-mix(in_oklab,var(--charcoal)_98%,transparent)_0%,color-mix(in_oklab,var(--emerald-deep)_42%,transparent)_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid border-x border-cream/10 lg:grid-cols-[1.05fr_0.95fr]">

          {/* copy block */}
          <div className="border-b border-cream/10 px-0 py-10 sm:py-14 lg:border-r lg:border-b-0 lg:py-20 lg:pr-12">
            <div className="flex items-center gap-4 text-[11px] font-extrabold tracking-[0.28em] text-cyan uppercase">
              <span className="h-px w-10 bg-cyan" />
              Internet + Cable TV
            </div>

            <h1 className="mt-6 font-display text-[2.1rem] leading-[1.0] font-extrabold uppercase sm:text-5xl lg:text-[4rem]">
              Hard-wired
              <span className="mt-1 block text-cyan">signal for</span>
              <span className="mt-1 block border-b-4 border-amber pb-2">your street</span>
            </h1>

            <p className="mt-6 border-l-2 border-cream/20 pl-5 text-sm leading-relaxed text-cream/70 sm:text-base">
              Fiber, cable and fixed wireless matched to your exact address — one specialist handles
              the order, the install date and every box in the house.
            </p>

            <div className="mt-8 flex flex-wrap gap-y-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-cyan px-6 py-3.5 text-xs font-extrabold tracking-[0.18em] text-ink uppercase transition-colors hover:bg-amber sm:px-8 sm:py-4"
              >
                Check my address
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/cable-tv"
                className="inline-flex items-center gap-2 border border-cream/25 px-6 py-3.5 text-xs font-extrabold tracking-[0.18em] text-cream uppercase transition-colors hover:bg-cream/10 sm:px-8 sm:py-4"
              >
                <Tv className="size-4" /> TV packs
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 border-t border-cream/10 sm:grid-cols-4">
              {HERO_STATS.map((s) => (
                <div key={s.l} className="border-r border-b border-cream/10 py-4 pr-3 pl-0 last:border-r-0 sm:border-b-0 sm:py-5 sm:pr-4">
                  <dt className="font-display text-lg font-extrabold text-cream sm:text-xl">{s.v}</dt>
                  <dd className="mt-1 text-[9px] font-bold tracking-[0.16em] text-cream/45 uppercase sm:text-[10px]">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* image + finder block */}
          <div className="flex flex-col">
            <div className="relative h-52 overflow-hidden border-b border-cream/10 sm:h-72 lg:h-64 xl:h-72">
              <img
                src={IMG.cityFiber}
                alt="Fiber-connected city skyline at night"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--charcoal)_88%,transparent))]" />
              <div className="absolute bottom-4 left-4 flex items-end gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="w-2.5 origin-bottom bg-cyan"
                    style={{ height: `${12 + i * 9}px`, animation: `bars 1.4s ${i * 0.14}s ease-in-out infinite` }}
                  />
                ))}
                <span className="ml-3 pb-0.5 text-[10px] font-bold tracking-[0.2em] text-cream/60 uppercase">
                  Live network
                </span>
              </div>
            </div>
            {/* zip checker — full width, no padding offset */}
            <div className="w-full">
              <CoverageFinder />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ------------------------------ TICKER ------------------------------ */

const TICKER = [
  "Fiber to the home",
  "Symmetrical uploads",
  "Cloud DVR",
  "Whole-home mesh Wi-Fi",
  "No data caps",
  "Same-week installs",
  "4K sports feeds",
  "One support contact",
];

export function Ticker() {
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-amber py-3 text-ink">
      <div className="marquee-track flex w-max gap-8">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-8">
            {TICKER.map((t) => (
              <span
                key={t}
                className="flex items-center gap-3 text-[11px] font-extrabold tracking-[0.24em] whitespace-nowrap uppercase"
              >
                <Signal className="size-3.5" />
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- SPEED TIERS ---------------------------- */

const TIERS = [
  {
    name: "Everyday",
    speed: 300,
    fill: 25,
    best: false,
    for: "1–4 devices, HD streaming",
    perks: ["Up to 300 Mbps download", "Wi-Fi router included", "No data caps"],
  },
  {
    name: "Family Fiber",
    speed: 1000,
    fill: 62,
    best: true,
    for: "Busy homes, 4K in every room",
    perks: ["1 Gbps symmetrical", "Mesh Wi-Fi 6 gateway", "Free professional install"],
  },
  {
    name: "Pro & Business",
    speed: 2000,
    fill: 100,
    best: false,
    for: "Offices, uploads, 20+ devices",
    perks: ["2 Gbps symmetrical", "Static IP option", "Priority support line"],
  },
];

export function InternetPlans() {
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 border-b-2 border-ink pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Speed tiers</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase sm:text-[2.6rem] sm:leading-[1.05]">
              Choose a speed,
              <br />
              not a marketing name
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every tier is matched to the networks physically wired to your street. A specialist
            confirms the exact terms with the provider serving your address.
          </p>
        </div>

        <div className="grid lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className={
                t.best
                  ? "relative border-2 border-ink bg-ink p-8 text-cream"
                  : "relative border border-border border-t-0 bg-card p-8 lg:border-t lg:border-l-0 lg:first:border-l"
              }
            >
              {t.best && <div className="diag-stripes absolute inset-0 opacity-30" />}
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl font-extrabold text-cyan/25">
                    0{i + 1}
                  </span>
                  {t.best && (
                    <span className="bg-amber px-3 py-1 text-[10px] font-extrabold tracking-[0.2em] text-ink uppercase">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-xl font-extrabold uppercase">{t.name}</h3>
                <p className={t.best ? "mt-1 text-sm text-cream/60" : "mt-1 text-sm text-muted-foreground"}>
                  {t.for}
                </p>

                <p className="mt-8 flex items-end gap-2">
                  <span className="font-display text-5xl font-extrabold">
                    <Counter to={t.speed} />
                  </span>
                  <span
                    className={
                      t.best
                        ? "pb-2 text-[11px] font-bold tracking-[0.2em] text-cream/60 uppercase"
                        : "pb-2 text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase"
                    }
                  >
                    Mbps
                  </span>
                </p>
                <div className={t.best ? "mt-4 h-2 bg-cream/12" : "mt-4 h-2 bg-secondary"}>
                  <div
                    className="h-full bg-[linear-gradient(90deg,var(--emerald-deep),var(--mint))] transition-[width] duration-1000"
                    style={{ width: `${t.fill}%` }}
                  />
                </div>

                <ul className={t.best ? "mt-8 divide-y divide-cream/10" : "mt-8 divide-y divide-border"}>
                  {t.perks.map((k) => (
                    <li key={k} className="flex gap-2.5 py-3 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                      <span className={t.best ? "text-cream/80" : "text-muted-foreground"}>{k}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={
                    t.best
                      ? "mt-8 flex items-center justify-center gap-2 bg-cyan py-4 text-[11px] font-extrabold tracking-[0.2em] text-ink uppercase hover:bg-amber"
                      : "mt-8 flex items-center justify-center gap-2 border border-ink py-4 text-[11px] font-extrabold tracking-[0.2em] uppercase transition-colors hover:bg-ink hover:text-cream"
                  }
                >
                  Check availability <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- TV -------------------------------- */

const PACKS = [
  { name: "Essentials", channels: "85+", copy: "Local networks, news and family basics.", icon: Tv, img: IMG.familyTv },
  { name: "Entertainment", channels: "150+", copy: "Drama, lifestyle, kids and premium series.", icon: Clapperboard, img: IMG.cinema },
  { name: "Sports Max", channels: "190+", copy: "Regional sports, league packs, race weekends.", icon: Zap, img: IMG.sportsTv },
  { name: "Total 4K", channels: "260+", copy: "Everything, plus 4K feeds and multi-room DVR.", icon: MonitorPlay, img: IMG.livingRoomTv },
];

export function TvPackages() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-cream sm:py-24">
      <div className="scanlines absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow tone="light">Cable TV</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase sm:text-[2.6rem] sm:leading-[1.05]">
              Channel packs
              <br />
              built around what
              <br />
              you actually watch
            </h2>
          </div>
          <p className="border-l-2 border-cyan pl-5 text-sm leading-relaxed text-cream/65">
            Set-top boxes with cloud DVR, multi-room viewing and app streaming on the side. Add TV to
            any internet line and keep one install visit and one support contact.
          </p>
        </div>

        <div className="mt-14 grid border-t border-cream/12 sm:grid-cols-2 lg:grid-cols-4">
          {PACKS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className="group relative border-r border-b border-cream/12 bg-cream/[0.03] transition-colors hover:bg-cream/[0.07]"
            >
              <div className="relative h-44 overflow-hidden border-b border-cream/12">
                <img
                  src={p.img}
                  alt={`${p.name} channel pack`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-65 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                />
                <span className="absolute top-0 left-0 grid size-11 place-items-center bg-ink text-amber">
                  <p.icon className="size-4" />
                </span>
                <span className="absolute right-0 bottom-0 bg-cyan px-3 py-1.5 text-[10px] font-extrabold tracking-[0.18em] text-ink uppercase">
                  {p.channels} ch
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-extrabold uppercase">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- BUNDLE ------------------------------- */

export function Bundle() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid border border-border lg:grid-cols-[1fr_1fr]">
          <Reveal className="relative min-h-[240px] border-b border-border sm:min-h-[320px] lg:min-h-[360px] lg:border-r lg:border-b-0">
            <img
              src={IMG.smartHome}
              alt="Connected smart home powered by broadband"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 border-t border-r border-border bg-card p-6">
              <Activity className="size-4 text-primary" />
              <p className="mt-3 font-display text-3xl font-extrabold">
                <Counter to={98} suffix="%" />
              </p>
              <p className="mt-1 max-w-[11rem] text-[11px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                Installs done on the first visit
              </p>
            </div>
          </Reveal>

          <div className="p-8 sm:p-12">
            <Eyebrow>Bundle it</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase sm:text-4xl">
              Internet and TV
              <br />
              on a single line
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Sharing one fiber or coax drop means one truck roll, one contract and one number to
              call when something needs attention.
            </p>
            <ul className="mt-8 grid border-t border-border sm:grid-cols-2">
              {[
                [Wifi, "Gigabit internet", "Whole-home mesh Wi-Fi"],
                [Tv, "150+ channels", "Cloud DVR included"],
                [Wrench, "Single install", "One appointment, one tech"],
                [Headset, "One support line", "No transfers between teams"],
              ].map(([Icon, t, s]) => {
                const I = Icon as typeof Wifi;
                return (
                  <li
                    key={t as string}
                    className="flex gap-3 border-r border-b border-border p-5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center bg-ink text-cyan">
                      <I className="size-4.5" />
                    </span>
                    <span>
                      <strong className="block text-sm">{t as string}</strong>
                      <span className="text-xs text-muted-foreground">{s as string}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-ink px-8 py-4 text-[11px] font-extrabold tracking-[0.2em] text-cream uppercase transition-colors hover:bg-primary"
            >
              Build my bundle <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHY US ------------------------------ */

const REASONS = [
  { icon: Cable, title: "Every network on one map", copy: "Fiber, cable and fixed wireless compared for your exact street." },
  { icon: ShieldCheck, title: "No pressure, no upsell", copy: "We recommend the smallest tier that comfortably covers the house." },
  { icon: Router, title: "Hardware sorted", copy: "Router placement, mesh nodes and set-top boxes configured before we leave." },
  { icon: Users, title: "One named specialist", copy: "The same person from availability check to first speed test." },
];

export function WhyUs() {
  return (
    <section className="border-b border-border bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative overflow-hidden bg-ink p-8 text-cream sm:p-10">
            <div className="grid-lines absolute inset-0 opacity-25" />
            <div className="relative">
              <Eyebrow tone="light">Why us</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-extrabold uppercase">
                Ordering a connection
                <br />
                shouldn&apos;t take
                <br />
                three phone calls
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-cream/65">
                We handle availability checks, paperwork and scheduling chase-ups. Your only jobs:
                pick a speed and be home for the technician.
              </p>
              <div className="mt-8 grid grid-cols-2 border-t border-cream/12">
                {[
                  { to: 24, suffix: "k+", label: "Homes connected" },
                  { to: 4.9, suffix: "/5", decimals: 1, label: "Customer rating" },
                ].map((s) => (
                  <div key={s.label} className="border-r border-b border-cream/12 py-5 pr-4">
                    <p className="font-display text-3xl font-extrabold text-cyan">
                      <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                    </p>
                    <p className="mt-1 text-[10px] font-bold tracking-[0.16em] text-cream/45 uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <img
                src={IMG.technician}
                alt="Broadband technician on an install visit"
                loading="lazy"
                className="mt-8 h-44 w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 70}
                className="edge-hover flex flex-col justify-center border border-border border-t-0 bg-card p-8 sm:border-l-0 sm:[&:nth-child(-n+2)]:border-t"
              >
                <span className="grid size-12 place-items-center border border-ink text-ink">
                  <r.icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-base font-extrabold uppercase">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ STEPS ------------------------------- */

const STEPS = [
  ["Check your address", "Enter a ZIP or street and we pull the networks physically serving it."],
  ["Compare real options", "Speeds, channel packs, contract lengths and installation windows."],
  ["We place the order", "Paperwork, credit steps and provider handover done for you."],
  ["Install & tune", "Technician on site, then Wi-Fi and TV boxes tuned room by room."],
];

export function Steps() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-xl">
          <Eyebrow>The connection journey</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase sm:text-4xl">
            ZIP code to live line
            <br />
            in four steps
          </h2>
        </div>

        <ol className="mt-10 grid border-t-2 border-ink sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map(([t, c], i) => (
            <Reveal as="li" key={t} delay={i * 90} className="group border-r border-b border-border p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-extrabold text-ink/15 transition-colors group-hover:text-primary">
                  0{i + 1}
                </span>
                <span className="h-px w-8 bg-ink/20" />
              </div>
              <h3 className="mt-6 font-display text-base font-extrabold uppercase">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------- COVERAGE ------------------------------ */

const CITIES = [
  "Austin, TX",
  "Dallas, TX",
  "Phoenix, AZ",
  "Denver, CO",
  "Charlotte, NC",
  "Tampa, FL",
  "Columbus, OH",
  "Nashville, TN",
];

export function CoverageMap() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-cream">
      <img
        src={IMG.networkGlobe}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow tone="light">Coverage</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase sm:text-4xl">
            Networks we track,
            <br />
            street by street
          </h2>
          <p className="mt-5 leading-relaxed text-cream/65">
            Availability changes block by block. We keep provider footprints current across metro and
            suburban areas so a check takes minutes, not an afternoon of hold music.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 border border-cream/30 px-7 py-4 text-[11px] font-extrabold tracking-[0.2em] text-cream uppercase hover:bg-cream/10"
          >
            <MapPin className="size-4" /> Ask about my area
          </Link>
        </div>

        <div className="grid border-t border-l border-cream/12 sm:grid-cols-2">
          {CITIES.map((c, i) => (
            <Reveal
              key={c}
              delay={i * 50}
              className="flex items-center justify-between border-r border-b border-cream/12 px-5 py-4 transition-colors hover:bg-cream/[0.06]"
            >
              <span className="text-sm font-bold tracking-wide uppercase">{c}</span>
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-[0.2em] text-cyan uppercase">
                <span className="size-1.5 bg-cyan" /> Live
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- EQUIPMENT ----------------------------- */

const GEAR = [
  { title: "Wi-Fi 6 gateway", copy: "Placed centrally, bands split where it helps.", img: IMG.routerDevice },
  { title: "Mesh nodes", copy: "Extra coverage for thick walls and upper floors.", img: IMG.dataDesk },
  { title: "4K set-top boxes", copy: "Paired, labelled and channel-ordered per room.", img: IMG.remoteControl },
];

export function Equipment() {
  return (
    <section className="border-b border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-10">
          <div className="max-w-xl">
            <Eyebrow>Hardware</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase sm:text-4xl">
              Equipment installed,
              <br />
              not dropped at the door
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every visit ends with a room-by-room speed test and a walkthrough of the gear — remotes,
            DVR and app logins included.
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          {GEAR.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 80}
              className="group border border-border border-t-0 bg-card md:border-t md:border-l-0 md:first:border-l"
            >
              <div className="relative h-56 overflow-hidden border-b border-border">
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-0 left-0 bg-ink px-3 py-1.5 font-display text-xs font-extrabold tracking-[0.2em] text-cyan uppercase">
                  0{i + 1}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-base font-extrabold uppercase">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SUPPORT ------------------------------ */

export function Support() {
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid border border-border lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[300px] border-b border-border lg:border-r lg:border-b-0">
            <img
              src={IMG.supportTeam}
              alt="Support specialists helping customers with their connection"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-8 sm:p-12">
            <Eyebrow>Aftercare</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase">
              Support that stays
              <br />
              after install day
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Wi-Fi tuning, DVR questions, provider follow-ups and appointment changes — handled by
              the same specialist who set your service up.
            </p>
            <div className="mt-9 grid border-t border-border sm:grid-cols-3">
              {[
                { icon: Headset, to: 12, suffix: " min", label: "Average reply time" },
                { icon: Sparkles, to: 96, suffix: "%", label: "Closed first contact" },
                { icon: Radio, to: 7, suffix: " days", label: "A week of coverage" },
              ].map((s) => (
                <div key={s.label} className="border-r border-b border-border p-5">
                  <s.icon className="size-4 text-primary" />
                  <p className="mt-4 font-display text-2xl font-extrabold">
                    <Counter to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- TESTIMONIALS --------------------------- */

const QUOTES = [
  {
    name: "Marcus Bell",
    role: "Austin, TX",
    img: IMG.people2,
    text: "Went from 90 Mbps cable to gigabit fiber plus a sports pack. They handled the switchover so we never lost service.",
  },
  {
    name: "Priya Raman",
    role: "Remote product designer",
    img: IMG.people1,
    text: "Uploads used to stall during calls. The tier they recommended fixed it, and the mesh placement was spot on.",
  },
  {
    name: "Dan Whitfield",
    role: "Small business owner",
    img: IMG.people3,
    text: "Two locations, one install day, static IPs on both. Far easier than dealing with the provider directly.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="diag-stripes absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow tone="light">Customer stories</Eyebrow>
        <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold uppercase sm:text-4xl">
          Households and offices
          <br />
          already running on it
        </h2>
        <div className="mt-14 grid border-t border-l border-cream/12 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal
              key={q.name}
              delay={i * 80}
              className="border-r border-b border-cream/12 p-8 transition-colors hover:bg-cream/[0.05]"
            >
              <Quote className="size-6 text-amber" />
              <p className="mt-5 text-sm leading-relaxed text-cream/80">{q.text}</p>
              <div className="mt-7 flex items-center gap-3 border-t border-cream/12 pt-5">
                <img src={q.img} alt={q.name} loading="lazy" className="size-11 object-cover grayscale" />
                <div>
                  <p className="text-sm font-bold tracking-wide uppercase">{q.name}</p>
                  <p className="text-xs text-cream/50">{q.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FAQ ------------------------------- */

export const FAQS = [
  {
    q: "How do I know which speed I need?",
    a: "Count simultaneous users and 4K streams. Up to four devices is comfortable on 300 Mbps; busy family homes with streaming, gaming and video calls are better on gigabit.",
  },
  {
    q: "Can I keep cable TV and add fiber internet?",
    a: "Usually yes. Many addresses support a cable TV service alongside a fiber internet line, and we check whether one combined account is possible.",
  },
  {
    q: "How long does installation take?",
    a: "Most addresses are scheduled within 48 hours, and the visit itself runs 60–120 minutes depending on wiring and the number of TV boxes.",
  },
  {
    q: "Is there any charge for the coverage check?",
    a: "No. Availability checks, comparisons and request assistance are free — you only ever deal with the provider for the service you choose.",
  },
  {
    q: "Do you help after installation?",
    a: "Yes. Wi-Fi tuning, DVR setup, channel mapping and provider follow-ups are all part of the service.",
  },
];

export function Faq() {
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase sm:text-4xl">
            Common
            <br />
            questions
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Still unsure? A specialist can answer address-specific questions within a business hour.
          </p>
        </div>
        <div className="border-t-2 border-ink">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group border-b border-border px-1 py-5">
                <summary className="flex cursor-pointer list-none items-center gap-5 font-display text-sm font-extrabold tracking-wide uppercase">
                  <span className="text-xs text-primary">0{i + 1}</span>
                  <span className="flex-1">{f.q}</span>
                  <span className="grid size-7 shrink-0 place-items-center border border-ink text-ink transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pl-9 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FINAL CTA --------------------------- */

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <img
        src={IMG.fiberCables}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
      />
      <div className="grid-lines absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 border-x border-cream/12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase sm:text-[2.7rem] sm:leading-[1.05]">
              Find out exactly
              <br />
              what&apos;s wired to
              <span className="block text-cyan">your address</span>
            </h2>
            <p className="mt-5 max-w-lg border-l-2 border-cream/20 pl-5 text-cream/65">
              Share a ZIP code and a specialist comes back with the internet speeds and TV packs
              actually available on your street — no obligation.
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              to="/contact"
              className="group flex items-center justify-between gap-3 bg-cyan px-7 py-5 text-[11px] font-extrabold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-amber"
            >
              Talk to a specialist
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/internet"
              className="group flex items-center justify-between gap-3 border border-t-0 border-cream/25 px-7 py-5 text-[11px] font-extrabold tracking-[0.2em] text-cream uppercase hover:bg-cream/10"
            >
              Browse internet tiers
              <Gauge className="size-4" />
            </Link>
            <Link
              to="/cable-tv"
              className="group flex items-center justify-between gap-3 border border-t-0 border-cream/25 px-7 py-5 text-[11px] font-extrabold tracking-[0.2em] text-cream uppercase hover:bg-cream/10"
            >
              Explore TV packs
              <Tv className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
