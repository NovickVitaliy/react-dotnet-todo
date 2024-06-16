import './App.css';
import {Prompt} from "./Components/Prompt/Prompt";
import {useEffect, useState} from "react";
import {TodoList} from "./Components/TodoList/TodoList";
import axios from "axios";
import {API_ENDPOINTS} from "./Config/appConfig";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add the solid icons to the library
library.add(fas);

function App() {
    const todosKey = 'todos';
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const handleClick = (todo) => {
        axios.post(API_ENDPOINTS.TODOS, todo)
            .then((response) => {
                todo.id = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
    }

    const handleCheck = (todoId) => {
        const todoToUpdate = todos.filter(x => x.id === todoId)[0];
        const updatedTodos = todos.map(t =>
            t.id === todoId ? { ...t, done: !t.done } : t
        );
        axios.put(`${API_ENDPOINTS.TODOS}/${todoId}`, {
            done: !todoToUpdate.done,
            task: todoToUpdate.task
        })
            .then(() => {

            })
            .catch(err => {
                console.log(err);
            })
        setTodos(updatedTodos);
    }

    const handleDelete = (todoId) => {
        axios.delete(`${API_ENDPOINTS.TODOS}/${todoId}`)
            .then(() => {
                const filteredTodos = todos.filter(x => x.id !== todoId);
                setTodos(filteredTodos);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios.get(API_ENDPOINTS.TODOS)
            .then(response => {
                setTodos(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <>
            <Prompt onClick={handleClick}/>
            {isLoading
                ? <div className='loader'><span>Loading...</span><FontAwesomeIcon icon={"spinner"} spin /></div>
                : <TodoList todos={todos} handleCheck={handleCheck} handleDelete={handleDelete}/>}

        </>
    );
}

export default App;
