import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ToDoList from './components/todoList';
import Filter from './components/filter'; // importing the filter component



const Main=()=>{
  return(
    <div id='toDoList-container'>
      <h1 id="header">To Do List</h1>
      <Filter/>
      <ToDoList/>
    </div>
  );
};

const container = document.getElementById('main-page-container');
const root = createRoot(container);
root.render(<Main/>);