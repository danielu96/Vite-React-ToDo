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

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    // setItems=([newItems]);
    console.log('erty')
  
  }
  const clearItems =() =>{
     setItems([])
     console.log('er')
  }

  return (
    <>
     <h1>Vite-ToDo </h1>
    <ToDo addItem={addItem}/>
    <Items items={items} removeItem={removeItem} />
    <div className="App">  
    <p>{items.length}</p>
    <button onClick={()=> clearItems()}>clear</button>           
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
