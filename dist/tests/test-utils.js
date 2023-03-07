"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testOrderCreation = exports.testBatchOrdersCreation = void 0;
const status_1 = require("../src/utils/status");
// Test multiple orders creation
function testBatchOrdersCreation(orders, bestValue, amount) {
    for (let ord of orders) {
        testOrderCreation(ord, bestValue, amount);
    }
}
exports.testBatchOrdersCreation = testBatchOrdersCreation;
// Test bid | ask creation
function testOrderCreation(ord, bestValue, amount) {
    expect(ord.bestValue).toBe(bestValue);
    expect(ord.status).toBe(status_1.OrderStatus.open);
    expect(ord.amount).toBeLessThan(amount);
    expect(ord.price).toBeGreaterThanOrEqual(bestValue * 0.95);
    expect(ord.price).toBeLessThan(bestValue * 1.05);
}
exports.testOrderCreation = testOrderCreation;
//# sourceMappingURL=test-utils.js.map