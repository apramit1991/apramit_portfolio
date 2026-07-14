import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import { goTo } from "@/lib/router";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-elevated";

export function EndCta({ data, next, onAsk, onBack }) {
  const nextUrl = `/case-studies/${next.slug}`;
  return (
    <section className="mt-16 border-t border-line pt-10">
      <h2 className="font-display text-2xl font-bold tracking-tight text-ink-1">
        You've reached the end of {data.shortTitle}.
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onAsk}
          className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-[#0b1626] transition-colors hover:bg-accent-strong ${focusRing}`}
        >
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Ask me about this project
        </button>
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink-1 transition-colors hover:bg-surface-hover ${focusRing}`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return to conversation
        </button>
      </div>

      {/* single next-project preview — no carousel */}
      <a
        href={nextUrl}
        onClick={(e) => goTo(nextUrl, e)}
        className={`mt-8 flex items-center gap-4 rounded-2xl border border-line bg-elevated p-4 shadow-card transition-colors hover:border-line-strong hover:bg-surface-hover sm:gap-6 sm:p-5 ${focusRing}`}
      >
        <img
          src={encodeURI(next.heroImage)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-16 w-24 shrink-0 rounded-lg bg-surface-2 object-cover sm:h-20 sm:w-32"
        />
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-ink">
            Next case study
          </p>
          <p className="mt-1 truncate font-display text-lg font-semibold text-ink-1">
            {next.title}
          </p>
          <p className="line-clamp-1 text-[13px] text-ink-3">{next.valueProp}</p>
        </div>
        <ArrowRight className="h-5 w-5 shrink-0 text-accent-ink" aria-hidden="true" />
      </a>
    </section>
  );
}
