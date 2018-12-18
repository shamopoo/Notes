import React, { Component } from 'react';


//  做一个百分比换算器，需要你完成三个组件：

//  <Input />：封装了原生的<input />，可以输入任意数字

// <PercentageShower />：实时 显示 <Input /> 中的数字内容，但是需要把它转换成百分比，
// 例如 <Input /> 输入的是 0.1，那么就要显示 10.00%，保留两位小数。

// <PercentageApp />：组合上述两个组件。

class Input extends Component {
  handleNumberInput (event) {
     if (this.props.onInput) {
        this.props.onInput(event.target.value)
     }
  }
  render () {
    return (
      <div className='comment-field-input'>
        <input type='number' onChange={this.handleNumberInput.bind(this)}/>
      </div>
    )
  }
}

class PercentageShower extends Component {

  render () {
    return (
      <div>
         {this.props.percentage}
      </div>
    )
  }
}

class PercentageApp extends Component {
  constructor () {
     super()
     this.state = {
        percentage: ''
     }
  }
  handleInput (num) {
    let n = (num * 100).toFixed(2) + '%'
    this.setState({percentage: n })
  }
  render () {
    return (
      <div>
        <Input onInput={this.handleInput.bind(this)}/>
        <PercentageShower percentage={this.state.percentage}/>
      </div>
    )
  }
}

export default PercentageApp