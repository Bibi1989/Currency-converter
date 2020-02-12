import React from 'react';
import './App.css';
import CurrencyComponent from './components/CurrencyComponent';

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyComponent />
      <div>=</div>
      <CurrencyComponent />
    </div>
  );
}

export default App;
