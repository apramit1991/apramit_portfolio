import { useEffect, useRef } from "react";
import { Sparkles, X } from "lucide-react";

import { ChatMessage } from "@/components/chat/chat-message";
import { MessageComposer } from "@/components/chat/message-composer";
import { PromptChips } from "@/components/chat/suggested-prompts";
import { profile } from "@/data/profile";

// Contextual assistant: right-side drawer on desktop, bottom sheet on mobile
// (styled in chat.css). Native <dialog> = focus trap + Esc for free. Shares
// the ONE portfolio conversation — the visitor's history follows them here.
export function AskDrawer({ open, onClose, data, chat, prompts, onPrompt }) {
  const ref = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    endRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "end" });
  }, [open, chat.messages, chat.isTyping]);

  const recent = chat.messages.slice(-8);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      className="ask-drawer"
      aria-label={`Ask about ${data.title}`}
    >
      <div className="flex h-full flex-col bg-surface font-sans text-ink-1">
        <div className="flex h-14 shrink-0 items-center gap-2 border-b border-line px-4">
          <Sparkles className="h-4 w-4 text-accent-ink" aria-hidden="true" />
          <p className="min-w-0 truncate font-display text-[15px] font-semibold">
            Ask about {data.shortTitle}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl text-ink-2 transition-colors hover:bg-surface-hover hover:text-ink-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-4" role="log" aria-live="polite">
          {recent.length === 0 && (
            <p className="text-[14px] leading-6 text-ink-2">
              I answer from this case study and my real portfolio content — nothing invented.
              Pick a question or type your own.
            </p>
          )}
          {recent.map((msg) => (
            <ChatMessage key={msg.id} msg={msg} />
          ))}
          {chat.isTyping && (
            <p className="font-mono text-[11px] text-ink-3">{profile.ui.typingLabel}…</p>
          )}
          <div ref={endRef} aria-hidden="true" />
        </div>

        <div className="shrink-0 border-t border-line px-4 pb-1 pt-3">
          <PromptChips items={prompts} onSelect={onPrompt} disabled={chat.isTyping} label="Project questions" />
        </div>
        <MessageComposer onSend={(text) => chat.send(text)} disabled={chat.isTyping} />
      </div>
    </dialog>
  );
}
