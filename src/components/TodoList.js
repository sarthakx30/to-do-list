import React from 'react';
import Todo from './Todo';

const TodoList = ({ inputText, setInputText,todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        text={todo.text}
                        key={todo.id}
                        todo={todo}
                        inputText={inputText}
                        setInputText={setInputText}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;