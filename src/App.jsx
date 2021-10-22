import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [darkMode, setDarkMode] = useState(true);

  const addItem = addItem => {
    setList([...list, addItem])
  }

  const handleDelete = () => {
    setList([])
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // useEffect(() => {
  //   if(localStorage.getItem('list')){
  //     const list = JSON.parse(localStorage.getItem('list'))
  //     if (list) {
  //       setList(list)
  //     }
  //   }
  // }, [])

  return (
    <div className="App">
      <header className={darkMode ? 'App-header' : 'App-header-white'}>
        <button onClick={toggleDarkMode}>{darkMode ? 'Dark mode off' : 'Dark mode on  '}</button>
        <p>Hello Vite + React!</p>
      <Todo addItem={addItem} />
      <TodoList list={list} setList={setList} darkmode={darkMode}/>
      <button className='btn-delete' disabled={list.length > 0 ? '' : "disabled"} onClick={handleDelete}>Delete all to-dos</button>
      </header>
    </div>
  )
}

export default App;