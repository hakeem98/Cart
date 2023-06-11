import React, { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <div style={{ float: 'right' , margin: "10px"}}>
      <select
        value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="IQD">IQD</option>
      </select>
    </div>
  );
};

export default CurrencySelector;