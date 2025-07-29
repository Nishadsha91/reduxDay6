import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo , editTodo} from "./TodoSlice";
import { useState } from 'react';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  return (
    <div className="p-4">


      {todos.map(todo => (
        <div key={todo.id} className="flex items-center justify-between border p-2 my-2">
          <div className="flex-1 mr-4">

            {editingId === todo.id ? (
              <input type="text" value={editText} onChange={e => setEditText(e.target.value)} className="border px-2 py-1 w-full"/>
            ) : (
              <p>{todo.text}</p>
            )}
          </div>

          <div>
            {editingId === todo.id ? (

              <button className="bg-green-500 text-white px-2 py-1 mr-2"
                onClick={() => {dispatch(editTodo({ id: todo.id, text: editText }));
                setEditingId(null);
                }}>
                Save
              </button>

            ) : (
              <button className="bg-yellow-500 text-white px-2 py-1 mr-2"
                onClick={() => {setEditingId(todo.id); setEditText(todo.text);}}>
                Edit
              </button>
            )}
            
            <button
              className="bg-red-500 text-white px-2 py-1"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;


