import { cn } from "@/lib/utils";

export function PromptChips({ items, onSelect, disabled = false, label, className }) {
  if (!items?.length) return null;
  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex gap-2 max-sm:overflow-x-auto max-sm:pb-1 sm:flex-wrap", className)}
    >
      {items.map((item) => (
        <button
          key={`${item.key}:${item.label}`}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(item)}
          className="min-h-[44px] shrink-0 rounded-full border border-line bg-elevated px-4 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-line-strong hover:bg-surface-hover hover:text-ink-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
