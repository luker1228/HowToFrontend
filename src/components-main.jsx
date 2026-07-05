import html from "./legacy-content/components.html?raw";
import { mountLegacyPage } from "./mount-legacy-page.jsx";

mountLegacyPage({
  title: "组件认知页 · 后端同学的前端战术手册",
  html,
});
