import React from "react";
import html from "@/tracks/frontend/content/lesson-css.html?raw";
import { LegacyPage } from "@/shared/editor/legacy-page.jsx";

export function LessonCssPage() {
  return <LegacyPage title="CSS 第一课 · howToEverything" html={html} />;
}
