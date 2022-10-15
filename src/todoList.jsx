import React from 'react';
import ToDoItem from './todoItem';

// component for a to-do list with mulitple to-do list item componenets
const ToDoList=(props)=>{
    return (
        <div>
            {
                props.tasks.map(task=>{
                    return (
                        <ToDoItem task={task}/> // using component for to do list items
                    )
                })
            }
        </div>
    );
};

export default ToDoList;