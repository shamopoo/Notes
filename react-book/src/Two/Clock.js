import React, { Component } from 'react';

class Clock extends Component {
  constructor () {
    super()
    this.state = {
       time: new Date()
    }
  }
  componentWillMount () {
    this.timer = setInterval(() => this.setState({time: new Date()}), 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
   render () {
      return (
          <div>
            <h1>
                现在的时间是：
                {this.state.time.toLocaleTimeString()}
            </h1>
          </div>
      )
   }
}
export default Clock