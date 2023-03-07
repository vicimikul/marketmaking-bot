import { Ask } from "../src/ask";
import { Bid } from "../src/bid";
import { OrderStatus } from "../src/utils/status";

// Test multiple orders creation
export function testBatchOrdersCreation(
  orders: Array<Bid | Ask>,
  bestValue: number,
  amount: number
) {
  for (let ord of orders) {
    testOrderCreation(ord, bestValue, amount);
  }
}
// Test bid | ask creation
export function testOrderCreation(
  ord: Bid | Ask,
  bestValue: number,
  amount: number
) {
  expect(ord.bestValue).toBe(bestValue);
  expect(ord.status).toBe(OrderStatus.open);
  expect(ord.amount).toBeLessThan(amount);
  expect(ord.price).toBeGreaterThanOrEqual(bestValue * 0.95);
  expect(ord.price).toBeLessThan(bestValue * 1.05);
}


