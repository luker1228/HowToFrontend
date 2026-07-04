import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        components: resolve(__dirname, "components.html"),
        "lesson-html": resolve(__dirname, "lesson-html.html"),
        "lesson-css": resolve(__dirname, "lesson-css.html"),
        "lesson-js": resolve(__dirname, "lesson-js.html"),
        "lesson-react": resolve(__dirname, "lesson-react.html"),
        prompts: resolve(__dirname, "prompts.html"),
      },
    },
  },
});
