
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
    // Configuration spécifique pour IONOS
    rollupOptions: {
      output: {
        // Utiliser des noms de fichiers compatibles
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // Compatibilité maximale
        format: 'iife',
        // Renommer le fichier principal pour correspondre à index.html
        manualChunks: undefined
      }
    },
    // Assurer une compatibilité maximale du JavaScript
    target: 'es2015',
    // Générer un fichier principal.js
    modulePreload: false
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimiser pour les serveurs problématiques
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2015'
    }
  }
}));
