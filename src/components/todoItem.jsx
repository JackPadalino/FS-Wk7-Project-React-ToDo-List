import React,{useState} from 'react';

// component stylings
const completedStyle={
    textDecoration:'line-through',
    opacity:0.25,
    fontStyle:'italic'
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
            <div className="toDoItem" style={completed?completedStyle:null} onClick={updateCompleted}>{props.name}</div>
        );
    };
    if(props.filter==='Completed' && completed){
        return (
            <div className="toDoItem" style={completed?completedStyle:null} onClick={updateCompleted}>{props.name}</div>
        );
    };
    if(props.filter==='Active' && !completed){
        return (
            <div className="toDoItem" style={completed?completedStyle:null} onClick={updateCompleted}>{props.name}</div>
        );
    };
};

export default ToDoItem;