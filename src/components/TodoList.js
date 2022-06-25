import React from 'react';
import Todo from './Todo';

const ToddoList=({todos})=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo)=>(
                    <Todo text={todo.text} key={todo.id} completed={todo.completed}/>
                ))}
            </ul>
        </div>
    )
}

export default ToddoList;