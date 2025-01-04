import { SelectComponent } from "../index";
import "./TaskInput.scss";
import { Options, Task } from "../../types/types";
import { Dispatch, FC, SetStateAction } from "react";

interface TaskInputProps {
  newTaskData: Task;
  setNewTaskData: Dispatch<SetStateAction<Task>>;
  optionsPriority: Options[];
  onAddTask: () => void;
}

export const TaskInput: FC<TaskInputProps> = ({
  newTaskData,
  setNewTaskData,
  optionsPriority,
  onAddTask,
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
      onChange={(e) => {
        const selectedPriority = e.target.value as "low" | "medium" | "high";
        setNewTaskData({ ...newTaskData, priority: selectedPriority });
      }}
    />
    <button onClick={onAddTask}>Add Task</button>
  </div>
);
