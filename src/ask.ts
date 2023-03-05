import { OrderStatus } from "./utils/status";
import {
  getRandomArbitrary,
  getRandomPrice,
  roundTwoDigits,
} from "./utils/utils";

export class Ask {
  price: number;
  amount: number;
  bestAskValue: number;
  status: OrderStatus;

  public constructor(bestAskValue: number, maxAmountUSD: number) {
    this.price = getRandomPrice(bestAskValue);
    this.amount = getRandomArbitrary(0, maxAmountUSD / this.price);
    this.bestAskValue = bestAskValue;
    this.status = OrderStatus.open;
    console.log("PLACE ASK @", this.price, this.amount);
  }

  public fillAsk(availableAmount: number): boolean {
    if (
      this.price < this.bestAskValue &&
      this.price * this.amount < availableAmount
    ) {
      console.log(
        "FILLED ASK @ ",
        this.price,
        this.amount,
        "ETH + " +
          this.amount +
          " USD - " +
          roundTwoDigits(this.amount * this.price)
      );
      this.status = OrderStatus.filled;
      return true;
    } else {
      this.closeAsk();
      return false;
    }
  }

  private closeAsk() {
    this.status = OrderStatus.closed;
  }
}
