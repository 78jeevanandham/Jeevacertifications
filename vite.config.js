import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: 'Jeevacertifications', // Add this exact line with the forward slashes
})