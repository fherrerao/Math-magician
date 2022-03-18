import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './components/calculator.css';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
