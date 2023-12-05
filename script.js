const apiKey = 'H2T1DLF4KKF82KC6'; // Alpha Vantage API key

async function getStockPrice() {
  const stockSymbol = document.getElementById('stockInput').value.toUpperCase();
  const stockPriceElement = document.getElementById('stockPrice');

  if (stockSymbol) {
    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`);
      const data = await response.json();

      if (data['Global Quote']) {
        const price = data['Global Quote']['05. price'];
        stockPriceElement.textContent = `Stock Price for ${stockSymbol}: $${price}`;
      } else {
        stockPriceElement.textContent = 'Stock symbol not found. Please try again.';
      }
    } catch (error) {
      stockPriceElement.textContent = 'Error fetching data. Please try again later.';
    }
  } else {
    stockPriceElement.textContent = 'Please enter a stock symbol.';
  }
}

// the global quote function retrieves global market data for a particular stock
// '05. price' is an identifier for a particular price-related field, such as the current price or a specific price point 
// for the stock symbol requested in the API call