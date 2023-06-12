
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinItem from './components/CoinItem';
import axios from 'axios';

import React, { useState, useEffect } from 'react';

function App() {

  const [coin, setCoinItem] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=30&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoinItem(res.data);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<CoinItem coin={coin} />} />
      </Routes> 
    </BrowserRouter>  
  );
}

export default App;
