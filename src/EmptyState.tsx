import React from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="wren-empty-state">
      <p className="wren-empty-state__title">{title}</p>
      {description && <p className="wren-empty-state__description">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
