import React, {useEffect, useState} from 'react';
import TaskInput from "../components/TaskInput";
import SelectComponent from "../components/SelectComponent";
import TaskList from "../components/TaskList";

function TodoList() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setFilter] = useState("all");
    const [priorityFilter, setPriorityFilter] = useState("all");

    // можно вынести в один стейт - useState({ text: "", priority: "low" })
    const [newTask, setNewTask] = useState("");
    const [priority, setPriority] = useState("low");

    const optionsFilter = [
        {value: 'all', label: 'All'},
        {value: 'active', label: 'Active'},
        {value: 'completed', label: 'Completed'},
    ];

    const optionsFilterPriority = [
        {value: 'all', label: 'All'},
        {value: 'low', label: 'Low'},
        {value: 'medium', label: 'Medium'},
        {value: 'high', label: 'High'},
    ];

    const optionsPriority = [
        {value: 'low', label: 'Low'},
        {value: 'medium', label: 'Medium'},
        {value: 'high', label: 'High'},
    ];

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // принято называть функции начиная с `handle...` (handleAddTask)
    const addTask = () => {
        if (!newTask.trim()) return;
        // использовать колбек с prev
        setTasks([
            ...tasks,
            {id: Date.now(), text: newTask, priority, completed: false},
        ]);
        setNewTask("");
        setPriority("low");
    };

    const toggleTask = (id) => {
        // использовать колбек с prev
        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    };

    const deleteTask = (id) => {
        // использовать колбек с prev
        setTasks(tasks.filter((task) => task.id !== id));
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
    return (
        <div className="todoList">
            <TaskInput
                newTask={newTask}
                setNewTask={setNewTask}
                priority={priority}
                setPriority={setPriority}
                optionsPriority={optionsPriority}
                // onAddTask - пропсы функций начинаются с `on...`, а функция, которая передается с `handle...`
                addTask={addTask}
            />

            <div className="filters">
                <p>Filters: </p>
                <SelectComponent
                    options={optionsFilter}
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />

                <SelectComponent
                    options={optionsFilterPriority}
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                />

            </div>
            <TaskList
                tasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default TodoList;