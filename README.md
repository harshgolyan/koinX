# Crypto APIs

This project provides three APIs for fetching cryptocurrency data: `cron`, `stats`, and `deviation`. Each API allows users to retrieve relevant information about various cryptocurrencies, including prices, market caps, and other statistical data.

## API Endpoints

### 1. Cron API

The `cron` API fetches the current price, market cap, and 24 hours changes of bitcoin, ethereum, matic cryptocurrencies and the stores changes after 2 hours.

- **Endpoint:** `/`
- **Method:** `GET`
- **Query Parameters:**
  - `ids` (string, required): Comma-separated list of cryptocurrency IDs (e.g., `bitcoin,ethereum,matic`).
  - `vs_currencies` (string, optional): The currency to compare against (default: `usd`).
 
### 2. stats API

The `stats` API fetches the current price of specified crypto.

- **Endpoint:** `/stats/?coin=bitcoin`
- **Method:** `GET`
- **Query Parameters:**
  - `ids` (string, required): Comma-separated list of cryptocurrency IDs (e.g., `bitcoin,ethereum,matic`).
  


### 1. deviation API

The `deviation` API fetches the standard deviation of last 100 enteries in db of a specified crypto.

- **Endpoint:** `/deviation/?coin=bitcoin`
- **Method:** `GET`
- **Query Parameters:**
  - `ids` (string, required): Comma-separated list of cryptocurrency IDs (e.g., `bitcoin,ethereum,matic`).



