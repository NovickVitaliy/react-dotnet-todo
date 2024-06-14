import './App.css';
import {Prompt} from "./Components/Prompt/Prompt";
import {useEffect, useState} from "react";
import {TodoList} from "./Components/TodoList/TodoList";

function App() {
    const todosKey = 'todos';
    const [todos, setTodos] = useState([]);
    const handleClick = (todo) => {
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
        localStorage.setItem(todosKey, JSON.stringify(updatedTodos));
    }

    const handleCheck = (todoId) => {
        const updatedTodos = todos.map(t =>
            t.id === todoId ? { ...t, done: !t.done } : t
        );
        setTodos(updatedTodos);
        localStorage.setItem(todosKey, JSON.stringify(updatedTodos));
    }

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(todosKey)) || [];
        setTodos(storedTodos);
    }, []);

    return (
        <>
            <Prompt onClick={handleClick}/>
            <TodoList todos={todos} handleCheck={handleCheck}/>
        </>
    );
}

export default App;
