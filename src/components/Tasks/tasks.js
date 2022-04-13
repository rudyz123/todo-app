import { useState, useEffect } from 'react';
import './tasks.css'

function Tasks(props) {
    return (
        <div className='tasks-container'>
            <ul>
                {props.taskList.map((task, index)=>{
                    return (
                        <li key={index}>{task}</li>       
                    );
                })}
            </ul>
        </div>
    );
}

export default Tasks;