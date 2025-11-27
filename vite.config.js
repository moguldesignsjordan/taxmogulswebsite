import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  
  server: {
    historyApiFallback: true,  // Fixes refresh 404 during dev
  },

  build: {
    outDir: "dist",            // Required by Vercel
  },
});
