import { useCallback, useEffect, useState } from "react";

import { setNavigate } from "@/lib/router";
import { track } from "@/lib/analytics";

// Routes: "/" (conversation) and "/case-studies/{slug}" (workspace).
// Deep links work on static hosting because a real HTML entry exists at
// case-studies/{slug}/index.html — this hook only handles in-app moves.
export function parseRoute(path = window.location.pathname) {
  const m = path.match(/^\/case-studies\/([\w-]+)\/?$/);
  return m ? { view: "case-study", slug: m[1] } : { view: "home" };
}

export function useRoute(onBeforeNavigate) {
  const [route, setRoute] = useState(() => parseRoute());

  const navigate = useCallback(
    (path) => {
      const target = parseRoute(path);
      onBeforeNavigate?.(parseRoute(), target);
      window.history.pushState({}, "", path);
      if (target.view === "case-study") track(`/view/case-study/${target.slug}`);
      setRoute(target);
      window.scrollTo(0, 0);
    },
    [onBeforeNavigate]
  );

  useEffect(() => {
    setNavigate(navigate);
    const onPop = () => setRoute(parseRoute());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [navigate]);

  return { route, navigate };
}
