import {TodoItem} from "../TodoItem/TodoItem";
import './todolist.css';
import axios from "axios";
import {API_ENDPOINTS} from "../../Config/appConfig";

export function TodoList({todos,handleUpdate, handleDelete,handleSelect}){

    return (
        <div className='container'>
            <div className="todos">
                <div className='todos__header'>
                    <div className='todos__title'>
                        <h1 className='title'>Your tasks go here:</h1>
                    </div>
                    <div className='todos__sorting'>
                        <select onChange={e => handleSelect(e.target.value)}>
                            <option value="name">Name</option>
                            <option value="created">Created</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                </div>
                <ul className='list'>
                    {todos.map(t => <TodoItem handleUpdate={handleUpdate} handleDelete={handleDelete} todo={t} />)}
                </ul>
            </div>
        </div>
    );
}