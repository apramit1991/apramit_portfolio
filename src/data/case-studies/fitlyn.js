// Generated from the existing case-study pages — every fact is sourced,
// nothing invented. Edit copy here; the template renders whatever is present.
export const fitlyn = {
  "slug": "fitlyn",
  "title": "Fitlyn",
  "shortTitle": "Fitlyn",
  "eyebrow": "Gym ERP Case Study",
  "categories": [
    "B2B SaaS",
    "Product UX",
    "AI Workflows"
  ],
  "metrics": [
    {
      "value": "40%",
      "label": "Less manual work"
    },
    {
      "value": "25%",
      "label": "Increase in renewals"
    },
    {
      "value": "60%",
      "label": "Faster reporting"
    }
  ],
  "heroImage": "/assets/fitlyn/desktop-mock.png",
  "heroImageAlt": "Fitlyn desktop dashboard mockup",
  "valueProp": "An action-first gym ERP that turns scattered manual operations into one system for dues, renewals, communication, and reporting.",
  "summary": "Fitlyn is a gym operations platform I designed end-to-end for Indian gym owners still running dues, renewals, communication, and reporting across registers, Excel, WhatsApp, and memory. I turned that fragmented reality into an action-first product system — and the direction converted 4 gym clients into paying customers.",
  "metadata": {
    "role": "End-to-end UX / Product Designer",
    "platform": "Web application",
    "industry": "Fitness operations / B2B SaaS",
    "responsibilities": [
      "Problem framing and UX strategy from operator conversations",
      "Information architecture structured around operational frequency",
      "AI-assisted UI exploration (ChatGPT, Claude, UX Pilot, Lovable) with human-led decisions",
      "High-fidelity design of Dashboard, Members, Plans, Payments, Messaging, and Reports",
      "Dev-ready structure and implementation alignment"
    ]
  },
  "recruiterSummary": {
    "role": "End-to-end UX / Product Designer on Fitlyn, a gym operations SaaS for owners, managers, and staff",
    "keyDecisions": [
      "Cut the feature-rich dashboard down to action-first visibility: pending dues, expiring members, recent payments",
      "Reorganized navigation around operator routines (task-based) instead of feature-based modules",
      "Used AI (ChatGPT, Claude, UX Pilot, Lovable) for fast exploration, then filtered with business logic and usability judgment"
    ],
    "impact": [
      "40% less manual work",
      "25% increase in renewals",
      "60% faster reporting",
      "4 gym clients converted into paying customers"
    ],
    "learned": "AI accelerates exploration, but product direction still depends on user context, business priority, and human judgment — the most usable direction beats the most elaborate one."
  },
  "sections": [
    {
      "id": "overview",
      "number": "01",
      "label": "Overview",
      "title": "Indian gyms were running daily operations across registers, Excel, WhatsApp, and memory",
      "intro": "Fitlyn started from a practical operating gap, not a feature idea.",
      "blocks": [
        {
          "type": "text",
          "body": "Fitlyn is a gym management SaaS built around daily admin workflows — memberships, payments, attendance, and reporting. Its users are gym owners, managers, and staff: busy operators who need fast access to revenue-critical tasks. Memberships, dues, renewals, communication, and reporting were spread across disconnected tools, making routine work harder to track and easier to miss."
        },
        {
          "type": "text",
          "body": "As the end-to-end UX / Product Designer, I shaped the problem framing, information architecture, interaction direction, and the high-fidelity system. I decided where AI could speed up exploration without driving the decisions — using it as an accelerator across product framing, UI exploration, and implementation-near prototyping, then converging with user insight and business judgment."
        },
        {
          "type": "outcomes",
          "groups": [
            {
              "heading": "Challenge",
              "items": [
                "Manual, scattered operations across registers, Excel, and WhatsApp created friction and renewal leakage."
              ]
            },
            {
              "heading": "Approach",
              "items": [
                "An action-first system that surfaces dues, renewals, and follow-ups before analytics, shaped through AI-assisted exploration and human-led decisions."
              ]
            },
            {
              "heading": "Outcome",
              "items": [
                "Product-ready screens grounded in operational usability — and 4 gym clients converted into paying customers."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "problem",
      "number": "02",
      "label": "Problem",
      "title": "The real issue was not missing software — it was not knowing what needed action today",
      "blocks": [
        {
          "type": "text",
          "body": "The most important work was revenue-critical and time-sensitive: dues, renewals, reminders, payments, and reporting visibility. When those signals were scattered, gym owners had to reconstruct priorities from memory and chats instead of seeing them clearly in one place. The product challenge was not visual polish — it was making recurring operational work easier to see, prioritize, and execute."
        },
        {
          "type": "text",
          "body": "Five breakdowns kept repeating: membership tracking chaos across disconnected trackers; payment follow-ups that depended on memory instead of clear queues; renewal leakage when no system surfaced expiring members early; scattered WhatsApp communication with low auditability; and reporting that never connected collections, attendance, and retention behavior."
        },
        {
          "type": "comparison",
          "before": "Operators remembered who was due, chased payments through WhatsApp threads, and tracked members in Excel sheets and physical registers.",
          "after": "One reliable system where dues, renewals, reminders, and reporting are visible, prioritized, and actionable from the first screen."
        }
      ]
    },
    {
      "id": "research",
      "number": "03",
      "label": "Research",
      "title": "Action mattered more than analytics",
      "intro": "One insight kept repeating in operator conversations and walkthroughs — and it became the filter for every product decision that followed.",
      "blocks": [
        {
          "type": "quote",
          "text": "I just need to know who has not paid today — everything else is secondary.",
          "attribution": "Gym operator, discovery conversations"
        },
        {
          "type": "insight",
          "finding": "Memberships and payments were tracked in Excel, registers, or memory — manual tracking everywhere.",
          "implication": "Dues and renewals had to be visible from the first screen, not buried behind navigation."
        },
        {
          "type": "insight",
          "finding": "Dues and renewals were followed up through WhatsApp messages or calls, with inconsistent follow-through.",
          "implication": "Communication needed to feel structured and repeatable inside the product, not ad hoc."
        },
        {
          "type": "insight",
          "finding": "Staff needed to know what was pending today, not just see reports after the fact.",
          "implication": "The dashboard became action-first, not analysis-first — analytics had to support action, not dominate the workflow."
        },
        {
          "type": "insight",
          "finding": "Ease of use mattered more in daily operations than feature-heavy complexity.",
          "implication": "Simplicity beat feature depth for non-technical operators with low admin bandwidth."
        },
        {
          "type": "image",
          "src": "/assets/fitlyn/persona-owner.png",
          "alt": "Persona portrait representing a gym owner or manager",
          "caption": "Primary persona: the gym owner/manager — a daily operator, revenue-focused, with low admin bandwidth. Goals: know who has unpaid dues, track renewals easily, run the gym from one system."
        }
      ]
    },
    {
      "id": "decisions",
      "number": "04",
      "label": "Decisions",
      "title": "From exploration to clearer product decisions",
      "intro": "Early explorations surfaced multiple possibilities, but the final direction was shaped by what gym owners actually needed to act on daily.",
      "blocks": [
        {
          "type": "decision",
          "n": "01",
          "title": "Action-first visibility over a feature-rich dashboard",
          "context": "The early dashboard included several widgets and charts — WhatsApp/SMS send counts, multiple analytics cards, and status widgets. It looked comprehensive but created unnecessary complexity for non-technical gym owners.",
          "why": "Owners cared about what needed action: pending dues, expiring memberships, recent payments, and follow-ups — not how many messages the system sent that day.",
          "tradeoff": "The dashboard shows less than the system can track; depth was deliberately traded for scanability.",
          "result": "A dashboard that is easier to scan, less overwhelming, and aligned with real gym operations."
        },
        {
          "type": "decision",
          "n": "02",
          "title": "Task-based navigation over feature-based modules",
          "context": "The initial structure grouped modules by feature, which did not match the user mental model for daily gym work.",
          "why": "Daily tasks needed to be easy to reach, so the structure was organized around operator routines and task frequency rather than feature silos.",
          "result": "Quicker access to dues, renewals, attendance, and reminders."
        },
        {
          "type": "decision",
          "n": "03",
          "title": "AI for expansion, product judgment for convergence",
          "context": "AI generated multiple layouts and feature directions quickly, but some outputs looked capable on screen while being impractical in real operations.",
          "why": "Speed of exploration was valuable, but the final direction had to survive real operator context, business priority, and UX judgment.",
          "tradeoff": "I filtered out visually elaborate directions in favor of the most usable one for the real operational context.",
          "result": "Exploration velocity balanced with realistic, implementation-ready UX."
        },
        {
          "type": "decision",
          "n": "04",
          "title": "Skipping wireframes for direct high-fidelity exploration",
          "context": "The key open questions were about hierarchy, clarity, and workflow fit — not layout basics.",
          "why": "Exploring directly in higher-fidelity product contexts made it easier to judge whether the interface would actually support daily operations.",
          "result": "Faster, more honest evaluation of whether screens supported real gym workflows."
        },
        {
          "type": "image",
          "src": "/assets/fitlyn/ia.png",
          "alt": "Fitlyn information architecture diagram showing branches for dashboard, members, plans, payments, reports, attendance, store, messaging, and settings",
          "caption": "IA optimized around daily operations: dashboard first for monitoring, then members, plans, payments, attendance, messaging, reports, and settings. Messaging is a parent area so WhatsApp and SMS can scale under one communication system."
        }
      ]
    },
    {
      "id": "solution",
      "number": "05",
      "label": "Solution",
      "title": "How the product direction showed up in the final screens",
      "blocks": [
        {
          "type": "text",
          "body": "The final screens are the output of the earlier decisions: clearer daily priorities, simpler member operations, and reporting that supports action instead of competing with it. Each screen was designed around a specific operational job — from the owner's morning glance at pending dues to front-desk member lookups and reminder-driven retention workflows."
        },
        {
          "type": "image",
          "src": "/assets/fitlyn/dashboard.PNG",
          "alt": "Fitlyn dashboard showing pending dues, expiring memberships, and recent payments",
          "caption": "Dashboard — action-first command center. Prioritizes revenue-critical actions (pending dues, expiring members, recent payments) so owners understand what needs attention today in one glance."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "/assets/fitlyn/memberships.PNG",
              "alt": "Fitlyn member management screen with member records, payment status, and membership validity",
              "caption": "Member Management — records with operational context: profile, payment status, plan details, and validity in one front-desk workflow."
            },
            {
              "src": "/assets/fitlyn/plans.PNG",
              "alt": "Fitlyn plan selection screen with pricing and membership duration details",
              "caption": "Membership Plans — a clear activation flow so staff can assign plans confidently without confusion around pricing, duration, or validity."
            },
            {
              "src": "/assets/fitlyn/payment.PNG",
              "alt": "Fitlyn payments screen showing payment status and follow-up actions for pending dues",
              "caption": "Payments — visibility built around follow-up: pending dues, payment history, and collection opportunities surfaced clearly."
            },
            {
              "src": "/assets/fitlyn/messaging.PNG",
              "alt": "Fitlyn messaging screen showing reminder workflow and communication actions",
              "caption": "Messaging — communication as a workflow: reminders and follow-ups become repeatable and trackable instead of scattered WhatsApp threads."
            },
            {
              "src": "/assets/fitlyn/reports.PNG",
              "alt": "Fitlyn reports screen showing collections, attendance, and business reporting",
              "caption": "Reports — owner-level visibility without overwhelm: readable, scannable, and deliberately secondary to daily operational action."
            }
          ]
        }
      ]
    },
    {
      "id": "impact",
      "number": "06",
      "label": "Impact",
      "title": "Fitlyn moved from product direction to real adoption signals",
      "blocks": [
        {
          "type": "outcomes",
          "groups": [
            {
              "heading": "User impact",
              "items": [
                "40% less manual work for owners and staff",
                "60% faster reporting",
                "Pending dues and expiring memberships became easier to identify and act on"
              ]
            },
            {
              "heading": "Business impact",
              "items": [
                "25% increase in renewals",
                "4 gym clients converted into paying customers"
              ]
            },
            {
              "heading": "Product impact",
              "items": [
                "Memberships, dues, renewals, and reminders unified into one structured workflow",
                "Messaging, payments, reports, and member workflows structured to support future growth"
              ]
            }
          ]
        },
        {
          "type": "text",
          "body": "Fitlyn was not just evaluated as a design exercise. The workflow clarity, demo experience, and action-first structure helped validate the product with real gym operators — and converting 4 gym clients into paying customers confirmed that the design approach addressed genuine day-to-day business pain, not just screen polish. UX value translated into commercial confidence."
        }
      ]
    },
    {
      "id": "learnings",
      "number": "07",
      "label": "Learnings",
      "title": "What this project clarified about AI-assisted design and human judgment",
      "blocks": [
        {
          "type": "text",
          "body": "AI helped most in early expansion. It was especially useful for surfacing feature possibilities, module structures, and multiple visual directions quickly, without slowing the process down. Tools accelerated the workflow — but design judgment shaped the outcome."
        },
        {
          "type": "text",
          "body": "Human judgment stayed critical for prioritization, usability tradeoffs, and business practicality. The strongest direction was the one that felt most usable for the real operational context, not the one that looked most elaborate. Design also worked as a continuous validation loop — prototype, feedback, refine — rather than a one-time process."
        },
        {
          "type": "text",
          "body": "What I would improve next: deepen the communication layer, add smarter reporting views, and build channel-level workflows under messaging so reminders and retention campaigns become more systematic."
        }
      ]
    }
  ]
};
