// Free LLM fallback: called ONLY when the scripted engine has no answer.
// Google Gemini free tier, key hidden here server-side. Grounded strictly in
// the portfolio data (api/_context.js) so it can't invent facts.
import { buildContext } from "./_context.js";

const MODEL = "gemini-flash-latest"; // alias tracks current free flash model (won't deprecate)
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const SYSTEM = `You are the portfolio assistant for Apramit Pradhan, a Lead Product Designer, answering recruiters and hiring managers on his personal site. Speak as his representative — warm, confident, concise.

RULES:
- Use ONLY the facts in the CONTEXT below. Never invent metrics, employers, dates, tools, or projects.
- If the answer isn't in the context, say you don't have that specific detail here and point them to email (pradhan.apramit@gmail.com) or LinkedIn. Do not guess.
- Salary / compensation / rate / budget: never state a number — say it's best discussed directly once there's mutual fit, and share the contact.
- 2–4 sentences. No bullet dumps unless asked. Plain text, no markdown headers.
- Stay on topic (Apramit's work, experience, skills, process, availability). Politely redirect anything unrelated.`;

// Not real security — casual embed/abuse deterrent. The real ceiling is the
// Gemini free-tier quota. ponytail: add Vercel KV rate-limiting only if drained.
function blockedOrigin(req) {
  const o = req.headers.origin || req.headers.referer || "";
  if (!o) return false; // no header → can't judge; allow
  return !/^https?:\/\/(localhost|127\.0\.0\.1|([\w-]+\.)*apramit\.in)(:\d+)?(\/|$)/i.test(o);
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  if (blockedOrigin(req)) return res.status(403).json({ error: "forbidden" });

  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(502).json({ error: "unconfigured" });

  const text = (req.body?.text ?? "").toString().trim();
  if (!text || text.length > 500) return res.status(400).json({ error: "bad input" });

  try {
    const r = await fetch(`${ENDPOINT}?key=${key}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: `${SYSTEM}\n\n# CONTEXT\n${buildContext()}` }] },
        contents: [{ role: "user", parts: [{ text }] }],
        generationConfig: { maxOutputTokens: 300, temperature: 0.4 },
      }),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      return res.status(502).json({ error: "upstream", status: r.status, detail: detail.slice(0, 300) });
    }
    const data = await r.json();
    const answer = (data?.candidates?.[0]?.content?.parts || [])
      .map((p) => p.text || "")
      .join("")
      .trim();
    if (!answer) return res.status(502).json({ error: "empty" });
    return res.status(200).json({ text: answer });
  } catch {
    return res.status(502).json({ error: "fetch failed" });
  }
}
