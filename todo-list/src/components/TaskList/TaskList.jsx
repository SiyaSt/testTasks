import { classNames } from "../../utils/ClassName";
import "./TaskList.css";
import { Checkbox } from "../CheckBox/CheckBox";

export const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => (
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
          <span className="task-list-text">{task.text}</span>
        </div>
        <button onClick={() => onDeleteTask(task.id)}>X</button>
      </li>
    ))}
  </ul>
);
