import React from "react";

interface Tab {
  key: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
}

export function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="wren-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={["wren-tab", tab.key === active ? "wren-tab--active" : ""].filter(Boolean).join(" ")}
          onClick={() => onChange(tab.key)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
