import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Refund Policy | Home Internet Help";
const description =
  "How refunds and cancellations work for assistance services provided by Home Internet Help.";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Refund Policy"
        title="Cancellations and refunds"
        intro="Coverage checks and connection guidance are free. Where a paid assistance fee applies, these terms govern refunds."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>Free services</h2>
        <p>
          Coverage checks, option comparisons and standard connection request assistance are
          provided at no cost, so no refund is applicable.
        </p>
        <h2>Paid assistance fees</h2>
        <p>
          If an optional paid setup or advisory fee has been agreed in writing, it may be refunded
          in full within 7 days of payment provided the work has not yet been performed.
        </p>
        <h2>Provider charges</h2>
        <p>
          Installation charges, equipment costs and subscription fees are billed by the provider
          you select. Refunds for those amounts are governed solely by that provider's policy and
          must be requested from them directly.
        </p>
        <h2>How to request a refund</h2>
        <p>
          Email contact@homeinternethelps.com with your request reference. Approved refunds are issued
          to the original payment method within 5–10 business days.
        </p>
      </Prose>
    </>
  );
}