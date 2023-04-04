import React from 'react'

const SingleItem = ({item,removeItem}) => {
 
  return (
    <section style={{display:'flex', justifyContent:'space-between'}}>
    <h2>{item.name}</h2>
    {/* <span>{item.id}</span> */}
     <button onClick={() => removeItem(item.id)}>x</button>
    
    
    </section>
  )
}

export default SingleItem