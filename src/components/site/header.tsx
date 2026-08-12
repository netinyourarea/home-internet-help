import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Internet", to: "/internet" },
  { label: "Cable TV", to: "/cable-tv" },
  { label: "Contact", to: "/contact" },
] as const;

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link to="/" className="group flex shrink-0 items-center gap-0">
      {/* Accent bar */}
      <span
        className={cn(
          "mr-3 h-9 w-[3px] shrink-0 transition-colors",
          tone === "light" ? "bg-cyan" : "bg-primary",
        )}
      />
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[16px] font-extrabold tracking-[0.08em] uppercase",
            tone === "light" ? "text-white" : "text-foreground",
          )}
        >
          Home Internet
        </span>
        <span
          className={cn(
            "mt-[3px] text-[9px] font-black tracking-[0.55em] uppercase",
            tone === "light" ? "text-cyan" : "text-primary",
          )}
        >
          Help
        </span>
      </span>
    </Link>
  );
}


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="hidden bg-ink text-cream lg:block">
        <div className="mx-auto flex max-w-7xl items-stretch justify-between px-6 text-[11px] font-semibold tracking-[0.18em] uppercase">
          <p className="flex items-center gap-3 border-r border-cream/10 py-2.5 pr-6 text-cream/55">
            <span className="size-1.5 bg-cyan" />
            Free coverage checks
          </p>
          <p className="hidden flex-1 items-center px-6 py-2.5 text-cream/45 xl:flex">
            Same-week installation windows · Internet + Cable TV
          </p>
          <a
            href="tel:+18556575907"
            className="flex items-center gap-2 border-l border-cream/10 py-2.5 pl-6 hover:text-cyan"
          >
            <Phone className="size-3.5 text-cyan" /> (855) 657-5907
          </a>
        </div>
      </div>

      <header
        className={cn(
          "border-b-2 border-ink/10 bg-background transition-shadow duration-300",
          scrolled && "shadow-[0_10px_30px_-24px_rgba(0,0,0,0.5)]",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-stretch justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center py-3">
            <Logo />
          </div>

          <nav className="hidden items-stretch lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary border-primary" }}
                className="flex items-center border-b-2 border-transparent px-6 text-[12px] font-bold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 py-3">
            <Link
              to="/contact"
              className="group hidden items-center gap-2 bg-ink px-6 py-3 text-[11px] font-extrabold tracking-[0.18em] text-cream uppercase transition-colors hover:bg-primary sm:inline-flex"
            >
              Check coverage
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 shrink-0 place-items-center border border-border text-primary lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="grid">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border px-5 py-4 text-xs font-bold tracking-[0.16em] uppercase hover:bg-secondary hover:text-primary"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block bg-ink px-4 py-4 text-center text-xs font-extrabold tracking-[0.18em] text-cream uppercase"
            >
              Check coverage
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
