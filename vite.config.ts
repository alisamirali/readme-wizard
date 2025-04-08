import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { resolve } from "path";

// Helper to handle __dirname in ES modules
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Corrected: Use boolean `true` instead of string `"true"`
    port: 8080,
  },
  plugins: [
    react(),
    // Add conditional plugins here if needed
    // Example: mode === "development" && someDevelopmentPlugin()
  ].filter(Boolean), // Filter out falsy values
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // Use `resolve` from `path` for alias resolution
    },
  },
}));
