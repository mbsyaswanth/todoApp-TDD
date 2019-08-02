import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
type CounterProps = {}

@observer
class Counter extends Component<CounterProps> {
  @observable count: number = 0
  handleClick = () => {
    this.count = this.count + 1
  }
  render() {
    return (
      <div>
        <h1>{this.count}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
export default Counter
