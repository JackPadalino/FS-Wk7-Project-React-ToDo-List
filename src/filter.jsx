import React,{useState} from 'react';
import ToDoList from './todoList';

const dummyTasks = [
    {"id": 1,"name":"Bake a pie"},
    {"id": 2,"name":"World domination"},
    {"id": 3,"name":"Complete Fullstack HW"},
    {"id": 4,"name":"Flying lessons"},
    {"id": 5,"name":"Practice my head spins"},
  ];

const Filter = (props) => {
    const [tasks,setTasks] = useState(dummyTasks);
    return (
        <div id='buttonDiv'>
            <button>All</button>
            <button>Completed</button>
            <button>Active</button>
            <ToDoList tasks={tasks}/>
        </div>
    );
};

export default Filter;