import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-shell";
import { DisclaimerBlock } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

const title = "Contact Our Connectivity Specialists | Home Internet Help";
const description =
  "Talk to an independent connectivity specialist about broadband and cable connection requests in your area.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a specialist"
        intro="Tell us where you are and how you use the internet. We'll come back with the options that genuinely reach your address."
        image={IMG.installer}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-6">
            <Eyebrow>Reach us</Eyebrow>
            <ul className="space-y-4">
              {[
                { icon: Phone, label: "(833) 531-8316", href: "tel:+18335318316" },
                { icon: Mail, label: "contact@homeinternethelps.com", href: "mailto:contact@homeinternethelps.com" },
              ].map((c) => (
                <li key={c.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                  <c.icon className="size-5 shrink-0 text-primary" />
                  <a href={c.href} className="min-w-0 truncate text-sm font-bold hover:text-primary">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
            <DisclaimerBlock />
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-border bg-card p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold">Request a callback</h2>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              {[
                { name: "name", label: "Full name", type: "text" },
                { name: "email", label: "Email address", type: "email" },
                { name: "zip", label: "ZIP code or locality", type: "text" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    {f.label}
                  </span>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/12"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  How will you use the connection?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background p-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/12"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
              >
                Send Request
              </button>
              {sent && (
                <p className="rounded-xl border border-accent/35 bg-accent/10 p-4 text-sm">
                  Thanks — a specialist will reach out shortly to confirm availability.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}