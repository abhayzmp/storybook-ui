import "../src/index.css";

import type { Preview } from "@storybook/react";
import { withColorScheme } from "./decorators/colorScheme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },

  decorators: [withColorScheme],
};

export const globalTypes = {
  scheme: {
    name: "Scheme",
    desciption: "Select light or dark theme",
    defaultValue: "both",
    toolbar: {
      icon: "mirror",
      items: ["Light", "Dark", "Both"],
      dynamicTitle: true,
    },
  },
};

export default preview;
