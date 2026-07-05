import React from "react";
import { createRoot } from "react-dom/client";
import { LessonHtmlPage } from "./lesson-html-page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LessonHtmlPage />
  </React.StrictMode>
);
