import React from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
    // App logic here
    return (
        <div>
            <h1>To-Do List App</h1>
            <AddTaskForm />
            <TaskList />
        </div>
    );
}

export default App;
