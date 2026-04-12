import { useMemo } from "react";

function extractBodyMarkup(html) {
  if (typeof window === "undefined") {
    return html;
  }

  const parser = new DOMParser();
  const parsed = parser.parseFromString(html, "text/html");
  parsed.querySelectorAll("script").forEach((node) => node.remove());
  return parsed.body.innerHTML;
}

export function LegacyHtmlPage({ html, pageClassName }) {
  const markup = useMemo(() => extractBodyMarkup(html), [html]);

  return (
    <div
      className={pageClassName}
      dangerouslySetInnerHTML={{ __html: markup }}
      suppressHydrationWarning
    />
  );
}
