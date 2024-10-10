const express = require("express")
const {cryptoControllerData} = require("../controllers/cronController")
const coinData = require("../controllers/coinController")
const deviationData = require("../controllers/deviationController")

const router = express.Router()

router.get("/",cryptoControllerData);

router.get("/stats",coinData);

router.get("/deviation",deviationData);

module.exports = router;