import React, { useContext } from 'react'
import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'
import { ToDoContext } from './contexts/index'


function App() {
  const {todos} = useContext(ToDoContext)
  
  return (
    <div className='w-full p-10 flex' id='container'>
      <div className='w-1/2 h-[600px] flex flex-col justify-center items-center gap-5 p-7 bg-gray-400 rounded-md'>
        <div>
          <h2 className='font-bold text-xl'>Concepts Covered:</h2>
          <ul className='list-disc list-outside py-3 px-10'>
            <li className='mb-2'><b>CRUD Operations:</b> The core of the app revolves around creating, reading, updating, and deleting tasks. These operations are fundamental to many web applications.</li>
            <li className='mb-2'><b>useState:</b> This hook is used to manage the state of tasks within the app, keeping track of what tasks are added, updated, or deleted.</li>
            <li className='mb-2'><b>Event Handling:</b> To interact with the task list (like adding a new task or marking one as completed), we use event handlers that trigger specific actions based on user input.</li>
          </ul>
        </div>

        <div>
          <h2 className='font-bold text-xl'>Why We Use These Concepts:</h2>
          <ul className='list-disc list-outside py-3 px-10'>
            <li className='mb-2'><b>CRUD Operations:</b> These are essential for managing data in almost all applications. Understanding CRUD helps you handle data changes and build interactive applications.</li>
            <li className='mb-2'><b>useState:</b> This hook allows us to maintain and update the state of tasks dynamically. It's crucial for managing changes in the user interface as the state of the application changes.</li>
            <li className='mb-2'><b>Event Handling:</b> Managing events is necessary to make the app interactive, responding to user actions like clicks, typing, or any other input.</li>
          </ul>
        </div>
      </div>


      <div className='w-1/2 h-screen flex flex-col items-center gap-7 p-3'>
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
    </div>
  )
}

export default App