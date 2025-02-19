import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfingPath from "vite-tsconfig-paths"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tsconfingPath()],
  build:{
    sourcemap: true,
  }
})
