import { useEffect, useRef } from "react";

import { profile } from "@/data/profile";
import { PRIMARY_PROMPTS } from "@/data/prompts";
import { Avatar } from "./avatar";
import { ChatMessage } from "./chat-message";
import { PromptChips } from "./suggested-prompts";

function TypingIndicator() {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-8 w-8" />
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 rounded-2xl border border-line bg-elevated px-4 py-3.5"
      >
        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink-3" />
        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink-3" />
        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink-3" />
      </div>
      <span className="sr-only">{profile.ui.typingLabel}</span>
    </div>
  );
}

export function ChatThread({ messages, isTyping, onPrompt, scrollBoxRef, initialScrollTop }) {
  const endRef = useRef(null);
  const boxRef = useRef(null);
  const restoredRef = useRef(false);
  const hasActivity = messages.length > 0 || isTyping;

  // expose the scroll container so the router can save its position
  useEffect(() => {
    if (scrollBoxRef) scrollBoxRef.current = boxRef.current;
  });

  useEffect(() => {
    if (!restoredRef.current) {
      restoredRef.current = true;
      // returning from a case study: restore the saved spot instead of
      // auto-scrolling to the latest message
      if (initialScrollTop != null && boxRef.current) {
        boxRef.current.scrollTop = initialScrollTop;
        return;
      }
    }
    if (!hasActivity) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    endRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "end" });
  }, [messages, isTyping, hasActivity, initialScrollTop]);

  const last = messages[messages.length - 1];
  const followUps = !isTyping && last?.role === "assistant" ? last.prompts : null;

  return (
    <div ref={boxRef} className="min-h-0 flex-1 overflow-y-auto px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[860px] py-8">
        <header className="mb-8">
          <p className="text-3xl" aria-hidden="true">
            👋
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-1 sm:text-4xl">
            {profile.greeting.title}
          </h1>
          <p className="mt-3 max-w-[60ch] text-[15px] leading-7 text-ink-2">
            {profile.greeting.body}
          </p>
          <PromptChips
            className="mt-5"
            items={PRIMARY_PROMPTS}
            onSelect={onPrompt}
            disabled={isTyping}
            label="Suggested prompts"
          />
        </header>

        <div role="log" aria-live="polite" className="space-y-6">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} msg={msg} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>

        {followUps?.length > 0 && (
          <div className="mt-4 sm:pl-11">
            <PromptChips
              items={followUps}
              onSelect={onPrompt}
              label={profile.ui.chipGroupLabel}
            />
          </div>
        )}
        <div ref={endRef} aria-hidden="true" />
      </div>
    </div>
  );
}
