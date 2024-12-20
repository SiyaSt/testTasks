import React, { useEffect, useState } from "react";
import { SelectComponent, TaskInput, TaskList } from "../../API";
import { useSearchParams } from "react-router-dom";
import "./TodoList.css";

export const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchParams, setSearchParams] = useSearchParams(); // Get search params
  const filterParam = searchParams.get("filter") || "all";
  const priorityFilterParam = searchParams.get("priority") || "all";

  const [filter, setFilter] = useState(filterParam);
  const [priorityFilter, setPriorityFilter] = useState(priorityFilterParam);

  const [newTaskData, setNewTaskData] = useState({ text: "", priority: "low" });

  const optionsFilter = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  const optionsFilterPriority = [
    { value: "all", label: "All" },
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  const optionsPriority = [
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
    setNewTaskData({ text: "", priority: "low" });
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // задание - реализовать фильтры через query params (нужно чтобы при выборе фильтра менялся url)
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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSearchParams({ filter: newFilter, priority: priorityFilter });
  };

  const handlePriorityFilterChange = (newPriorityFilter) => {
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
          onChange={(e) => handleFilterChange(e.target.value)}
        />

        <SelectComponent
          options={optionsFilterPriority}
          value={priorityFilter}
          onChange={(e) => handlePriorityFilterChange(e.target.value)}
        />
      </div>
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};
