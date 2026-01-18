import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get repository name from environment or use default
// For GitHub Pages: if repo is "username/repo-name", base should be "/repo-name/"
const getBasePath = () => {
  // Check if we have the repository name from GitHub Actions
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    return `/${repoName}/`
  }
  // If GITHUB_PAGES is set, use the repository name
  // For user/organization pages, this should be '/'
  // For project pages, this should be '/repository-name/'
  // Default to '/Customer-Support/' for GitHub Pages deployment
  if (process.env.GITHUB_PAGES || process.env.NODE_ENV === 'production') {
    return '/Customer-Support/'
  }
  return '/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  server: {
    port: 3000,
    open: true
  }
})

