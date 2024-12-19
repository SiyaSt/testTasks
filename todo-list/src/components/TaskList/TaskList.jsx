import "./TaskList.css";

export const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      // можно использовать библиотеку `classnames` - задание написать свою функцию аналог
      <li key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <span className="priority">{task.priority}</span>
          <span>{task.text}</span>
        </div>
        <button onClick={() => onDeleteTask(task.id)}>X</button>
      </li>
    ))}
  </ul>
);
