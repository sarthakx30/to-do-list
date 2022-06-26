import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/form'
import ToddoList from './components/TodoList';

function App() {
  
  // Using States
  const [inputText,setInputText]=useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus]=useState("all");
  const {filteredTodos,setFilteredTodos} = useState([]);
  // Using Effect
  useEffect(()=>{
    console.log("working?");
    filterHandler();
    },[todos,status]);
  const filterHandler=()=>{
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo)=>todo.completed===true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  
  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
        <h4>{inputText}</h4>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} filteredTodos={filteredTodos}/>
      <ToddoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
