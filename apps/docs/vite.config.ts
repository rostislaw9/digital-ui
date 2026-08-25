import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@digital-ui/ui": resolve(__dirname, "../../packages/ui/src/index.ts"),
      "@digital-ui/ui/button": resolve(
        __dirname,
        "../../packages/ui/src/components/button/index.ts",
      ),
      "@digital-ui/ui/card": resolve(
        __dirname,
        "../../packages/ui/src/components/card/index.ts",
      ),
      "@digital-ui/ui/cn": resolve(
        __dirname,
        "../../packages/ui/src/lib/cn.ts",
      ),
      "@digital-ui/motion": resolve(
        __dirname,
        "../../packages/motion/src/index.ts",
      ),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-select",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
          ],
          "vendor-motion": ["motion/react", "sonner"],
        },
      },
    },
  },
});
