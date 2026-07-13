import { Suspense, lazy } from "react";

import legacyHtml from "../../legacy/home.html?raw";
import "../../styles.css";
import "@/styles/futuristic.css";

import { LegacyHtmlPage } from "@/components/legacy-html-page";
import { useHomeLegacyPage } from "@/hooks/use-home-legacy";

// three.js is heavy — code-split it so first paint isn't blocked
const HeroScene = lazy(() => import("@/components/scene/hero-scene"));

export function HomePage() {
  useHomeLegacyPage();

  return (
    <>
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <LegacyHtmlPage html={legacyHtml} pageClassName="home-legacy-page" />
    </>
  );
}
