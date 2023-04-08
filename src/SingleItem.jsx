import React, { useState } from 'react'
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import EditForm from './EditForm';


const SingleItem = ({item,removeItem,editItem,toggleComplete,renameItem,handleSubmit,addItem}) => {
 const [editMode, setEditMode]= useState(false);
 const [newItemName, setNewItemName] = useState('');
  return (
    <section style={ {display:'flex', justifyContent:'space-between'}}>
      <button style={{width:'4.1rem'}}>
      <div type='checkbox' onClick={() => toggleComplete(item.id)}
      className={`${item.completed ? 'completed': 'undone'}
      `}     
      >
      {!item.completed ?  'undone' : 'done'}  </div>
      </button>
         
    {/* <p 
    onClick={() => toggleComplete(item.id)} 
    className={`${item.completed ? 'completed': ''}
    `}
    > {item.name}</p> */}
<article >{
!editMode ? (
<div onClick={()=> setEditMode(true)}>{item.name}</div>  
):(
  <div > 
 
  <form onSubmit={ev =>{ev.preventDefault();setEditMode(false)}} >
    <input
    type='text'
    style={{marginRight:'1rem'}}
    onChange={(event) => setNewItemName(event.target.value)}
    value={newItemName}
    />
  <button className='button' onClick={renameItem} >update</button>
  </form>
  
  </div>)
}</article>    
    <button
    type='button'
    className='edit-btn'
    // onClick={() => renameItem(item.id)}   
      onClick={()=> setEditMode(true)}  
      >
    <FaEdit />
  </button>
     <button 
      onClick={() => removeItem(item.id)}   
     >x</button>        
    </section>
  )
}

export default SingleItem