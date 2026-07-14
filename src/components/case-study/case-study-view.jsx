import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Download, Mail, Zap } from "lucide-react";

import { getNextCaseStudy } from "@/data/case-studies";
import { PROJECT_PROMPTS } from "@/data/prompts";
import { profile } from "@/data/profile";
import { AskDrawer } from "./ask-drawer";
import { BlockRenderer } from "./blocks";
import { CaseStudyHeader } from "./case-study-header";
import { CaseStudyHero } from "./case-study-hero";
import { ConversationRail } from "./conversation-rail";
import { EndCta } from "./end-cta";
import { SectionNav } from "./section-nav";

function NotFound({ onBack }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-surface px-6 text-center font-sans">
      <p className="font-display text-2xl font-bold text-ink-1">
        This case study is not available yet.
      </p>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-[44px] items-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-[#0b1626] transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
      >
        Return to projects
      </button>
    </div>
  );
}

// Recruiter Mode: condensed 90-second summary surfaces first (spec) —
// role, key decisions, impact, learnings — with direct resume/contact actions.
function RecruiterSummaryCard({ rs }) {
  if (!rs) return null;
  const label = "font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-ink";
  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-line-strong bg-elevated shadow-card">
      <div className="h-0.5 bg-gradient-to-r from-accent to-accent-strong" aria-hidden="true" />
      <div className="p-6">
        <p className="flex items-center gap-2 font-display text-base font-semibold text-ink-1">
          <Zap className="h-4 w-4 text-accent-ink" aria-hidden="true" />
          30-second summary
        </p>
        <dl className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <dt className={label}>My role</dt>
            <dd className="m-0 mt-1 text-sm leading-6 text-ink-2">{rs.role}</dd>
          </div>
          <div>
            <dt className={label}>Impact</dt>
            <dd className="m-0 mt-1">
              <ul className="m-0 list-none space-y-1 p-0">
                {rs.impact.map((i) => (
                  <li key={i} className="flex gap-2 text-sm leading-6 text-ink-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className={label}>Key decisions</dt>
            <dd className="m-0 mt-1">
              <ol className="m-0 list-none space-y-1 p-0">
                {rs.keyDecisions.map((d, i) => (
                  <li key={d} className="flex gap-2.5 text-sm leading-6 text-ink-2">
                    <span className="font-mono text-[11px] text-accent-ink">0{i + 1}</span>
                    {d}
                  </li>
                ))}
              </ol>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className={label}>What I learned</dt>
            <dd className="m-0 mt-1 text-sm leading-6 text-ink-2">{rs.learned}</dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-[#0b1626] transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-elevated"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink-1 transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-elevated"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyView({ slug, data, chat, theme, onToggleTheme, onBack, onPrompt }) {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(data?.sections?.[0]?.id);
  const [askOpen, setAskOpen] = useState(false);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  // active-section tracking (spec: Intersection Observer + hash sync)
  useEffect(() => {
    if (!data) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );
    data.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [data]);

  // keep the tab title in sync on SPA navigation (entry HTML covers fresh loads)
  useEffect(() => {
    if (!data) return;
    const prev = document.title;
    document.title = `${data.title} Case Study — Apramit Pradhan, AI Product Designer`;
    return () => {
      document.title = prev;
    };
  }, [data]);

  // honor a deep-linked #hash on entry
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id && data?.sections.some((s) => s.id === id)) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return <NotFound onBack={onBack} />;

  const prompts = PROJECT_PROMPTS[slug] || [];
  const next = getNextCaseStudy(slug);
  const handlePrompt = (item) => {
    onPrompt(item);
    if (!askOpen) setAskOpen(true); // answers land in the shared thread — surface it
  };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-dvh bg-surface font-sans text-ink-1"
    >
      <a
        href="#cs-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-elevated focus:px-3 focus:py-2 focus:text-sm focus:text-ink-1 focus:shadow-card"
      >
        Skip to case study content
      </a>
      <CaseStudyHeader
        data={data}
        sections={data.sections}
        activeId={activeId}
        onJump={jump}
        onBack={onBack}
        onAsk={() => setAskOpen(true)}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      <div className="mx-auto flex w-full max-w-[1600px]">
        <ConversationRail data={data} chat={chat} prompts={prompts} onPrompt={handlePrompt} />
        <SectionNav
          sections={data.sections}
          activeId={activeId}
          onJump={jump}
          metadata={data.metadata}
        />
        <main id="cs-content" className="min-w-0 flex-1 px-4 pb-20 sm:px-8">
          <div className="mx-auto w-full max-w-[1100px]">
            <CaseStudyHero data={data} onSkipToSolution={jump} />
            {chat.recruiterMode && <RecruiterSummaryCard rs={data.recruiterSummary} />}
            {data.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-line py-12 md:scroll-mt-20">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
                  {s.number} · {s.label}
                </p>
                <h2 className="mt-2 max-w-[30ch] font-display text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-tight tracking-tight text-ink-1">
                  {s.title}
                </h2>
                {s.intro && (
                  <p className="mt-3 max-w-[62ch] text-[16px] leading-8 text-ink-2">{s.intro}</p>
                )}
                <div className="mt-7 space-y-6">
                  {s.blocks.map((b, i) => (
                    <BlockRenderer key={i} block={b} />
                  ))}
                </div>
              </section>
            ))}
            <EndCta data={data} next={next} onAsk={() => setAskOpen(true)} onBack={onBack} />
          </div>
        </main>
      </div>

      <AskDrawer
        open={askOpen}
        onClose={() => setAskOpen(false)}
        data={data}
        chat={chat}
        prompts={prompts}
        onPrompt={handlePrompt}
      />
    </motion.div>
  );
}
