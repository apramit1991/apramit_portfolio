// Grounding for the LLM fallback, assembled from the SAME data the scripted
// site uses — so LLM answers can never drift from the curated facts. All public
// info (it's a portfolio); no secrets here. Relative imports only (no Vite `@`
// alias server-side). Leading underscore keeps Vercel from routing this as /api/_context.
import { profile } from "../src/data/profile.js";
import { projects } from "../src/data/projects.js";
import { responseMap } from "../src/data/responses.js";
import { fitlyn } from "../src/data/case-studies/fitlyn.js";
import { tradeup } from "../src/data/case-studies/tradeup.js";
import { logile } from "../src/data/case-studies/logile.js";

const caseStudy = (c) =>
  `## ${c.title} — ${c.eyebrow}
Role: ${c.recruiterSummary?.role || c.metadata?.role || ""}
${c.summary}
Value: ${c.valueProp}
Metrics: ${c.metrics.map((m) => `${m.value} ${m.label}`).join(" · ")}
Key decisions: ${(c.recruiterSummary?.keyDecisions || []).join(" | ")}
Impact: ${(c.recruiterSummary?.impact || []).join(" | ")}
Learned: ${c.recruiterSummary?.learned || ""}`;

// The curated scripted answers are already vetted facts — reuse their text.
const scriptedFacts = Object.entries(responseMap)
  .filter(([, v]) => v.text)
  .map(([k, v]) => `- (${k}) ${v.text}`)
  .join("\n");

export function buildContext() {
  return `# Apramit Pradhan — portfolio facts

## Identity
Name: ${profile.name}
Role: ${profile.title} (${profile.role})
Location: ${profile.location} (IST)
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
Bio: ${profile.greeting.body}

## Recruiter summary
${profile.recruiterSummary.bullets.map((b) => `- ${b}`).join("\n")}

## Testimonials
${profile.testimonials.map((t) => `- ${t.name} (${t.role}): "${t.quote}"`).join("\n")}

## Projects
${projects.map((p) => `- ${p.title}: ${p.subtitle} — ${p.description} [${p.tags.join(", ")}]`).join("\n")}

# Case studies
${[fitlyn, tradeup, logile].map(caseStudy).join("\n\n")}

# Vetted Q&A facts (curated and verified — safe to draw from)
${scriptedFacts}`;
}
