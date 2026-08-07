import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(e.target);
          } else if (!once) setVisible(false);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return { ref, visible };
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const { ref, visible } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 border-l-2 py-1 pl-3 text-[11px] font-extrabold tracking-[0.26em] uppercase",
        tone === "dark" ? "border-primary text-primary" : "border-cyan text-cyan",
      )}
    >
      <span className="size-1.5 bg-current" />
      {children}
    </span>
  );
}

export function CurveDivider({
  flip = false,
  className,
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("pointer-events-none w-full overflow-hidden leading-[0]", className)}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={cn("h-[70px] w-full sm:h-[110px]", flip && "rotate-180")}
      >
        <path
          d="M0,120 L0,40 L720,96 L1440,16 L1440,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function NetworkPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 400"
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]", className)}
    >
      <g stroke="currentColor" strokeWidth="0.7" fill="none">
        <path d="M40 340 L150 210 L280 260 L390 120 L540 180" />
        <path d="M40 120 L170 60 L280 260 L430 300 L560 250" />
        <path d="M150 210 L170 60 L390 120 L430 300" />
      </g>
      <g fill="currentColor">
        {[
          [40, 340],
          [150, 210],
          [280, 260],
          [390, 120],
          [540, 180],
          [170, 60],
          [430, 300],
          [560, 250],
          [40, 120],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" />
        ))}
      </g>
    </svg>
  );
}