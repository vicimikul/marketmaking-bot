"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bid_1 = require("../src/bid");
const test_utils_1 = require("./test-utils");
const status_1 = require("../src/utils/status");
describe("bid class", () => {
    let bid1 = new bid_1.Bid(1000, 10);
    let bid2 = new bid_1.Bid(1000, 10);
    let bid3 = new bid_1.Bid(1000, 10);
    bid1.amount;
    test("bid creation", () => {
        (0, test_utils_1.testOrderCreation)(bid1, 1000, 10);
        (0, test_utils_1.testOrderCreation)(bid2, 1000, 10);
    });
    test("fill & close bid", () => {
        bid1.price = 1001;
        let res1 = bid1.fillBid(10);
        expect(bid1.status).toBe(status_1.OrderStatus.filled);
        expect(res1).toBe(true);
        bid2.price = 999;
        let res2 = bid2.fillBid(10);
        expect(bid2.status).toBe(status_1.OrderStatus.closed);
        expect(res2).toBe(false);
        bid3.amount = 11;
        let res3 = bid3.fillBid(10);
        expect(bid3.status).toBe(status_1.OrderStatus.closed);
        expect(res3).toBe(false);
    });
});
//# sourceMappingURL=bid.test.js.map