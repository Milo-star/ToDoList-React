import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            setErrorMessage("Please enter a message.");
        } else {
            addTodo(value);
            setValue("");
            setErrorMessage("");
        }
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type='text'
                className='todo-input'
                value={value}
                placeholder='What is the task today ?'
                onChange={(e) => setValue(e.target.value)}
            />

            <button type='submit' className='todo-btn'>Add Task</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    );
};
