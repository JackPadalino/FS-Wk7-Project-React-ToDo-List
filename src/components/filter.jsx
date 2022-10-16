import React,{useState} from 'react';

const Filter = (props) => {
    return (
        <div id='buttonDiv'>
            <button>All</button>
            <button>Completed</button>
            <button>Active</button>
        </div>
    );
};

export default Filter;