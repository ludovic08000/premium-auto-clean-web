
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/", // Important pour Netlify SPA
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: mode === "development",
    assetsInlineLimit: 0, // Évite les base64 inutiles
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optionnel : supprime force (utile si conflits, mais à éviter si tout va bien)
  optimizeDeps: {
    include: ["react", "react-dom"]
  }
}));
