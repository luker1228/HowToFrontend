import React from "react";
import { createRoot } from "react-dom/client";
import { LessonLayoutPage } from "./lesson-layout-page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LessonLayoutPage />
  </React.StrictMode>
);
