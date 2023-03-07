import { Ask } from "../src/ask";
import { Asset } from "../src/asset";
import { Bid } from "../src/bid";
import { placeAsks, placeBids } from "../src/orderbook";
import { currency } from "../src/utils/currency";
import { OrderStatus } from "../src/utils/status";
import { testBatchOrdersCreation } from "./test-utils";

describe("oderbook functions", () => {
  let eth = new Asset(10, currency.eth);
  let usd = new Asset(2000, currency.usd);
  const bestValue = 1000;

  beforeEach(() => {
    eth.updateValue(10);
    usd.updateValue(2000);
  });

  test("place bids", () => {
    let res = placeBids(bestValue, eth);
    expect(res).toHaveLength(5);
    testBatchOrdersCreation(res, bestValue, eth.getValue());
  });

  test("place asks", () => {
    let res = placeAsks(bestValue, usd);
    expect(res).toHaveLength(5);
    testBatchOrdersCreation(res, bestValue, usd.getValue());
  });
});
