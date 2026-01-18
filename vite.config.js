import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages
// For project pages: /repository-name/
// For user/org pages: /
const base = process.env.GITHUB_REPOSITORY 
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/Customer-Support/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

