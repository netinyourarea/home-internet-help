import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Disclaimer | Home Internet Help";
const description =
  "Home Internet Help is an independent third-party service assisting with broadband and cable connection requests.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Disclaimer"
        title="Independent third-party service"
        intro="Important information about our relationship with internet service providers and cable operators."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>No affiliation</h2>
        <p>
          Any provider names, trademarks or logos referenced on this website are used for
          identification purposes only and remain the property of their respective owners. Their
          use does not imply any partnership, endorsement or agency relationship.
        </p>
        <h2>Information accuracy</h2>
        <p>
          Coverage, speed, channel and timeline information is indicative and subject to
          confirmation by the relevant provider at the time of installation.
        </p>
        <h2>No service guarantee</h2>
        <p>
          We do not guarantee availability, performance, pricing or installation outcomes, as these
          are determined entirely by the provider delivering the service.
        </p>
      </Prose>
    </>
  );
}