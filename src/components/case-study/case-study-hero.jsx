import { ArrowDown } from "lucide-react";

export function CaseStudyHero({ data, onSkipToSolution }) {
  const hasSolution = data.sections.some((s) => s.id === "solution");
  return (
    <header className="grid items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
      <div>
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
          {data.eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4.25rem)] font-bold leading-[1.02] tracking-tight text-ink-1">
          {data.title}
        </h1>
        <p className="mt-4 max-w-[46ch] text-lg leading-8 text-ink-2 sm:text-xl">
          {data.valueProp}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {data.categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-2"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-5">
          {data.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold tracking-tight text-ink-1">
                {m.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.09em] text-ink-3">
                {m.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[62ch] text-[15px] leading-7 text-ink-2">{data.summary}</p>
        {hasSolution && (
          <button
            type="button"
            onClick={() => onSkipToSolution("solution")}
            className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 rounded-xl text-sm font-semibold text-accent-ink underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            Skip to the final solution
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
      {/* soft radial glow behind the hero visual only (per spec).
          aspect-[4/3] reserves the box before the image decodes, so it
          doesn't collapse to 0 height and cause a layout shift on load. */}
      <div
        className="relative flex aspect-[4/3] items-center justify-center rounded-3xl border border-line p-6 lg:p-8"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(244,205,143,0.10), transparent 75%), var(--bg-secondary)",
        }}
      >
        <img
          src={encodeURI(data.heroImage)}
          alt={data.heroImageAlt}
          className="max-h-[420px] w-full object-contain"
        />
      </div>
    </header>
  );
}
