import React from "react";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={["wren-card", className].filter(Boolean).join(" ")}>
      {title && <h3 className="wren-card__header">{title}</h3>}
      <div className="wren-card__body">{children}</div>
    </div>
  );
}
