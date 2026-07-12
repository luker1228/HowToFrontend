import React from "react";
import html from "@/tracks/frontend/content/lesson-html.html?raw";
import { LegacyPage } from "@/shared/editor/legacy-page.jsx";

export function LessonHtmlPage() {
  return <LegacyPage title="HTML 第一课 · HowToEverything" html={html} />;
}
