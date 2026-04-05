import React from "react";

type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  loading,
  children,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={["wren-btn", `wren-btn--${variant}`, `wren-btn--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="wren-spinner wren-spinner--sm" aria-hidden="true" />}
      {children}
    </button>
  );
}
