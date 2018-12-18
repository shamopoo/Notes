import React, { Component } from 'react';
import './App.css';
import Title from './One/Title'
import LikeButtonApp from './One/Button'
import Dog from './One/Dog'
import Computer from './One/Computer'
import List from './One/List'
import Lesson from './One/Lesson'
import PercentageApp from './Two/Calculator'
import Clock from './Two/Clock'
import Index from './Two/Post'
import BlackIndex from './Two/BlackBorder'


class App extends Component {
  handleTitleClick(e) {
      console.log(this)
  }
  render() {
    return (
      <div className="App">
        <div onClick={this.handleTitleClick.bind(this)}>react 小书</div>
        <Title />
        <LikeButtonApp  />
        <Dog />
        <Computer />
        <List />
        <Lesson />
        <PercentageApp />
        <Clock />
        <Index />
        <BlackIndex />
      </div>
    );
  }
}

export default App;
