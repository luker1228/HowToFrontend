import React from "react";
import { createRoot } from "react-dom/client";
import { LegacyPage } from "./legacy-page.jsx";

export function mountLegacyPage({ title, html }) {
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <LegacyPage title={title} html={html} />
    </React.StrictMode>
  );
}
