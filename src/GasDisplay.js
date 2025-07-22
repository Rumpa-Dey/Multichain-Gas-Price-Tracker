// GasDisplay.js
import React from 'react';
import './style.css';

const GasDisplay = ({ gasData }) => {
  if (!gasData) {
    return <div className="gas-card">Loading gas data...</div>;
  }

  const { gasPrice, estimatedCostEth, estimatedCostUsd } = gasData;

  return (
    <div className="gas-card">
      <h2>⛽ Current Gas Info</h2>
      <ul>
        <li><strong>Gas Price:</strong> {gasPrice} Gwei</li>
        <li><strong>Est. Tx Cost:</strong> {estimatedCostEth} ETH</li>
        <li><strong>Est. USD:</strong> ${estimatedCostUsd}</li>
      </ul>
    </div>
  );
};

export default GasDisplay;
