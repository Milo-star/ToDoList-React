import React, {useState} from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            setErrorMessage("Please enter a message.");
        } else {
            editTodo(value, task.id)
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
                placeholder='Update Task' 
                onChange={(e) => setValue(e.target.value)}
            />

            <button type='submit' className='todo-btn'>Update Task</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    )
}