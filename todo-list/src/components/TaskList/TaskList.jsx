import { classNames } from "../../utils/ClassName";
import { Checkbox, TaskEditor } from "../../API";
import { useState } from "react";

import "./TaskList.css";

export const TaskList = ({ tasks, onToggleTask, onDeleteTask, onEditTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const handleEditClick = (taskId) => {
    setEditingTask(taskId);
  };

  const handleSaveClick = (taskId, newText) => {
    onEditTask(taskId, newText);
    setEditingTask(null);
  };

  const handleCancelClick = () => {
    setEditingTask(null);
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={classNames("task", { completed: task.completed })}
        >
          <div className="task-container">
            <Checkbox
              className="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span className="priority">{task.priority}</span>
            {editingTask === task.id ? (
              <TaskEditor
                taskId={task.id}
                initialText={task.text}
                onSave={handleSaveClick}
                onCancel={handleCancelClick}
              />
            ) : (
              <span className="task-list-text">{task.text}</span>
            )}
          </div>
          <div className="task-buttons">
            {editingTask === task.id ? null : (
              <button onClick={() => handleEditClick(task.id)}>Edit</button>
            )}
            <button onClick={() => onDeleteTask(task.id)}>X</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
