import { Avatar } from "@/components/chat/avatar";
import { MessageComposer } from "@/components/chat/message-composer";
import { PromptChips } from "@/components/chat/suggested-prompts";
import { profile } from "@/data/profile";

// Condensed continuity rail (desktop lg+): recent exchange, project preview,
// contextual prompts, mini composer. Continuity, not primary navigation.
export function ConversationRail({ data, chat, prompts, onPrompt }) {
  const lastUser = [...chat.messages].reverse().find((m) => m.role === "user");
  const lastAssistant = [...chat.messages].reverse().find((m) => m.role === "assistant");

  return (
    <aside
      aria-label="Conversation"
      // xl: (1280px), not lg: (1024px) — below ~1180-1280px, rail + section
      // nav + content together leave the reading column under 500px wide
      className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-[300px] shrink-0 flex-col border-r border-line bg-surface-2 xl:flex"
    >
      <div className="flex items-center gap-3 px-5 pb-3 pt-5">
        <Avatar className="h-9 w-9" />
        <div className="min-w-0">
          <p className="truncate font-display text-[14px] font-semibold text-ink-1">
            {profile.name}
          </p>
          <p className="flex items-center gap-1.5 font-mono text-[10px] text-ink-3">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            Online — ask me anything
          </p>
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-3">
        {lastUser && (
          <p className="ml-6 rounded-2xl rounded-br-md bg-[var(--bubble-user-bg)] px-3 py-2 text-[13px] leading-6 text-[var(--bubble-user-text)]">
            {lastUser.text}
          </p>
        )}
        {lastAssistant?.text && (
          <p className="mr-2 line-clamp-4 rounded-2xl border border-line bg-elevated px-3 py-2 text-[13px] leading-6 text-ink-2">
            {lastAssistant.text}
          </p>
        )}
        {chat.isTyping && (
          <p className="font-mono text-[11px] text-ink-3">{profile.ui.typingLabel}…</p>
        )}

        <div className="flex items-center gap-3 rounded-xl border border-line bg-elevated p-3">
          <img
            src={encodeURI(data.heroImage)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-10 w-14 shrink-0 rounded-md bg-surface-2 object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-ink-1">{data.title}</p>
            <p className="font-mono text-[10px] text-ink-3">You're reading this case study</p>
          </div>
        </div>

        <p className="pt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-3">
          Ask about this project
        </p>
        <PromptChips items={prompts} onSelect={onPrompt} disabled={chat.isTyping} label="Project questions" />
      </div>

      <MessageComposer onSend={(text) => chat.send(text)} disabled={chat.isTyping} />
    </aside>
  );
}
