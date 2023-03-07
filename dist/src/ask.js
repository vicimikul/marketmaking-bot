"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ask = void 0;
const status_1 = require("./utils/status");
const utils_1 = require("./utils/utils");
class Ask {
    constructor(bestAskValue, maxAmountUSD) {
        this.price = (0, utils_1.getRandomPrice)(bestAskValue);
        this.amount = (0, utils_1.getRandomArbitrary)(0, maxAmountUSD / this.price);
        this.bestValue = bestAskValue;
        this.status = status_1.OrderStatus.open;
        console.log("PLACE ASK @", this.price, this.amount);
    }
    fillAsk(availableAmount) {
        if (this.price < this.bestValue &&
            this.price * this.amount < availableAmount) {
            console.log("FILLED ASK @ ", this.price, this.amount, "ETH + " +
                this.amount +
                " USD - " +
                (0, utils_1.roundTwoDigits)(this.amount * this.price));
            this.status = status_1.OrderStatus.filled;
            return true;
        }
        else {
            this.closeAsk();
            return false;
        }
    }
    closeAsk() {
        this.status = status_1.OrderStatus.closed;
    }
}
exports.Ask = Ask;
//# sourceMappingURL=ask.js.map