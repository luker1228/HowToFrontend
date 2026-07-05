import React from "react";
import { createRoot } from "react-dom/client";
import { LessonReactApp } from "./lesson-react-page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LessonReactApp />
  </React.StrictMode>
);
