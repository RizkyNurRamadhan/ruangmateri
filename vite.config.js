import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Enable direct static opening (file:// or any web server / hosting)
  server: {
    port: 5173,
    open: false,
  },
});
