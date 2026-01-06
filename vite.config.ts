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
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true, 
    sourcemap: mode === "development",
    minify: mode === "production" ? "terser" : false,
    terserOptions: mode === "production" ? {
      compress: {
        drop_console: true,
      }
    } : undefined,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
        }
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"]
  }
}));
