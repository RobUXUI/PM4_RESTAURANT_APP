import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/PM4_RESTAURANT_APP",
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
})

