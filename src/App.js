import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line
import Calculator from './components/Calculator';
import './components/calculator.css';
import Header from './components/header/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
