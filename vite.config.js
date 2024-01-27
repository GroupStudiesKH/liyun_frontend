import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', 
      includeAssets: ['/**/*.js', '/**/*.png', '/**/*.jpg', '/**/*.jpeg', '/**/*.gif', '/**/*.svg', '/**/*.mp3'],
      manifest: {
        display: 'standalone'
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3000000
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs'
  }
})
