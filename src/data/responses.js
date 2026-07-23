// Scripted response map. Every fact here is verified against the live
// case studies — do not add metrics/claims that aren't in them.
// Message types: text | case-study | gallery | metrics | resume | contact | recruiter-summary

export const responseMap = {
  "best-project": {
    type: "case-study",
    projectIds: ["fitlyn"],
    text: "Tough call, but I'd say Fitlyn — a gym ERP I designed end to end, from problem discovery through implementation alignment. It's my best proof that design drives revenue: an action-first platform that converted 4 gym clients into paying customers. It's also where I built my AI-assisted design workflow. Here's the case study.",
    prompts: [
      { label: "How did you research it?", key: "fitlyn-research" },
      { label: "Show me the screens", key: "fitlyn-screens" },
      { label: "What was the impact?", key: "fitlyn-impact" },
      { label: "See all projects", key: "all-projects" },
    ],
  },
  "fitlyn-research": {
    type: "gallery",
    gallery: [
      { src: "/assets/fitlyn/persona-owner.png", caption: "Gym owner persona" },
      { src: "/assets/fitlyn/ia.png", caption: "Information architecture" },
    ],
    text: "Indian gym owners were running operations across registers, Excel, WhatsApp, and memory — but the real issue wasn't scattered tools, it was not knowing what needed action today. I mapped five breakdowns: membership tracking chaos, payment follow-ups, renewal leakage, scattered communication, and zero reporting visibility. Then I ran three iteration studies — on action-first visibility, navigation structure, and AI usage vs product judgment.",
    prompts: [
      { label: "Show me the screens", key: "fitlyn-screens" },
      { label: "What was the impact?", key: "fitlyn-impact" },
      { label: "Your overall process", key: "design-process" },
      { label: "How you use AI", key: "ai-experience" },
    ],
  },
  "fitlyn-screens": {
    type: "gallery",
    gallery: [
      { src: "/assets/fitlyn/dashboard.PNG", caption: "Dashboard — action-first command center" },
      { src: "/assets/fitlyn/memberships.PNG", caption: "Member Management" },
      { src: "/assets/fitlyn/plans.PNG", caption: "Membership Plans" },
      { src: "/assets/fitlyn/payment.PNG", caption: "Payments" },
      { src: "/assets/fitlyn/messaging.PNG", caption: "Messaging" },
      { src: "/assets/fitlyn/reports.PNG", caption: "Reports" },
    ],
    text: "Six final screens, all built around one principle: show what needs action today. The Dashboard is an action-first command center; Member Management, Plans, Payments, Messaging, and Reports each close a specific operational gap I found in discovery.",
    prompts: [
      { label: "What was the impact?", key: "fitlyn-impact" },
      { label: "The research behind it", key: "fitlyn-research" },
      { label: "Next project: Trade Up", key: "tradeup" },
      { label: "All projects", key: "all-projects" },
    ],
  },
  "fitlyn-impact": {
    type: "metrics",
    metrics: [
      { value: "40%", label: "Less manual work" },
      { value: "25%", label: "Increase in renewals" },
      { value: "60%", label: "Faster reporting" },
    ],
    text: "Fitlyn changed how gyms operate day to day: owners got operational clarity and revenue visibility instead of memory and spreadsheets. The clearest signal that it worked — 4 gym clients converted to paying customers.",
    prompts: [
      { label: "Next: Trade Up", key: "tradeup" },
      { label: "Next: Logile AI", key: "logile" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Your process", key: "design-process" },
    ],
  },
  tradeup: {
    type: "case-study",
    projectIds: ["tradeup"],
    text: "Trade Up is an action-driven mobile trading experience I designed to simplify onboarding, portfolio visibility, and decision-making. The core tension: make markets feel easier to read without reducing depth — speed mattered, but trust mattered more in the moments before action. It's live across 150+ brokerages.",
    prompts: [
      { label: "How did you approach it?", key: "tradeup-process" },
      { label: "Show me the screens", key: "tradeup-screens" },
      { label: "Industries you've covered", key: "industries" },
      { label: "All projects", key: "all-projects" },
    ],
  },
  "tradeup-process": {
    type: "gallery",
    gallery: [
      { src: "/assets/tradeup-case/aarav-persona.PNG", caption: "Aarav — retail investor persona" },
      { src: "/assets/tradeup-case/quote.png", caption: "The user quote that anchored the design" },
    ],
    text: "I started with research and synthesis around one retail investor, Aarav, whose words shaped everything: \"I want to feel in control, but not overwhelmed.\" From there: flow definition, screen refinement, then validation and UAT. Two solutions I'm proud of — Quick Trade Mode, which gets you from intent to trade in 2 steps, and Smart Alerts.",
    prompts: [
      { label: "Show me the screens", key: "tradeup-screens" },
      { label: "Your overall process", key: "design-process" },
      { label: "Next: Logile AI", key: "logile" },
    ],
  },
  "tradeup-screens": {
    type: "gallery",
    gallery: [
      { src: "/assets/tradeup-case/Market.png", caption: "Market" },
      { src: "/assets/tradeup-case/Portfolio (1).png", caption: "Portfolio" },
      { src: "/assets/tradeup-case/Watchlist.png", caption: "Watchlist" },
      { src: "/assets/tradeup-case/Rewards.png", caption: "Rewards" },
    ],
    text: "Here's the core of the experience — Market, Portfolio, Watchlist, and Rewards. Every screen balances density with readability: enough market context to decide, never so much that it erodes confidence before action.",
    prompts: [
      { label: "How did you approach it?", key: "tradeup-process" },
      { label: "Next: Logile AI", key: "logile" },
      { label: "Dashboards & data UX", key: "dashboards" },
      { label: "All projects", key: "all-projects" },
    ],
  },
  logile: {
    type: "case-study",
    projectIds: ["logile"],
    text: "At Logile, I redesigned shift changes from request processing into risk-ranked, AI-assisted workforce decisions for retail managers, hourly associates, and payroll teams. Shift changes sit at the intersection of coverage, cost, compliance, and fairness — so I treated it as a product strategy problem, not a screens problem.",
    prompts: [
      { label: "How did you approach it?", key: "logile-approach" },
      { label: "Your AI design POV", key: "ai-experience" },
      { label: "Dashboards & data UX", key: "dashboards" },
      { label: "All projects", key: "all-projects" },
    ],
  },
  "logile-approach": {
    type: "text",
    text: "I mapped the full workflow — Request → Review → Approve → Execute → Reconcile — prioritized risks, and defined clear automation boundaries. The solution: a risk-ranked manager inbox, inline decision signals, an explainable audit trail, and alternative paths. My rule: AI is the decision-support layer, not a decorative feature — every recommendation ships with its rationale.",
    prompts: [
      { label: "Your AI design POV", key: "ai-experience" },
      { label: "Best project: Fitlyn", key: "best-project" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Contact", key: "contact" },
    ],
  },
  "all-projects": {
    type: "case-study",
    projectIds: ["fitlyn", "tradeup", "logile"],
    compact: true,
    text: "Three case studies, one through-line: I take operationally messy domains and turn them into action-first products. Fitlyn (gym operations), Trade Up (retail trading), and Logile (workforce decisions) — each started with real workflow research and ended in measurable outcomes.",
    prompts: [
      { label: "Which is your best?", key: "best-project" },
      { label: "Trade Up", key: "tradeup" },
      { label: "Logile AI", key: "logile" },
      { label: "Industries you've covered", key: "industries" },
    ],
  },
  industries: {
    type: "text",
    text: "I've designed across fintech (Wave 2 trading app — 1M+ downloads), gaming (casino systems and real-time operator dashboards at IGT), agri-tech (Farm2Plate at Paramount), workforce SaaS (Logile), fitness operations (Fitlyn), and banking, insurance, and logistics at Birlasoft. The pattern: complex, data-intensive domains where clarity and speed of decision-making are the product.",
    prompts: [
      { label: "All projects", key: "all-projects" },
      { label: "Experience timeline", key: "experience-timeline" },
      { label: "Dashboards & data UX", key: "dashboards" },
      { label: "Why hire you?", key: "why-hire" },
    ],
  },
  "design-process": {
    type: "text",
    text: "Across every case study I follow the same six-phase pattern: Problem Discovery → UX Strategy → Information Architecture → Prototype & Exploration → Validation & Iteration → Implementation Alignment. That's not a framework I picked up — it's the actual shape of how Fitlyn, Trade Up, and Logile each ran. The constant: start with what users need to act on, validate with real iteration studies, and stay involved through build.",
    prompts: [
      { label: "Fitlyn research", key: "fitlyn-research" },
      { label: "Trade Up process", key: "tradeup-process" },
      { label: "How you use AI", key: "ai-experience" },
      { label: "Design systems", key: "design-systems" },
    ],
  },
  "ai-experience": {
    type: "text",
    text: "AI is my strongest differentiator, on both sides of the work. Designing AI products: at Logile, AI is the decision-support layer — auto-suggestions, anomaly flagging, coverage-gap alerts, and recommendations that always show their rationale. Designing with AI: on Fitlyn I ran an AI workflow toolkit (ChatGPT, Claude, UX Pilot, Lovable) and studied where AI accelerates versus where product judgment must lead. My bar: usable, explainable, grounded in real workflow needs.",
    prompts: [
      { label: "Logile case study", key: "logile" },
      { label: "Fitlyn case study", key: "best-project" },
      { label: "Your process", key: "design-process" },
      { label: "Why hire you?", key: "why-hire" },
    ],
  },
  dashboards: {
    type: "text",
    text: "Dashboards are a specialization of mine, and my POV is simple: a dashboard should answer \"what needs action today,\" not just display data. I've applied that on Fitlyn's action-first command center, real-time casino operator dashboards at IGT, Logile's risk-ranked decision inbox, and Trade Up's portfolio views — where readability had to survive real market density.",
    prompts: [
      { label: "Fitlyn dashboard screens", key: "fitlyn-screens" },
      { label: "Logile case study", key: "logile" },
      { label: "Trade Up screens", key: "tradeup-screens" },
      { label: "Why hire you?", key: "why-hire" },
    ],
  },
  "why-hire": {
    type: "metrics",
    metrics: [
      { value: "11+", label: "Years experience" },
      { value: "1M+", label: "App downloads" },
      { value: "4.2/5", label: "Play Store rating" },
      { value: "3+", label: "Complex domains" },
    ],
    text: "Three reasons. I ship outcomes, not screens — 1M+ downloads, 4 paying B2B clients, measurable workflow gains. I specialize where it's hardest: complex workflows, dashboards, AI product UX, and design systems. And people I've worked with say it best — \"an innate ability to take complex concepts and translate them into clean, intuitive, user-friendly designs\" (Sharwan Singh, Products @ Sapiens).",
    prompts: [
      { label: "Recruiter mode ⚡", key: "recruiter-summary" },
      { label: "Testimonials", key: "testimonials" },
      { label: "Download resume", key: "resume" },
      { label: "Contact", key: "contact" },
    ],
  },
  "experience-timeline": {
    type: "resume",
    bullets: [
      "UI/UX Designer III · IGT (Jun 2025–Mar 2026) — casino systems, operator dashboards, real-time monitoring",
      "UI/UX Designer · Paramount Software Solutions (Jul 2023–Apr 2025) — Farm2Plate agri-tech, SAFe Agile",
      "Technical Lead · Birlasoft (Dec 2019–Jul 2023) — banking, insurance, logistics; design systems",
      "Independent Product Design Consultant (Nov 2018–Dec 2019) — ecommerce conversion",
      "Senior Software Engineer · 63 moons (May 2016–Nov 2018) — Wave 2 trading app, 1M+ downloads",
      "Software Engineer · Capgemini (Mar 2014–Apr 2016) — frontend HTML/CSS/JS",
    ],
    text: "11+ years, six roles, from engineering to design leadership:",
    prompts: [
      { label: "Credentials & awards", key: "credentials" },
      { label: "Testimonials", key: "testimonials" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Contact", key: "contact" },
    ],
  },
  testimonials: {
    type: "testimonials",
    text: "Don't take my word for it — here's what people I've worked with say:",
    prompts: [
      { label: "Why hire you?", key: "why-hire" },
      { label: "Experience timeline", key: "experience-timeline" },
      { label: "Contact", key: "contact" },
    ],
  },
  credentials: {
    type: "text",
    text: "Certifications: UXcel Product Designer (2025), Google UX Design Professional Certificate (2022), and Certified Usability Analyst (in progress). Recognition: Young Guns Fast-Track at IIT Bombay (2022), the Farm2Plate Customer Delight award, and Star of the Month (May 2024). Foundation: B.Tech in Computer Science (2009–2013) — which is why I speak fluent engineer.",
    prompts: [
      { label: "Experience timeline", key: "experience-timeline" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Download resume", key: "resume" },
    ],
  },
  resume: {
    type: "resume",
    text: "Here's my resume — 11+ years across enterprise SaaS, AI-driven interfaces, and data-intensive dashboards, currently open to senior product roles. Grab the PDF below, and if anything's worth a conversation, I usually respond within 24 hours.",
    prompts: [
      { label: "Experience timeline", key: "experience-timeline" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Contact", key: "contact" },
    ],
  },
  contact: {
    type: "contact",
    text: "I'd love to talk — I'm open to senior product roles and usually respond within 24 hours. Email me at pradhan.apramit@gmail.com, connect on LinkedIn, or grab my resume below.",
    prompts: [
      { label: "Download resume", key: "resume" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Best project", key: "best-project" },
    ],
  },
  "about-me": {
    type: "text",
    text: "I'm a Lead Product Designer based in Bhubaneswar, India, with 11+ years across enterprise SaaS, AI-driven interfaces, and data-intensive dashboards — in fintech, gaming, and agri-tech. My one-liner: I turn complex systems into intuitive, scalable products that improve clarity, speed, and decision-making. I specialize in complex workflow simplification, dashboard and analytics UX, AI product experiences, and design systems.",
    prompts: [
      { label: "Your process", key: "design-process" },
      { label: "Industries", key: "industries" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Contact", key: "contact" },
    ],
  },
  "design-systems": {
    type: "text",
    text: "Design systems are one of my four specializations — for me they're about team alignment, not just component libraries. As Technical Lead at Birlasoft I built and maintained design systems across banking, insurance, and logistics products, keeping multiple teams shipping consistently. My engineering background (HTML/CSS/JS) helps me build systems developers actually adopt.",
    prompts: [
      { label: "Your process", key: "design-process" },
      { label: "Experience timeline", key: "experience-timeline" },
      { label: "Why hire you?", key: "why-hire" },
    ],
  },
  availability: {
    type: "text",
    text: "Happy to get logistics out of the way. I'm open to senior product roles and work remote-first from Bhubaneswar, India (IST) — I've collaborated across time zones for years. I'm also open to contract or freelance engagements, not just full-time. Notice period is roughly 60–90 days. Fastest way forward is a quick email — I usually reply within 24 hours.",
    prompts: [
      { label: "Why hire you?", key: "why-hire" },
      { label: "Download resume", key: "resume" },
      { label: "Contact", key: "contact" },
      { label: "Experience timeline", key: "experience-timeline" },
    ],
  },
  "team-leadership": {
    type: "text",
    text: "I've led and mentored teams of 5+, most formally as Technical Lead at Birlasoft — where I kept multiple product teams (banking, insurance, logistics) shipping consistently through shared design systems. Day to day that means partnering tightly with PMs and engineers, aligning stakeholders around the user problem before pixels, and coaching designers on turning complex workflows into something usable. My engineering background lets me meet developers where they are, which makes that alignment far less lossy.",
    prompts: [
      { label: "Design systems", key: "design-systems" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Experience timeline", key: "experience-timeline" },
      { label: "Testimonials", key: "testimonials" },
    ],
  },
  failures: {
    type: "text",
    text: "The honest version of this is about tradeoffs, not disasters. On Logile's workforce AI, my hardest call was where to draw the automation line: auto-resolving more would have been faster, but would have quietly eroded manager trust the first time a bad shift slipped through. I kept AI as a decision-support layer with visible rationale instead of full automation — trading some speed for trust. If I redid it, I'd invest even earlier in the explainability of edge cases, since that's where confidence is won or lost. My rule when speed and trust conflict in a decision-heavy product: protect trust.",
    prompts: [
      { label: "Logile case study", key: "logile" },
      { label: "Your AI design POV", key: "ai-experience" },
      { label: "Your process", key: "design-process" },
      { label: "Why hire you?", key: "why-hire" },
    ],
  },
  "career-story": {
    type: "text",
    text: "I started as a software engineer — Capgemini, then 63 moons, where I helped build the Wave 2 trading app (1M+ downloads). Writing front-end code, I kept gravitating to the \"why is this confusing?\" questions more than the \"how do I build it?\" ones, so I moved into design deliberately: an independent product-design consultancy, then design roles at Birlasoft, Paramount, and IGT. That engineering foundation is now my edge — I design systems developers actually adopt, and I speak fluent engineer in every handoff. Working style: start with what the user needs to act on, validate with real iteration, and stay involved through build.",
    prompts: [
      { label: "Experience timeline", key: "experience-timeline" },
      { label: "Why hire you?", key: "why-hire" },
      { label: "Your process", key: "design-process" },
      { label: "About you", key: "about-me" },
    ],
  },
  tools: {
    type: "text",
    text: "Figma is home base — design, prototyping, and dev handoff — with Adobe XD in the mix from earlier work. I lean on an AI workflow toolkit (ChatGPT, Claude, UX Pilot, Lovable) where it genuinely accelerates, and I'm deliberate about where product judgment has to lead instead. Underneath it all is a front-end background (HTML/CSS/JS) that keeps my prototypes realistic and my handoffs buildable. Methods-wise: workflow mapping, persona and IA work, iteration studies, and validation/UAT — all visible in the case studies.",
    prompts: [
      { label: "How you use AI", key: "ai-experience" },
      { label: "Your process", key: "design-process" },
      { label: "Design systems", key: "design-systems" },
      { label: "Fitlyn research", key: "fitlyn-research" },
    ],
  },
  greeting: {
    type: "text",
    text: "Hi! Good to have you here. This portfolio works like a conversation — ask me about my projects, process, or experience, or tap one of the prompts below. If you're in a hurry, try Recruiter mode for the 90-second version.",
    prompts: [
      { label: "Best project", key: "best-project" },
      { label: "About you", key: "about-me" },
      { label: "Recruiter mode ⚡", key: "recruiter-summary" },
      { label: "Why hire you?", key: "why-hire" },
    ],
  },
  "salary-redirect": {
    type: "contact",
    text: "Fair question — but compensation is a conversation I'd rather have directly, once we both know there's a fit. I'm open to senior product roles and usually respond within 24 hours. Reach me at pradhan.apramit@gmail.com or on LinkedIn.",
    prompts: [
      { label: "Contact", key: "contact" },
      { label: "Download resume", key: "resume" },
      { label: "Why hire you?", key: "why-hire" },
    ],
  },
  "recruiter-summary": {
    type: "recruiter-summary",
    text: "No fluff — here's the scan-friendly version.",
    prompts: [
      { label: "Download resume", key: "resume" },
      { label: "Contact Apramit", key: "contact" },
      { label: "Best project", key: "best-project" },
    ],
  },
};

// Ordered — specific before generic, first match wins. Case-insensitive.
// New topics (availability/team/failures/career/tools) sit above the generic
// project/experience catch-alls so their synonyms win before broader rules.
export const keywordRules = [
  { match: /^\s*(hi|hello|hey|namaste|yo)\b/i, responseKey: "greeting" },
  { match: /salar|compensation|\bctc\b|\bpay\b|\brate\b|budget|package|expectation/i, responseKey: "salary-redirect" },
  { match: /remote|relocat|on.?site|hybrid|notice period|freelance|contract|availab|start date|when can you (start|join)|work authoriz|visa|\bwfh\b|time.?zone/i, responseKey: "availability" },
  { match: /\bfail|failure|mistake|went wrong|didn.?t work|regret|\bredo\b|trade.?off|tough(est)? (call|decision)|hard(est)? (call|decision)|weakness/i, responseKey: "failures" },
  { match: /\bteam\b|\blead(er|ing|ership)?\b|mentor|manag(e|ing|ement)|report to|\breports\b|stakeholder|cross.?functional|collaborat|work(ed|ing)? with (pm|engineer|dev|product)/i, responseKey: "team-leadership" },
  { match: /fitlyn|gym|erp/i, responseKey: "best-project" },
  { match: /trade|trading|fintech|stock|invest/i, responseKey: "tradeup" },
  { match: /logile|shift|workforce|schedul/i, responseKey: "logile" },
  { match: /dashboard|analytic|data.?viz/i, responseKey: "dashboards" },
  { match: /testimonial|reference|recommend/i, responseKey: "testimonials" },
  { match: /cert|credential|award|education|degree/i, responseKey: "credentials" },
  { match: /\bai\b|artificial intelligence|machine learning|\bllm\b/i, responseKey: "ai-experience" },
  { match: /\btool|figma|adobe|\bxd\b|prototyp|hand.?off|accessib|\ba11y\b|software (do you|you use)|tech stack|methodolog/i, responseKey: "tools" },
  { match: /design system/i, responseKey: "design-systems" },
  { match: /why design|why did you (switch|move|transition)|switch(ed)? (to|from)|transition|journey|became? a designer|get into design|from engineering|engineer.*design|design.*engineer|working style|your story/i, responseKey: "career-story" },
  { match: /process|method|research|approach/i, responseKey: "design-process" },
  { match: /resume|\bcv\b|download/i, responseKey: "resume" },
  { match: /experience|career|timeline|background|history|worked/i, responseKey: "experience-timeline" },
  { match: /hire|why you|value|strength|superpower|\bfit\b/i, responseKey: "why-hire" },
  { match: /contact|email|interview|reach|call|linkedin|touch/i, responseKey: "contact" },
  { match: /industr|domain|sector/i, responseKey: "industries" },
  { match: /all projects|portfolio|everything|other project/i, responseKey: "all-projects" },
  { match: /recruiter|90 sec|summary|tl;?dr/i, responseKey: "recruiter-summary" },
  { match: /best|favou?rite|proud|project|work|case stud/i, responseKey: "best-project" },
  { match: /about|who are you|yourself|bio/i, responseKey: "about-me" },
];

export const fallback = {
  type: "text",
  text: "Great question — and one I don't have a scripted answer for yet. This portfolio runs on curated, receipts-backed responses rather than improvised ones. If it's about my work, availability, or background, one of these will get you there — or just email me and ask directly:",
  prompts: [
    { label: "About you", key: "about-me" },
    { label: "All projects", key: "all-projects" },
    { label: "Why hire you?", key: "why-hire" },
    { label: "Recruiter mode ⚡", key: "recruiter-summary" },
    { label: "Contact", key: "contact" },
  ],
};
