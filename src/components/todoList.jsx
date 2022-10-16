import React,{useState} from 'react';
import ToDoItem from './todoItem';

const dummyTasks = [
    "Bake a pie",
    "World domination",
    "Complete Fullstack HW",
    "Run for mayor",
    "Practice my head spins",
  ];

// component for a to-do list with mulitple to-do list item componenets
const ToDoList=(props)=>{
    const [tasks,setTasks] = useState(dummyTasks);
    return (
        <div className='ToDoList'>
            {
                tasks.map(task=>{
                    return (
                        <ToDoItem key={task} name={task}/> // using component for to do list items
                    )
                })
            }
        </div>
    );
};

export default ToDoList;