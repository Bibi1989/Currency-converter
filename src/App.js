import React, { useState, useEffect } from "react";
import "./App.css";
import CurrencyComponent from "./components/CurrencyComponent";

function App() {
  const [data, setData] = useState([]);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [amount, setAmount] = useState(1);
  const [amoutFromCurrency, setAmountFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();
  const uri = `https://api.exchangeratesapi.io/latest`;

  let toAmount, fromAmount;
  if (amoutFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(uri)
      .then(res => res.json())
      .then(response => {
        const firstInput = Object.keys(response.rates)[0];
        setData([response.base, ...Object.keys(response.rates)]);
        setFrom(response.base);
        setTo(firstInput);
        setExchangeRate(response.rates[firstInput]);
      });
  }, [uri]);

  useEffect(() => {
    if (to !== undefined && from !== undefined) {
      fetch(`${uri}?base=${from}&symbols=${to}`)
        .then(res => res.json())
        .then(response => setExchangeRate(response.rates[`${to}`]));
    }
  }, [to, from, uri]);

  const onChangeCurrencyFrom = e => {
    setFrom(e.target.value);
  };

  const onChangeCurrencyTo = e => {
    setTo(e.target.value);
  };

  const onChange1 = ({ target }) => {
    setAmount(target.value);
    setAmountFromCurrency(true);
  };
  const onChange2 = ({ target }) => {
    setAmount(target.value);
    setAmountFromCurrency(false);
  };
  return (
    <>
    <div className='app'>
      <h1>Currency Converter</h1>
      <CurrencyComponent
        data={data}
        selectedCurrency={from}
        onChangeCurrency={onChangeCurrencyFrom}
        amount={fromAmount}
        onchangeInput={onChange1}
      />
      <div>=</div>
      <CurrencyComponent
        data={data}
        selectedCurrency={to}
        onChangeCurrency={onChangeCurrencyTo}
        amount={toAmount}
        onchangeInput={onChange2}
      />
    </div>
    </>
  );
}

export default App;
