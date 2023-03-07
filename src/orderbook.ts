import { Asset } from "./asset";
import { Bid } from "./bid";
import { Ask } from "./ask";
import { getBestBidAsk, roundTwoDigits } from "./utils/utils";

export async function orderbook(eth: Asset, usd: Asset) {
  let [bestBidValue, bestAskValue] = await getBestBidAsk();

  // PLACE BID
  const bids = placeBids(bestBidValue, eth);

  // PLACE ASK
  const asks = placeAsks(bestAskValue, usd);

  // FILL BID
  fillBids(bids, eth, usd);

  // FILL ASK
  fillAsks(asks, eth, usd);
}

// HELPER FUNCTIONS

export function placeBids(bestBidValue: number, eth: Asset): Array<Bid> {
  let bids: Array<Bid> = [];
  for (let i = 0; i < 5; i++) {
    let bid: Bid = new Bid(bestBidValue, eth.getValue());
    bids.push(bid);
  }

  return bids;
}

export function fillBids(bids: Array<Bid>, eth: Asset, usd: Asset) {
  for (let i = 0; i < 5; i++) {
    let bidIterator = bids[i];
    if (bidIterator.fillBid(eth.getValue())) {
      eth.updateValue(roundTwoDigits(eth.getValue() - bidIterator.amount));
      usd.updateValue(
        roundTwoDigits(usd.getValue() + bidIterator.amount * bidIterator.price)
      );
    }
  }
}

export function placeAsks(bestAskValue: number, usd: Asset): Array<Ask> {
  let asks: Array<Ask> = [];
  for (let i = 0; i < 5; i++) {
    let ask: Ask = new Ask(bestAskValue, usd.getValue());
    asks.push(ask);
  }
  return asks;
}

export function fillAsks(asks: Array<Ask>, eth: Asset, usd: Asset) {
  for (let i = 0; i < 5; i++) {
    let askIterator = asks[i];
    if (askIterator.fillAsk(usd.getValue())) {
      eth.updateValue(roundTwoDigits(eth.getValue() + askIterator.amount));
      usd.updateValue(
        roundTwoDigits(usd.getValue() - askIterator.amount * askIterator.price)
      );
    }
  }
}
