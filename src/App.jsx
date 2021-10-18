import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [list, setList] = useState([])

  const addItem = addItem => {
    setList([...list, addItem])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
      <Todo addItem={addItem} />
      <TodoList list={list} setList={setList} />
      </header>
    </div>
  )
}

export default App