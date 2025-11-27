import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // This fixes refresh 404 for React Router
  server: {
    historyApiFallback: true,
  },

  // Also required for Vercel production
  build: {
    outDir: 'dist',
  }
});
