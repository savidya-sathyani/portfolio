import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
    }
  },
  css: {
    postcss: './postcss.config.js',
  }
})
