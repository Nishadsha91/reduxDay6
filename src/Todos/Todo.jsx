import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from "./TodoSlice";

const Todo = () => {

    const dispatch = useDispatch()
    const [text,setText] = useState('')

    const handleAdd = () => {
        if(text.trim() !== ''){

            dispatch(addTodo(text))
            setText('')
        }
    }


  return (

    <div className="p-4">
      
      <input type="text" placeholder="Add todo..." value={text} onChange={e => setText(e.target.value)}/>

      <button  onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

export default Todo