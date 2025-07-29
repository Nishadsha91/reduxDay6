
import './App.css'
import Todo from './Todos/Todo.jsx';
import TodoList from './Todos/TodoList.jsx';


function App() {

  return (
    <>
     <div className="max-w-xl mx-auto mt-10 shadow-lg rounded p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Redux Toolkit Todo App</h1>

      <Todo/>
      
      <TodoList/>
    </div>
    </>
  )
}

export default App
