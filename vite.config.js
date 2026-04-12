import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "assets/**/*",
          dest: "assets",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        fitlyn: path.resolve(__dirname, "case-study/fitlyn/index.html"),
      },
    },
  },
});
