import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setFilter] = useState("all");
    const [priorityFilter, setPriorityFilter] = useState("all");
    const [newTask, setNewTask] = useState("");
    const [priority, setPriority] = useState("low");

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
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="filters">
                    <p>Filters: </p>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                    <select
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
            </div>

            <ul className="task-list">
                {filteredTasks.map((task) => (
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
        </div>
    );
}

export default App;
