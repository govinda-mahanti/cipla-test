import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    proxy: {
      '/auth': {
        target: 'http://backend.mumvets.com', // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },

     
  },
})
