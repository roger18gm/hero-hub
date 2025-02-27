import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  // base: "/hero-hub",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        focus: resolve(__dirname, "src/focus.html"),
        search: resolve(__dirname, "src/search.html")
      }
    }
  }
});
