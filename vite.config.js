import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


 

  export default defineConfig({
    // base: "/PM4_RESTAURANT_APP/",
    plugins: [react()],
    build: {
    // outDir: 'dist', 
  },
})

