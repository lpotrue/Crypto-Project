const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptoCoinsSchema = new Schema({
    id: String,
    name: String,
    symbol: String,
    price_usd: String,
    price_btc: String,
    last_updated: String,
    percent_change_24h: String,
    percent_change_1h: String,
    percent_change_7d: String,
    rank: String,


});

module.exports = mongoose.model('Coins', CryptoCoinsSchema);