import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lucademenego/",
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
})
