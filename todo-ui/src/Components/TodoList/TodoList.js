import {TodoItem} from "../TodoItem/TodoItem";
import './todolist.css';

export function TodoList({todos,handleCheck}){
    return (
        <div className='container'>
            <div className="todos">
                <h1 className='title'>Your tasks go here:</h1>
                <ul className='list'>
                    {todos.map(t => <TodoItem handleCheck={handleCheck} todo={t} />)}
                </ul>
            </div>
        </div>
    );
}