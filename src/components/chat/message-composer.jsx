import { useState } from "react";
import { ArrowUp } from "lucide-react";

import { profile } from "@/data/profile";

export function MessageComposer({ onSend, disabled = false }) {
  const [value, setValue] = useState("");
  const canSend = value.trim().length > 0 && !disabled;

  const submit = () => {
    if (!canSend) return;
    onSend(value);
    setValue("");
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  };

  return (
    <div className="border-t border-line bg-surface px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-6">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
        className="mx-auto flex w-full max-w-[860px] items-end gap-2 rounded-2xl border border-line-strong bg-elevated p-2 shadow-card focus-within:ring-2 focus-within:ring-[var(--ring)]"
      >
        <textarea
          rows={1}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder={profile.ui.composerPlaceholder}
          aria-label={profile.ui.composerPlaceholder}
          className="max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2.5 text-[15px] leading-6 text-ink-1 placeholder:text-ink-3 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!canSend}
          aria-label={profile.ui.sendLabel}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-[#0b1626] transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-elevated disabled:bg-surface-hover disabled:text-ink-3"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
      <p className="mx-auto mt-2 w-full max-w-[860px] text-center font-mono text-[11px] text-ink-3">
        Scripted answers from real case studies — no hallucinations, just receipts.
      </p>
    </div>
  );
}
