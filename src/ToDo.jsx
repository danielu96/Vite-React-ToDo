import React, { useState, useEffect } from 'react';

const ToDo = () => {
  const [newItemName, setNewItemName] = useState('');

const add = (e) =>{
  e.preventDefault(); 
return (
  console.log(newItemName)
)
}
  return (
    <div className='container'> 
    <div  classsName='form-control' tyle={{marginLeft:'10px'}} >
      <input
      type='text'
      onChange={(e) => setNewItemName(e.target.value)}
      value={newItemName}
      />
    </div>
    <button  className='button' onClick={add}>add </button>
    </div>
  )
}

export default ToDo