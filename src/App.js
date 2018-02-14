import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    //Define our state.
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
      operator: ""
    };
  }

  num1Ready = (event) => {
    this.setState({
      num1: Number(event.target.value)
    });
  };

  num2Ready = (event) => {
    this.setState({
      num2: Number(event.target.value)
    });
  };

  operatorReady = (event) => {
    this.setState({
      operator: event.target.value
    });
  };

  //Calculator

  calculate = () => {
    let result = 0;

    switch (this.state.operator){
      case '+':
        result = this.state.num1 + this.state.num2
        break;
      case '-':
        result = this.state.num1 - this.state.num2
        break;
      case '/':
        result = this.state.num1 / this.state.num2
        break;
      case '*':
        result = this.state.num1 * this.state.num2
        break;
      default:
        alert('Invalid Operation!')
    }
      this.setState({ 
        result
      });
  }

  render() {
    return( 
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator with React</h1>
        </header>
        <input type="text" class="inputNumber" onKeyUp={this.num1Ready} />
        <select onChange={this.operatorReady}>
          <option value=""> </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" class="inputNumber" onKeyUp={this.num2Ready} />
        <button onClick={this.calculate}> Calculate </button>
        <p class="App-intro"> Result: {this.state.result} </p>
        <div>{this.state.error}</div>
      </div>
    )
  }
}

export default App;
