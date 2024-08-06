import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        ripple: { to: { transform: "scale(4)", opacity: 0 } },
      },
    },
  },

  conditions: {
    light: "&",
    dark: "[data-theme=dark] &",
  },

  // The output directory for your css system
  outdir: "ui",
  globalCss: {
    body: {
      bg: { base: "white", _dark: "gray.900" },
      color: { base: "gray.900", _dark: "white" },
    },
  },
});
