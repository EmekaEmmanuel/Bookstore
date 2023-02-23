import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/calculator.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
