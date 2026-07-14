// Data-driven project registry — add a case study here (plus entries in
// responses.js/prompts.js) and the UI needs zero changes.
export const projects = [
  {
    id: "fitlyn",
    title: "Fitlyn",
    eyebrow: "B2B SaaS · Product UX · AI Workflows",
    subtitle: "Gym ERP — action-first operations platform",
    description:
      "An action-first platform to simplify dues, renewals, communication, and reporting — using real user insights and AI-assisted workflows.",
    tags: ["B2B SaaS", "Product UX", "AI Workflows"],
    metrics: [
      { value: "40%", label: "Less manual work" },
      { value: "25%", label: "Increase in renewals" },
      { value: "60%", label: "Faster reporting" },
    ],
    url: "/case-studies/fitlyn",
    ctaLabel: "Read the case study",
    image: "/assets/fitlyn/desktop-mock.png",
    imageAlt: "Fitlyn desktop dashboard mockup",
  },
  {
    id: "tradeup",
    title: "Trade Up",
    eyebrow: "Fintech · Mobile Product · UX Strategy",
    subtitle: "Mobile trading, redesigned for confidence",
    description:
      "An action-driven mobile trading experience to simplify onboarding, portfolio visibility, and decision-making.",
    tags: ["Fintech", "Mobile Product", "UX Strategy"],
    metrics: [
      { value: "1M+", label: "Downloads" },
      { value: "4.2/5", label: "Play Store rating" },
      { value: "35%", label: "Faster onboarding" },
    ],
    url: "/case-studies/tradeup",
    ctaLabel: "Read the case study",
    image: "/assets/tradeup-case/hero-trade-desk.webp",
    imageAlt: "Trade Up mobile trading app mockup",
  },
  {
    id: "logile",
    title: "Logile Workforce AI",
    eyebrow: "Workforce SaaS · AI Strategy · Decision Support",
    subtitle: "Shift changes as risk-ranked decisions",
    description:
      "Redesigned shift changes from request processing into risk-ranked, AI-assisted workforce decisions for retail managers, associates, and payroll teams.",
    tags: ["Workforce SaaS", "AI Strategy", "Decision Support"],
    metrics: [
      { value: "40%+", label: "Auto-resolved" },
      { value: "−25%", label: "Payroll errors" },
      { value: "<90s", label: "Decisions" },
    ],
    url: "/case-studies/logile",
    ctaLabel: "Read the case study",
    // Vector-only cover — this project has NO raster screens and NO gallery.
    image: "/assets/case-qms.svg",
    imageAlt: "Logile workforce AI case study illustration",
  },
];

export function getProject(id) {
  return projects.find((p) => p.id === id) || null;
}
