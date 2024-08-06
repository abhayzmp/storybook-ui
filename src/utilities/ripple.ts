import { MouseEventHandler } from "react";
import { css } from "ui/css";

const RIPPLE_TIME_IN_MS = 600;

const rippleCSS = css({
  position: "absolute",
  background: "rgba(255 255 255 / 0.4)",
  transform: "scale(0)",
  borderRadius: "50%",
  animation: `ripple ${RIPPLE_TIME_IN_MS}ms ease-in-out`,
});

/**
 *
 * Parent Container should have position: "relative" and overflow: "hidden",
 */
export const handleRippleClick: MouseEventHandler<HTMLButtonElement> = (
  event
) => {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  rippleCSS
    .split(" ")
    .forEach((rippleClass) => circle.classList.add(rippleClass));

  circle.setAttribute("data-ripple", "true");

  const ripple = button.querySelector("[data-ripple]");

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, RIPPLE_TIME_IN_MS);
};
