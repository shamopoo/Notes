import React, { Component } from 'react';
import PropTypes from  'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }
  constructor () {
    super()
    this.state = {
        timeString: ''
    }
  }
  componentWillMount () {
      this._updateTimeString()
  }
  _updateTimeString  () {
    const comment = this.props.comment
    const duration = Math.floor(+Date.now() / 1000 - comment.createdTime)
    console.log(duration)
    this.setState({
      timeString: duration > 60 ?  (duration > 60 * 60 ? (duration > 60 * 60 * 24 ? `${Math.round(duration / 60 / 60 / 24)} 天前` : `${Math.round(duration / 60 / 60)} 小时前`)  : `${Math.round(duration / 60)} 分钟前`) : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  handleDeleteComment () {
      if (this.props.onDeleteComment) {
        this.props.onDeleteComment(this.props.index)
      }
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete'  onClick={this.handleDeleteComment.bind(this)}>
          删除
        </span>
      </div>
    )
  }
}
export default Comment