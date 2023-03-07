import { Asset } from "./asset";
import { orderbook } from "./orderbook";
import { currency } from "./utils/currency";
import { printOverview } from "./utils/utils";

// Initialize assets ETH and USD
let eth = new Asset(10.0, currency.eth);
let usd = new Asset(2000.0, currency.usd);

// Initial run of the bot's main functionality
orderbook(eth, usd);

// Print balances every 30 seconds
setInterval(function () {
  printOverview(eth, usd);
}, 30000);

// Run main bot functionality every 5 seconds
setInterval(function () {
  orderbook(eth, usd);
}, 5000);
