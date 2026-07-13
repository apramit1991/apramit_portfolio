import { responseMap, keywordRules, fallback } from "@/data/responses";
import { scrub, track } from "@/lib/analytics";

/**
 * ResponseSpec = { text, type, prompts?, projectIds?, gallery?, metrics?, bullets?, compact? }
 * Responder    = { respond({ text, promptKey, recruiterMode }) => Promise<ResponseSpec> }
 *
 * This is the single swap point for a future AI-backed responder:
 * return a Claude-powered implementation from getResponder() with the same
 * respond() signature (dynamic-import the SDK inside respond() so no AI
 * bytes load until the first send). Everything else stays untouched.
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
          : `/chat/unmatched/${scrub(text)}` // the grow-the-script / LLM-decision dataset
      );
      return rule ? responseMap[rule.responseKey] : fallback;
    },
  };
}

export function getResponder() {
  return createScriptedResponder({ responseMap, keywordRules, fallback });
}
