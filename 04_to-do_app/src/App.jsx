import React, { useContext } from 'react'
import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'
import { ToDoContext } from './contexts/index'


function App() {
  const {todos} = useContext(ToDoContext)

  
  return (
    <div className='w-full h-screen flex flex-col items-center gap-7 p-10' id='container'>
      <div className='mt-20 mb-3'>
        <AddToDo />
      </div>

      <div className='w-full flex flex-wrap justify-center gap-y-4'>
      {todos.map((todo) => (
        <div key={todo.id} className='w-full flex flex-wrap justify-center'>
          <ToDoList todo={todo} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default App