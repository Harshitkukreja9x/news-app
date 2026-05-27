import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),

    tailwindcss(),

    compression({
      algorithm: "gzip",
    }),
  ],

  build: {
    target: "esnext",

    minify: "terser",

    cssCodeSplit: true,

    sourcemap: false,

    chunkSizeWarningLimit: 500,

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

   rollupOptions: {
  output: {
    manualChunks(id) {
      if (
        id.includes("react") ||
        id.includes("react-dom")
      ) {
        return "react";
      }

      if (
        id.includes("@reduxjs/toolkit") ||
        id.includes("react-redux")
      ) {
        return "redux";
      }

      if (
        id.includes("react-router-dom")
      ) {
        return "router";
      }
    },
  },
},
  },

  server: {
    host: true,
    port: 5173,
  },
});