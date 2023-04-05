import React from 'react'

const EditForm = () => {
  return (
    <div>
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
    </div>
  )
}

export default EditForm