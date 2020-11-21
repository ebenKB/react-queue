import React from 'react'
import Item from './Item';
import Controls from './Controls';
import Legend from './Legend';

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      size:10,
      rear:0,
      front:0,
      isEmpty: false,
      isFull: false,
      error:  null,
    }
    
  }

  componentDidMount() {
    console.log(this.state.isEmpty, this.state.isFull)
  }
  
  isEmpty() {
    if (this.state.rear === this.state.front) {
      this.setState((state) => ({
        ...state,
        isEmpty: true,
      }))
      return true;
    }
    return false;
  }

  isFull() {
    console.log('Checking if full with rear pointer: ', this.state.rear)
    if (this.state.rear === this.state.size) {
      this.setState((state) => ({
        ...state,
        isFull: true,
      }))
      return true;
    }
    return false;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.state.data[this.state.front]
    }
  }

  enQueue(data) {
    if(!this.isFull() && data) {
      console.log('We want to enqueue with this data', data)
      const nData = this.state.data;
      nData[this.state.rear] = data;

      // check if the stack can take any more items at the rear
      if (this.state.size - this.state.rear > 1) {
        nData.push("")
      }
      this.setState((state) => ({
        ...state,
        rear: (state.rear + 1),
        data:[...nData],
        error: null,
        isFull: false,
      }))
    } else if(!data) {
      this.setState((state) => ({
        ...state,
        error: 'Data is not valid. Please input valid data.'
      }))
    }
  }

  deQueue() {
    if(!this.isEmpty()) {
      // const val = this.state.data[this.state.front]

      // shift items to the front
      for(let i =0; i< this.state.rear; i++) {
        const newData = this.state;
        newData.data[i] = newData.data[i + 1]
        this.setState((state) => ({
          ...state,
          ...newData
        }))
      }

      const nData = this.state.data;
      nData[this.state.rear] = null
      this.setState((state) => ({
        ...state,
        rear: (state.rear - 1),
        data: [...nData.filter((x) => x !== null)],
        isFull: false,
      }))
    }
  }

  handleInputChange = (e) => {
    const {value} = e.target;
    this.setState((state) => ({
      ...state,
      size: +value,
      data:[],
      rear:0,
      front:0,
    }))
  }

  render() {
    const { size, isEmpty, isFull, rear, error, front } = this.state;
    return (
      <div className="queue_wrapper">
       <div className="q-title">
        <h1>Queue Abstract Data Type</h1>
        <div className="err-input">
          {error}
        </div>
       </div>
       <div className="custom-input">
          <label htmlFor="size" name="size">Queue size </label>
          <input type="number" min={1} value={size} onChange={this.handleInputChange} />
       </div>
       <div className="items_wrapper">
        {this.state.data.map((d, key) => <Item key={key} isRear={key === rear} isFront={key === front}>{d}</Item>)}
       </div>
        <div>
          <Controls 
            handleEnqueue = {(data) => this.enQueue(data)} 
            handleDequeue = {() => this.deQueue()}
          />
        </div>
        <h3>Current Items {this.state.rear}</h3>
        <h3>Remaining Items {this.state.size - this.state.rear}</h3>
        {isFull && (
          <div className="q-alert">{isFull && (
            <span>Queue is full</span>
            )}
        </div>
        )}
        <Legend />
      </div>
    )
  }
}

export default Queue