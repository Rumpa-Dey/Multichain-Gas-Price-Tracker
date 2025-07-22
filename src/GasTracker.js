import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const CHAIN_ID_MAP = {
  ethereum: 1,
  polygon: 137,
  bsc: 56,
};

const CHAIN_LOGOS = {
  ethereum: process.env.PUBLIC_URL + '/logos/ethereum.png',
  polygon: process.env.PUBLIC_URL + '/logos/polygon.png',
  bsc: process.env.PUBLIC_URL + '/logos/bsc.png',
};


const GasTracker = () => {
  const [gasData, setGasData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedChain, setSelectedChain] = useState('ethereum');

  const fetchGasPrice = async () => {
    try {
      const chainId = CHAIN_ID_MAP[selectedChain];
      const apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;

      const response = await axios.get(
        `https://api.etherscan.io/v2/api?chainid=${chainId}&module=gastracker&action=gasoracle&apikey=${apiKey}`
      );

      const gasInfo = response.data.result;
      setGasData({
        safeLow: gasInfo.SafeGasPrice,
        standard: gasInfo.ProposeGasPrice,
        fast: gasInfo.FastGasPrice,
      });
      setError(null);
    } catch (err) {
      console.error('Failed to fetch gas data:', err);
      setError('Error fetching gas data');
      setGasData(null);
    }
  };

  useEffect(() => {
    fetchGasPrice();
    const interval = setInterval(fetchGasPrice, 60000);
    return () => clearInterval(interval);
  }, [selectedChain]);

  const capitalizedName = selectedChain.charAt(0).toUpperCase() + selectedChain.slice(1);

  return (
    <div className="gas-card">
      <h2>⛽ Multichain Gas Price Tracker</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
        <img
          src={CHAIN_LOGOS[selectedChain]}
          alt={`${capitalizedName} Logo`}
          style={{ width: '24px', height: '24px', marginRight: '8px' }}
        />
        <h3 style={{ margin: 0 }}><strong>{capitalizedName}</strong> Gas Prices</h3>
      </div>

      <label>
        Select Chain:{' '}
        <select
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
        >
          {Object.keys(CHAIN_ID_MAP).map((chain) => (
            <option key={chain} value={chain}>
              {chain.charAt(0).toUpperCase() + chain.slice(1)}
            </option>
          ))}
        </select>
      </label>

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
