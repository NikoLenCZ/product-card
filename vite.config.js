import {defineConfig} from 'vite';
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    manifest: true,
  },
  root: 'src',
  assetsInclude: [],
  base: '',
  publicDir: '../public',
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
    cors: true,
    host: true,
  },
});
