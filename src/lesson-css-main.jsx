import React from "react";
import { createRoot } from "react-dom/client";
import { LessonCssPage } from "./lesson-css-page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LessonCssPage />
  </React.StrictMode>
);
