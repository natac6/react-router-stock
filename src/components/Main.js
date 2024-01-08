import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Stock from './Stock';
import data from '../data.json';

function Main(props) {
  console.log('Main component rendered', props);
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock stockData={data} />} />
        <Route path="/stocks" element={<Dashboard stockData={data} />} />
      </Routes>
    </main>
  );
}

export default Main;
