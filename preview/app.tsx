import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";

import { Button } from "../src/Button";
import { Badge } from "../src/Badge";
import { Card } from "../src/Card";
import { Table } from "../src/Table";
import { Tabs } from "../src/Tabs";
import { Input } from "../src/Input";
import { Spinner } from "../src/Spinner";
import { EmptyState } from "../src/EmptyState";
import { JsonViewer } from "../src/JsonViewer";
import { DiffViewer } from "../src/DiffViewer";

const sectionStyle: React.CSSProperties = {
  marginBottom: "2.5rem",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#64748b",
  marginBottom: "0.75rem",
  marginTop: 0,
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  alignItems: "center",
};

interface Document {
  id: string;
  title: string;
  status: string;
  updatedAt: string;
}

const tableRows: Document[] = [
  { id: "1", title: "Homepage copy", status: "published", updatedAt: "2026-04-01" },
  { id: "2", title: "Pricing page", status: "draft", updatedAt: "2026-04-03" },
  { id: "3", title: "Old landing page", status: "archived", updatedAt: "2026-01-15" },
];

const tableColumns = [
  { key: "title", header: "Title" },
  { key: "status", header: "Status", render: (row: Document) => <Badge label={row.status} /> },
  { key: "updatedAt", header: "Updated" },
];

const sampleDiff = [
  { op: "add" as const, path: "/metadata/author", value: "Alice" },
  { op: "remove" as const, path: "/content/hero/subtitle", oldValue: "Old tagline" },
  { op: "replace" as const, path: "/content/hero/title", value: "New Title", oldValue: "Old Title" },
];

const sampleJson = {
  id: "doc_abc123",
  version: 4,
  status: "published",
  metadata: { author: "Alice", tags: ["marketing", "homepage"] },
  createdAt: "2026-01-01T00:00:00Z",
};

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "history", label: "History" },
  { key: "settings", label: "Settings" },
];

function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem 1.5rem 4rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        color: "#0f172a",
      }}
    >
      <h1 style={{ fontSize: "1.375rem", fontWeight: 700, marginBottom: "0.25rem" }}>
        Wren Component Library
      </h1>
      <p style={{ color: "#64748b", marginBottom: "2.5rem", marginTop: "0.25rem", fontSize: "0.875rem" }}>
        Preview of all available components.
      </p>

      {/* Buttons */}
      <section style={sectionStyle}>
        <p style={headingStyle}>Button — variants</p>
        <div style={rowStyle}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
        <p style={{ ...headingStyle, marginTop: "1rem" }}>Button — sizes</p>
        <div style={rowStyle}>
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="md">Medium</Button>
          <Button variant="secondary" size="lg">Large</Button>
        </div>
      </section>

      {/* Badges */}
      <section style={sectionStyle}>
        <p style={headingStyle}>Badge</p>
        <div style={rowStyle}>
          <Badge label="published" />
          <Badge label="draft" />
          <Badge label="archived" />
          <Badge label="beta" />
          <Badge label="custom" variant="red" />
        </div>
      </section>

      {/* Spinners */}
      <section style={sectionStyle}>
        <p style={headingStyle}>Spinner</p>
        <div style={{ ...rowStyle, color: "#3b82f6" }}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </section>

      {/* Input */}
      <section style={sectionStyle}>
        <p style={headingStyle}>Input</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "360px" }}>
          <Input
            label="Document title"
            placeholder="Enter a title..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            label="Slug"
            placeholder="my-document"
            error="This slug is already taken."
          />
          <Input placeholder="No label, no error" />
        </div>
      </section>

      {/* Tabs */}
      <section style={sectionStyle}>
        <p style={headingStyle}>Tabs</p>
        <Tabs tabs={TABS} active={activeTab} onChange={setActiveTab} />
        <div
          style={{
            padding: "1rem",
            border: "1px solid #e2e8f0",
            borderTop: "none",
            borderRadius: "0 0 6px 6px",
            fontSize: "0.875rem",
            color: "#64748b",
          }}
        >
          Active tab: <strong style={{ color: "#0f172a" }}>{activeTab}</strong>
        </div>
      </section>

      {/* Card */}
      <section style={sectionStyle}>
        <p style={headingStyle}>Card</p>
        <Card title="Document summary">
          <p style={{ margin: 0, fontSize: "0.875rem", color: "#64748b" }}>
            This card contains arbitrary content. Use it to group related information
            with a clean header and body layout.
          </p>
        </Card>
      </section>

      {/* Table */}
      <section style={sectionStyle}>
        <p style={headingStyle}>Table</p>
        <Table
          columns={tableColumns}
          rows={tableRows}
          onRowClick={(row) => alert(`Clicked: ${row.title}`)}
        />
        <p style={{ ...headingStyle, marginTop: "1rem" }}>Table — empty state</p>
        <Table columns={tableColumns} rows={[]} emptyMessage="No documents found." />
      </section>

      {/* Empty State */}
      <section style={sectionStyle}>
        <p style={headingStyle}>EmptyState</p>
        <div style={{ border: "1px solid #e2e8f0", borderRadius: "6px", overflow: "hidden" }}>
          <EmptyState
            title="No documents yet"
            description="Create your first document to get started."
            action={<Button size="sm">Create document</Button>}
          />
        </div>
      </section>

      {/* Diff Viewer */}
      <section style={sectionStyle}>
        <p style={headingStyle}>DiffViewer</p>
        <DiffViewer diff={sampleDiff} />
        <p style={{ ...headingStyle, marginTop: "1rem" }}>DiffViewer — empty</p>
        <DiffViewer diff={[]} />
      </section>

      {/* JSON Viewer */}
      <section style={sectionStyle}>
        <p style={headingStyle}>JsonViewer</p>
        <JsonViewer data={sampleJson} maxHeight="300px" />
      </section>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
