
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: '/', // S'assure que tous les chemins d'accès sont relatifs à la racine
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: mode === 'development',
    assetsInlineLimit: 0, // S'assure que les petits fichiers comme le favicon ne sont pas intégrés en base64
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ajouter une option optimizeDeps pour aider avec les conflits potentiels
  optimizeDeps: {
    force: true
  }
}));
