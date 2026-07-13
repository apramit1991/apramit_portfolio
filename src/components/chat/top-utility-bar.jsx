import { Download, Menu, Moon, Sun } from "lucide-react";

import { profile } from "@/data/profile";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function TopUtilityBar({ theme, onThemeToggle, onMenu }) {
  const dark = theme === "dark";
  return (
    <header className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3 sm:px-6">
      <button
        type="button"
        onClick={onMenu}
        aria-label="Open menu"
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1 md:hidden ${focusRing}`}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      <p className="flex min-w-0 items-center gap-2 text-[13px] text-ink-2">
        <span className="h-2 w-2 shrink-0 rounded-full bg-success" aria-hidden="true" />
        <span className="truncate">{profile.availability}</span>
      </p>

      <div className="ml-auto flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onThemeToggle}
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
        <a
          href={profile.resumeUrl}
          download
          className={`hidden min-h-[44px] items-center gap-2 rounded-xl border border-line-strong px-4 text-[13px] font-semibold text-ink-1 transition-colors hover:bg-surface-hover sm:inline-flex ${focusRing}`}
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </header>
  );
}
