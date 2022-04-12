import { useState } from 'react';
import Tasks from '../Tasks/tasks';
import './TodoApp.css';

function TodoApp() {

    const [task, setTask] = useState(null);

    const addTask = ()=> {
        setTask('Task1');
    }

    return (
        <div className='container'>
            <div className='row text-center mt-5'>
                <div className='col col-12'>
                    <h1 className='todo-header-text'>
                        Add a Todo...
                    </h1>
                </div>
            </div>
            <div className='row text-center justify-content-center mt-3'>
                <div className='col col-sm-4 col-12 pt-3'>
                <div class="form-group">
                    <input type="text" class="form-control" id="task" placeholder="Enter a task"/>
                </div>
                </div>
                <div className='col col-sm-2 col-12 pt-3'>
                    <div className='add-button'>
                        <button className='btn btn-primary btn-block' onClick={addTask}>Add</button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col col-12'>
                    {task && <Tasks task={task}/>}
                </div>
            </div>
        </div>
    );
}

export default TodoApp;
