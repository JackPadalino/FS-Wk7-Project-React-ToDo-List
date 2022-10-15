import React from 'react';
import ToDoItem from './todoItem';

const ToDoList=(props)=>{
    return (
        <div>
            <h1>Task</h1>
            {
                props.tasks.map(task=>{
                    return (
                        <ToDoItem task={task}/>
                    )
                })
            }
        </div>
    );
};

export default ToDoList;