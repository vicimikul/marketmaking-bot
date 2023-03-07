"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asset_1 = require("../src/asset");
const orderbook_1 = require("../src/orderbook");
const currency_1 = require("../src/utils/currency");
const test_utils_1 = require("./test-utils");
describe("oderbook functions", () => {
    let eth = new asset_1.Asset(10, currency_1.currency.eth);
    let usd = new asset_1.Asset(2000, currency_1.currency.usd);
    const bestValue = 1000;
    beforeEach(() => {
        eth.updateValue(10);
        usd.updateValue(2000);
    });
    test("place bids", () => {
        let res = (0, orderbook_1.placeBids)(bestValue, eth);
        expect(res).toHaveLength(5);
        (0, test_utils_1.testBatchOrdersCreation)(res, bestValue, eth.getValue());
    });
    test("place asks", () => {
        let res = (0, orderbook_1.placeAsks)(bestValue, usd);
        expect(res).toHaveLength(5);
        (0, test_utils_1.testBatchOrdersCreation)(res, bestValue, usd.getValue());
    });
});
//# sourceMappingURL=orderbook.test.js.map