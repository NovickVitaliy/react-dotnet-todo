import {useState} from "react";
import './prompt.css';
import {Todo} from "../../Models/Todo";
export function Prompt({onClick}) {
    const [prompt, setPrompt] = useState('');

    const handleInput = (e) => {
        setPrompt(e.target.value);
    }

    return (
        <div className='header'>
            <input className='header__input' type="text" onInput={handleInput} placeholder='Your task goes here...' value={prompt}/>
            <button className='header__button' onClick={() => onClick(new Todo(prompt, new Date()))}>Add</button>
        </div>
    );
}