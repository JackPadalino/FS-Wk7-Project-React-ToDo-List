import React,{useState} from 'react';

const ToDoItem = (props) => {
    const [completed,setCompleted] = useState(false);
    const updateStatus=(event)=>{
        setCompleted(!completed);
        completed ? event.target.classList.add('crossedOut'):event.target.classList.remove('crossedOut');
    };
    return (
        <div class="todo-item" onClick={updateStatus}>{props.task.name}</div>
    );
};

export default ToDoItem;