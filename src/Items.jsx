import React from 'react'
import { useState,useEffect } from 'react'
import SingleItem from './SingleItem'
import EditForm from'./EditForm'

const Items = ({item,items,removeItem,editItem,toggleComplete,addItems}) => {
  const [isEditing, setIsEditing] = useState(false);
 
  return (
   items.map((item)=>{
   return <SingleItem key={item.id}item={item} editItem={editItem} removeItem={removeItem}
   addItems={addItems}toggleComplete={toggleComplete}/>
   }
   ))
  
 
  //  {
  //   item.isEditing ? (
    
  //   <EditForm key={item.id}item={item} editItem={editItem} removeItem={removeItem}
  //   addItems={addItems}toggleComplete={toggleComplete}/>
    
  //  ):
  //  (
  
  //   <SingleItem key={item.id}item={item} editItem={editItem} removeItem={removeItem}
  //     addItems={addItems}toggleComplete={toggleComplete}/>
   
  //  )}

// {isEditing ? (
//   items.map( (item) => {
  
//     return   <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem} 
//     toggleComplete={toggleComplete}addItem={addItems}/>
//    })
//     ) 

// }


  //    items.map((item)=> {
  //     isEditing ? (
  //       <EditForm item={item} editItem={editItem}/>
  //     ): (
  //    <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem} 
  // toggleComplete={toggleComplete}addItem={addItems}/>
  //     )
  //   }
  
  //   ) 
  //       )
   
  
  
  
}

export default Items