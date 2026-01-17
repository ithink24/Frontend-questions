import React, { useState } from "react";

const directoryData = [
  {
    id: 1,
    name: "src",
    children: [
      { id: 2, name: "components", children: [{ id: 3, name: "Header.js" }] },
      { id: 4, name: "App.js" },
      { id: 5, name: "index.js" },
    ],
  },
  {
    id: 6,
    name: "public",
    children: [{ id: 7, name: "index.html" }],
  },
  { id: 8, name: "package.json" },
];

function DirectoryComponent({ data }) {
  const [open, setOpen] = useState(false);

  const hasChildren = data.children && data.children.length > 0;

  return (
    <div style={{ marginLeft: "16px" }}>
      <div
        onClick={() => hasChildren && setOpen(!open)}
        style={{ cursor: hasChildren ? "pointer" : "default" }}
      >
        {hasChildren ? (open ? "📂" : "📁") : "📄"} {data.name}
      </div>
      {open &&
        hasChildren &&
        data.children.map((child) => (
          <DirectoryComponent key={child.id} data={child} />
        ))}
    </div>
  );
}

export default function Directory() {
  return (
    <div style={{ fontFamily: "monospace", padding: "10px" }}>
      <h3>📁 VSCode-like Directory</h3>
      {directoryData.map((item) => (
        <DirectoryComponent key={item.id} data={item} />
      ))}
    </div>
  );
}
