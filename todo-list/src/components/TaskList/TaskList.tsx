import { classNames } from "../../utils/ClassName";
import { FC, useState } from "react";
import { Checkbox, TaskEditor } from "../index";
import { Task } from "../../types/types";

import "./TaskList.scss";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onEditTask: (taskId: number, newText: string) => void;
}

export const TaskList: FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) => {
  const [editingTask, setEditingTask] = useState<number | null>(null);

  const handleEditClick = (taskId: number) => {
    setEditingTask(taskId);
  };

  const handleSaveClick = (taskId: number, newText: string) => {
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
