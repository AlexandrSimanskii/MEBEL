import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: '/',
  server: {
    // proxy: {
    //   "/api": {
    //     target: "http://185.185.70.171:3004",
    //     secure: false,
    //   },
    // },
  },

>>>>>>> eeee81cc1f565c6a79eea2744c2de91d95d9cb03
  plugins: [react()],
})
