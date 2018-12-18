import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Post extends Component {
    static propTypes = {
      showText:  PropTypes.string
    }
    handleTextClick () {
       if(this.props.onTextClick) {
          this.props.onTextClick(this.refs.p.clientHeight)
       }
    }
    render() {
        return (
           <p onClick={this.handleTextClick.bind(this)} ref='p'>
             {this.props.showText}
           </p>
        )
    }
}
class Index extends Component {
  handleShowClick (height) {
    console.log(height)
  }
    render() {
       return (
          <div>
             <Post onTextClick={this.handleShowClick.bind(this)} showText={' 把元素的高度打印出来。'}/>
          </div>
       )
    }
}
export default Index