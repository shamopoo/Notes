import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
      username: PropTypes.any,
      onSubmit: PropTypes.func,
      onUserNameInputBlur: PropTypes.func
  }
  static defaultProps = {
     username: ''
  }
  constructor (props) {
     super(props)
     this.state = {
        username: props.username,
        content: '',
        wordCounter: 1000
     }
  }
  componentDidMount () {
    this.state.username && this.refs.textarea.focus()
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleUsernameBlur (event) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value)
    }
  }

  handleContentChange (e) {
    this.refs.textarea.style.height = 'auto'
    this.refs.textarea.style.height =  this.refs.textarea.scrollHeight + "px";
    this.setState({
        content: e.target.value,
        wordCounter: 1000 - e.target.value.length
    })
  }
  handleSubmit () {
     if (this.props.onSubmit) {
        this.props.onSubmit({
            username: this.state.username,
            content: this.state.content, 
            createdTime:  Math.floor(+Date.now()  / 1000)
        })
     }
     this.setState({
          content: '',
          wordCounter: 1000
      })
      this.refs.textarea.style.height =  "40px";
  }
  render () {
    return (
      <div className='comment-input'>
          <div className='comment-field'>
            <span className='comment-field-name'>用户名：</span>
            <div className='comment-field-input'>
              <input 
                  maxLength= '18'
                  value={this.state.username}
                  onBlur={this.handleUsernameBlur.bind(this)}
                  onChange={this.handleUsernameChange.bind(this)} />
            </div>
          </div>
          <div className='comment-field'>
            <span className='comment-field-name'>评论内容：</span>
            <div className='comment-field-input'>
              <textarea 
                  maxLength='1000'
                  ref="textarea" 
                  value={this.state.content}
                  onChange={this.handleContentChange.bind(this)} />
            </div>
          </div>
          <div className='word-counter'>{this.state.wordCounter} / 1000</div>
          <div className='comment-field-button'>
            <button onClick={this.handleSubmit.bind(this)}>
              发布
            </button>
          </div>
      </div>
    )
  }
}
export default CommentInput