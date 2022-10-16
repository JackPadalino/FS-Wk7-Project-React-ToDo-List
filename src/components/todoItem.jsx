import React,{useState} from 'react';

// component stylings
const crossedOut={
    textDecoration:'line-through'
};

// component for a single to-do list item
const ToDoItem = (props) => {
    const [completed,setCompleted] = useState(false);
    const updateCompleted=()=>{
        setCompleted(!completed);
        //completed?setCompleted(false):setCompleted(true);
    };
    if(props.filter==='All'){
        return (
            <div style={completed?crossedOut:null} onClick={updateCompleted}>{props.name}</div>
        );
    };
    if(props.filter==='Completed' && completed){
        return (
            <div style={completed?crossedOut:null} onClick={updateCompleted}>{props.name}</div>
        );
    };
    if(props.filter==='Active' && !completed){
        return (
            <div style={completed?crossedOut:null} onClick={updateCompleted}>{props.name}</div>
        );
    };
};

export default ToDoItem;