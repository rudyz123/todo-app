import './TodoApp.css';

function TodoApp() {

    return (
    <div className='container'>
        <div className='row text-center mt-5'>
            <div className='col col-12'>
                <h1 className='todo-header-text'>
                    Add a Todo...
                </h1>
            </div>
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col col-sm-4 col-12'>Hello</div>
            <div className='col col-sm-2 col-12'>
                <div className='add-button'>
                    <button className='btn btn-primary btn-block'>Add</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TodoApp;
