import React, { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { TypeRegistry } from '@polkadot/types';

export default function AzeroToUSD() {
  const [balance, setBalance] = useState(null);
  const [usdPrice, setUsdPrice] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
        const registry = new TypeRegistry(); // Add Aleph Zero specific types
        const provider = new WsProvider('wss://ws.test.azero.dev');
        const api = await ApiPromise.create({ provider, registry });

        const address = '5HYnx4MVqEHx8VWFDvhbAy4Axbidt6FjL9GzRCBedZzwCheH';

      const initialBalance = await api.query.system.account(address);
      setBalance(initialBalance.data.free.toString());
    };

    fetchBalance();
  }, []);

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=aleph-zero&vs_currencies=usd');
      const data = await response.json();
      console.log(data);
      setUsdPrice(data["aleph-zero"].usd);
      console.log(usdPrice)
    };
  
    fetchPrice();
  }, []);

  return (
    <div>
      {balance && usdPrice ? (
        <p>
          {(balance * usdPrice)}
        </p>
      ) : (
        <p>Loading wallet balance and price...</p>
      )}
    </div>
  );
}
