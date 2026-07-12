import React from "react";
import html from "@/tracks/frontend/content/lesson-layout-2.html?raw";
import { LegacyPage } from "@/shared/editor/legacy-page.jsx";

export function LessonLayout2Page() {
  return <LegacyPage title="布局第二课 · HowToEverything" html={html} />;
}
