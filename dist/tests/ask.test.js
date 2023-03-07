"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_1 = require("../src/ask");
const test_utils_1 = require("./test-utils");
const status_1 = require("../src/utils/status");
describe("bid class", () => {
    let ask1 = new ask_1.Ask(1000, 10);
    let ask2 = new ask_1.Ask(1000, 10);
    let ask3 = new ask_1.Ask(1000, 10);
    test("ask creation", () => {
        (0, test_utils_1.testOrderCreation)(ask1, 1000, 10);
        (0, test_utils_1.testOrderCreation)(ask2, 1000, 10);
        (0, test_utils_1.testOrderCreation)(ask3, 1000, 10);
    });
    test("fill & close ask", () => {
        ask1.price = 999;
        let res1 = ask1.fillAsk(10);
        expect(ask1.status).toBe(status_1.OrderStatus.filled);
        expect(res1).toBe(true);
        ask2.price = 1001;
        let res2 = ask2.fillAsk(10);
        expect(ask2.status).toBe(status_1.OrderStatus.closed);
        expect(res2).toBe(false);
        ask3.amount = 11;
        let res3 = ask3.fillAsk(10);
        expect(ask3.status).toBe(status_1.OrderStatus.closed);
        expect(res3).toBe(false);
    });
});
//# sourceMappingURL=ask.test.js.map