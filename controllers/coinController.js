const axios = require('axios');

const coinData = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin query parameter is required' });
    }

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
            params: {
                ids: coin,
                vs_currencies: 'usd',
                include_market_cap: 'true',
                include_24hr_change: 'true',
            },
        });
        
        const cryptoData = response.data[coin];

        if (!cryptoData) {
            return res.status(404).json({ error: 'Coin data not found' });
        }

        const formattedResponse = {
            price: cryptoData.usd,
            marketCap: cryptoData.usd_market_cap,
            "24hChange": cryptoData.usd_24h_change,
        };

        res.status(200).json(formattedResponse);
    } catch (error) {
        console.error('Error fetching coin stats:', error);
        res.status(500).json({ error: 'Failed to fetch coin stats' });
    }
};

module.exports =  coinData ;
