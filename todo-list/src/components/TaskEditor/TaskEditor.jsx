import React, { useState } from "react";
import "./TaskEditor.scss";

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
      <button className="save-button" onClick={() => onSave(taskId, editText)}>
        <span>Save</span>
      </button>
      <button className="cancel-button" onClick={onCancel}>
        <span>Cancel</span>
      </button>
    </div>
  );
};
