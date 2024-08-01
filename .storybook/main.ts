import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  typescript: {
    reactDocgen: "react-docgen",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  /* Avoiding sourcemaps so Github Actions can build faster and not run out of memory */
  async viteFinal(config) {
    return mergeConfig(config, {
      build: {
        sourcemap: false,
      },
    });
  },
};
export default config;
