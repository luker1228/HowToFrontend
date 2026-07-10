import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  base: "./",
  publicDir: "public",
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
  },
});
