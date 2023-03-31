import { useState } from 'react'
import ToDo from './ToDo'
import Items from './Items'
import { nanoid } from 'nanoid'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [items,setItems] = useState([]);


  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id:nanoid(),
    };
    setItems([...items, newItem])
  }

  return (
    <>
     <h1>Vite-ToDo </h1>
    <ToDo addItem={addItem}/>
    <Items items={items} />
    <div className="App">             
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>      
      </div>
      <p className="read-the-docs">
        will be todo 
      </p>
    </div>
    </>
  )
}

export default App
