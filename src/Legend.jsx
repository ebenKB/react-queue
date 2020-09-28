import React from 'react'

const Legend = () => {
  return (
    <div className="legend">
      <div className="front-legend">
        <div className="front-legend__key"></div>
        <div className="title">Front Pointer</div>
      </div>
      <div className="rear-legend">
        <div className="rear-legend__key" />
        <div className="title">
          Rear pointer
        </div>
      </div>
    </div>
  )
}

export default Legend
