import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const ui = resolve(__dirname, "../../packages/ui/src");
const motion = resolve(__dirname, "../../packages/motion/src");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // @/ path aliases — match the source-owned import convention shown in docs.
      // Vite sorts object aliases by key length (longest first), so
      // "@/components/ui/button" matches before "@/components/ui" before "@".
      "@/components/ui/accordion": resolve(ui, "components/accordion/index.ts"),
      "@/components/ui/alert": resolve(ui, "components/alert/index.ts"),
      "@/components/ui/alert-dialog": resolve(
        ui,
        "components/alert-dialog/index.ts",
      ),
      "@/components/ui/avatar": resolve(ui, "components/avatar/index.ts"),
      "@/components/ui/badge": resolve(ui, "components/badge/index.ts"),
      "@/components/ui/breadcrumb": resolve(
        ui,
        "components/breadcrumb/index.ts",
      ),
      "@/components/ui/button": resolve(ui, "components/button/index.ts"),
      "@/components/ui/card": resolve(ui, "components/card/index.ts"),
      "@/components/ui/checkbox": resolve(ui, "components/checkbox/index.ts"),
      "@/components/ui/command": resolve(ui, "components/command/index.ts"),
      "@/components/ui/context-menu": resolve(
        ui,
        "components/context-menu/index.ts",
      ),
      "@/components/ui/dialog": resolve(ui, "components/dialog/index.ts"),
      "@/components/ui/dropdown-menu": resolve(
        ui,
        "components/dropdown-menu/index.ts",
      ),
      "@/components/ui/hover-card": resolve(
        ui,
        "components/hover-card/index.ts",
      ),
      "@/components/ui/input": resolve(ui, "components/input/index.ts"),
      "@/components/ui/label": resolve(ui, "components/label/index.ts"),
      "@/components/ui/pagination": resolve(
        ui,
        "components/pagination/index.ts",
      ),
      "@/components/ui/popover": resolve(ui, "components/popover/index.ts"),
      "@/components/ui/progress": resolve(ui, "components/progress/index.ts"),
      "@/components/ui/radio-group": resolve(
        ui,
        "components/radio-group/index.ts",
      ),
      "@/components/ui/scroll-area": resolve(
        ui,
        "components/scroll-area/index.ts",
      ),
      "@/components/ui/select": resolve(ui, "components/select/index.ts"),
      "@/components/ui/separator": resolve(ui, "components/separator/index.ts"),
      "@/components/ui/sheet": resolve(ui, "components/sheet/index.ts"),
      "@/components/ui/skeleton": resolve(ui, "components/skeleton/index.ts"),
      "@/components/ui/slider": resolve(ui, "components/slider/index.ts"),
      "@/components/ui/switch": resolve(ui, "components/switch/index.ts"),
      "@/components/ui/tabs": resolve(ui, "components/tabs/index.ts"),
      "@/components/ui/textarea": resolve(ui, "components/textarea/index.ts"),
      "@/components/ui/toast": resolve(ui, "components/toast/index.ts"),
      "@/components/ui/tooltip": resolve(ui, "components/tooltip/index.ts"),
      "@/components/ui": resolve(ui, "index.ts"),
      "@/components/motion/spotlight": resolve(
        motion,
        "primitives/spotlight.tsx",
      ),
      "@/components/motion": resolve(motion, "index.ts"),
      "@/lib/utils": resolve(ui, "lib/utils.ts"),
      // Package aliases for internal docs app code (pages, components).
      "@digital-ui/ui": resolve(ui, "index.ts"),
      "@digital-ui/ui/button": resolve(ui, "components/button/index.ts"),
      "@digital-ui/ui/card": resolve(ui, "components/card/index.ts"),
      "@digital-ui/ui/utils": resolve(ui, "lib/utils.ts"),
      "@digital-ui/motion": resolve(motion, "index.ts"),
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
