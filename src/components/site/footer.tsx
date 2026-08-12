import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./header";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Home", to: "/" },
      { label: "Internet Plans", to: "/internet" },
      { label: "Cable TV", to: "/cable-tv" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Refund Policy", to: "/refund-policy" },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
  },
];

export const DISCLAIMER_TEXT =
  "Home Internet Help operates as an independent third-party service provider offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company. All brand names, logos and trademarks referenced remain the property of their respective owners.";

export function Footer() {
  return (
    <footer className="relative mt-0 bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16">

        {/* Main grid: stacks on mobile, 3-col on lg */}
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-12">

          {/* Brand + contact */}
          <div className="sm:max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              A modern connectivity concierge helping households and businesses explore broadband
              and cable options available at their address — and request a connection without the
              usual friction.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href="tel:+18556575907" className="hover:text-accent">
                  (855) 657-5907
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href="mailto:contact@homeinternethelps.com" className="break-all hover:text-accent">
                  contact@homeinternethelps.com
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns — side-by-side on mobile, each own column on lg */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-sm text-ivory/70 transition-colors hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-10 border border-ivory/12 bg-ivory/5 p-5 sm:mt-14 sm:p-6">
          <h4 className="text-sm font-bold text-gold">Independent Service Disclaimer</h4>
          <p className="mt-2 text-xs leading-relaxed text-ivory/60">{DISCLAIMER_TEXT}</p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Home Internet Help. All rights reserved.</p>
          <p>Independent third-party connection assistance service.</p>
        </div>

      </div>
    </footer>
  );
}