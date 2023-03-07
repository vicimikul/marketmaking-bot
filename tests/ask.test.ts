import { Ask } from "../src/ask";
import { testOrderCreation } from "./test-utils";
import { OrderStatus } from "../src/utils/status";

describe("bid class", () => {
  let ask1 = new Ask(1000, 10);
  let ask2 = new Ask(1000, 10);
  let ask3 = new Ask(1000, 10);

  test("ask creation", () => {
    testOrderCreation(ask1, 1000, 10);
    testOrderCreation(ask2, 1000, 10);
    testOrderCreation(ask3, 1000, 10);
  });

  test("fill & close ask", () => {
    ask1.price = 999;
    let res1 = ask1.fillAsk(10);
    expect(ask1.status).toBe(OrderStatus.filled);
    expect(res1).toBe(true);

    ask2.price = 1001;
    let res2 = ask2.fillAsk(10);
    expect(ask2.status).toBe(OrderStatus.closed);
    expect(res2).toBe(false);

    ask3.amount = 11;
    let res3 = ask3.fillAsk(10);
    expect(ask3.status).toBe(OrderStatus.closed);
    expect(res3).toBe(false);
  });
});
