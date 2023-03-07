"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asset_1 = require("./asset");
const orderbook_1 = require("./orderbook");
const currency_1 = require("./utils/currency");
const utils_1 = require("./utils/utils");
// Initialize assets ETH and USD
let eth = new asset_1.Asset(10.0, currency_1.currency.eth);
let usd = new asset_1.Asset(2000.0, currency_1.currency.usd);
// Initial run of the bot's main functionality
(0, orderbook_1.orderbook)(eth, usd);
// Print balances every 30 seconds
setInterval(function () {
    (0, utils_1.printOverview)(eth, usd);
}, 30000);
// Run main bot functionality every 5 seconds
setInterval(function () {
    (0, orderbook_1.orderbook)(eth, usd);
}, 5000);
//# sourceMappingURL=app.js.map