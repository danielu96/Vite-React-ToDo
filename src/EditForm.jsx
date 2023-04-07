import React, { useState } from 'react'

const EditForm = ({editItem, item}) => {
  const {value,setValue}=useState(item.item);
  const [newItemName, setNewItemName] = useState('');
  

const handleSubmit = e =>{
  e.preventDefault();
  editItem(value,item.id);
  setValue("")
}

  return (
    <div>
         <div className='container'> 
    {/* <form onSubmit={handleSubmit} >
      <input
      type='text'
      style={{marginRight:'1rem'}}
      onChange={(event) => setValue(event.target.value)}
      value={newItemName}
      />
    </form> */}
    <button  className='button' onClick={handleSubmit}>update</button>
    </div>
    </div>
  )
}

export default EditForm