import { OrderStatus } from "./utils/status";
import {
  getRandomArbitrary,
  getRandomPrice,
  roundTwoDigits,
} from "./utils/utils";

export class Bid {
  price: number;
  amount: number;
  bestValue: number;
  status: OrderStatus;

  public constructor(bestBidValue: number, maxAmountETH: number) {
    this.price = getRandomPrice(bestBidValue);
    this.amount = getRandomArbitrary(0, maxAmountETH);
    this.bestValue = bestBidValue;
    this.status = OrderStatus.open;
    console.log("PLACE BID @", this.price, this.amount);
  }

  public fillBid(availableAmount: number): boolean {
    if (this.price > this.bestValue && this.amount <= availableAmount) {
      console.log(
        "FILLED BID @ ",
        this.price,
        this.amount,
        "ETH - " +
          this.amount +
          " USD + " +
          roundTwoDigits(this.amount * this.price)
      );
      this.status = OrderStatus.filled;
      return true;
    } else {
      this.closeBid();
      return false;
    }
  }

  private closeBid() {
    this.status = OrderStatus.closed;
  }
}
