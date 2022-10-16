import React,{useState} from 'react';

// This Filter component contains buttons that can change the state 'filter'
// of the Main component. This component inherits the 'setFilter' function
// from the Main component, and uses it to change the 'filter' state when
// a button is pressed.
const Filter = (props) => {
    const updateFilter=(event)=>{
        props.setFilter(event.target.value);
    }
    return (
        <div className='filterContainer'>
            <button className="filterButton" value="All" onClick={updateFilter}>All</button>
            <button className="filterButton" value="Completed" onClick={updateFilter}>Completed</button>
            <button className="filterButton" value="Active" onClick={updateFilter}>Active</button>
        </div>
    );
};

export default Filter;