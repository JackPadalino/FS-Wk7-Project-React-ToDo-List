import React from 'react';

const ToDoList=(props)=>{
    return (
        <table>
            <tbody>
                <tr>
                    <th>Task</th>
                    <th>Completed</th>
                </tr>
                {
                    props.taskList.map(task=>{
                        return (
                            <tr>
                                <td>{task.name}</td>
                                <td>{task.status}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default ToDoList;