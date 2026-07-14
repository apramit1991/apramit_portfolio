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
        classic: path.resolve(__dirname, "classic.html"),
        csFitlyn: path.resolve(__dirname, "case-studies/fitlyn/index.html"),
        csTradeup: path.resolve(__dirname, "case-studies/tradeup/index.html"),
        csLogile: path.resolve(__dirname, "case-studies/logile/index.html"),
        tradeup: path.resolve(__dirname, "tradeup-case-study.html"),
        fitlyn: path.resolve(__dirname, "case-study/fitlyn/index.html"),
        logile: path.resolve(__dirname, "case-study/logile/index.html"),
      },
    },
  },
});
