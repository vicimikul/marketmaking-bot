"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bid = void 0;
const status_1 = require("./utils/status");
const utils_1 = require("./utils/utils");
class Bid {
    constructor(bestBidValue, maxAmountETH) {
        this.price = (0, utils_1.getRandomPrice)(bestBidValue);
        this.amount = (0, utils_1.getRandomArbitrary)(0, maxAmountETH);
        this.bestBidValue = bestBidValue;
        this.status = status_1.OrderStatus.open;
        console.log("PLACE BID @", this.price, this.amount);
    }
    fillBid(availableAmount) {
        if (this.price > this.bestBidValue && this.amount <= availableAmount) {
            console.log("FILLED BID @ ", this.price, this.amount, "ETH - " +
                this.amount +
                " USD + " +
                (0, utils_1.roundTwoDigits)(this.amount * this.price));
            this.status = status_1.OrderStatus.filled;
            return true;
        }
        else {
            this.closeBid();
            return false;
        }
    }
    closeBid() {
        this.status = status_1.OrderStatus.closed;
    }
}
exports.Bid = Bid;
//# sourceMappingURL=bid.js.map