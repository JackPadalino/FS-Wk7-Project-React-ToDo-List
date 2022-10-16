import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Filter from './filter'; // importing the filter component

const dummyTasks = [
  {"id": 1,"name":"Bake a pie"},
  {"id": 2,"name":"World domination"},
  {"id": 3,"name":"Complete Fullstack HW"},
  {"id": 4,"name":"Run for mayor"},
  {"id": 5,"name":"Practice my head spins"},
];

const Main=()=>{
  const [tasks,setTasks] = useState(dummyTasks);
  return(
    <div id='toDoList-container'>
      <h1 id="header">To Do List</h1>
      <Filter tasks={tasks}/>
    </div>
  );
};

const container = document.getElementById('main-page-container');
const root = createRoot(container);
root.render(<Main/>);