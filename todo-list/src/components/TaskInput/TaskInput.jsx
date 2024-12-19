import { SelectComponent } from "../../API";
import "./TaskInput.css";

export const TaskInput = ({
  newTaskData,
  setNewTaskData,
  optionsPriority,
  addTask,
}) => (
  <div className="task-input">
    <input
      type="text"
      placeholder="Add new task..."
      value={newTaskData.text}
      onChange={(e) => setNewTaskData({ ...newTaskData, text: e.target.value })}
    />
    <SelectComponent
      options={optionsPriority}
      value={newTaskData.priority}
      onChange={(e) =>
        setNewTaskData({ ...newTaskData, priority: e.target.value })
      }
    />
    <button onClick={addTask}>Add Task</button>
  </div>
);
