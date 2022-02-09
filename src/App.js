import React from 'react';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(drops) {
    super(drops);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
