import React from 'react';
import ToDoItem from './todoItem';

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
                            <ToDoItem row={task}/>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default ToDoList;