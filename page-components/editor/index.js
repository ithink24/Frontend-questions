import React, { useState } from "react";
// import "./editor.css"; // You can define some styles if needed

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    setContent(e.target.innerHTML);
  };

  const format = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={() => format("bold")}>Bold</button>
        <button onClick={() => format("italic")}>Italic</button>
        <button onClick={() => format("underline")}>Underline</button>
        <button onClick={() => format("formatBlock", "<h1>")}>H1</button>
        <button onClick={() => format("formatBlock", "<h2>")}>H2</button>
        <button onClick={() => format("formatBlock", "<p>")}>Paragraph</button>
      </div>

      <div
        contentEditable
        className="editor"
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          minHeight: "200px",
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "10px",
        }}
      ></div>

      <div className="word-count" style={{ marginTop: "10px" }}>
        Words: {content.split(/\s+/).filter(Boolean).length}
      </div>
    </div>
  );
};

export default TextEditor;
