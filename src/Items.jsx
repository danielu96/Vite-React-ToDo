import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items,removeItem}) => {
  return (
   
    items.map((item)=> {
      return <SingleItem key={item.id} item={item} removeItem={removeItem}/>
     
    })
   
  )
  
  
}

export default Items