import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items,removeItem,editItem,toggleComplete}) => {
  return (
   
    items.map((item)=> {
      // const { id, title } = item;
      return <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem} toggleComplete={toggleComplete}/>
     
    })
   
  )
  
  
}

export default Items