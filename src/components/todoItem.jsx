import React,{useState} from 'react';

// component stylings
const completedStyle={
    textDecoration:'line-through',
    opacity:0.25,
    fontStyle:'italic'
};

// This is a component for a single ToDoItem. Each component has its own
// 'completed' state and 'setCompleted' function which can update 'completed'.
// Each component inherits the state 'filter' from the parent Main
// component, and uses it to determine whether or not it will be displayed.
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
    if(props.filter==='Completed' && completed){ // using the filter state from Main and the item's own completed state
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