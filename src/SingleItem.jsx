import React from 'react'
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const SingleItem = ({item,removeItem,editItem,toggleComplete}) => {
 
  return (
    <section style={{display:'flex', justifyContent:'space-between'}}>
      <button>
      <FaCheck onClick={() => toggleComplete(item.id)}/>
      </button>
     
    
    <p onClick={() => toggleComplete(item.id)} 
    className={`${item.completed ? 'completed': ''}
    `}>{item.name}</p>

    {/* <span>{item.id}</span> */}
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