import React from 'react'
import SingleItem from './SingleItem'


const Items = ({items,removeItem,editItem,toggleComplete,addItems,renameItem}) => {
 
 
  return (
   items.map((item)=>{
   return <SingleItem key={item.id}item={item} editItem={editItem} removeItem={removeItem}
   addItems={addItems}toggleComplete={toggleComplete} renameItem={renameItem}/>
   }
   ))      
}

export default Items