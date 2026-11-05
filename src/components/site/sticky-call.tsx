import { Phone } from "lucide-react";

export function StickyCall() {
  return (
    <a
      href="tel:+18668217286"
      aria-label="Call (866) 821-7286"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-cyan px-4 py-4 text-xs font-extrabold tracking-[0.18em] text-ink uppercase shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.5)] transition-colors hover:bg-amber sm:inset-x-auto sm:right-6 sm:bottom-6 sm:px-6"
    >
      <Phone className="size-4" /> Call (866) 821-7286
    </a>
  );
}
