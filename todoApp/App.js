import './App.css';
import React, { useState, useEffect } from "react"
import todos from './todos';

function App() {

  const [newToDo, setNewToDo] = useState("")
  const [toDoList, setToDoList] = useState(todos)
  const [toDoIdCounter, setToDoIdCounter] = useState((todos[todos.length - 1].id) + 1)

  function addNewToDo(ToDo) {
    if (ToDo != "") {
      let item = {
        id: toDoIdCounter,
        text: ToDo
      }
      setToDoList(oldItem => [...oldItem, item])
      setToDoIdCounter(toDoIdCounter + 1)
      setNewToDo("")
    }
    else {
      window.alert("Değer girmediniz.")
    }
  }

  function deleteToDo(id) {
    console.log(id)
    let newArray = toDoList.filter(item => item.id != id)
    setToDoList(newArray)
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Patron hoşgeldin.</h1>
        <p>Patron sana Bugünün yapılacaklar listesini hazırladım</p>
      </div>
      <div className='form'>
        <input placeholder='Yeni görev ekle' type="text" value={newToDo} onChange={(e) => (setNewToDo(e.target.value))} />
        <button onClick={() => addNewToDo(newToDo)}>Ekle</button>
      </div>
      <hr />
      <div className='to-do-area'>
        <ul>
          {toDoList.map(
            (todo, index) => (
              <li key={index}>
                <p>{todo.text}</p>
                <button
                  onClick={() => deleteToDo(todo.id)}>X</button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );

}

export default App;
