import {
  Download,
  FileText,
  FolderKanban,
  Linkedin,
  Mail,
  MessageSquarePlus,
  User,
  Zap,
} from "lucide-react";

import { profile } from "@/data/profile";
import { SIDEBAR_PROMPTS } from "@/data/prompts";
import { cn } from "@/lib/utils";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

const NAV = [
  { icon: MessageSquarePlus, label: "New conversation", action: "reset" },
  { icon: FolderKanban, label: "Projects", key: "all-projects" },
  { icon: FileText, label: "Resume", key: "resume" },
  { icon: User, label: "About me", key: "about-me" },
  { icon: Mail, label: "Contact", key: "contact" },
];

export function Sidebar({ onPrompt, onReset, recruiterMode, onRecruiterToggle, disabled }) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center gap-3 px-5 pb-4 pt-6">
        <div
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-[#0b1626]"
        >
          {profile.monogram}
        </div>
        <div>
          <p className="font-display text-[15px] font-semibold leading-tight text-ink-1">
            {profile.name}
          </p>
          <p className="font-mono text-[11px] text-ink-3">{profile.role}</p>
        </div>
      </div>

      <nav aria-label="Portfolio sections" className="px-3">
        <ul className="m-0 list-none space-y-0.5 p-0">
          {NAV.map(({ icon: Icon, label, key, action }) => (
            <li key={label}>
              <button
                type="button"
                disabled={disabled && action !== "reset"}
                onClick={() => (action === "reset" ? onReset() : onPrompt({ label, key }))}
                className={cn(
                  "flex min-h-[44px] w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[13px] font-medium text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1 disabled:cursor-not-allowed disabled:opacity-50",
                  focusRing
                )}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-5 min-h-0 flex-1 overflow-y-auto px-3">
        <p className="px-3 pb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-3">
          {profile.ui.promptsHeader}
        </p>
        <ul className="m-0 list-none space-y-1 p-0">
          {SIDEBAR_PROMPTS.map((prompt) => (
            <li key={prompt.key}>
              <button
                type="button"
                disabled={disabled}
                onClick={() => onPrompt(prompt)}
                className={cn(
                  "min-h-[44px] w-full rounded-xl border border-line bg-elevated px-3 py-2 text-left text-[13px] leading-5 text-ink-2 transition-colors hover:border-line-strong hover:bg-surface-hover hover:text-ink-1 disabled:cursor-not-allowed disabled:opacity-50",
                  focusRing
                )}
              >
                {prompt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-4 mt-4 overflow-hidden rounded-2xl border border-line-strong bg-elevated shadow-card">
        <div className="h-0.5 bg-gradient-to-r from-accent to-accent-strong" aria-hidden="true" />
        <div className="flex items-center gap-3 p-4">
          <Zap className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-ink-1">Recruiter Mode</p>
            <p className="text-[12px] text-ink-3">Get a 90-second overview</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={recruiterMode}
            aria-label="Recruiter mode"
            disabled={disabled}
            onClick={() => onRecruiterToggle(!recruiterMode)}
            className={cn(
              "-m-2 flex min-h-[44px] min-w-[44px] items-center justify-center p-2",
              focusRing,
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            <span
              className={cn(
                "relative h-6 w-11 rounded-full transition-colors",
                recruiterMode ? "bg-success" : "border border-line-strong bg-surface-hover"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
                  recruiterMode ? "left-[22px]" : "left-0.5"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 px-5 py-4">
        <div className="flex gap-2">
          <a
            aria-label="LinkedIn profile"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1",
              focusRing
            )}
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            aria-label="Email Apramit"
            href={`mailto:${profile.email}`}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1",
              focusRing
            )}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            aria-label="Download resume"
            href={profile.resumeUrl}
            download
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1",
              focusRing
            )}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <a
          href={profile.classicUrl}
          className={cn(
            "rounded-lg font-mono text-[11px] text-ink-3 underline-offset-2 transition-colors hover:text-ink-1 hover:underline",
            focusRing
          )}
        >
          Classic portfolio ↗
        </a>
      </div>
    </div>
  );
}
