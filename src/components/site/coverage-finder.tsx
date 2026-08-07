import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, Radar, Tv, Wifi } from "lucide-react";

export function CoverageFinder({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [value, setValue] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setState("loading");
    window.setTimeout(() => setState("done"), 900);
  }

  const dark = tone === "dark";

  return (
    <div
      className={
        dark
          ? "relative border border-cream/15 bg-ink/80 p-5 text-cream backdrop-blur-md sm:p-8"
          : "relative border border-border bg-card p-5 sm:p-8"
      }
    >
      <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 border-b border-current/15 pb-4">
          <span className="flex items-center gap-2 text-[11px] font-bold tracking-[0.24em] uppercase">
            <Radar className="size-4 text-cyan" /> Coverage check
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-cyan uppercase">Step 01</span>
        </div>

        <h2 className="mt-4 font-display text-lg font-extrabold uppercase sm:mt-5 sm:text-2xl">
          What&apos;s wired to your street?
        </h2>
        <p className={dark ? "mt-2 text-sm text-cream/60" : "mt-2 text-sm text-muted-foreground"}>
          Enter a ZIP or address and we scan the fiber, cable and wireless lines serving it.
        </p>

        <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-0">
          <label className="w-full">
            <span className="sr-only">ZIP code or street address</span>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setState("idle");
              }}
              placeholder="ZIP CODE OR ADDRESS"
              className={
                dark
                  ? "h-12 w-full border border-cream/20 bg-cream/[0.05] px-4 text-sm font-semibold tracking-wide text-cream outline-none placeholder:text-cream/35 focus:border-cyan sm:h-14"
                  : "h-12 w-full border border-border bg-secondary/60 px-4 text-sm font-semibold tracking-wide outline-none placeholder:text-muted-foreground/60 focus:border-primary sm:h-14"
              }
            />
          </label>
          <button
            type="submit"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-cyan px-6 text-xs font-extrabold tracking-[0.18em] text-ink uppercase transition-colors hover:bg-amber sm:h-14"
          >
            {state === "loading" ? <Loader2 className="size-4 animate-spin" /> : null}
            Scan my address
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {state === "done" ? (
          <div className="mt-5 border-l-2 border-cyan bg-cyan/10 p-4 text-sm">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
              <span>
                Services are typically available around <strong>{value}</strong>:
              </span>
            </p>
            <ul className={dark ? "mt-3 grid gap-1.5 pl-6 text-cream/70" : "mt-3 grid gap-1.5 pl-6 text-muted-foreground"}>
              <li className="flex items-center gap-2">
                <Wifi className="size-4 text-cyan" /> Fiber up to 2 Gbps
              </li>
              <li className="flex items-center gap-2">
                <Tv className="size-4 text-cyan" /> Cable TV up to 260 channels
              </li>
            </ul>
          </div>
        ) : (
          <ul className="mt-5 grid gap-0 border-t border-current/12">
            {["Fiber, cable and wireless compared", "Free check, no obligation", "Reply within one business hour"].map(
              (t) => (
                <li
                  key={t}
                  className={
                    dark
                      ? "flex items-center gap-2 border-b border-cream/10 py-3 text-sm text-cream/65"
                      : "flex items-center gap-2 border-b border-border py-3 text-sm text-muted-foreground"
                  }
                >
                  <CheckCircle2 className="size-4 shrink-0 text-cyan" /> {t}
                </li>
              ),
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
