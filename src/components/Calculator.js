import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-calculator container">
        <div className="display-result">0</div>
        <button type="button" className="btn-gray">AC</button>
        <button type="button" className="btn-gray">+/-</button>
        <button type="button" className="btn-gray">%</button>
        <button type="button" className="btn-orange">÷</button>
        <button type="button" className="btn-gray">7</button>
        <button type="button" className="btn-gray">8</button>
        <button type="button" className="btn-gray">9</button>
        <button type="button" className="btn-orange">x</button>
        <button type="button" className="btn-gray">4</button>
        <button type="button" className="btn-gray">5</button>
        <button type="button" className="btn-gray">6</button>
        <button type="button" className="btn-orange">-</button>
        <button type="button" className="btn-gray">1</button>
        <button type="button" className="btn-gray">2</button>
        <button type="button" className="btn-gray">3</button>
        <button type="button" className="btn-orange">+</button>
        <button type="button" className="bottom-0 btn-gray">0</button>
        <button type="button" className="btn-gray">.</button>
        <button type="button" className="btn-orange">=</button>
      </div>
    );
  }
}

export default Calculator;
