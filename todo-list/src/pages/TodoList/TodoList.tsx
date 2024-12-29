import { ChangeEvent, FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectComponent, TaskInput, TaskList } from "../../components";
import "./TodoList.scss";
import { Options, Task } from "../../types/types";

export const TodoList: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchParams, setSearchParams] = useSearchParams(); // Get search params
  const filterParam = searchParams.get("filter") || "all";
  const priorityFilterParam = searchParams.get("priority") || "all";

  const [filter, setFilter] = useState<string>(filterParam);
  const [priorityFilter, setPriorityFilter] =
    useState<string>(priorityFilterParam);

  const [newTaskData, setNewTaskData] = useState<Task>({
    text: "",
    completed: false,
    id: 0,
    priority: "low",
  });

  const optionsFilter: Options[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  const optionsFilterPriority: Options[] = [
    { value: "all", label: "All" },
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  const optionsPriority: Options[] = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!newTaskData.text.trim()) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        text: newTaskData.text,
        priority: newTaskData.priority,
        completed: false,
      },
    ]);
    setNewTaskData({ completed: false, id: 0, text: "", priority: "low" });
  };

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (taskId: number, newText: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task,
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "active") return !task.completed;
      return true;
    })
    .filter((task) => {
      if (priorityFilter === "all") return true;
      return task.priority === priorityFilter;
    });

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setSearchParams({ filter: newFilter, priority: priorityFilter });
  };

  const handlePriorityFilterChange = (newPriorityFilter: string) => {
    setPriorityFilter(newPriorityFilter);
    setSearchParams({ filter: filter, priority: newPriorityFilter });
  };

  return (
    <div className="todo-list">
      <TaskInput
        newTaskData={newTaskData}
        setNewTaskData={setNewTaskData}
        optionsPriority={optionsPriority}
        onAddTask={handleAddTask}
      />

      <div className="filters">
        <p>Filters: </p>
        <SelectComponent
          options={optionsFilter}
          value={filter}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleFilterChange(e.target.value)
          }
        />

        <SelectComponent
          options={optionsFilterPriority}
          value={priorityFilter}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handlePriorityFilterChange(e.target.value)
          }
        />
      </div>
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
};
