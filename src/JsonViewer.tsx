import React from "react";

interface JsonViewerProps {
  data: unknown;
  maxHeight?: string;
}

export function JsonViewer({ data, maxHeight }: JsonViewerProps) {
  return (
    <pre
      className="wren-json-viewer"
      style={maxHeight ? { maxHeight, overflowY: "auto" } : undefined}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
