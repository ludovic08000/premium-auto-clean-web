
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
    // Configuration pour la compatibilité avec l'environnement de prévisualisation
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
      // Assurer que JSX est correctement traité
      context: 'window'
    },
    // Assurer une compatibilité maximale du JavaScript
    target: 'es2015',
  },
  plugins: [
    react({
      // Configuration spécifique pour React SWC afin d'assurer la compatibilité maximale
      jsxImportSource: 'react',
      tsDecorators: true,
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  // Optimiser pour l'environnement de prévisualisation
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2015',
      jsx: 'automatic',
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment'
    }
  }
}));
