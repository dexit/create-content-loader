import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejes.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
})
