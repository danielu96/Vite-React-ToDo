import React, { useState } from 'react'
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import EditForm from './EditForm';


const SingleItem = ({item,removeItem,editItem,toggleComplete,renameItem,handleSubmit}) => {
 const [editMode, setEditMode]= useState(false);
 const [newItemName, setNewItemName] = useState('');
  return (
    <section style={ {display:'flex', justifyContent:'space-between'}}>
      <button style={{width:'4.1rem'}}>
      <div type='checkbox' onClick={() => toggleComplete(item.id)}
      // className={`${item.completed ? 'completed': ''}
      // `}     
      >
      {!item.completed ?  'undone' : 'done'}  </div>
      </button>
         
    <p 
    onClick={() => toggleComplete(item.id)} 
    className={`${item.completed ? 'completed': ''}
    `}
    > {item.name}</p>
<span >{
!editMode ? (
<div onClick={()=> setEditMode(true)}>{item.name}</div>  
):(
  <div className='container'> 
 
  <form onSubmit={e =>{e.preventDefault();setEditMode(false)}} >
    <input
    type='text'
    style={{marginRight:'1rem'}}
    onChange={(event) => setEditMode(event.target.value)}
    value={newItemName}
    />
  </form>
  <button  className='button' onClick={handleSubmit} >  
            
    update </button>
  </div>


)
}</span>
    
    <button
    type='button'
    className='edit-btn'
    onClick={() => renameItem(item.id)}
    
  >   
  
    <FaEdit />
  </button>
     <button onClick={() => removeItem(item.id)}>x</button>
    
     
    </section>
  )
}

export default SingleItem