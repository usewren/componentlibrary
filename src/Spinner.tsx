import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
}

export function Spinner({ size = "md" }: SpinnerProps) {
  return (
    <span
      className={["wren-spinner", `wren-spinner--${size}`].join(" ")}
      role="status"
      aria-label="Loading"
    />
  );
}
