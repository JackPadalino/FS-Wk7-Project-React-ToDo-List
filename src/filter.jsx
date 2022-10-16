import React,{useState} from 'react';
import ToDoList from './todoList';

const Filter = (props) => {
    const [tasks,setTasks] = useState(props.tasks);
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