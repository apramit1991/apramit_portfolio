import { ArrowLeft, Moon, Sparkles, Sun } from "lucide-react";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function CaseStudyHeader({
  data,
  sections,
  activeId,
  onJump,
  onBack,
  onAsk,
  theme,
  onToggleTheme,
}) {
  const dark = theme === "dark";
  const active = sections.find((s) => s.id === activeId);
  return (
    <div className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="flex h-14 items-center gap-2 px-3 sm:px-5">
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-xl px-3 text-[13px] font-semibold text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1 ${focusRing}`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span className="max-sm:hidden">Back to conversation</span>
          <span className="sm:hidden">Conversation</span>
        </button>
        <p className="min-w-0 truncate font-display text-[15px] font-semibold text-ink-1">
          {data.shortTitle}
        </p>
        <div className="ml-auto flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-pressed={dark}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1 ${focusRing}`}
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={onAsk}
            className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-accent px-3.5 text-[13px] font-semibold text-[#0b1626] transition-colors hover:bg-accent-strong sm:px-4 ${focusRing}`}
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span className="max-sm:hidden">Ask about this project</span>
            <span className="sm:hidden">Ask</span>
          </button>
        </div>
      </div>
      {/* mobile/tablet section jump — replaces the sticky side navigator */}
      <div className="border-t border-line px-3 pb-2.5 pt-2 md:hidden">
        <label className="sr-only" htmlFor="cs-section-select">
          Jump to section
        </label>
        <select
          id="cs-section-select"
          value={active?.id || sections[0]?.id}
          onChange={(e) => onJump(e.target.value)}
          className="w-full rounded-xl border border-line-strong bg-elevated px-3 py-2.5 text-[13px] font-medium text-ink-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
        >
          {sections.map((s) => (
            <option key={s.id} value={s.id}>
              Viewing: {s.number} {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
