import React from 'react';

const ToDoItem = (props) => {
    return (
        <tr>
            <td>{props.row.name}</td>
            <td>{props.row.status}</td>
        </tr>
    );
};

export default ToDoItem;