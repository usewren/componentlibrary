import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, id, className, ...props }: InputProps) {
  const inputId = id ?? (label ? `wren-input-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <div className="wren-input-wrapper">
      {label && (
        <label className="wren-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={["wren-input", error ? "wren-input--error" : "", className].filter(Boolean).join(" ")}
        {...props}
      />
      {error && <span className="wren-input-error">{error}</span>}
    </div>
  );
}
