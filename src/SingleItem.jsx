import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const SingleItem = ({item,removeItem,editItem}) => {
 
  return (
    <section style={{display:'flex', justifyContent:'space-between'}}>
    <button
    type='button'
    className='edit-btn'
    onClick={() => editItem(id)}
  >
    <FaEdit />
  </button>
    <h2>{item.name}</h2>
    {/* <span>{item.id}</span> */}
     <button onClick={() => removeItem(item.id)}>x</button>
    
    
    </section>
  )
}

export default SingleItem