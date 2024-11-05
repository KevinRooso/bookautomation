import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,          // Set the port to 80
    host: '0.0.0.0',   // Make the server accessible from the network (important for Docker or remote access)
    strictPort: true,   // Ensure the port is strictly used, do not fall back to another port
  },
})
