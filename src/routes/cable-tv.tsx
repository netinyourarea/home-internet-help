import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, HardDrive, Languages, Radio, Smartphone, Trophy, Tv2, Users } from "lucide-react";
import { PageHero, FeatureGrid, CtaStrip } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { TvPackages } from "@/components/site/home-sections";
import { IMG } from "@/lib/images";

const title = "Cable TV Packages & Channel Packs | Home Internet Help";
const description =
  "Cable TV packages from 85 to 260+ channels with cloud DVR, 4K feeds, sports packs and multi-room boxes — bundled with your internet line.";

export const Route = createFileRoute("/cable-tv")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CableTvPage,
});

const GENRES = [
  ["Sports", IMG.sportsTv, "Regional networks, league packs, race weekends"],
  ["Movies", IMG.cinema, "Premium film channels and 4K movie feeds"],
  ["Family", IMG.familyTv, "Kids, learning and general entertainment"],
];

function CableTvPage() {
  return (
    <>
      <PageHero
        eyebrow="Cable TV"
        title="Cable TV with the channels you'd actually miss"
        intro="Live sports, movie premieres and local news on a stable coax or fiber feed — with cloud DVR and app streaming for everything else."
        image={IMG.remoteControl}
      />

      <TvPackages />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>What's on</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">Built around your viewing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {GENRES.map(([name, img, copy], i) => (
              <Reveal key={name} delay={i * 80} className="overflow-hidden rounded-2xl border border-border bg-card">
                <img src={img} alt={`${name} on cable TV`} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-extrabold">{name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        items={[
          { icon: Tv2, title: "4K & HD feeds", copy: "Sharper picture where the provider carries UHD channels." },
          { icon: HardDrive, title: "Cloud DVR", copy: "Record series, pause live TV and resume in another room." },
          { icon: Trophy, title: "Sports & live events", copy: "Regional sports networks and national coverage packages." },
          { icon: Users, title: "Multi-room boxes", copy: "Extra receivers configured for bedrooms and offices." },
          { icon: Smartphone, title: "Watch on any screen", copy: "Provider apps for phones, tablets and smart TVs." },
          { icon: Languages, title: "International packs", copy: "Regional and language add-ons where available." },
        ]}
      />

      <section className="bg-charcoal py-20 text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="light">Install day</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold">Boxes wired, mapped and labelled</h2>
            <p className="mt-4 leading-relaxed text-ivory/70">
              We confirm outlet locations before the technician arrives, then set up each receiver,
              order your channel list, pair the remotes and walk you through DVR recordings before
              anyone leaves.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-ivory/75">
              {["Outlet and signal check", "Receiver pairing per room", "Channel list ordered how you watch", "DVR and app login walkthrough"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Radio className="size-4 text-gold" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={IMG.livingRoomTv}
              alt="Cable TV receiver set up in a living room"
              loading="lazy"
              className="h-[320px] w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Clapperboard className="mx-auto size-6 text-primary" />
          <h2 className="mt-4 text-3xl font-extrabold">Add TV to any internet plan</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Bundling keeps one bill and one install visit — and usually costs less than buying the
            two services separately.
          </p>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
