import React from "react";

type BadgeVariant = "default" | "green" | "amber" | "red" | "blue";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

function autoVariant(label: string): BadgeVariant {
  switch (label.toLowerCase()) {
    case "published":
      return "green";
    case "draft":
      return "amber";
    case "archived":
      return "default";
    default:
      return "blue";
  }
}

export function Badge({ label, variant }: BadgeProps) {
  const resolvedVariant = variant ?? autoVariant(label);
  return (
    <span className={`wren-badge wren-badge--${resolvedVariant}`}>{label}</span>
  );
}
