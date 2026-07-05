import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        components: resolve(__dirname, "components.html"),
        "lesson-html": resolve(__dirname, "lesson-html.html"),
        "lesson-html-2": resolve(__dirname, "lesson-html-2.html"),
        "lesson-css": resolve(__dirname, "lesson-css.html"),
        "lesson-css-2": resolve(__dirname, "lesson-css-2.html"),
        "lesson-js": resolve(__dirname, "lesson-js.html"),
        "lesson-react": resolve(__dirname, "lesson-react.html"),
        prompts: resolve(__dirname, "prompts.html"),
      },
    },
  },
});
