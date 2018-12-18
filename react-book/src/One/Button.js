import React, { Component } from 'react';

class LikeButtonApp extends Component {
    static defaultProps = {
        LikeButtonText: '喜欢',
        isLikeButtonText: '不喜欢'
    }
    constructor () {
        super()
        this.state = {
           isLike: true
        }
    }
    handleButtonClick () {
    // React.js 并不会马上修改 state
    console.log(1,this.state.isLike)
      this.setState({
          isLike: !this.state.isLike
      })
      console.log(2,this.state.isLike)
    }
    render () {
          return (
              <button onClick={this.handleButtonClick.bind(this)}>
                { this.state.isLike ? this.props.LikeButtonText : this.props.isLikeButtonText }
              </button>
          )
    }
}

export default LikeButtonApp