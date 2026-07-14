// Starter prompts. `label` is shown on the chip; `text` becomes the user
// message; `key` routes directly to responses.js (no keyword matching).
export const SIDEBAR_PROMPTS = [
  { key: "best-project", label: "What's your best project?" },
  { key: "all-projects", label: "Show me everything you've built" },
  { key: "ai-experience", label: "How do you design AI products?" },
  { key: "design-process", label: "Walk me through your design process" },
  { key: "why-hire", label: "Why should we hire you?" },
  { key: "experience-timeline", label: "Give me your experience timeline" },
];

export const PRIMARY_PROMPTS = [
  { key: "best-project", label: "Best project" },
  { key: "recruiter-summary", label: "Recruiter mode ⚡" },
  { key: "ai-experience", label: "AI experience" },
  { key: "resume", label: "Resume" },
  { key: "contact", label: "Contact" },
];

// Contextual prompts for the case-study workspace (rail + Ask drawer).
// Keys route to existing scripted responses — nothing here is invented.
export const PROJECT_PROMPTS = {
  fitlyn: [
    { key: "fitlyn-research", label: "Show research" },
    { key: "fitlyn-screens", label: "See final screens" },
    { key: "fitlyn-impact", label: "Business impact" },
    { key: "ai-experience", label: "How you used AI" },
  ],
  tradeup: [
    { key: "tradeup-process", label: "How did you approach it?" },
    { key: "tradeup-screens", label: "See final screens" },
    { key: "industries", label: "Industries you've covered" },
    { key: "design-process", label: "Your overall process" },
  ],
  logile: [
    { key: "logile-approach", label: "Why these decisions?" },
    { key: "ai-experience", label: "Your AI design POV" },
    { key: "dashboards", label: "Dashboards & data UX" },
    { key: "contact", label: "Contact Apramit" },
  ],
};
