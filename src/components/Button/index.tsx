import { ComponentProps, MouseEventHandler } from "react";
import { handleRippleClick } from "src/utilities/ripple";
import { cva, cx, RecipeVariantProps } from "ui/css";

export const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5",
    fontWeight: "medium",
    cursor: "pointer",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    borderRadius: "3px",
    padding: "8px",
    fontSize: "14px",
    minWidth: "150px",
    outline: "none",
    position: "relative",
    overflow: "hidden",
    transition: "background 150ms ease-in-out",
    _focusVisible: {
      outline: {
        base: "1px solid blue",
        _dark: "1px solid yellow",
      },
    },
    _disabled: {
      boxShadow: "none",
      pointerEvents: "none",
    },
  },
  variants: {
    variant: {
      primary: {
        bg: "#23bebd",
        color: "#fff",
        _hover: {
          bg: "color-mix(in srgb, #23bebd 70%, #000)",
        },
        _disabled: {
          bg: "color-mix(in srgb, #23bebd 85%, #000)",
        },
      },
      secondary: {
        bg: "#607d8b",
        color: "#fff",
        _hover: {
          bg: "color-mix(in srgb, #607d8b 90%, #000)",
        },
        _disabled: {
          color: "rgba(255 255 255 / 0.3)",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export const Button = (props: ButtonProps) => {
  const [variantProps, localProps] = buttonRecipe.splitVariantProps(props);

  const {
    children,
    className: localClassName,
    onClick,
    ...restLocalProps
  } = localProps;
  const className = cx(buttonRecipe(variantProps), localClassName);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    handleRippleClick(event);
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <button className={className} onClick={handleClick} {...restLocalProps}>
      {children}
    </button>
  );
};
