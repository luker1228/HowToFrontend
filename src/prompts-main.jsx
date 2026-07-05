import React from "react";
import { createRoot } from "react-dom/client";
import { PromptsPage } from "./prompts-page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PromptsPage />
  </React.StrictMode>
);
