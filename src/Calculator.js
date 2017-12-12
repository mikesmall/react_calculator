import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  render () {
    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Adding with React</h1>
        </header>


        <div className="add">
          <input type="text" /> <br />
          <span> + </span>
          <input type="text" />
          <span> = </span>
          <h3>Addition results go here!</h3>
        </div>
      </div>
    )
  }

}

export default Calculator
