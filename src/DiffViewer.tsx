import React from "react";

interface DiffEntry {
  op: "add" | "remove" | "replace";
  path: string;
  value?: unknown;
  oldValue?: unknown;
}

interface DiffViewerProps {
  diff: DiffEntry[];
}

const OP_SYMBOL: Record<DiffEntry["op"], string> = {
  add: "+",
  remove: "-",
  replace: "~",
};

function formatValue(value: unknown): string {
  if (value === undefined) return "";
  return JSON.stringify(value);
}

export function DiffViewer({ diff }: DiffViewerProps) {
  if (diff.length === 0) {
    return (
      <div className="wren-diff-viewer">
        <div className="wren-diff-viewer__empty">No changes.</div>
      </div>
    );
  }

  return (
    <div className="wren-diff-viewer">
      {diff.map((entry, i) => (
        <div key={i} className={`wren-diff-entry wren-diff-entry--${entry.op}`}>
          <span className="wren-diff-entry__op">{OP_SYMBOL[entry.op]}</span>
          <span className="wren-diff-entry__path">{entry.path}</span>
          {(entry.op === "remove" || entry.op === "replace") && (
            <span className="wren-diff-entry__old">{formatValue(entry.oldValue)}</span>
          )}
          {entry.op === "add" && <span />}
          {(entry.op === "add" || entry.op === "replace") && (
            <span className="wren-diff-entry__new">{formatValue(entry.value)}</span>
          )}
          {entry.op === "remove" && <span />}
        </div>
      ))}
    </div>
  );
}
