import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: [
        "commander",
        "chalk",
        "node:child_process",
        "node:fs",
        "node:path",
        "node:process",
        "node:url",
      ],
      output: {
        banner: "#!/usr/bin/env node",
      },
    },
    minify: false,
    sourcemap: true,
    target: "node20",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
