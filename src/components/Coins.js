import React from 'react';

// komponente
import CoinItem from './CoinItem';

// bibl
import './coins.css';

export default function Coins(props) {
  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Market Cap</p>
        </div>

        {props.coins.map((coin) => {
          return (
            <CoinItem coin={coin} />
          );
        })}
      </div>
    </div>
  );
}
