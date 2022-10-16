import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
//import ToDoList from './components/todoList';
import ToDoItem from './components/todoItem';
import Filter from './components/filter'; // importing the filter component

const dummyTasks = [
  "Bake a pie",
  "World domination",
  "Complete Fullstack HW",
  "Run for mayor",
  "Practice my head spins",
];

// This is the main page component. We start off by creating two states: tasks and filter.
// We set tasks to default use the array 'dummyTasks' and we set the state 'filter' to be 'All'.
// The state 'filter' is passed down into each ToDoItem and Filter component to evaluate which 
// items will be displayed when Filter buttons are pressed.
const Main=()=>{
  const [tasks,setTasks] = useState(dummyTasks);
  const [filter,setFilter] = useState('All');
  return(
    <div className='toDoContainer'>
      <h1 className="toDoListHeader">To Do List</h1>
      <div className='toDoList'>
      {
        tasks.map(task=>{
          return (
            <ToDoItem key={task} name={task} filter={filter}/> /* using component for to do list items */
          )
        })
      }
      </div>
      <Filter filter={filter} setFilter={setFilter}/> {/* using filter component */}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main/>);