import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items}) => {
  return (
    items.map((item)=> {
      return <SingleItem key={item.id} item={item}/>
    })
    
  )
}

export default Items