// Tiny router bridge: the app has exactly one router (use-route.js), and deep
// components (e.g. a case-study card inside a chat message) need to trigger
// SPA navigation without prop-drilling. use-route registers its navigate here.
let navigateFn = null;

export const setNavigate = (fn) => {
  navigateFn = fn;
};

// Use on <a href> onClick: preserves cmd/ctrl/shift-click + middle-click
// (new-tab intents fall through to the real link), intercepts plain clicks.
export function goTo(path, event) {
  if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1)) return;
  if (!navigateFn) return; // no SPA router mounted → full navigation via href
  event?.preventDefault();
  navigateFn(path);
}
