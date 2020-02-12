import React, { useState } from "react";

const CurrencyComponent = ({ selectedCurrency, data, onChangeCurrency, amount, onchangeInput }) => {
    
  return (
    <>
      <div>
        <input type='number' placeholder='dollar' value={amount} onChange={onchangeInput} />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {data.map(d => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CurrencyComponent;
