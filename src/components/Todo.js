import React from 'react';

const Todo = ({ inputText,setInputText,text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                };
            }
            return el;
        })
        );
    };
    const editHandler = () => {
        setTodos(todos.map((el)=>{
            if(el.id===todo.id){
                setInputText(text);
            }
        }));
        deleteHandler();
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            <button onClick={editHandler} className="edit-btn">
                <i className="fas fa-edit"></i>
            </button>
        </div>
    );
}

export default Todo;