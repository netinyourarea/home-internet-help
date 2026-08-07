import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Terms & Conditions | Home Internet Help";
const description =
  "The terms governing use of Home Internet Help's independent broadband and cable connection assistance service.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms of using our service"
        intro="Please read these terms carefully before using our coverage tools or submitting a connection request."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>Nature of the service</h2>
        <p>
          We provide guidance, comparison information and administrative assistance with broadband
          and cable connection requests. We do not own, operate or control any network, and we do
          not deliver internet or television service ourselves.
        </p>
        <h2>Accuracy of information</h2>
        <p>
          Coverage and availability information is indicative and subject to confirmation by the
          relevant provider. Speeds, channel line-ups, pricing and installation timelines are set
          by the provider and may change without notice.
        </p>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Provide accurate address and contact details.</li>
          <li>Review the provider's own contract before accepting service.</li>
          <li>Use the site lawfully and without attempting to disrupt it.</li>
        </ul>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for provider delays, service
          interruptions, installation outcomes or any indirect losses arising from third-party
          service delivery.
        </p>
        <h2>Changes</h2>
        <p>These terms may be updated periodically; continued use constitutes acceptance.</p>
      </Prose>
    </>
  );
}