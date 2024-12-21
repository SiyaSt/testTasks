import React, { useState } from "react";
import "./TaskEditor.css";

export const TaskEditor = ({ taskId, initialText, onSave, onCancel }) => {
  const [editText, setEditText] = useState(initialText);

  return (
    <div className="editor">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="editor-input"
      />
      <button onClick={() => onSave(taskId, editText)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
