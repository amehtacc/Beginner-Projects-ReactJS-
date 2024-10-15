import React, { createContext, useState, useEffect } from 'react'


export const ToDoContext = createContext('')


export function ToDoContextProvider({children}) {
    const [todos, setTodos] = useState([])
    
    
    const addToDo = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const updateToDo = (id, updatedTodo) => {
        setTodos(todos.map((todo) => todo.id === id ? updatedTodo : todo))
    }

    const toggleToDo = (id) => {        
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
    
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


  return (
    <ToDoContext.Provider value={{todos, setTodos, addToDo, deleteToDo, updateToDo, toggleToDo}}>
        {children}
    </ToDoContext.Provider>    
  )
}