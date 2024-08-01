import { ComponentProps } from "react";
import { cva, cx, RecipeVariantProps } from "ui/css";

export const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    fontWeight: "medium",
    shadow: "sm",
    cursor: "pointer",
    _disabled: {
      opacity: "0.4",
    },
  },
  variants: {
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: { base: "gray.200", _dark: "gray.700" },
        color: { base: "gray.700", _dark: "white" },
      },
      solid: {
        bg: "blue.500",
        color: "white",
      },
    },

    size: {
      medium: {
        px: "3",
        minH: "8",
        fontSize: "sm",
      },
      large: {
        px: "3",
        minH: "8",
        fontSize: "lg",
      },
    },

    shape: {
      rounded: {
        borderRadius: "md",
      },
      pill: {
        borderRadius: "full",
      },
      square: {},
    },
  },
  defaultVariants: {
    size: "medium",
    shape: "rounded",
  },
});

export type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "outline" | "solid";
  size?: "medium" | "large";
  shape?: "rounded" | "pill" | "square";
};

export const Button = (props: ButtonProps) => {
  const [variantProps, localProps] = buttonRecipe.splitVariantProps(props);

  const className = cx(buttonRecipe(variantProps), localProps.className);

  return <button {...localProps} className={className} />;
};
