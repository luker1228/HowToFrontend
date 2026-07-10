import React from "react";
import html from "@/tracks/frontend/content/lesson-js.html?raw";
import { LegacyPage } from "@/shared/editor/legacy-page.jsx";

export function LessonJsPage() {
  return <LegacyPage title="JavaScript 第一课 · howToEverything" html={html} />;
}
