import Todos from "./Todos";
import { useState, useEffect, useRef } from 'react';
import './index.css';
import axios from 'axios'

function App() {
  async function createTodo() {
    const response = await axios.post("http://localhost:3333/todos", 
    {name: inputValue, });
    getTodos();
    setInputValue('');
  }

  async function getTodos() {
    const response = await axios.get("http://localhost:3333/todos");
    setTodos(response.data);
  }

  async function modifyStatus(todo) {
    const response = axios.put("http://localhost:3333/todos", {
      id: todo.id,
      status: !todo.status,
    });
    getTodos();
  }

  async function updateTodo(todo) {
    setSelectedTodo(todo);
    inputRef.current.focus();
  }

  async function editTodo(todo) {
    const response = await axios.put("http://localhost:3333/todos", {
      id: selectedTodo.id,
      name: inputValue,
    })
    setSelectedTodo();
    getTodos();
    setInputValue('');
  }

  async function deleteTodo(todo) {
    await axios.delete(`http://localhost:3333/todos/${todo.id}`);
    getTodos();
  }

  const inputRef = useRef(null);
  const [selectedTodo, setSelectedTodo] = useState()
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className="App"> 
      
      <div className="container">
        <h1>To-Do List</h1>
        <Todos deleteTodo={deleteTodo} modifyStatus={modifyStatus} updateTodo={updateTodo} todos={todos}></Todos>

        <div className="footer">
        <input ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Type a task"/>
        <button onClick={selectedTodo ? editTodo : createTodo}>+</button> 
        </div>
      </div>
      
    </div>
  );
}

export default App;
