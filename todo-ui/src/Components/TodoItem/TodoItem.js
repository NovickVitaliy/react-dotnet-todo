import './todoItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

export function TodoItem({todo, handleUpdate, handleDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(todo.task);

    const handleInput = (e) => {
        setNewName(e.target.value);
    }

    const handleSubmit = () => {
        handleUpdate(todo.id, newName, todo.done);
        setIsEditing(false);
    }

    return (
        <>
            <li className='list__item' key={todo.id}>
                <input checked={todo.done} id={todo.id} onChange={(e) => handleUpdate(todo.id, todo.task, e.target.checked)} type="checkbox"/>
                {
                    isEditing
                    ? <form onSubmit={handleSubmit}><input className='list__update-input' onInput={handleInput} type="text" value={newName}/></form>
                    : <span onClick={() => setIsEditing(true)} className={todo.done ? 'list__item_line-through' : ''}>{todo.task}</span>
                }
                <span className='list__detail'>{new Date(todo.createdAt).toLocaleString()}
                    <FontAwesomeIcon onClick={() => handleDelete(todo.id)} icon='trash-can' color='red'/>
                </span>
            </li>
        </>
    );
}