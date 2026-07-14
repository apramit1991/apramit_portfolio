import { useCallback, useEffect, useReducer, useRef } from "react";

import { getResponder } from "@/lib/conversation-engine";
import { responseMap, fallback } from "@/data/responses";

const initialState = {
  messages: [],
  isTyping: false,
  recruiterMode: false,
};

// Conversation survives route changes in memory; sessionStorage covers hard
// refreshes and case-study deep links, so "Back to conversation" never resets.
const STORAGE_KEY = "portfolio-chat-v1";

function initState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    if (saved?.messages?.length) {
      return { ...initialState, messages: saved.messages, recruiterMode: !!saved.recruiterMode };
    }
  } catch {
    // corrupted/blocked storage — start fresh
  }
  return initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case "SEND":
      return { ...state, messages: [...state.messages, action.message], isTyping: true };
    case "RECEIVE":
      return { ...state, messages: [...state.messages, action.message], isTyping: false };
    case "RECRUITER":
      return { ...state, recruiterMode: action.on };
    case "RESET":
      return { ...initialState, recruiterMode: state.recruiterMode };
    default:
      return state;
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function assistantMessage(spec) {
  return { id: crypto.randomUUID(), role: "assistant", type: spec.type || "text", ...spec };
}

export function usePortfolioChat() {
  const [state, dispatch] = useReducer(reducer, undefined, initState);

  useEffect(() => {
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ messages: state.messages.slice(-40), recruiterMode: state.recruiterMode })
      );
    } catch {
      // storage full/blocked — conversation still lives in memory
    }
  }, [state.messages, state.recruiterMode]);
  // Typing flow lives in this event handler (never a mount effect) so
  // StrictMode's double-invoke can't double-post messages.
  const busyRef = useRef(false);
  const responderRef = useRef(null);

  const send = useCallback(async (text, promptKey) => {
    const clean = (text || "").trim();
    if (!clean || busyRef.current) return;
    busyRef.current = true;

    dispatch({
      type: "SEND",
      message: { id: crypto.randomUUID(), role: "user", type: "text", text: clean },
    });

    if (!responderRef.current) responderRef.current = getResponder();
    let spec;
    try {
      spec = await responderRef.current.respond({ text: clean, promptKey });
    } catch {
      spec = fallback; // engine failure → portfolio stays browsable
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 150 : Math.min(500 + clean.split(/\s+/).length * 40, 1400);
    await sleep(delay);

    dispatch({ type: "RECEIVE", message: assistantMessage(spec) });
    busyRef.current = false;
  }, []);

  const setRecruiterMode = useCallback(
    (on) => {
      dispatch({ type: "RECRUITER", on });
      // Recruiter mode posts its summary immediately — no fake user message,
      // no typing simulation (spec: prioritize scanability over storytelling).
      if (on && !busyRef.current) {
        dispatch({ type: "RECEIVE", message: assistantMessage(responseMap["recruiter-summary"]) });
      }
    },
    []
  );

  const reset = useCallback(() => {
    if (busyRef.current) return;
    dispatch({ type: "RESET" });
  }, []);

  return { ...state, send, setRecruiterMode, reset };
}
