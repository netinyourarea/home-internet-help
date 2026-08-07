import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/page-shell";

const title = "Privacy Policy | Home Internet Help";
const description =
  "How Home Internet Help collects, uses and protects personal information submitted through coverage checks and connection requests.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your information, handled carefully"
        intro="What we collect when you check coverage or submit a connection request, and exactly what happens to it afterwards."
      />
      <Prose>
        <h2>Information we collect</h2>
        <p>
          We collect the details you provide directly: name, contact information, service address
          or locality, and a description of how you intend to use the connection. We also collect
          basic analytics such as pages visited and approximate region.
        </p>
        <h2>How we use it</h2>
        <ul>
          <li>To verify service availability at your address.</li>
          <li>To progress and track a connection request you have asked us to submit.</li>
          <li>To provide support before, during and after installation.</li>
          <li>To improve the accuracy of our coverage information.</li>
        </ul>
        <h2>Sharing</h2>
        <p>
          Details are shared only with the provider required to progress your specific request, and
          only with your instruction. We do not sell personal information.
        </p>
        <h2>Retention and your rights</h2>
        <p>
          Request records are retained for up to 24 months. You may ask us to access, correct or
          delete your information at any time by emailing contact@homeinternethelps.com.
        </p>
        <h2>Cookies</h2>
        <p>
          We use essential cookies for site functionality and privacy-respecting analytics to
          understand usage. You can disable non-essential cookies in your browser.
        </p>
      </Prose>
    </>
  );
}