import React from 'react';

const ToDoItem = (props) => {
    return (
        <div>
            <tr>
                <td>{props.task.name}</td>
                <td>{props.task.status}</td>
            </tr>
        </div>
    );
};

export default ToDoItem;