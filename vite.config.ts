import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Single-page внутренний лендинг. base оставляем '/', деплой-ready под Vercel.
export default defineConfig({
  plugins: [react()],
})
