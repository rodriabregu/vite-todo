import { useState } from 'react';
import './Todo.css';

var idVar = 0;
const Todo = (props) => {
    const { addItem } = props;
    const [description, setDescription] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addItem({
            id: idVar + 1,
            done: false,
            description,
        })
        setDescription('')
        idVar++
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='inputTodo' placeholder='Write a todo...' value={description} onChange={e => setDescription(e.target.value)} />
                <button className='button' disabled={description.length >= 3 ? '' : "disabled"} >Ready todo</button>
            </form>
        </div>
    )
}

export default Todo;
