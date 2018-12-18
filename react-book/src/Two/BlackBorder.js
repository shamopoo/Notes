import React, { Component } from 'react';

class BlackBorderContainer extends Component {
  /* TODO */
  componentDidMount () {
     console.log(this.props.children)
  }
  render () {
     return(
         <div>
            { this.props.children.map((v, i) => <div className='black-border' key={i}>{v}</div>)}
         </div>
     )
  }
}

class BlackIndex extends Component {
   static defaultProps = {
        content: []
     }
    render() {
       return(
          <div>
              <BlackBorderContainer>
                  <div className='name'>My Name：Lucy</div>
                     <p className='age'>
                        My Age：<span>12</span>
                     </p>
               </BlackBorderContainer>
          </div>
       )
    }
}
export default BlackIndex