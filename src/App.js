import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form'
import TodoList from './components/TodoList';

function App() {

  // Using States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
 
  //Runs once when the app loads
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Using Effect for running when the status of filter changes
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  
  // using Effect to save whenever state of Todos changes
  useEffect(() => {
    saveLocalTodos();
  },[todos]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Saving To Local Storage
  const saveLocalTodos = () => {
    if(todos.length>0){
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  //Fetching from Local Storage
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To - Do List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
