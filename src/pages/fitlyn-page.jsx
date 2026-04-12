import legacyHtml from "../../legacy/fitlyn.html?raw";
import "../../case-study/fitlyn/fitlyn-case-study.css";

import { LegacyHtmlPage } from "@/components/legacy-html-page";
import { PageShell } from "@/components/page-shell";
import { useFitlynLegacyPage } from "@/hooks/use-fitlyn-legacy";

export function FitlynPage() {
  useFitlynLegacyPage();

  return (
    <PageShell
      actions={[
        { href: "/", label: "Home", variant: "secondary" },
        { href: "/assets/Apramit-Pradhan-Resume.pdf", label: "Resume", external: true },
        { href: "mailto:pradhan.apramit@gmail.com", label: "Email", variant: "ghost" },
      ]}
    >
      <LegacyHtmlPage html={legacyHtml} pageClassName="fitlyn-legacy-page" />
    </PageShell>
  );
}
