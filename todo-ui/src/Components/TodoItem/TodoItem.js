import './todoItem.css';

export function TodoItem({todo, handleCheck}) {
    return (
        <>
            <li className='list__item' key={todo.id}>
                <input checked={todo.done} id={todo.id} onChange={() => handleCheck(todo.id)} type="checkbox"/><span className={todo.done ? 'list__item_line-through' : ''}>{todo.task}</span>
                <span className='list__detail'>{new Date(todo.createdAt).toLocaleString()}</span>
            </li>
        </>
    );
}