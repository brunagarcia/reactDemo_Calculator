import React, { Component } from 'react';
import './App.css';


//Parent Component.
class App extends Component {
  constructor() {
    super();

    //Define initial state.
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
      operator: ""
    };
  }

  //Processing number input and assigning to key/values.
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

  //Calculator conditions - It can be done in one line with eval, but not safe.
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

  //Rendering html with dynamic values.
  render() {
    return( 
        // Header
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator with React</h1>
        </header>
        {/* Assigning num 1 */}
        <input type="text" class="inputNumber" onKeyUp={this.num1Ready} />
        <select onChange={this.operatorReady}>
          {/* Assignning values to options to be ablet o change on function. */}
          <option value=""> </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
          {/* Assigning num 2 */}
        <input type="text" class="inputNumber" onKeyUp={this.num2Ready} />
         {/* calling the calculate function */}
        <button onClick={this.calculate}> Calculate </button>
          {/* Displaying result */}
        <p class="App-intro"> Result: {this.state.result} </p>
        <div>{this.state.error}</div>
      </div>
    )
  }
}

export default App;
