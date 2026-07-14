// Generated from the existing case-study pages — every fact is sourced,
// nothing invented. Edit copy here; the template renders whatever is present.
export const tradeup = {
  "slug": "tradeup",
  "title": "Trade Up",
  "shortTitle": "Trade Up",
  "eyebrow": "Fintech Product Case Study",
  "categories": [
    "Fintech",
    "Mobile Product",
    "UX Strategy"
  ],
  "metrics": [
    {
      "value": "1M+",
      "label": "Downloads"
    },
    {
      "value": "4.2/5",
      "label": "Play Store rating"
    },
    {
      "value": "35%",
      "label": "Faster onboarding"
    }
  ],
  "heroImage": "/assets/tradeup-case/hero-trade-desk.webp",
  "heroImageAlt": "Trade Up mobile trading app mockup",
  "valueProp": "Designing an action-driven trading experience that lets users feel in control, but not overwhelmed.",
  "summary": "TradeUp is a mobile stock trading app built to serve both first-time investors and active traders. I led UX across research, flows, wireframes, high-fidelity UI, and UAT — turning trade anxiety and slow workflows into a two-step Quick Trade Mode, Smart Alerts, and a signal-first interface. The product reached 1M+ downloads, a 4.2 Play Store rating, and adoption across 150+ brokerages.",
  "metadata": {
    "role": "UX Designer — research, flows, wireframes, high-fidelity UI, UAT",
    "platform": "Mobile app (Android/iOS)",
    "industry": "Fintech / Retail investing",
    "duration": "~17 weeks (Research 1wk · Wireframes 2wk · UI/UX 8wk · Testing 2wk · Final delivery 4wk)",
    "responsibilities": [
      "User research: interviews and contextual inquiry with 10 traders",
      "User flows and journey mapping across onboarding, quotes, portfolio, and execution",
      "Wireframes and high-fidelity UI for core mobile screens",
      "Information architecture and interaction hierarchy",
      "Validation and UAT support through production"
    ]
  },
  "recruiterSummary": {
    "role": "UX Designer on TradeUp, a consumer stock trading app — owned research, flows, wireframes, high-fidelity UI, and UAT.",
    "keyDecisions": [
      "Introduced Quick Trade Mode, cutting trade execution from an industry-standard 4+ taps to 2 steps with a swipe-to-confirm pattern.",
      "Simplified onboarding into a guided entry flow, making onboarding 35% faster for new investors.",
      "Reworked market and portfolio screens to a signal-first hierarchy, with trade preview and confirmation feedback to reduce abandonment."
    ],
    "impact": [
      "1M+ downloads and a 4.2/5 Play Store rating",
      "Adopted across 150+ brokerages",
      "35% faster onboarding; trades executed in 2 steps instead of 4+"
    ],
    "learned": "In high-trust fintech, speed only helps when action moments still feel deliberate — micro-feedback and clear hierarchy build the confidence that features alone can't."
  },
  "sections": [
    {
      "id": "overview",
      "number": "01",
      "label": "Overview",
      "title": "A trading product that needed to feel easier to read without reducing depth",
      "intro": "TradeUp sits in a high-trust category where hesitation can come from interface complexity as much as market risk.",
      "blocks": [
        {
          "type": "text",
          "body": "In an industry dominated by complex tools and intimidating interfaces, TradeUp set out to reimagine stock trading for everyday users — without sacrificing depth for active traders. The app serves retail investors managing their own portfolios and active traders who need advanced charting, real-time alerts, and quick order execution. I led the UX effort to design a platform that's not just functional, but frictionless and confidence-inspiring."
        },
        {
          "type": "text",
          "body": "My role covered user research, user flows, wireframes, high-fidelity UI, and UAT. The KPIs were concrete: improve onboarding completion rate, increase trade execution speed, and boost user retention. Every design decision was shaped around limited mobile space and a high-stakes user context — money was involved, so key actions had to feel deliberate rather than risky or rushed."
        },
        {
          "type": "image",
          "src": "/assets/tradeup-case/hero-trade-desk.webp",
          "alt": "TradeUp product preview displayed in a desktop-style showcase",
          "caption": "TradeUp — a mobile trading experience for both first-time investors and daily traders."
        },
        {
          "type": "outcomes",
          "groups": [
            {
              "heading": "Challenge",
              "items": [
                "Financial density and decision anxiety made it hard for users to act with confidence on mobile.",
                "Serve anxious first-time investors and speed-hungry active traders in one interface."
              ]
            },
            {
              "heading": "Approach",
              "items": [
                "Interviews and contextual inquiry with 10 traders, grounded in secondary quantitative research.",
                "Signal-first hierarchy, a two-step Quick Trade Mode, and explicit confirmation feedback."
              ]
            },
            {
              "heading": "Outcome",
              "items": [
                "1M+ downloads, 4.2/5 Play Store rating, live across 150+ brokerages.",
                "35% faster onboarding and trades executed in 2 steps instead of the industry-standard 4+."
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
      "title": "Speed mattered, but trust mattered more in the moments before action",
      "blocks": [
        {
          "type": "text",
          "body": "Trading products cannot rely on visual polish alone. Newer investors needed better orientation, active users needed faster access to what mattered, and key actions had to feel deliberate rather than rushed. The clearest friction showed up in onboarding, portfolio review, quote reading, and trade confirmation — important information was present, but not surfaced with the hierarchy users needed when money was involved. The challenge: reduce hesitation without oversimplifying a serious financial workflow."
        },
        {
          "type": "insight",
          "finding": "Executing a trade took 4+ taps — the industry average across top trading apps.",
          "implication": "Every extra step in a fast-moving market was friction where users could hesitate or miss the opportunity."
        },
        {
          "type": "insight",
          "finding": "5% of users reported trade abandonment, indicating failure or hesitation at the final step.",
          "implication": "The last moment before execution needed reassurance, not just speed — a preview and confirmation feedback."
        },
        {
          "type": "insight",
          "finding": "Average session was 10 minutes, and users spent 40% of that time in the Portfolio section.",
          "implication": "Portfolio health had to be readable at a glance, with high-priority data upfront instead of buried."
        },
        {
          "type": "insight",
          "finding": "70% of new users placed a trade within the first week — early interest, but possible hesitation.",
          "implication": "Streamlining onboarding was the lever to convert that early interest beyond 70%."
        }
      ]
    },
    {
      "id": "research",
      "number": "03",
      "label": "Research",
      "title": "What I learned from talking to traders",
      "intro": "Before user interviews, I grounded the work in secondary research from published studies and market journals on stock trading behavior — then validated with interviews and contextual inquiry with 10 traders, from first-time investors to daily traders.",
      "blocks": [
        {
          "type": "insight",
          "finding": "New users are anxious during their first trade — unsure whether they've done it right.",
          "implication": "The design needed confirmation moments and micro-feedback so every action felt acknowledged and reversible in perception, not abrupt."
        },
        {
          "type": "insight",
          "finding": "Active traders want speed, real-time alerts, and charting power — but don't want to dig to find them.",
          "implication": "High-frequency tools had to surface directly: Quick Trade for execution and Smart Alerts delivered to the lock screen."
        },
        {
          "type": "insight",
          "finding": "Most users don't trust apps that look 'too flashy' or lack clear feedback on actions.",
          "implication": "Clear visual hierarchy and honest feedback beat decoration — the interface had to earn trust through legibility."
        },
        {
          "type": "quote",
          "text": "I want to feel in control, but not overwhelmed.",
          "attribution": "Retail investor, user interview",
          "context": "This quote became the filter for the final direction: clearer hierarchy, faster access, and calmer decision moments."
        },
        {
          "type": "image",
          "src": "/assets/tradeup-case/aarav-persona.PNG",
          "alt": "Aarav persona illustration",
          "caption": "Primary persona: Aarav, a mobile-first retail investor balancing long-term holdings with shorter-term market opportunities — decision-sensitive, speed-aware, trust-seeking."
        },
        {
          "type": "text",
          "body": "The journey map surfaced distinct emotional states across five stages — onboarding ('I hope this is simple'), exploring, trading ('Is this the right trade?'), tracking, and reviewing. Pain points clustered around lengthy registration, information overload, slow execution without confirmation, and missing personalized alerts. These insights pushed me toward clear visual hierarchies, confirmation moments, and an adaptive dashboard that scales with experience."
        }
      ]
    },
    {
      "id": "decisions",
      "number": "04",
      "label": "Design Decisions",
      "title": "From user frustration to product decisions",
      "intro": "The design work focused on reducing friction in the moments that mattered most: understanding the market, reviewing holdings, and deciding whether to act.",
      "blocks": [
        {
          "type": "decision",
          "n": "01",
          "title": "Quick Trade Mode — execute in 2 steps",
          "context": "Executing a trade took 4+ taps, the industry average, and users described the anxiety of 'missing the trade' while digging through menus.",
          "why": "Research showed most users want to act fast on known stocks — not navigate to a separate screen. With just a swipe, users could confirm trades in 2 steps.",
          "tradeoff": "Faster execution risked feeling abrupt in a financial product, so speed was paired with a trade preview and confirmation feedback rather than shipped alone.",
          "result": "Trade execution cut from 4+ taps to 2 steps, directly addressing the top workflow frustration."
        },
        {
          "type": "decision",
          "n": "02",
          "title": "Guided onboarding over dense setup",
          "context": "Early onboarding concepts packed too much context and too many decisions into the first-time flow, risking slow access to the product's core value.",
          "why": "70% of new users placed a trade in the first week — early interest worth converting. Simplifying sign-up with clearer progress and fewer competing prompts removed the heaviest barrier.",
          "result": "Onboarding became 35% faster, and the product felt more approachable without feeling overly basic."
        },
        {
          "type": "decision",
          "n": "03",
          "title": "Signal-first hierarchy on data-heavy screens",
          "context": "Market and portfolio screens surfaced a wide range of data at similar visual weight, so important signals were hard to identify quickly on mobile.",
          "why": "Users spent 40% of session time in Portfolio. Core values, trends, and actions moved first so users could scan portfolio health and quote context before going deeper.",
          "result": "A simplified portfolio dashboard with high-priority data upfront — faster reads before every decision."
        },
        {
          "type": "decision",
          "n": "04",
          "title": "Smart Alerts and calmer confirmation",
          "context": "Active traders missed opportunities waiting inside the app, and trade actions felt abrupt near the point of confirming an order.",
          "why": "In a financial product, speed without reassurance increases hesitation instead of reducing it. Smart Alerts notify traders of price triggers they define — directly on the lock screen — while confirmation moments became more explicit and readable.",
          "result": "The trade flow stayed efficient while feeling deliberate and confidence-building, targeting the 5% who abandoned at the final step."
        }
      ]
    },
    {
      "id": "solution",
      "number": "05",
      "label": "Solution",
      "title": "How the final direction showed up in key mobile screens",
      "intro": "The app structure moves from entry and market discovery into watchlists, quote depth, portfolio review, funding, rewards, and profile — keeping the highest-frequency tasks easy to reach without burying account-level workflows.",
      "blocks": [
        {
          "type": "text",
          "body": "The final UI made the product easier to scan, easier to trust, and easier to move through. Beyond Quick Trade Mode and Smart Alerts, the beta launch included advanced charting with customizable indicators and instant portfolio diversification suggestions. These weren't features for their own sake — each came directly from user frustrations around slow workflows, missed opportunities, and the anxiety of missing the trade."
        },
        {
          "type": "image",
          "src": "/assets/tradeup-case/quote.png",
          "alt": "TradeUp quote screen for Tata Consultancy Services",
          "caption": "Quote screen — its job is fast interpretation: scrip name, price, and change lead the screen, with charts and the primary trade CTA clearly separated from supporting data."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "/assets/tradeup-case/Market.png",
              "alt": "TradeUp market screen",
              "caption": "Market — cleaner scanning of indices, gainers, and losers before drilling into details."
            },
            {
              "src": "/assets/tradeup-case/Watchlist.png",
              "alt": "TradeUp watchlist screen",
              "caption": "Watchlist — track movement and jump into quotes with less friction."
            },
            {
              "src": "/assets/tradeup-case/Portfolio (1).png",
              "alt": "TradeUp portfolio screen",
              "caption": "Portfolio — holding value, invested value, and per-stock performance readable at a glance, with deposit and withdraw as primary actions."
            },
            {
              "src": "/assets/tradeup-case/Rewards.png",
              "alt": "TradeUp rewards screen",
              "caption": "Rewards — secondary product areas kept consistent with the same trust-led visual language."
            }
          ]
        },
        {
          "type": "comparison",
          "title": "Quote and execution flow refinement",
          "before": "Quotes exposed the right information, but too much of it competed at the same visual level. Users had to work harder to identify what mattered before acting — the screen supported speed, but not enough confidence.",
          "after": "Key values became easier to scan, primary actions were visually separated from supporting information, and confirmation moments felt more intentional before execution."
        }
      ]
    },
    {
      "id": "impact",
      "number": "06",
      "label": "Impact",
      "title": "Signals that the work mattered beyond visual polish",
      "blocks": [
        {
          "type": "outcomes",
          "groups": [
            {
              "heading": "User impact",
              "items": [
                "Onboarding became 35% faster for new investors.",
                "Trade execution cut from an industry-standard 4+ taps to 2 steps via Quick Trade Mode."
              ]
            },
            {
              "heading": "Business impact",
              "items": [
                "1M+ downloads in a trust-sensitive fintech category.",
                "4.2/5 average Play Store rating.",
                "Adopted by 150+ brokerages."
              ]
            },
            {
              "heading": "Product impact",
              "items": [
                "Stronger information hierarchy across onboarding, market views, and portfolio review.",
                "Critical trading moments refined to feel explicit and less ambiguous."
              ]
            }
          ]
        },
        {
          "type": "text",
          "body": "TradeUp carried real adoption signals — 1M+ downloads, a 4.2 rating, and availability across 150+ brokerages. In that environment, clarity, confidence, and usability were directly tied to product credibility, which made the design work valuable beyond interface polish: it had to support trust, readability, and repeat decision-making at scale."
        }
      ]
    },
    {
      "id": "learnings",
      "number": "07",
      "label": "Learnings",
      "title": "What this project reinforced about design in high-trust categories",
      "blocks": [
        {
          "type": "text",
          "body": "User behavior is nuanced. By pairing quantitative data from financial behavior journals with qualitative interview insights, I could align UI decisions with how users actually think and act under pressure — not how they describe themselves in calm moments. Hierarchy drives confidence: users feel in control when important signals surface before secondary detail."
        },
        {
          "type": "text",
          "body": "Micro-feedback is essential. Smooth animations and subtle transitions reassured users their trade actions were being processed correctly — in financial products, faster paths only help when action moments still feel deliberate. And designing for multiple personas requires finesse: new investors and seasoned traders have different expectations, so flexible interfaces that scale with experience were key."
        },
        {
          "type": "text",
          "body": "What I would improve next: the team shipped theme personalization (light, dark, or system default), a personalized onboarding walkthrough that adapts guidance to beginner versus experienced traders, and accessibility upgrades — high-contrast color modes, improved touch targets, and voice search support — to make trading more inclusive."
        }
      ]
    }
  ]
};
