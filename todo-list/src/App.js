import React, {useState, useEffect} from "react";
import "./App.css";
import SelectComponent from "./components/SelectComponent";
import TaskListComponent from "./components/TaskListComponent";




function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setFilter] = useState("all");
    const [priorityFilter, setPriorityFilter] = useState("all");
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

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([
            ...tasks,
            {id: Date.now(), text: newTask, priority, completed: false},
        ]);
        setNewTask("");
        setPriority("low");
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
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

    return (
        <div className="App">
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

            <TaskListComponent
                tasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
