import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:3000',
        target: 'https://rentnest-xhq8.onrender.com/',
        secure: true,
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});