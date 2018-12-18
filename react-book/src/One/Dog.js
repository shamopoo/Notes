import React, { Component } from 'react';

class Dog extends Component {
  constructor () {
    super()
    /* TODO */
    this.state = {
      isBarking: false,
      isRunning: false
    }
  }
  
  bark () {
    /* TODO */
    console.log('汪汪汪')
    this.setState({isBarking: true})
    setTimeout(() => this.setState({isBarking: false}), 20)
  }
  
  run () {
    /* TODO */
    console.log('跑跑跑')
    this.setState({isRunning: true})
    setTimeout(() => this.setState({isRunning: false}), 20)
  }
  handleDogClick () {
    this.bark()
    this.run()
  }
  render () {
    return (<div onClick={this.handleDogClick.bind(this)}>DOG</div>)
  }
}
export default Dog