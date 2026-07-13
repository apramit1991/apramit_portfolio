import { motion, useReducedMotion } from "motion/react";

import { getProject } from "@/data/projects";
import { CaseStudyCard } from "./case-study-card";
import { GalleryCard } from "./gallery-card";
import { MetricsRow } from "./metrics-row";
import {
  ContactCard,
  RecruiterSummaryCard,
  ResumeCard,
  TestimonialsCard,
} from "./info-cards";

export function Monogram() {
  return (
    <div
      aria-hidden="true"
      className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-[#0b1626]"
    >
      AP
    </div>
  );
}

function RichContent({ msg }) {
  switch (msg.type) {
    case "case-study": {
      const list = (msg.projectIds || []).map(getProject).filter(Boolean);
      if (!list.length) return null; // missing project id → text-only, never crash
      return (
        <div className="space-y-4">
          {list.map((p) => (
            <CaseStudyCard key={p.id} project={p} compact={Boolean(msg.compact)} />
          ))}
        </div>
      );
    }
    case "gallery":
      return <GalleryCard items={msg.gallery} />;
    case "metrics":
      return (
        <div className="rounded-2xl border border-line bg-elevated p-5 shadow-card">
          <MetricsRow metrics={msg.metrics} />
        </div>
      );
    case "resume":
      return <ResumeCard />;
    case "contact":
      return <ContactCard />;
    case "recruiter-summary":
      return <RecruiterSummaryCard />;
    case "testimonials":
      return <TestimonialsCard />;
    default:
      return null;
  }
}

export function ChatMessage({ msg }) {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25, ease: "easeOut" },
      };

  if (msg.role === "user") {
    return (
      <motion.div {...anim} className="flex justify-end">
        <p className="max-w-[85%] rounded-2xl rounded-br-md bg-[var(--bubble-user-bg)] px-4 py-2.5 text-[15px] leading-7 text-[var(--bubble-user-text)] sm:max-w-[70%]">
          {msg.text}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div {...anim} className="flex gap-3">
      <Monogram />
      <div className="min-w-0 flex-1 space-y-3">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-3">
          Apramit AI
        </p>
        {msg.text && (
          <p className="max-w-[65ch] text-[15px] leading-7 text-ink-1">{msg.text}</p>
        )}
        {msg.bullets?.length > 0 && (
          <ul className="m-0 max-w-[65ch] list-none space-y-1.5 p-0">
            {msg.bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-[15px] leading-7 text-ink-2">
                <span
                  aria-hidden="true"
                  className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong"
                />
                {b}
              </li>
            ))}
          </ul>
        )}
        <RichContent msg={msg} />
      </div>
    </motion.div>
  );
}
