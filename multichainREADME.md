# ⛽ Multichain Gas Price Tracker

A simple React-based web app to view real-time gas prices across multiple blockchain networks like Ethereum, Polygon, and Binance Smart Chain using the Etherscan V2 API.

---

### 🎯 Objective & Purpose of the Project

The **Multichain Gas Price Tracker** is a web-based tool developed using **React** and **Etherscan’s Multichain API**, designed to provide real-time gas fee data across multiple EVM-compatible networks, including **Ethereum (Mainnet)**, **Polygon**, and **Binance Smart Chain (BSC)**.

#### 📌 Core Objectives

-  Fetch and display **live gas prices** (Safe, Proposed, and Fast rates) from selected blockchains using **Etherscan’s V2 API**.
-  Provide  a chain-selectable UI for real-time network fee insights
-  Assist **developers, dApp users, and educators** in making cost-efficient and informed transaction decisions based on current network congestion and fee trends.

### ✅ Gas Price Tiers

Gas prices on Ethereum and other EVM-based blockchains vary depending on network congestion. This tracker displays three main tiers:

- **🟢 SafeGasPrice** – Lowest cost, but transactions may be slower to confirm.
- **🟡 ProposeGasPrice** – Standard market rate offering a good balance of cost and speed.
- **🔴 FastGasPrice** – Highest fee for priority processing and faster confirmations.



#### 🧑‍💻 Target Audience

- **Web3 developers** needing accurate fee estimates for contract deployment or interaction.
- **Crypto users** who want to time transactions during lower congestion periods.
- **Educators and blockchain learners** aiming to understand network mechanics and fee structures across chains.

---

## 🚀 Features

- 🔁 Auto-refreshes gas data every 60 seconds
- 🌐 Supports multiple chains (Ethereum, Polygon, BSC)
- 🧭 Easy-to-use dropdown for chain selection
- 💡 Clean and responsive UI
- 🔐 Uses `.env` for secure API key management

---

## 🖼️ Screenshots

![Gas Price](screenshorts/multichain.png)

---

## 📦 Tech Stack

- **Frontend**: React
- **Data Source**: Etherscan V2 Multichain API
- **Styling**: CSS

---

## 📁 Project Structure

```bash

multichain-gas-tracker/
├── public/
│ └── logos/
│ ├── ethereum.png               # Ethereum logo image
│ ├── polygon.png                # Polygon logo image
│ └── bsc.png                    # Binance Smart Chain logo image
│
├── src/
│ ├── GasTracker.js              # React component for fetching and displaying gas prices
│ ├── style.css                  # CSS styles for GasTracker component
│ └── App.js                     # Main App component that renders GasTracker
│
├── .env                         # Stores API key
├── .gitignore                   # Specifies files/folders to ignore in Git
├── README.md                    # Project documentation
├── package.json                 # Project metadata and dependencies
```

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Rumpa-Dey/ethereum-gas-tracker.git
cd ethereum-gas-tracker
```
### 2. Install Dependencies

```bash
npm install
```
### 3.Configure the API Key

Create a file named `.env` in the root directory, and add your Etherscan API key:

```env
REACT_APP_ETHERSCAN_API_KEY=your_api_key_here
```
🧪 You can get a free API key from [Etherscan.io](https://etherscan.io/myapikey)

✅ Use the same key for Polygon/BSC since it's now Multichain enabled.

### 4. Start the App
```bash
npm start
```
The app will run locally at http://localhost:3000.



## 🌐 Supported Networks

| Chain     | Chain ID |
|-----------|----------|
| Ethereum  | 1        |
| Polygon   | 137      |
| BSC       | 56       |


## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.



## 📄 License

This project is licensed under the MIT License.

## 🙋‍♀️ Author
Made by Rumpa Dey