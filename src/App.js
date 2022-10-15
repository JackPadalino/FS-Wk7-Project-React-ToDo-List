import React from 'react';
import ToDoItem from './singleTodo';

const ToDoList=(props)=>{
    return (
        <table>
            <tbody>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
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