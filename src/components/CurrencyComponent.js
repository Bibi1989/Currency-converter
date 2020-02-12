import React, { useState, useEffect } from "react";

const CurrencyComponent = () => {
  const [data, setData] = useState();
  const uri = `https://api.exchangeratesapi.io/latest`;
  useEffect(() => {
    fetch(uri)
      .then(res => res.json())
      .then(response => setData(response.rates));
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <input type='number' placeholder='dollar' />
        <select>
          {data && Object.keys(data).map(d => (
            <option value={d}>{d}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CurrencyComponent;
