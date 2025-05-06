
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/", // Essentiel pour Netlify SPA et routes React Router
  build: {
    outDir: "dist", // Correspond au 'publish' dans netlify.toml
    emptyOutDir: true, 
    sourcemap: mode === "development",
    minify: "terser", // Utilisation de Terser pour la minification
    terserOptions: {
      compress: {
        drop_console: mode === "production", // Supprime console.log en production
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
        }
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimisation des dépendances pour Netlify
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  }
}));
