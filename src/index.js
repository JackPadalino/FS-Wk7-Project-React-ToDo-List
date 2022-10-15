import React,{ useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const dummyTasks = [
  {"id": 1,"task":"Bake a pie","completed":false},
  {"id": 2,"task":"World domination","completed":false},
  {"id": 3,"task":"Complete Fullstack HW","completed":false},
];

const Main=()=>{
  return(
    <div id='main-page-container'>
      <h1 id="header">To Do List</h1>
      <p>Add to do list component here</p>
    </div>
  );
};

ReactDOM.render(
  <Main/>,
  document.getElementById('body')
);