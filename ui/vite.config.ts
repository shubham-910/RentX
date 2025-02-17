/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'build',
  },
  server: {
    port: 8000,
  },
  test: {
    globals: true,
  },
  define: {
    __API_HOST__: `YOUR API HOST NAME`,
    __STRIPE_PUBLISHABLE_KEY__: `YOUR STRIPE PUBLISHED KEY`,
    __STRIPE_SECRET_KEY__: `YOUR STRIPE SECRET KEY`,
  },
});
