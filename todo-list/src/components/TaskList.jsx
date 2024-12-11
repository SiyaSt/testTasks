import React from 'react';

function TaskListComponent({ tasks, toggleTask, deleteTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
                    <div>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span className="priority">{task.priority}</span>
                        <span>{task.text}</span>
                    </div>
                    <button onClick={() => deleteTask(task.id)}>X</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskListComponent;