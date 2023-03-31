import { useState } from 'react'
import ToDo from './ToDo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <h1>Vite-ToDo </h1>
      <ToDo/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
      <p className="read-the-docs">
        will be todo 
      </p>
    </div>
  )
}

export default App
