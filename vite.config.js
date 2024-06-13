import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  rollupOptions: {
    input: {
      index: resolve(root, 'index.html'),    // Main page
      demo: resolve(root, 'demo.html'),      // Demo page
    },
  },
});
