import React, { useState } from 'react'
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import EditForm from './EditForm';


const SingleItem = ({item,removeItem,editItem,toggleComplete}) => {
 const [editMode, setEditMode]= useState(false)
  return (
    <section style={ {display:'flex', justifyContent:'space-between'}}>
      <button style={{width:'4rem'}}>
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
    >
      {item.name}</p>
      {/* <p 
    onClick={() => editItem(item.id)}   
       >
      </p>     */}
    <button
    type='button'
    className='edit-btn'
    onClick={() => editItem(item.id)}
  >    
    <FaEdit />
  </button>
     <button onClick={() => removeItem(item.id)}>x</button>
    
     
    </section>
  )
}

export default SingleItem