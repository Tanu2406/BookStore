import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [  tailwindcss(),react(), ],
  server: {
    proxy: {
      "/api": "http://localhost:4001",
    },
  },
  build: {
    outDir: 'dist', // Default output directory for Vite builds
  },
  
})
