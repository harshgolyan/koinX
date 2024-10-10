const express = require("express")
const dotenv = require("dotenv")
const cron = require("node-cron")
const connectDB = require("./config/db")
const cryptoControllerData = require("./controllers/cronController")

const app = express()
app.use(express.json())
dotenv.config();
connectDB();

app.use(require("./routes/cryptoRoute"))
cron.schedule('0 */2 * * *', cryptoControllerData);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
