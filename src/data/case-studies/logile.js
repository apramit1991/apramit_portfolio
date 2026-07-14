// Generated from the existing case-study pages — every fact is sourced,
// nothing invented. Edit copy here; the template renders whatever is present.
export const logile = {
  "slug": "logile",
  "title": "Logile Workforce AI",
  "shortTitle": "Logile",
  "eyebrow": "AI Workforce UX Case Study",
  "categories": [
    "Workforce SaaS",
    "AI Strategy",
    "Decision Support"
  ],
  "metrics": [
    {
      "value": "40%+",
      "label": "Auto-resolved"
    },
    {
      "value": "−25%",
      "label": "Payroll errors"
    },
    {
      "value": "<90s",
      "label": "Decisions"
    }
  ],
  "heroImage": "/assets/case-qms.svg",
  "heroImageAlt": "Logile workforce AI case study illustration",
  "valueProp": "Turning shift changes into explainable, AI-assisted decisions across coverage, cost, compliance, and fairness.",
  "summary": "I redesigned retail shift changes from request processing into explainable, AI-assisted workforce decisions. Managers get a risk-ranked inbox with coverage, payroll, and compliance context inline; associates get transparency instead of dead-end denials; and every action writes a plain-language rationale that HR and payroll can trust at period close.",
  "metadata": {
    "role": "Senior Product Designer",
    "platform": "Enterprise web application",
    "industry": "Retail workforce management",
    "duration": "April 2026",
    "responsibilities": [
      "Workflow mapping across associate, manager, and payroll touchpoints",
      "Product risk prioritization",
      "Automation boundary definition",
      "AI product strategy tied to measurable outcomes",
      "End-to-end UX design in Figma"
    ]
  },
  "recruiterSummary": {
    "role": "Senior Product Designer — AI-assisted shift change management for retail workforce SaaS (take-home)",
    "keyDecisions": [
      "Replaced the chronological request queue with a risk-ranked manager inbox with coverage, payroll, and compliance signals inline",
      "Set automation boundaries by reversibility and confidence — routine swaps auto-approve, high-liability decisions escalate to humans",
      "Framed AI as the decision-support layer: it recommends, explains, records, and escalates when confidence is low"
    ],
    "impact": [
      "40%+ of shift changes auto-resolved (design target)",
      "−25% payroll error rate via explainable audit trails (design target)",
      "Manager decisions in under 90 seconds with a 72-hour predictive coverage window (design target)"
    ],
    "learned": "AI product design has to stay accountable — the system can automate and recommend, but the experience must still explain, escalate, and preserve trust across every stakeholder."
  },
  "sections": [
    {
      "id": "overview",
      "number": "01",
      "label": "Overview",
      "title": "Shift changes sit at the intersection of coverage, cost, compliance, and fairness",
      "blocks": [
        {
          "type": "text",
          "body": "In retail workforce management, a shift change is not just a request. It affects store coverage, labor cost, payroll accuracy, regional rules, and the trust associates place in the scheduling system. Three groups live with the consequences: store managers who need fast, defensible decisions; hourly associates who need transparency and fair outcomes; and HR and payroll teams who need clean traceability so corrections do not become manual cleanup at period close."
        },
        {
          "type": "text",
          "body": "As Senior Product Designer on this workforce SaaS take-home, I treated the assignment as a product strategy problem, not only a UI redesign. I mapped the full workflow — request, review, approve, execute, reconcile — defined where automation is safe, and framed AI as the system's decision-support layer, not a decorative feature."
        },
        {
          "type": "outcomes",
          "groups": [
            {
              "heading": "Challenge",
              "items": [
                "Managers approve shift changes without payroll impact, coverage change, or compliance status in one place",
                "Denied associates get no explanation, pushing decisions into text messages and offline workarounds"
              ]
            },
            {
              "heading": "Approach",
              "items": [
                "A decision-first workflow: risk-ranked inbox, inline decision signals, explainable audit trail, alternative paths",
                "AI that recommends, explains, records, and escalates when confidence is low"
              ]
            },
            {
              "heading": "Outcome",
              "items": [
                "Success framed as 40%+ shift changes auto-resolved, −25% payroll errors, sub-90-second manager decisions",
                "A 72-hour predictive coverage window so gaps get fixed before they become urgent"
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
      "title": "The same system problem appeared differently for each stakeholder",
      "blocks": [
        {
          "type": "text",
          "body": "Across the five-stage workflow — Request, Review, Approve, Execute, Reconcile — each stakeholder hit a different wall. Associates submit swaps with limited visibility into status or likely outcome. Managers see a queue but lack inline coverage, cost, and compliance context. Approvals happen without a recorded rationale, making escalations hard to defend. Schedule updates create new payroll exceptions, and HR absorbs the cost of missing records through manual cleanup."
        },
        {
          "type": "insight",
          "title": "Information scarcity",
          "finding": "Managers make approval decisions without the payroll impact, coverage change, and compliance status in one place.",
          "implication": "Decision context had to move to where the action happens, not live in separate reports."
        },
        {
          "type": "insight",
          "title": "Opaque outcomes",
          "finding": "Associates get denied without useful explanation, which pushes people toward text messages and offline workarounds.",
          "implication": "Denials had to become transparent, with ranked alternatives instead of dead ends."
        },
        {
          "type": "insight",
          "title": "Weak traceability",
          "finding": "Actions happen, but the system does not always preserve a readable record of why the decision was made.",
          "implication": "Every human and system action needed to write a plain-language audit record automatically."
        },
        {
          "type": "text",
          "body": "The product opportunity was to make the right decision obvious, defensible, and fast: show the decision context, recommend the best path, and record the rationale automatically."
        }
      ]
    },
    {
      "id": "research",
      "number": "03",
      "label": "Analysis",
      "title": "Mapping the workflow surfaced trust collapse, compliance blind spots, and cognitive overload as the highest-risk failures",
      "blocks": [
        {
          "type": "text",
          "body": "I mapped the shift-change workflow across associate, manager, and payroll touchpoints — Request, Review, Approve, Execute, Reconcile — then prioritized product risks rather than screen-level annoyances. Three failure modes stood out: trust collapse when associates stop believing the system is fair, compliance blind spots when rules are checked too late, and manager cognitive overload when every request demands a manual hunt through schedules."
        },
        {
          "type": "insight",
          "title": "Not all requests carry equal risk",
          "finding": "A same-role swap with no overtime is fundamentally different from a same-day cover request that drops coverage below target, yet queues treated them identically.",
          "implication": "Requests needed to be classified by reversibility and automation confidence — routine, reversible requests could be automated; uncertain or high-liability decisions needed human review or escalation."
        },
        {
          "type": "insight",
          "title": "Coverage problems are visible before they are urgent",
          "finding": "Coverage gaps in the near-term schedule can be detected against forecasted demand before they become same-day emergencies.",
          "implication": "The system should watch the next 72 hours and propose fill requests proactively, shifting managers from reactive firefighting to approving smart fixes early."
        },
        {
          "type": "insight",
          "title": "Payroll pain starts upstream",
          "finding": "Repeated late starts, early clock-outs, and rounding patterns quietly accumulate until payroll locks, when they become expensive manual corrections.",
          "implication": "Time-punch anomalies had to be flagged before payroll locks, turning reconciliation cleanup into in-flow prevention."
        }
      ]
    },
    {
      "id": "decisions",
      "number": "04",
      "label": "Design decisions",
      "title": "A decision-first workflow with risk, context, and accountability built in",
      "blocks": [
        {
          "type": "decision",
          "n": "01",
          "title": "Risk-ranked inbox instead of a chronological queue",
          "context": "Managers were processing requests in arrival order, so urgent, high-liability requests waited behind routine swaps.",
          "why": "Sorting by urgency and risk means the manager's attention goes first to the decisions that actually threaten coverage, cost, or compliance.",
          "result": "Urgent, high-liability requests rise above routine swaps, and routine work stops competing for scarce attention."
        },
        {
          "type": "decision",
          "n": "02",
          "title": "Automation boundaries set by reversibility and confidence, not blanket automation",
          "context": "I built a decision matrix crossing decision reversibility with automation confidence: same-role swaps auto-approve, bid fills get manager confirmation, same-day cover gets human review, and payroll locks or union overrides require elevated approval.",
          "why": "Routine, reversible requests could be automated safely. Uncertain or high-liability decisions needed human review or escalation — automating them would trade payroll and compliance liability for speed.",
          "tradeoff": "Keeping humans in the loop on high-risk paths caps how much volume can auto-resolve, but protects trust and defensibility.",
          "result": "40%+ of shift changes — the routine, compliant ones — can move without manager intervention while risky ones stay accountable."
        },
        {
          "type": "decision",
          "n": "03",
          "title": "AI as the decision-support layer, not a decorative feature",
          "context": "The strongest product opportunity was using AI to reduce manual search, detect hidden risk earlier, and help managers act before coverage problems become urgent.",
          "why": "Instead of forcing managers to hunt through schedules, a ranked-candidate auto-suggester scores replacements on role fit, availability, overtime headroom, seniority, and coverage impact — and every recommendation ships with its rationale.",
          "tradeoff": "The AI recommends and escalates when confidence is low, rather than deciding autonomously — slower than full automation, but it keeps decisions explainable.",
          "result": "The AI recommends, explains, records, and escalates; decision context appears where action happens."
        },
        {
          "type": "decision",
          "n": "04",
          "title": "Every action writes an explainable audit trail, and denials become alternatives",
          "context": "Decisions happened without recorded rationale, and denied associates hit dead ends.",
          "why": "Every human and system action writes a plain-language record — 'same role, no overtime, coverage above target' — that can be reviewed later, and denied requests convert into ranked alternative paths.",
          "result": "Escalations become defensible, associates keep a path forward, and cleaner data capture reduces payroll correction work by a targeted 25%."
        }
      ]
    },
    {
      "id": "solution",
      "number": "05",
      "label": "Solution",
      "title": "The final experience helps managers decide faster without hiding accountability",
      "blocks": [
        {
          "type": "text",
          "body": "The manager flow is three steps. See what needs attention: the manager opens a risk-scored queue where urgent, high-liability requests rise above routine swaps. Understand the decision: the review card brings coverage impact, payroll delta, compliance status, and the AI recommendation into one view. Approve a defensible action: the manager selects the best path, the schedule updates, and the system writes the rationale automatically."
        },
        {
          "type": "text",
          "body": "The AI layer runs four plays underneath. The ranked-candidate auto-suggester surfaces the top replacement options scored on role fit, availability, overtime headroom, seniority, and coverage impact. Time-punch anomaly flagging catches repeated late starts, early clock-outs, and rounding patterns before payroll locks. An agentic watcher monitors the next 72 hours against forecasted demand and proposes fill requests before gaps appear. And every automated action explains why it happened."
        },
        {
          "type": "quote",
          "text": "AI becomes the system's decision-support layer, not a decorative feature. The AI recommends, explains, records, and escalates when confidence is low.",
          "attribution": "Design principle for the AI strategy"
        }
      ]
    },
    {
      "id": "impact",
      "number": "06",
      "label": "Impact",
      "title": "Success was framed around measurable workflow improvement",
      "blocks": [
        {
          "type": "outcomes",
          "groups": [
            {
              "heading": "User impact",
              "items": [
                "Manager decision time under 90 seconds — decision context appears where action happens, not in separate reports",
                "Denied requests become ranked alternatives with plain-language explanations, preserving associate trust"
              ]
            },
            {
              "heading": "Business impact",
              "items": [
                "40%+ of shift changes auto-resolved — routine, compliant requests move without manager intervention",
                "−25% payroll error rate through cleaner data capture and audit trails that reduce manual correction work"
              ]
            },
            {
              "heading": "Product impact",
              "items": [
                "A 72-hour predictive coverage window lets managers approve smart fixes before staffing gaps become urgent",
                "Every decision carries an explainable record, making escalations defensible for HR and payroll"
              ]
            }
          ]
        },
        {
          "type": "text",
          "body": "An honest caveat: this was a take-home concept, so these figures are the success framing I designed against — targets tied to specific mechanisms — not measured results from a shipped product. Each metric maps to a concrete design decision: auto-resolution rate to the automation matrix, payroll errors to the audit trail, and decision time to inline context."
        }
      ]
    },
    {
      "id": "learnings",
      "number": "07",
      "label": "Learnings",
      "title": "AI product design has to stay accountable",
      "blocks": [
        {
          "type": "text",
          "body": "This assignment demonstrates product judgment beyond screen design. It shows how I think through enterprise UX: understand the operating constraints, define the decision model, design for edge cases, and use AI where it can improve outcomes instead of simply adding novelty."
        },
        {
          "type": "text",
          "body": "The core lesson is that AI product design has to stay accountable. The system can automate and recommend, but the experience must still explain, escalate, and preserve trust across every stakeholder — the manager defending a decision, the associate reading a denial, and the payroll analyst reconciling the period."
        },
        {
          "type": "text",
          "body": "What I would improve next: validate the automation boundaries with real store managers, since the reversibility-confidence matrix is a hypothesis until tested against how managers actually judge risk; and pressure-test the associate-facing experience, because the current work is strongest on the manager side while trust ultimately collapses or holds at the associate's screen."
        }
      ]
    }
  ]
};
