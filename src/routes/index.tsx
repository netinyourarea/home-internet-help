import { createFileRoute } from "@tanstack/react-router";
import {
  Bundle,
  CoverageMap,
  Equipment,
  Faq,
  FinalCta,
  Hero,
  InternetPlans,
  Steps,
  Support,
  Testimonials,
  Ticker,
  TvPackages,
  WhyUs,
} from "@/components/site/home-sections";

const title = "Home Internet Help — Fiber Internet & Cable TV Plans";
const description =
  "Compare fiber internet speeds and cable TV channel packs available at your address, then let a specialist handle the order and installation.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Ticker />
      <InternetPlans />
      <TvPackages />
      <Bundle />
      <WhyUs />
      <Steps />
      <CoverageMap />
      <Equipment />
      <Support />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
