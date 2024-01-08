// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import stocksData from '../data.json';

const Dashboard = () => {
  return (
    <div>
      <h2>Most Active Stocks</h2>
      <ul>
        {stocksData.map((stock) => (
          <li key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
