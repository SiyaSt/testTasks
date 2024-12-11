import React from 'react';
import SelectComponent from "./SelectComponent";

function TaskInput({ newTask, setNewTask, priority, setPriority, optionsPriority, addTask }) {
    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Add new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <SelectComponent
                options={optionsPriority}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskInput;