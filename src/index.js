import React,{ useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ToDoList from './todoList';

const dummyTasks = [
  {"id": 1,"name":"Bake a pie"},
  {"id": 2,"name":"World domination"},
  {"id": 3,"name":"Complete Fullstack HW"},
];

const Main=()=>{
  const [tasks,setTasks] = useState(dummyTasks);
  return(
    <div id='main-page-container'>
      <h1 id="header">To Do List</h1>
      <ToDoList tasks={tasks}/>
    </div>
  );
};

const container = document.getElementById('main-page-container');
const root = createRoot(container);
root.render(<Main/>);