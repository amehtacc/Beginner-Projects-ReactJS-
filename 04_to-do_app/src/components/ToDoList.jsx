import React, { useContext, useState } from 'react'
import { ToDoContext } from '../contexts/index'

function ToDoList({todo}) {
  
  const {deleteToDo, updateToDo, toggleToDo} = useContext(ToDoContext)
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg) 
  const [isEditable, setIsEditable] = useState(false)
  
  
  return (
  
      <div className={`w-[37%] h-20 flex justify-center items-center gap-3 rounded-md shadow-md text-white bg-[#72ddf7] 
        ${todo.completed ? 'bg-[#afdef6] shadow-none transition-all' : ''}`}>
        <input 
        className='w-6 h-6 cursor-pointer' 
        type="checkbox"
        checked={todo.completed}
        disabled={isEditable}
        onChange={() => toggleToDo(todo.id)}
        />

        <input className={`w-96 p-2 font-semibold text-black bg-none bg-[#72ddf7] outline-none rounded-md 
        ${isEditable ? 'bg-[#afdef6] border border-white transition-all' : 'border-transparent'}
        ${todo.completed ? 'bg-[#afdef6] line-through transition-all' : ''}`} 
        type="text" 
        value={todoMsg}
        readOnly={!isEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        />

        <button className='w-7'
        disabled={todo.completed}
        onClick={() => {
          if(todo.completed) reutrn;

          if(isEditable) {
            updateToDo(todo.id, {...todo, todoMsg: todoMsg})
            setIsEditable(false)
          }else {
            setIsEditable((prev) => !prev)
          }
        }}
        >
          {isEditable ? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#0600ba" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#ff0000" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
      
          }
            
        </button>

        <button className='w-6'
        onClick={() => deleteToDo(todo.id)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="#000000" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
        </button>
      </div>

  )
}

export default ToDoList