import { profile } from "@/data/profile";

export function GalleryCard({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3">
      {items.map((item) => (
        <li key={item.src}>
          <figure className="m-0 overflow-hidden rounded-xl border border-line bg-elevated shadow-card">
            <img
              src={encodeURI(item.src)}
              alt={item.caption || profile.ui.imageFallbackAlt}
              loading="lazy"
              className="aspect-[16/10] w-full bg-surface-2 object-cover object-top"
            />
            <figcaption className="px-3 py-2 font-mono text-[11px] leading-4 text-ink-3">
              {item.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
