const mongoose = require("mongoose")

const cryptoSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    currentPriceUSD : {
        type : Number,
        required : true
    },
    marketCapUSD : {
        type : Number,
        required : true
    },
    priceChangeIn24hr : {
        type : Number,
        required : true
    }

})

const  Crypto = mongoose.model("Crypto", cryptoSchema)
module.exports = Crypto;
