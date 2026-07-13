export function MetricsRow({ metrics }) {
  if (!metrics?.length) return null;
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col gap-0.5">
          <span className="font-display text-xl font-semibold tracking-tight text-ink-1">
            {m.value}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.09em] text-ink-3">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
