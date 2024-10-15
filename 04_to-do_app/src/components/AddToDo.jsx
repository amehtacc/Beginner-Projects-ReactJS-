import React, { useContext, useState } from 'react'
import { ToDoContext } from '../contexts/index'

function AddToDo() {

  const [todo, setTodo] = useState('')
  const {addToDo} = useContext(ToDoContext)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!todo.trim()) return

    addToDo({id: Date.now(), todoMsg: todo, completed: false})    
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex gap-2'>
        <input className='w-96 p-2 text-white font-semibold bg-[#39395e] outline-none rounded-md focus:border-white focus:ring-1 focus:ring-white transition-all' 
        type="text" 
        value={todo}
        placeholder='Enter To-Do' 
        onChange={(e) => {setTodo(e.target.value)}}
        />

        <button type='submit' className='p-2 w-20 rounded-md bg-green-500 font-semibold text-white text-lg shadow-md hover:bg-green-600 transition-all'>
          Add</button>        
      </div>
    </form>
    
  )
}

export default AddToDo