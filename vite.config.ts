import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Served at https://didogi.ir/landing (Dokploy path or reverse-proxy prefix).
export default defineConfig({
  base: "/landing/",
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Group all node_modules into a single 'vendor' chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          
          // OPTIONAL: If you want to split specific heavy libraries into their own chunks:
          // if (id.includes('lodash')) return 'lodash-vendor';
          // if (id.includes('react')) return 'react-vendor';
        }
      },
    },
  },
});
