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

const Main=()=>{
  const [tasks,setTasks] = useState(dummyTasks); 
  return(
    <div id='toDoList-container'>
      <h1 id="header">To Do List</h1>
      <Filter/>
      <div className='todoList'>
        {
          tasks.map(task=>{
            return (
              <ToDoItem key={task} name={task}/> // using component for to do list items
            )
          })
        }
        </div>
    </div>
  );
};

const container = document.getElementById('main-page-container');
const root = createRoot(container);
root.render(<Main/>);