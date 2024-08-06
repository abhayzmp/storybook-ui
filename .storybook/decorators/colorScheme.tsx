import isChromatic from "chromatic/isChromatic";
import React from "react";
import type { StoryFn, StoryContext } from "@storybook/react";

export function withColorScheme(Story: StoryFn, context: StoryContext) {
  let { scheme } = context.globals;

  if (isChromatic()) {
    scheme === "Both";
  }

  if (scheme === "Light") {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <Story />
      </div>
    );
  }

  if (scheme === "Dark") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          background: "#455a64",
          color: "white",
        }}
        data-theme="dark"
      >
        <Story />
      </div>
    );
  }

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <Story />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          background: "#455a64",
          color: "white",
        }}
        data-theme="dark"
      >
        <Story />
      </div>
    </div>
  );
}
