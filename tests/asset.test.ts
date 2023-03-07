import { Asset } from "../src/asset";
import { currency } from "../src/utils/currency";

describe("asset class", () => {
  const eth = new Asset(10, currency.eth);
  const usd = new Asset(2000, currency.usd);

  test("create assets", () => {
    expect(eth.getSymbol()).toBe(currency.eth);
    expect(eth.getValue()).toBe(10);

    expect(usd.getSymbol()).toBe(currency.usd);
    expect(usd.getValue()).toBe(2000);
  });

  test("update asset value", () => {
    eth.updateValue(5);
    usd.updateValue(1000);

    expect(eth.getValue()).toBe(5);
    expect(usd.getValue()).toBe(1000);
  });
});
