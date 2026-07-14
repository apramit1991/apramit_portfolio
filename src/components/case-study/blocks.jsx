import { profile } from "@/data/profile";

const label =
  "font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-ink";

function ImageFigure({ src, alt, caption }) {
  return (
    <figure className="m-0 overflow-hidden rounded-2xl border border-line bg-elevated shadow-card">
      <img
        src={encodeURI(src)}
        alt={alt || caption || profile.ui.imageFallbackAlt}
        loading="lazy"
        className="w-full bg-surface-2 object-contain"
      />
      {caption && (
        <figcaption className="px-4 py-3 font-mono text-[11px] leading-5 text-ink-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Gallery({ items }) {
  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.src}>
          <ImageFigure {...item} />
        </li>
      ))}
    </ul>
  );
}

function InsightCard({ finding, implication }) {
  return (
    <div className="rounded-2xl border border-line bg-elevated p-5 shadow-card">
      <p className={label}>Finding</p>
      <p className="mt-1.5 text-[15px] leading-7 text-ink-1">{finding}</p>
      {implication && (
        <>
          <p className={`${label} mt-4`}>Design implication</p>
          <p className="mt-1.5 text-[15px] leading-7 text-ink-2">{implication}</p>
        </>
      )}
    </div>
  );
}

function DecisionCard({ n, title, context, why, tradeoff, result, before, after }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-strong bg-elevated shadow-card">
      <div className="h-0.5 bg-gradient-to-r from-accent to-accent-strong" aria-hidden="true" />
      <div className="p-6">
        <p className={label}>Decision {n}</p>
        <h4 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-ink-1">
          {title}
        </h4>
        {context && <p className="mt-3 max-w-[70ch] text-[15px] leading-7 text-ink-2">{context}</p>}
        {(before || after) && <Comparison before={before} after={after} className="mt-4" />}
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {why && (
            <div>
              <dt className={label}>Why</dt>
              <dd className="m-0 mt-1 text-[15px] leading-7 text-ink-2">{why}</dd>
            </div>
          )}
          {tradeoff && (
            <div>
              <dt className={label}>Trade-off</dt>
              <dd className="m-0 mt-1 text-[15px] leading-7 text-ink-2">{tradeoff}</dd>
            </div>
          )}
          {result && (
            <div className="sm:col-span-2">
              <dt className={label}>Result</dt>
              <dd className="m-0 mt-1 text-[15px] leading-7 text-ink-1">{result}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}

function Comparison({ before, after, className = "" }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      <div className="rounded-xl border border-line bg-surface-2 p-4">
        <p className={label}>Before</p>
        <p className="mt-1.5 text-[15px] leading-7 text-ink-2">{before}</p>
      </div>
      <div className="rounded-xl border border-line bg-surface-2 p-4">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-success">
          After
        </p>
        <p className="mt-1.5 text-[15px] leading-7 text-ink-1">{after}</p>
      </div>
    </div>
  );
}

function Quote({ text, attribution }) {
  return (
    <figure className="m-0 border-l-2 border-accent-strong pl-5">
      <blockquote className="m-0 font-display text-xl font-medium leading-8 tracking-tight text-ink-1">
        “{text}”
      </blockquote>
      {attribution && (
        <figcaption className="mt-2 font-mono text-[11px] text-ink-3">— {attribution}</figcaption>
      )}
    </figure>
  );
}

function OutcomeGroups({ groups }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.heading} className="rounded-2xl border border-line bg-elevated p-5 shadow-card">
          <p className={label}>{g.heading}</p>
          <ul className="m-0 mt-2 list-none space-y-2 p-0">
            {g.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-[14px] leading-6 text-ink-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function BlockRenderer({ block }) {
  switch (block.type) {
    case "text":
      return <p className="max-w-[70ch] text-[16px] leading-8 text-ink-2">{block.body}</p>;
    case "image":
      return <ImageFigure src={block.src} alt={block.alt} caption={block.caption} />;
    case "gallery":
      return <Gallery items={block.items || []} />;
    case "insight":
      return <InsightCard finding={block.finding} implication={block.implication} />;
    case "decision":
      return <DecisionCard {...block} />;
    case "comparison":
      return <Comparison before={block.before} after={block.after} />;
    case "quote":
      return <Quote text={block.text} attribution={block.attribution} />;
    case "outcomes":
      return <OutcomeGroups groups={block.groups || []} />;
    default:
      return null;
  }
}
