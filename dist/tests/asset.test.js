"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asset_1 = require("../src/asset");
const currency_1 = require("../src/utils/currency");
describe("asset class", () => {
    const eth = new asset_1.Asset(10, currency_1.currency.eth);
    const usd = new asset_1.Asset(2000, currency_1.currency.usd);
    test("create assets", () => {
        expect(eth.getSymbol()).toBe(currency_1.currency.eth);
        expect(eth.getValue()).toBe(10);
        expect(usd.getSymbol()).toBe(currency_1.currency.usd);
        expect(usd.getValue()).toBe(2000);
    });
    test("update asset value", () => {
        eth.updateValue(5);
        usd.updateValue(1000);
        expect(eth.getValue()).toBe(5);
        expect(usd.getValue()).toBe(1000);
    });
});
//# sourceMappingURL=asset.test.js.map