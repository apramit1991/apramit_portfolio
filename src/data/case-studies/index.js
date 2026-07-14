import { fitlyn } from "./fitlyn";
import { tradeup } from "./tradeup";
import { logile } from "./logile";

const ALL = [fitlyn, tradeup, logile];

export const getCaseStudy = (slug) => ALL.find((c) => c.slug === slug) || null;

// Single next-project preview (spec: no carousel) — simple cycle.
export function getNextCaseStudy(slug) {
  const i = ALL.findIndex((c) => c.slug === slug);
  return ALL[(i + 1) % ALL.length];
}
