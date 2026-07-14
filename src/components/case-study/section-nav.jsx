import { cn } from "@/lib/utils";

function MetadataCard({ metadata }) {
  if (!metadata) return null;
  const rows = [
    ["Role", metadata.role],
    ["Duration", metadata.duration],
    ["Team", metadata.team],
    ["Platform", metadata.platform],
    ["Industry", metadata.industry],
  ].filter(([, v]) => v);
  return (
    <div className="mt-6 rounded-2xl border border-line bg-elevated p-4 shadow-card">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-ink">
        Project at a glance
      </p>
      <dl className="mt-3 space-y-2.5">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">{k}</dt>
            <dd className="m-0 mt-0.5 text-[12px] leading-5 text-ink-1">{v}</dd>
          </div>
        ))}
        {metadata.responsibilities?.length > 0 && (
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">
              Responsibilities
            </dt>
            <dd className="m-0 mt-1">
              <ul className="m-0 list-none space-y-1 p-0">
                {metadata.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2 text-[12px] leading-5 text-ink-2">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-strong"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}

export function SectionNav({ sections, activeId, onJump, metadata }) {
  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-14 hidden max-h-[calc(100dvh-3.5rem)] w-[230px] shrink-0 overflow-y-auto px-4 py-8 md:block"
    >
      <ul className="m-0 list-none space-y-0.5 p-0">
        {sections.map((s) => {
          const active = activeId === s.id;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onJump(s.id)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "flex min-h-[40px] w-full items-center gap-2.5 rounded-lg border-l-2 px-3 py-2 text-left text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
                  active
                    ? "border-accent-strong bg-surface-hover font-semibold text-ink-1"
                    : "border-transparent text-ink-3 hover:bg-surface-hover hover:text-ink-1"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px]",
                    active ? "text-accent-ink" : "text-ink-3"
                  )}
                >
                  {s.number}
                </span>
                {s.label}
              </button>
            </li>
          );
        })}
      </ul>
      <MetadataCard metadata={metadata} />
    </nav>
  );
}
