import React, { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { TypeRegistry } from '@polkadot/types';

export default function WalletBalance() {
  const [balance, setBalance] = useState(null); // State to hold the fetched balance

  useEffect(() => {
    const fetchBalance = async () => {
      const registry = new TypeRegistry(); // Add Aleph Zero specific types
      const provider = new WsProvider('wss://ws.test.azero.dev');
      const api = await ApiPromise.create({ provider, registry });

      const address = '5HYnx4MVqEHx8VWFDvhbAy4Axbidt6FjL9GzRCBedZzwCheH'; // Replace with actual address

      const initialBalance = await api.query.system.account(address);
      setBalance(initialBalance.data.free.toString()); // Extract primitive value
    };

    fetchBalance();
  }, []);

  return (
    <div>
      {balance ? (
        <p>{balance}</p>
      ) : (
        <p>Loading wallet balance...</p>
      )}
    </div>
  );
}
