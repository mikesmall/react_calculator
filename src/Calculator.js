import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {

  constructor (props) {
    super(props)

    // This binding is necessary to make 'this' work in the callback
    this.add = this.add.bind(this)

    this.state = {
      sum: 0
    }
  }

  add() {
    var sum = (parseInt(this.refs.numberOne.value) || 0) + (parseInt(this.refs.numberTwo.value) || 0);

    this.setState({
      sum: sum
    })
  }

  render () {
    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Adding with React</h1>
        </header>

        <div className="add">
          <input type="text" ref="numberOne" onKeyUp={this.add} /> <br />
          <span> + </span>
          <input type="text" ref="numberTwo" onKeyUp={this.add} /> <br />
          <span> = </span>
          <h3>{this.state.sum}</h3>
        </div>
        
      </div>
    )
  }

}

export default Calculator
