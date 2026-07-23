import { responseMap, keywordRules, fallback } from "@/data/responses";
import { scrub, track } from "@/lib/analytics";

/**
 * ResponseSpec = { text, type, prompts?, projectIds?, gallery?, metrics?, bullets?, compact? }
 * Responder    = { respond({ text, promptKey, recruiterMode }) => Promise<ResponseSpec> }
 *
 * Scripted handles chips + keyword hits (instant, free, card-rich). The hybrid
 * responder wraps it and, ONLY on a miss, defers to the free LLM fallback
 * (/api/chat, grounded server-side). Any LLM failure → the static fallback,
 * so the portfolio always stays browsable.
 */
export function createScriptedResponder({ responseMap, keywordRules, fallback }) {
  return {
    async respond({ text, promptKey }) {
      if (promptKey && responseMap[promptKey]) {
        track(`/chat/chip/${promptKey}`); // which prompts get used
        return responseMap[promptKey];
      }
      const q = (text || "").toLowerCase();
      const rule = keywordRules.find((r) => r.match.test(q));
      track(
        rule
          ? `/chat/typed/${rule.responseKey}/${scrub(text)}` // question + route (reveals misroutes)
          : `/chat/unmatched/${scrub(text)}` // no scripted rule — the LLM then handles it
      );
      return rule ? responseMap[rule.responseKey] : fallback;
    },
  };
}

async function askLLM(text) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`llm ${res.status}`);
  const data = await res.json();
  if (!data?.text) throw new Error("llm empty");
  return data.text;
}

export function createHybridResponder(config) {
  const scripted = createScriptedResponder(config);
  const { fallback } = config;
  return {
    async respond(input) {
      const spec = await scripted.respond(input);
      // scripted returns the exact `fallback` object only when nothing matched.
      if (spec !== fallback) return spec;
      try {
        const answer = await askLLM(input.text);
        track(`/chat/llm/${scrub(input.text)}`); // answered by LLM (worth promoting to script)
        return { type: "text", text: answer, prompts: fallback.prompts };
      } catch {
        return fallback; // LLM down/unconfigured → graceful static fallback
      }
    },
  };
}

export function getResponder() {
  return createHybridResponder({ responseMap, keywordRules, fallback });
}
