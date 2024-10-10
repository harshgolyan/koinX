const axios = require('axios');
const CryptoCurrency = require("../models/cryptoSchema");

const cryptoControllerData = async () => {
    try {
        const cryptocurrencies = ['bitcoin', 'matic-network', 'ethereum'];
        const promises = cryptocurrencies.map((crypto) =>
            axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
                params: {
                    ids: crypto,
                    vs_currencies: 'usd',
                    include_market_cap: 'true',
                    include_24hr_change: 'true',
                },
            })
        );

        const results = await Promise.all(promises);
        const insertedNames = [];

        for (const result of results) {
            const cryptoData = result.data;
            const name = Object.keys(cryptoData)[0];
            const { usd: currentPriceUsd, usd_market_cap: marketCapUsd, usd_24h_change: priceChangePercentage24h } = cryptoData[name];

            const cryptocurrency = new CryptoCurrency({
                name,
                currentPriceUSD: currentPriceUsd,
                marketCapUSD: marketCapUsd,
                priceChangeIn24hr: priceChangePercentage24h,
            });

            await cryptocurrency.save();
            insertedNames.push(name);
        }
       console.log(`Inserted data for: ${insertedNames.join(', ')}`);
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        rconsole.log({ error: "Failed to add data to the database" });
    }
};

module.exports = cryptoControllerData;
