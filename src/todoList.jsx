import React from 'react';
import ToDoItem from './todoItem';

const ToDoList=(props)=>{
    return (
        <div>
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