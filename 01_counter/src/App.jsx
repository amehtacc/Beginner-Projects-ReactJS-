import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  function increment() {
    setMessage(null)

    let increaseByOne = count + 1
    setCount(increaseByOne)
  }

  function decrement() {
    if(count == 0) {
      return setMessage(`Value Can't be negative`)
    }

    let decreaseByOne = count - 1
     setCount(decreaseByOne)
  }

  return (
    <>
    <div>
    We create the Counter App to build a solid understanding of how state management and event handling work in React. This project helps us learn how to use the useState hook to track and update data, and how to handle user interactions effectively. It's a foundational exercise that sets the stage for creating more complex, dynamic applications in the future.
    </div>
      <div id='buttons'>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
      </div>

      <div id="message">
        {message}
      </div>


    </>
  )
}

export default App
