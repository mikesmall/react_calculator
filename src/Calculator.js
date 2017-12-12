import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  render () {
    return (
      <div className="container">
        <h1>Adding with React</h1>
        <div className="add">
          <input type="text" />
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
