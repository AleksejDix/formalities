import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

const config = defineConfig({
  plugins: [
    Vue()
  ],
  optimizeDeps: {
    exclude: ['vue', '@ascarix/formalities'],
  }
})

export default config
