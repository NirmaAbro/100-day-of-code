import React, { useState } from 'react';
import useCurrencyRate from '../../hooks/useCurrencyRate';
import CurrencyProject from '../currencyConverter/CurrencyProject';

function CurrencyConverterApp() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState(1);

  const currencyRates = useCurrencyRate(fromCurrency); // 👈 use the hook
  const convertedAmount = currencyRates[toCurrency] ? (amount * currencyRates[toCurrency]).toFixed(2) : 0;

  const currencyOptions = Object.keys(currencyRates).map((code) => ({
    value: code,
    label: code.toUpperCase(),
  }));

  return (
    <CurrencyProject
      label="From"
      amount={amount}
      onAmountChange={setAmount}
      oncurrencyChange={setFromCurrency}
      currencyOptions={currencyOptions}
      selectCurrency={fromCurrency}
      className=""
      // You can pass toCurrency etc to second part of UI if needed
    />
  );
}

export default CurrencyConverterApp;
