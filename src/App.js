import React, {useState} from 'react';
import './App.css';
import Form from './components/form'
import ToddoList from './components/TodoList';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
        <h4>{inputText}</h4>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <ToddoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
