import React from 'react';
// eslint-disable-next-line
import Calculator from './components/Calculator';
import './components/calculator.css';

class App extends React.Component {
  constructor(drops) {
    super(drops);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
