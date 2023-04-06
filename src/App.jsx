import { useState,useEffect } from 'react'
import ToDo from './ToDo'
import Items from './Items'
import { nanoid } from 'nanoid'
import Alert from './Alert'
import './App.css'
const getLocalStorage = () => {
  let items = localStorage.getItem('items');
  if (items) {
    return (items = JSON.parse(localStorage.getItem('items')));
  } else {
    return [];
  }
};

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [items,setItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setCompleted] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!newItemName) {
  //     showAlert(true, 'danger', 'please enter value');
  //   } else if (newItemName && isEditing) {
  //     setItems(
  //       items.map((item) => {
  //         if (item.id === editID) {
  //           return { ...items, title: newItemName };
  //         }
  //         return item;
  //       })
  //     );
  //     setNewItemName('');
  //     setEditID(null);
  //     setIsEditing(false);
  //     showAlert(true, 'success', 'value changed');
  //   } else {
  //     showAlert(true, 'success', 'item added to the list');
  //     const newItem = { id: new Date().getTime().toString(), title: newItemName };

  //     setItems([...items, newItem]);
  //     setNewItemName('');
  //   }
  // };



  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id:nanoid(),
    };
    setItems([...items, newItem])
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));    
    console.log('remove')
  
  }
  const clearItems =() =>{
     setItems([])
     console.log('clear')
  }
  const editItem = (id) => {
    const specificItem = items.find((item) => item.id === id);
    
    console.log(id);
    setIsEditing(true);
    setEditID(id);
    setNewItemName(specificItem.name);
  
    console.log(specificItem.name);
    return(
<p>{specificItem.name}</p>
    );
  };
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const toggleComplete = id => {
    setItems(items.map(item => item.id ===id ? {...item, completed : !item.completed} : item))
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  return (
    <>
      {alert.show && <Alert {...alert} removeAlert={showAlert} items={items} />}

     <h1>Vite-ToDo </h1>
    <ToDo addItem={addItem}/>
    <Items items={items} removeItem={removeItem} editItem={editItem} toggleComplete={toggleComplete} />
    <div className="App">  
    <p>{items.length} things i need to do </p>
    <button onClick={clearItems}>clear all</button>           
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>       */}
      </div>
      {/* <p className="read-the-docs">
        will be todo 
      </p> */}
    </div>
    </>
  )
}

export default App
