import React from "react";
import html from "@/tracks/frontend/content/lesson-html-2.html?raw";
import { LegacyPage } from "@/shared/editor/legacy-page.jsx";

export function LessonHtml2Page() {
  return <LegacyPage title="HTML 第二课 · HowToEverything" html={html} />;
}