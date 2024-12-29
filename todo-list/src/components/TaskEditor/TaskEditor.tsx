import React, { ChangeEvent, FC, useState } from "react";
import "./TaskEditor.scss";

interface TaskEditorProps {
  taskId: number;
  initialText: string;
  onSave: (taskId: number, newText: string) => void;
  onCancel: () => void;
}

export const TaskEditor: FC<TaskEditorProps> = ({
  taskId,
  initialText,
  onSave,
  onCancel,
}) => {
  const [editText, setEditText] = useState<string>(initialText);

  return (
    <div className="editor">
      <input
        type="text"
        value={editText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEditText(e.target.value)
        }
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
