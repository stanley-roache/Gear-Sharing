import React from 'react'

export const ItemInline = props => {
  const {name, description, status} = props.item
  return (
    <div><h4 key={Math.random()}>{name} - {description} - {status}</h4></div>
  )
}

export default ItemInline