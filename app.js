const express = require("express")
const dotenv = require("dotenv")
const cron = require("node-cron")
const connectDB = require("./config/db")
const {fetchCryptoData} = require("./controllers/cronController")

const app = express()
app.use(express.json())
dotenv.config();
connectDB();

app.use(require("./routes/cryptoRoute"))
cron.schedule('0 */2 * * *', async () => {
    try {
        const result = await fetchCryptoData();
        console.log('Inserted cryptocurrencies:', result.insertedNames);
    } catch (error) {
        console.error('Error in cron job:', error);
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
