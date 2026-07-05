import React from "react";
import { createRoot } from "react-dom/client";
import { LessonHtml2Page } from "./lesson-html-2-page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LessonHtml2Page />
  </React.StrictMode>
);