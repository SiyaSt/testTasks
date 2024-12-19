import { SelectComponent } from "../../API";
import "./TaskInput.css";

export const TaskInput = ({
  newTask,
  setNewTask,
  priority,
  setPriority,
  optionsPriority,
  addTask,
}) => (
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
