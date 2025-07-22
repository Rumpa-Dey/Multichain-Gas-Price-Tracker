// src/GasTracker.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const GasTracker = () => {
  const [gasData, setGasData] = useState(null);
  const [error, setError] = useState(null);

  const fetchGasPrice = async () => {
    try {
      const response = await axios.get(`https://api.etherscan.io/v2/api?chainId=1&module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`);
      const gasInfo = response.data.result;
    setGasData({
      safeLow: gasInfo.SafeGasPrice,
      standard: gasInfo.ProposeGasPrice,
      fast: gasInfo.FastGasPrice,
    });
    } catch (err) {
      console.error('Failed to fetch gas data:', err);
      setError('Error fetching gas data');
    }
  };

  useEffect(() => {
    fetchGasPrice();
    const interval = setInterval(fetchGasPrice, 60000); // Refresh every 60 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gas-card">
      <h2>⛽ Ethereum Gas Prices</h2>

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : gasData ? (
        <ul>
          <li><strong>Safe Low:</strong> {gasData.safeLow ?? 'N/A'} Gwei</li>
          <li><strong>Standard:</strong> {gasData.standard ?? 'N/A'} Gwei</li>
          <li><strong>Fast:</strong> {gasData.fast ?? 'N/A'} Gwei</li>
          </ul>
      ) : (
        <p>Loading gas data...</p>
      )}
    </div>
  );
};

export default GasTracker;
