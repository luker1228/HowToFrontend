import React from "react";
import { createRoot } from "react-dom/client";
import { LessonCss2Page } from "./lesson-css-2-page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LessonCss2Page />
  </React.StrictMode>
);