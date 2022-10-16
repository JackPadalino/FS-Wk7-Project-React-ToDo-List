import React,{useState} from 'react';

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