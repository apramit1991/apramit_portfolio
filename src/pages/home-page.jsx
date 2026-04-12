import legacyHtml from "../../legacy/home.html?raw";
import "../../styles.css";

import { LegacyHtmlPage } from "@/components/legacy-html-page";
import { useHomeLegacyPage } from "@/hooks/use-home-legacy";

export function HomePage() {
  useHomeLegacyPage();

  return <LegacyHtmlPage html={legacyHtml} pageClassName="home-legacy-page" />;
}
