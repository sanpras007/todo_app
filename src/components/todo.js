import React, { useState } from 'react';
import './todo.css'

function TodoApp() {
    const [task, setTask] = useState("");
    
    const [todos, setTodos] = useState([]);

    const [done,setDone] = useState([]);

    const addTask = () => {
        if (task.trim() === "") return; // Ignore empty input

        setTodos([...todos, task]);
        
        // Clear the input field
        setTask("");
    };

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const removeTask = (index) => {
        const taskToMove = todos[index];
        setTodos(todos.filter((_, i) => i !== index));
        setDone([...done, taskToMove]);
    };

    const clearDoneTasks = () => {
        setDone([]);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Enter a task"
            />
            <button id='btn' onClick={addTask}>Add Task</button>
            <hr />
            
            <ol>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                    <button id='btn' onClick={() => removeTask(index)}>done</button>
                    </li>
                ))}
            </ol>
            <hr />
            <h2>Completed Tasks</h2>
            <ul>
                {done.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            {done.length > 0 && (
                <button id='btn' onClick={clearDoneTasks}>Clear All Completed Tasks</button>
            )}
        </div>
    );
}

export default TodoApp;
