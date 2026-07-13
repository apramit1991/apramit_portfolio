import { Download, FileText, Linkedin, Mail, Zap } from "lucide-react";

import { profile } from "@/data/profile";

const goldBtn =
  "inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-[#0b1626] transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-elevated";
const outlineBtn =
  "inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink-1 transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-elevated";

export function ResumeCard() {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-elevated p-5 shadow-card">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-hover text-accent-ink">
        <FileText className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-ink-1">Apramit Pradhan — Resume</p>
        <p className="text-sm text-ink-3">PDF · Lead Product Designer · 11+ years</p>
      </div>
      <a href={profile.resumeUrl} download className={goldBtn}>
        <Download className="h-4 w-4" aria-hidden="true" />
        {profile.ui.resumeButton}
      </a>
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="rounded-2xl border border-line bg-elevated p-5 shadow-card">
      <p className="font-semibold text-ink-1">{profile.name}</p>
      <p className="mt-0.5 text-sm text-ink-3">{profile.availability}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a href={`mailto:${profile.email}`} className={goldBtn}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email Apramit
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className={outlineBtn}>
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          LinkedIn
        </a>
        <a href={profile.resumeUrl} download className={outlineBtn}>
          <Download className="h-4 w-4" aria-hidden="true" />
          Resume
        </a>
      </div>
    </div>
  );
}

export function RecruiterSummaryCard() {
  const { bullets } = profile.recruiterSummary;
  return (
    <div className="overflow-hidden rounded-2xl border border-line-strong bg-elevated shadow-card">
      <div className="h-0.5 bg-gradient-to-r from-accent to-accent-strong" aria-hidden="true" />
      <div className="p-5">
        <p className="flex items-center gap-2 font-display text-base font-semibold text-ink-1">
          <Zap className="h-4 w-4 text-accent-ink" aria-hidden="true" />
          Apramit in 90 seconds
        </p>
        <ul className="mt-3 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-6 text-ink-2">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong"
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TestimonialsCard() {
  return (
    <div className="space-y-3">
      {profile.testimonials.map((t) => (
        <figure
          key={t.name}
          className="m-0 rounded-2xl border border-line bg-elevated p-5 shadow-card"
        >
          <blockquote className="m-0 text-sm leading-6 text-ink-2">“{t.quote}”</blockquote>
          <figcaption className="mt-3 flex items-center gap-3">
            <img
              src={encodeURI(t.avatar)}
              alt=""
              loading="lazy"
              className="h-10 w-10 rounded-full border border-line object-cover object-top"
            />
            <div>
              <p className="text-sm font-semibold text-ink-1">{t.name}</p>
              <p className="font-mono text-[11px] text-ink-3">{t.role}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
