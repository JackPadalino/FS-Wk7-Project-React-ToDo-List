import React,{useState} from 'react';
import ToDoList from './todoList';

const Filter = (props) => {
    return (
        <div id='buttonDiv'>
            <button>All</button>
            <button>Completed</button>
            <button>Active</button>
            <ToDoList tasks={props.tasks}/>
        </div>
    );
};

export default Filter;