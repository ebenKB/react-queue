import React from 'react'

const Item = ({children, isRear, isFront}) => {
  return (
    <div className={`list_item ${isRear ? 'rear_item' : ''} ${isFront ? 'front-item' : ''}`}>
      {children}
    </div>
  )
}

export default Item
