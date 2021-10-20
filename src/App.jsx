import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [list, setList] = useState([])

  const addItem = addItem => {
    setList([...list, addItem])
  }

  const handleDelete = () => {
    setList([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
      <Todo addItem={addItem} />
      <TodoList list={list} setList={setList} />
      <button className='btn-delete' disabled={list.length > 0 ? '' : "disabled"} onClick={handleDelete}>Delete all to-dos</button>
      </header>
    </div>
  )
}

export default App;