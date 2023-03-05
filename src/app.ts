import { Asset } from "./asset";
import { orderbook } from "./orderbook";
import { currency } from "./utils/currency";
import { printOverview } from "./utils/utils";

let eth = new Asset(10.0, currency.eth);
let usd = new Asset(2000.0, currency.usd);

orderbook(eth, usd);

setInterval(function () {
  printOverview(eth, usd);
}, 30000);

setInterval(function () {
  orderbook(eth, usd);
}, 5000);
