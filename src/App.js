import React from 'react';
import Calculator from './components/calculator';
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
