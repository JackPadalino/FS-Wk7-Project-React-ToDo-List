import React from 'react';
import { createRoot } from 'react-dom/client';
import Filter from './filter';

const Main=()=>{
  return(
    <div id='toDoList-container'>
      <h1 id="header">To Do List</h1>
      <Filter/>
    </div>
  );
};

const container = document.getElementById('main-page-container');
const root = createRoot(container);
root.render(<Main/>);