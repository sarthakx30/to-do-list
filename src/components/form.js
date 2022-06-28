import React from 'react';
import { v4 } from 'uuid';

const Form = (props) => {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (props.inputText !== "") {
            props.setTodos([
                ...props.todos,
                { text: props.inputText, completed: false, id: v4() }
            ]);
        }
        props.setInputText("");
    }
    const statusHandler = (e)=>{
        props.setStatus(e.target.value); 
        // console.log(e.target.value);
    }
    return (
        <form>
            <input placeholder='Write a new task here' value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;