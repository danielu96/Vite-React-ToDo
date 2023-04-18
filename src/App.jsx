import './App.css';
import { nanoid, random } from 'nanoid'
import ToDo from "./ToDo";
import SingleItem from "./SingleItem";
import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import Alert from './Alert';
const  App= () =>{
  const [tasks,setTasks] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);  
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tasks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tasks.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,
    tasks
  ]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) %
      tasks.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
 const showAlert = (show = false, type = '', msg = ''
    ) => {
       setAlert({ show, type, msg 
       });
     };  
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);
  const addItem=(name) =>{
    const newItem = {
      name: name,
      id:nanoid(),
      done:false,                 
    };
    setTasks(prev => {
      return [...prev, { newItem,name:name
        // name:name,done:false,id:nanoid()     
      }];
    });
  }
  // const addItem = (name) => {
  //       const newItem = {
  //         name: name,
  //         id:nanoid(),
  //         completed:false,                 
  //       };
  //       setItems([...items, newItem ])
  //       console.log(name)
  //     } 



 const removeItem=(task) => {
    setTasks(prev => {
      return prev.filter((Object,id) => task !== id);
      
    });
    console.log('you deleted',task);
    showAlert(true, 'danger', 'you just remove one task');
  }
  const clearItems =() =>{
         setTasks([])
         showAlert(true, 'danger', 'empty List');
      }     
  const updateTaskDone=(id, newDone) =>{
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[id].done = newDone;
      return newTasks;
        });
       
  }
  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;
  const getMessage = ()=> {
    const percentage = numberComplete/numberTotal * 100;
    if (percentage === 0) {
      return 'Try to ! ';
    }
    if (percentage === 100) {
      return 'Nice job ';
    }
    return 'Go on';
  }
  const renameTask=(id,newName)=> {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[id].name = newName;
      return newTasks;
    })
    showAlert(true, 'success', 'you just update task');
  }
  return (
    <>
    <div >
      <h1>Vite ToDo</h1>
      <h2>{numberComplete}/{numberTotal} Complete</h2>
      <h2>{getMessage()}</h2>
      {alert.show && <Alert {...alert} removeAlert={showAlert} tasks={tasks}/>}
      <ToDo addItem={addItem} />
      <div  style={{height:'220px'}}>
      {currentItems.map((task,id) => (
        <SingleItem key={id} {...task} 
              Rename={newName => renameTask(id,newName)}
              removeItem={() => removeItem(id)}
              onToggle={done => updateTaskDone(id, done)} />
      ))}
      <button onClick={()=> clearItems()}>clear all</button>
</div>
    </div>
    <div style={{top:'1rem'}}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageLinkClassName={"page-num"}
        previousLinkClassName={"page-num"}
        nextLinkClassName={"page-num"}
        disabledClassName={"disabled"}
        activeClassName={"active"}

      />
      </div>
    </>
    
  );
 
}
export default App;







// import { useState,useEffect } from 'react'
// import ToDo from './ToDo'
// import Items from './Items'
// import { nanoid, random } from 'nanoid'
// import Alert from './Alert'
// import './App.css'
// const getLocalStorage = () => {
//   let items = localStorage.getItem('items');
//   if (items) {
//     return (items = JSON.parse(localStorage.getItem('items')));
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [newItemName, setNewItemName] = useState('');
//   const [items,setItems] = useState(getLocalStorage());
//   const [isEditing, setIsEditing] = useState(false);
//   const [isCompleted, setCompleted] = useState(false);
//   const [editID, setEditID] = useState(null);
//   const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!newItemName) {
//   //     showAlert(true, 'danger', 'please enter value');
//   //   } else if (newItemName && isEditing) {
//   //     setItems(
//   //       items.map((item) => {
//   //         if (item.id === editID) {
//   //           return { ...items, title: newItemName };
//   //         }
//   //         return item;
//   //       })
//   //     );
//   //     setNewItemName('');
//   //     setEditID(null);
//   //     setIsEditing(false);
//   //     showAlert(true, 'success', 'value changed');
//   //   } else {
//   //     showAlert(true, 'success', 'item added to the list');
//   //     const newItem = { id: new Date().getTime().toString(), title: newItemName };

//   //     setItems([...items, newItem]);
//   //     setNewItemName('');
//   //   }
//   // };
//   // function addItem(name) {
//   //   setItems(prev => {
//   //     return [...prev, {name:name,done:false}];
//   //   });
//   // }
//   const itemComplete= items.filter(i=> i.completed).lenght;
//   const numberComplete = items.filter(i => i.done).length;
//   const numberTotal = items.length;
//   const addItem = (name) => {
//     const newItem = {
//       name: name,
//       id:nanoid(),
//       completed:false,                 
//     };
//     setItems([...items, newItem ])
//     console.log(name)
//   } 
//   const renameItem =(id,newName) =>{
//     setItems ( items => {
//       const newItems = [...items];
//       newItems[id]=newName;
//       console.log(newName)
//       return newItems;            
//     })    
//             }
//   const removeItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));    
//     console.log('remove')  
//   }
//   const clearItems =() =>{
//      setItems([])
//      console.log('clear')
//   }
//   const editItem = (id) => {
//     setItems(items.map(item=> item.id===id ? 
//       {...item, isEditing : !item.isEditing} : item))
//       console.log(id)
//   }
//   const toggleComplete = (id) => {     
//     setItems(items.map(item => item.id ===id ?
//        {...item, completed : !item.completed} : item))   
//        console.log(id) 
//   }  
// const updateDone=(id,newCompleted)=>{
//   setItems(prev => {
//     const newItems=[...prev];
//     newItems[id].completed = newCompleted;
//     return newItems
//   });
// }
//   const showAlert = (show = false, type = '', msg = '') => {
//     setAlert({ show, type, msg });
//   };
 
//  console.log('complete')
//   useEffect(() => {
//     localStorage.setItem('items', JSON.stringify(items));
//   }, [items]);
//   return (
//     <>
    
//       {alert.show && <Alert {...alert} removeAlert={showAlert} items={items} />}
//      <h1>Vite-ToDo {itemComplete} / {numberTotal}</h1>
//     <ToDo addItem={addItem}/> 
//     <Items items={items} addItem={addItem} removeItem={removeItem} editItem={editItem}
//      toggleComplete={toggleComplete} renameItem={renameItem} onComplete={newCompleted =>updateDone(id,newCompleted)}
//      onRename={newName=>renameItem(newName)} 
//      onToggle={completed=> updateDone(id,completed)}
//      />     
//     <div className="App">  
//     <p>{itemComplete} {numberComplete} completed from {numberTotal}</p>
//     <button onClick={clearItems}>clear all</button>           
//       <div className="card">     
//       </div>     
//     </div>
//     </>
//   )
// }
// export default App
