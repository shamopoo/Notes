import React, { Component } from 'react';

class Title extends Component {
    render() {
      return (
        <div>This is main content</div>
      )       
    }
}

class  Main extends Component {
    render() {
          return (
               <div>This is main content</div>
          )
    }
}

class Footer extends Component {
   render() {
       return (
            <div>This is  footer</div>
       )
   }
}

class TitleApp extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default TitleApp;