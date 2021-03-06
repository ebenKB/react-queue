import React, { useState } from 'react'

const Controls = ({ handleEnqueue, handleDequeue, handleIsEmpty, handleIsFull }) => {
  const [val, setVal] = useState("") 
  const handleInputChange = (e) => {
    const v = e.target.value;
    setVal(v);
  };

  return (
    <div className="queue_controls">
      <div className="control btn-group">
        <input type="number" min={1} name="value" onChange={handleInputChange}  placeholder="Enter number to add" />
        <button onClick={() => handleEnqueue(val)}>Enqueue</button>
      </div>
      <div className="control">
        <button onClick={handleDequeue}>Dequeue</button>
      </div>
      <div className="control">
        <button onClick={handleIsEmpty}>IsEmpty</button>
      </div>
      <div className="control">
        <button onClick={handleIsFull}>IsFull</button>
      </div>
    </div>
  )
}

export default Controls
