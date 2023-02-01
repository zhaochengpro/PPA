import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import  inject  from  '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(path.resolve(), './src'),
    },
  },
  server: {
    host: true,
    port: 8088,
  },
  build: {
    rollupOptions: {
      // @ts-ignore
      plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});
