import html from "./legacy-content/index.html?raw";
import { mountLegacyPage } from "./mount-legacy-page.jsx";

mountLegacyPage({
  title: "后端同学的前端战术手册",
  html,
});
