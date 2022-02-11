import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const btnClick = (event) => {
    setCalc(calculate(calc, event.target.textContent));
  };

  return (
    <div className="container-calculator container">
      <div className="display-result">
        {calc.total}
        {calc.operation}
        {calc.next}
      </div>

      <Button btnClick={btnClick} buttonName="AC" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="+/-" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="%" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="÷" buttonClasses="btn-orange" />
      <Button btnClick={btnClick} buttonName="7" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="8" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="9" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="x" buttonClasses="btn-orange" />
      <Button btnClick={btnClick} buttonName="4" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="5" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="6" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="-" buttonClasses="btn-orange" />
      <Button btnClick={btnClick} buttonName="1" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="2" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="3" buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="+" buttonClasses="btn-orange" />
      <Button btnClick={btnClick} buttonName="0" buttonClasses="btn-gray bottom-0" />
      <Button btnClick={btnClick} buttonName="." buttonClasses="btn-gray" />
      <Button btnClick={btnClick} buttonName="=" buttonClasses="btn-orange" />
    </div>
  );
};

export default Calculator;
