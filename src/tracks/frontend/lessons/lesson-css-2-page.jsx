import React from "react";
import css from "@/tracks/frontend/content/lesson-css-2.html?raw";
import { LegacyPage } from "@/shared/editor/legacy-page.jsx";

export function LessonCss2Page() {
  return <LegacyPage title="CSS · Figma 属性面板 · howToEverything" html={css} />;
}