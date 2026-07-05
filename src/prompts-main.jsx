import html from "./legacy-content/prompts.html?raw";
import { mountLegacyPage } from "./mount-legacy-page.jsx";

mountLegacyPage({
  title: "Prompt Library · 后端同学的前端战术手册",
  html,
});
