import React,{useState} from 'react';

const Filter = (props) => {
    const updateFilter=(event)=>{
        props.setFilter(event.target.value);
    }
    return (
        <div id='buttonDiv'>
            <button value="All" onClick={updateFilter}>All</button>
            <button value="Completed" onClick={updateFilter}>Completed</button>
            <button value="Active" onClick={updateFilter}>Active</button>
        </div>
    );
};

export default Filter;