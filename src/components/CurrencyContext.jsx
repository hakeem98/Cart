import React, { createContext, useState } from "react"

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');

  return (
    < CurrencyContext.Provider value={{currency, setCurrency}}>
      {children}
    </CurrencyContext.Provider>
  );
};

export {CurrencyContext, CurrencyProvider};