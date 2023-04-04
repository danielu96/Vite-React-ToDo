import React, { useState, useEffect } from 'react';

const ToDo = ({addItem}) => {
  const [newItemName, setNewItemName] = useState('');

const handleSubmit = (e) =>{
  e.preventDefault(); 
  if(!newItemName)return;
  addItem(newItemName);
  setNewItemName('');

return (
  console.log(newItemName)
)
}
  return (
    <div className='container'> 
    <form onSubmit={handleSubmit} >
      <input
      type='text'
      style={{marginRight:'1rem'}}
      onChange={(event) => setNewItemName(event.target.value)}
      value={newItemName}
      />
    </form>
    <button  className='button' onClick={handleSubmit}>add </button>
    </div>
  )
}

export default ToDo