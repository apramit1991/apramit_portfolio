// Counter.dev page hit — free, privacy-friendly, sign in with GitHub.
// Empty COUNTER_ID = no-op (safe to ship before the account exists).
// The id is a public UUID (it lives in the client tracking script), not a secret.
const COUNTER_ID = "1eeab3c1-fdf8-44d1-8363-fed1fce39bb4"; // counter.dev dashboard id (public, not a secret)

const ENDPOINT = "https://t.counter.dev/trackpage";

export function track(path) {
  if (!COUNTER_ID) {
    if (import.meta.env.DEV) console.debug("[track]", path);
    return;
  }
  if (navigator.doNotTrack === "1") return;
  // Counter.dev groups hits by the `page` value, so each distinct question/
  // chip ranks by count in the dashboard. sendBeacon survives page unload.
  const body = new URLSearchParams({ id: COUNTER_ID, page: path });
  try {
    if (navigator.sendBeacon) navigator.sendBeacon(ENDPOINT, body);
    else fetch(ENDPOINT, { method: "POST", body, keepalive: true }).catch(() => {});
  } catch {
    // never let analytics break the chat
  }
}

// PII guard: visitors may type their own email/phone into the composer.
const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.]+/g;
const PHONE_RE = /\+?\d[\d\s()\-]{7,}\d/g;
export function scrub(text) {
  return (text || "").replace(EMAIL_RE, "[email]").replace(PHONE_RE, "[phone]").slice(0, 150);
}
