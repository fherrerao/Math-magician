import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  btnOnClick = (event) => {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container-calculator container">
        <div className="display-result">
          {total}
          {operation}
          {next}
        </div>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">AC</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">+/-</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">%</button>
        <button onClick={this.btnOnClick} type="button" className="btn-orange">÷</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">7</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">8</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">9</button>
        <button onClick={this.btnOnClick} type="button" className="btn-orange">x</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">4</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">5</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">6</button>
        <button onClick={this.btnOnClick} type="button" className="btn-orange">-</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">1</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">2</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">3</button>
        <button onClick={this.btnOnClick} type="button" className="btn-orange">+</button>
        <button onClick={this.btnOnClick} type="button" className="bottom-0 btn-gray">0</button>
        <button onClick={this.btnOnClick} type="button" className="btn-gray">.</button>
        <button onClick={this.btnOnClick} type="button" className="btn-orange">=</button>
      </div>
    );
  }
}

export default Calculator;
