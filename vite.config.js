import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        feed: resolve(__dirname, "feed/index.html"),
        profile: resolve(__dirname, "profile/index.html"),
      },
    },
  },
});
