import {TodoItem} from "../TodoItem/TodoItem";
import './todolist.css';
import axios from "axios";
import {API_ENDPOINTS} from "../../Config/appConfig";

export function TodoList({todos,handleCheck, handleDelete}){
    return (
        <div className='container'>
            <div className="todos">
                <h1 className='title'>Your tasks go here:</h1>
                <ul className='list'>
                    {todos.map(t => <TodoItem handleCheck={handleCheck} handleDelete={handleDelete} todo={t} />)}
                </ul>
            </div>
        </div>
    );
}