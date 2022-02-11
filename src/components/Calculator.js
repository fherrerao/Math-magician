import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

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

        <Button btnClick={this.btnOnClick} buttonName="AC" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="+/-" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="%" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="÷" buttonClasses="btn-orange" />
        <Button btnClick={this.btnOnClick} buttonName="7" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="8" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="9" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="x" buttonClasses="btn-orange" />
        <Button btnClick={this.btnOnClick} buttonName="4" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="5" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="6" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="-" buttonClasses="btn-orange" />
        <Button btnClick={this.btnOnClick} buttonName="1" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="2" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="3" buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="+" buttonClasses="btn-orange" />
        <Button btnClick={this.btnOnClick} buttonName="0" buttonClasses="btn-gray bottom-0" />
        <Button btnClick={this.btnOnClick} buttonName="." buttonClasses="btn-gray" />
        <Button btnClick={this.btnOnClick} buttonName="=" buttonClasses="btn-orange" />
      </div>
    );
  }
}

export default Calculator;
