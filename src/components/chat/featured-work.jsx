import { ArrowRight } from "lucide-react";

import { goTo } from "@/lib/router";
import { projects } from "@/data/projects";

// Shown on the empty landing so the first frame always presents real work
// (not a blank canvas) in both themes. Each card is a same-tab SPA link to
// its case-study workspace.
export function FeaturedWork() {
  return (
    <section aria-label="Featured work" className="mt-12">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-3">
        Featured work
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.url}
            onClick={(e) => goTo(p.url, e)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-elevated shadow-card transition-colors hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#eef0f8] to-[#e4e7f2] p-4 dark:from-[#101b30] dark:to-[#0c1526]">
              <img
                src={encodeURI(p.image)}
                alt={p.imageAlt}
                loading="lazy"
                className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent-ink">
                {p.eyebrow}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-ink-1">
                {p.title}
              </h3>
              <p className="mt-1 text-[13px] leading-5 text-ink-2">{p.subtitle}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                {p.metrics.map((m) => (
                  <span key={m.label} className="text-[12px] text-ink-3">
                    <span className="font-display font-semibold text-ink-1">{m.value}</span>{" "}
                    {m.label}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-ink">
                Read case study
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
