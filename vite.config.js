import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { TailwindCSSVitePlugin } from "tailwindcss-vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), TailwindCSSVitePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/api": path.resolve(__dirname, "./src/api/"),
      "@/pages/**": path.resolve(__dirname, "./src/pages/**"),
      "@/features/**": path.resolve(__dirname, "./src/features/**"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
    },
  },
});
