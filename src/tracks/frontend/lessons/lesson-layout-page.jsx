import React from "react";
import html from "@/tracks/frontend/content/lesson-layout.html?raw";
import { LegacyPage } from "@/shared/editor/legacy-page.jsx";

export function LessonLayoutPage() {
  return <LegacyPage title="布局第一课 · 页面骨架 · howToEverything" html={html} />;
}
