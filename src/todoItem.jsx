import React,{useState} from 'react';

const crossedOut={
    textDecoration:'line-through'
};

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