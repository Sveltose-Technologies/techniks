import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]-[hash].js`,
        chunkFileNames: `[name]-[hash].js`,
        assetFileNames: `[name]-[hash].[ext]`,
      },
    },
  },
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    allowedHosts: ["techniks.co.nz", "www.techniks.co.nz"],
    // Added proxy to bypass CORS during development
    proxy: {
      '/api': {
        target: 'https://backend.techniks.co.nz',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       output: {
//         entryFileNames: `[name]-[hash].js`,
//         chunkFileNames: `[name]-[hash].js`,
//         assetFileNames: `[name]-[hash].[ext]`,
//       },
//     },
//   },
//   server: {
//     host: true,
//     port: 5174,
//     strictPort: true,
//     allowedHosts: ["techniks.co.nz", "www.techniks.co.nz"],
//   },
// });
