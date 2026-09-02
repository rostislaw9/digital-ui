import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ include: ["src"], insertTypesEntry: true })],
  resolve: {
    alias: {
      "@/components/ui": resolve(__dirname, "src/components"),
      "@/lib": resolve(__dirname, "src/lib"),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        alert: resolve(__dirname, "src/components/alert/index.ts"),
        avatar: resolve(__dirname, "src/components/avatar/index.ts"),
        badge: resolve(__dirname, "src/components/badge/index.ts"),
        breadcrumb: resolve(__dirname, "src/components/breadcrumb/index.ts"),
        button: resolve(__dirname, "src/components/button/index.ts"),
        card: resolve(__dirname, "src/components/card/index.ts"),
        input: resolve(__dirname, "src/components/input/index.ts"),
        label: resolve(__dirname, "src/components/label/index.ts"),
        textarea: resolve(__dirname, "src/components/textarea/index.ts"),
        tooltip: resolve(__dirname, "src/components/tooltip/index.ts"),
        popover: resolve(__dirname, "src/components/popover/index.ts"),
        tabs: resolve(__dirname, "src/components/tabs/index.ts"),
        switch: resolve(__dirname, "src/components/switch/index.ts"),
        slider: resolve(__dirname, "src/components/slider/index.ts"),
        checkbox: resolve(__dirname, "src/components/checkbox/index.ts"),
        progress: resolve(__dirname, "src/components/progress/index.ts"),
        skeleton: resolve(__dirname, "src/components/skeleton/index.ts"),
        dialog: resolve(__dirname, "src/components/dialog/index.ts"),
        "dropdown-menu": resolve(
          __dirname,
          "src/components/dropdown-menu/index.ts",
        ),
        select: resolve(__dirname, "src/components/select/index.ts"),
        separator: resolve(__dirname, "src/components/separator/index.ts"),
        accordion: resolve(__dirname, "src/components/accordion/index.ts"),
        toast: resolve(__dirname, "src/components/toast/index.ts"),
        "alert-dialog": resolve(
          __dirname,
          "src/components/alert-dialog/index.ts",
        ),
        command: resolve(__dirname, "src/components/command/index.ts"),
        "context-menu": resolve(
          __dirname,
          "src/components/context-menu/index.ts",
        ),
        "hover-card": resolve(__dirname, "src/components/hover-card/index.ts"),
        pagination: resolve(__dirname, "src/components/pagination/index.ts"),
        "radio-group": resolve(
          __dirname,
          "src/components/radio-group/index.ts",
        ),
        "scroll-area": resolve(
          __dirname,
          "src/components/scroll-area/index.ts",
        ),
        sheet: resolve(__dirname, "src/components/sheet/index.ts"),
        table: resolve(__dirname, "src/components/table/index.ts"),
        utils: resolve(__dirname, "src/lib/utils.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, name) => `${name}.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@ionbit-ui/tokens",
        "@ionbit-ui/motion",
        "motion",
        "motion/react",
        /^@radix-ui\//,
        "sonner",
        "lucide-react",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "cmdk",
      ],
    },
  },
});
