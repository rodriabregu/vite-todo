import React, { useReducer } from 'react';
import './TodoList.css';

const TodoList = ({ list, setList, darkMode }) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const changeDone = e => { e.done = !e.done, forceUpdate() }

    const deleteTask = e => {
        const filterList = list.filter(t => t.id !== e.id);
        setList(filterList);
    }

    // const handleTextEdit = e => {
    //     const filterList = list.map(t => {
    //         if (t.id === e.id) {
    //             t.description = e.text;
    //         }
    //         return t;
    //     });
    //     setList(filterList);
    // }

    return (
        <div>
            {list?.map(e => {
                return (
                    <div key={e.id}>
                        <ul>
                            <li className={e.done ? "trash" : ''}>
                            {/* <li className={ darkMode ? e.done ? "trash-white" : '' : e.done ? "trash" : ''}> */}
                                {/* <button onClick={() => handleTextEdit(e)}>E</button>{e.description} */}
                                <button className='btn btn-4' onClick={() => changeDone(e)}>
                                    {e.done ? "Undone" : "Done"}
                                </button>
                                <button onClick={() => deleteTask(e)}>
                                    Delete todo
                                </button>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;
