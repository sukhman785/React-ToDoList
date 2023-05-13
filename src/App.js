import React, {useState} from 'react'
import './App.css';


function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => { 
    const newTodo = {
      id: Math.random(), 
      todo: todo,
    };

    //adds todo to the list
    setList([...list,newTodo]);

    //clear input box
    setInput("");

  };

  const deleteTodo = (id) => { 
   //Filter out todo with id
   const newList = list.filter((todo) => todo.id !== id);

   setList(newList);
  }

  return (
<div className="container">
  <h1 className="title">Todo List</h1>
  <div className="input-container">
    <input className="input" type='text' value={input} onChange={(e) => setInput(e.target.value)} />
    <button className="add-button" onClick={() => addTodo(input)}>Add</button>
  </div>
  <ul className="list">
    {list.map((todo) => (
      <li key={todo.id} className="list-item">
        <span className="task">{todo.todo}</span>
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>&times;</button>
      </li>  
    ))}
  </ul>
</div>

  )
}

export default App
