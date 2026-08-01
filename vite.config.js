import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  css: {
    postcss: {}
  },
  server: {
    port: 3000,
    host: true
  }
});

