import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { goTo } from "@/lib/router";
import { MetricsRow } from "./metrics-row";

export function CaseStudyCard({ project, compact = false }) {
  if (!project) return null;
  return (
    <article className="grid overflow-hidden rounded-2xl border border-line bg-elevated shadow-card md:grid-cols-[1.1fr_0.9fr]">
      <div className={cn("flex flex-col items-start gap-3", compact ? "p-5" : "p-6 md:p-7")}>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-ink">
          {compact ? project.eyebrow : "Featured case study"}
        </p>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink-1">
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm text-ink-2">{project.subtitle}</p>
        </div>
        {!compact && (
          <p className="max-w-[52ch] text-[15px] leading-7 text-ink-2">{project.description}</p>
        )}
        {!compact && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <MetricsRow metrics={project.metrics} />
        <a
          href={project.url}
          onClick={(e) => goTo(project.url, e)}
          className="mt-1 inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-[#0b1626] transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-elevated"
        >
          {project.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      {/* subtle navy/purple gradient stage behind the mockup (per spec) */}
      <div className="flex items-center justify-center bg-gradient-to-br from-[#eef0f8] to-[#e4e7f2] p-4 max-md:order-first md:p-6 dark:from-[#101b30] dark:to-[#0c1526]">
        <img
          src={encodeURI(project.image)}
          alt={project.imageAlt}
          loading="lazy"
          className={cn("w-full object-contain", compact ? "max-h-44" : "max-h-64")}
        />
      </div>
    </article>
  );
}
