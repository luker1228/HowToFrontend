import React from "react";
import { createRoot } from "react-dom/client";
import { LessonLayout2Page } from "./lesson-layout-2-page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LessonLayout2Page />
  </React.StrictMode>
);
