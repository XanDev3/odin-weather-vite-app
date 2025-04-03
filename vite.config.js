import { defineConfig } from 'vite'
import macrosPlugin from "vite-plugin-babel-macros"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/odin-weather-vite-app/",
  plugins: [react(), macrosPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
