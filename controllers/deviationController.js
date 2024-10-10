const CryptoCurrency = require("../models/cryptoSchema");

const calculateStandardDeviation = (prices) => {
    const n = prices.length;
    const mean = prices.reduce((sum, price) => sum + price, 0) / n;
    const squaredDifferences = prices.map(price => Math.pow(price - mean, 2));
    const variance = squaredDifferences.reduce((sum, sqDiff) => sum + sqDiff, 0) / n;
    return Math.sqrt(variance);
};

const deviationController = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin query parameter is required' });
    }

    try {
        const records = await CryptoCurrency.find({ name: coin }).sort({ createdAt: -1 }).limit(100);
        if (records.length === 0) {
            return res.status(404).json({ error: 'No records found for this coin' });
        }

        const prices = records.map(record => record.currentPriceUSD);
        const deviation = calculateStandardDeviation(prices).toFixed(2);

        res.status(200).json({ deviation: parseFloat(deviation) });
    } catch (error) {
        console.error('Error fetching price deviation:', error);
        res.status(500).json({ error: 'Failed to fetch price deviation' });
    }
};

module.exports = deviationController;