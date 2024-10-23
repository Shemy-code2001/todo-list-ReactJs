import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask(''); 
    }
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Ma To-Do List</h1>
      
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une nouvelle tâche"
        />
        <button onClick={handleAddTask}>Ajouter</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;