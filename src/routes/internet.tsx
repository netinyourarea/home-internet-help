import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Gamepad2, Gauge, MonitorPlay, Router, ShieldCheck, Upload, Wifi } from "lucide-react";
import { PageHero, FeatureGrid, CtaStrip } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { InternetPlans } from "@/components/site/home-sections";
import { IMG } from "@/lib/images";

const title = "Fiber & Cable Internet Plans | Home Internet Help";
const description =
  "Compare 300 Mbps to 2 Gbps internet plans, router and mesh Wi-Fi options, and find the fastest network wired to your address.";

export const Route = createFileRoute("/internet")({
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
  component: InternetPage,
});

const USAGE = [
  ["Light use", "Up to 300 Mbps", "Browsing, HD streaming, 1–4 devices"],
  ["Busy household", "500 Mbps – 1 Gbps", "4K streams, gaming, video calls, smart home"],
  ["Power users & offices", "1 – 2 Gbps", "Large uploads, VPNs, 20+ devices, backups"],
];

function InternetPage() {
  return (
    <>
      <PageHero
        eyebrow="Internet"
        title="Internet that keeps up with the whole house"
        intro="Fiber, cable and fixed wireless plans compared on the numbers that matter: real download and upload speeds, latency and hardware included."
        image={IMG.serverRoom}
      />

      <InternetPlans />

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Speed guide</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">How much speed do you need?</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            {USAGE.map(([who, speed, what], i) => (
              <div
                key={who}
                className={`grid gap-2 p-6 sm:grid-cols-[1fr_auto_1.4fr] sm:items-center ${i ? "border-t border-border" : ""}`}
              >
                <p className="font-bold">{who}</p>
                <p className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Gauge className="size-4" /> {speed}
                </p>
                <p className="text-sm text-muted-foreground">{what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        items={[
          { icon: Wifi, title: "Whole-home Wi-Fi", copy: "Wi-Fi 6 gateways and mesh nodes placed for real floor plans." },
          { icon: Upload, title: "Symmetrical uploads", copy: "Fiber plans upload as fast as they download — calls stop stalling." },
          { icon: Gamepad2, title: "Low latency", copy: "Wired routing advice for competitive gaming and cloud play." },
          { icon: MonitorPlay, title: "4K streaming headroom", copy: "Multiple premium streams without anyone buffering." },
          { icon: Briefcase, title: "Work from home ready", copy: "VPN-friendly plans and optional backup connections." },
          { icon: ShieldCheck, title: "Secure by default", copy: "Guest networks, firmware checks and safe router settings." },
        ]}
      />

      <section className="bg-background pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Equipment</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold">Hardware set up, not dropped off</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every plan includes a gateway. We check placement, split bands where it helps, add mesh
              nodes for thick walls or upper floors, and run a speed test in each room before the
              job is called done.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"
            >
              <Router className="size-4" /> Ask about equipment
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={IMG.routerDevice}
              alt="Wi-Fi router installed in a modern home"
              loading="lazy"
              className="h-[320px] w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
