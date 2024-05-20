import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://185.185.70.171:3004",
        secure: false,
      },
    },
  },

  plugins: [react()],
});
