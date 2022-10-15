import React,{ useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './App';

const dummyTasks = [
  {"id": 1,"name":"Bake a pie","status":'active'},
  {"id": 2,"name":"World domination","status":'active'},
  {"id": 3,"name":"Complete Fullstack HW","status":'active'},
];

const Main=()=>{
  const [tasks,setTasks] = useState(dummyTasks);
  return(
    <div id='main-page-container'>
      <h1 id="header">To Do List</h1>
      <ToDoList taskList={tasks}/>
    </div>
  );
};

ReactDOM.render(
  <Main/>,
  document.getElementById('body')
);