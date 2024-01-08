// src/components/Stock.js
import React from 'react';
import { useParams } from 'react-router-dom';
import stocks from '../data.json';

const Stock = () => {
  const { symbol } = useParams();

  const selectedStock = stocks.find((stock) => stock.symbol === symbol);

  if (!selectedStock) {
    return <div>Stock not found</div>;
  }

  return (
    <div>
      <h2>Stock Details</h2>
      <p>Name: {selectedStock.name}</p>
      <p>Symbol: {selectedStock.symbol}</p>
      <p>Last Price: {selectedStock.lastPrice}</p>
      <p>Change: {selectedStock.change}</p>
      <p>High: {selectedStock.high}</p>
      <p>Low: {selectedStock.low}</p>
      <p>Open: {selectedStock.open}</p>
      {/* Add other stock attributes */}
    </div>
  );
};

export default Stock;
