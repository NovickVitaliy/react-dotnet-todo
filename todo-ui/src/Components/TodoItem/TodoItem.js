import './todoItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function TodoItem({todo, handleCheck, handleDelete}) {
    return (
        <>
            <li className='list__item' key={todo.id}>
                <input checked={todo.done} id={todo.id} onChange={() => handleCheck(todo.id)} type="checkbox"/><span className={todo.done ? 'list__item_line-through' : ''}>{todo.task}</span>
                <span className='list__detail'>{new Date(todo.createdAt).toLocaleString()} <FontAwesomeIcon onClick={() => handleDelete(todo.id)} icon='trash-can' color='red'/> </span>
            </li>
        </>
    );
}