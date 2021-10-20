import React, { useReducer } from 'react';
import './TodoList.css';

const TodoList = ({ list }) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const changeDone = e => { e.done = !e.done, forceUpdate() }

    return (
        <div>
            {list?.map(e => {
                return (
                    <>
                        <ul>
                            <li className={e.done ? "trash" : ''}>
                                {e.description}
                                <button className='btn btn-4' onClick={() => changeDone(e)}>
                                    {e.done ? "Undone" : "Done"}
                                </button>
                            </li>
                        </ul>
                    </>
                )
            })}
        </div>
    )
}

export default TodoList;
