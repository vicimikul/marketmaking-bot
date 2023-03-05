"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderbook = void 0;
const bid_1 = require("./bid");
const ask_1 = require("./ask");
const utils_1 = require("./utils/utils");
function orderbook(eth, usd) {
    return __awaiter(this, void 0, void 0, function* () {
        let [bestBidValue, bestAskValue] = yield (0, utils_1.getBestBidAsk)();
        // PLACE BID
        const bids = placeBids(bestBidValue, eth);
        // PLACE ASK
        const asks = placeAsks(bestAskValue, usd);
        // FILL BID
        fillBids(bids, eth, usd);
        // FILL ASK
        fillAsks(asks, eth, usd);
    });
}
exports.orderbook = orderbook;
// HELPER FUNCTIONS
function placeBids(bestBidValue, eth) {
    let bids = [];
    for (let i = 0; i < 5; i++) {
        let bid = new bid_1.Bid(bestBidValue, eth.getValue());
        bids.push(bid);
    }
    return bids;
}
function fillBids(bids, eth, usd) {
    for (let i = 0; i < 5; i++) {
        let bidIterator = bids[i];
        if (bidIterator.fillBid(eth.getValue())) {
            eth.updateValue((0, utils_1.roundTwoDigits)(eth.getValue() - bidIterator.amount));
            usd.updateValue((0, utils_1.roundTwoDigits)(usd.getValue() + bidIterator.amount * bidIterator.price));
        }
    }
}
function placeAsks(bestAskValue, usd) {
    let asks = [];
    for (let i = 0; i < 5; i++) {
        let ask = new ask_1.Ask(bestAskValue, usd.getValue());
        asks.push(ask);
    }
    return asks;
}
function fillAsks(asks, eth, usd) {
    for (let i = 0; i < 5; i++) {
        let askIterator = asks[i];
        if (askIterator.fillAsk(usd.getValue())) {
            eth.updateValue((0, utils_1.roundTwoDigits)(eth.getValue() + askIterator.amount));
            usd.updateValue((0, utils_1.roundTwoDigits)(usd.getValue() - askIterator.amount * askIterator.price));
        }
    }
}
//# sourceMappingURL=orderbook.js.map