import React,{useState} from 'react';

// component stylings
const crossedOut={
    textDecoration:'line-through'
};

// component for a single to-do list item
const ToDoItem = (props) => {
    const [completed,setCompleted] = useState(false);
    const updateStatus=()=>{
        setCompleted(!completed);
        //completed?setCompleted(false):setCompleted(true);
    };
    return (
        <div style={completed?crossedOut:null} onClick={updateStatus}>{props.task.name}</div>
    );
};

export default ToDoItem;