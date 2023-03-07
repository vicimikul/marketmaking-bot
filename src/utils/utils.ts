import { Asset } from "../asset";

// PRINT ASSETS BALACES
export function printOverview(asset1: Asset, asset2: Asset) {
  console.log(
    asset1.getSymbol() +
      ": " +
      asset1.getValue().toString() +
      " " +
      asset2.getSymbol() +
      ": " +
      asset2.getValue().toString()
  );
}

// RETRIEVE MARKET DATA
export async function getBestBidAsk(): Promise<[number, number]> {
  let res = await makeRequest().then((data) => {
    return data;
  });
  return [res[0][0], res[25][0]];
}

export async function makeRequest() {
  return fetch("https://api.rhino.fi/bfx/v2/book/tETHUSD/P0", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}

// RANDOM NUMBERS
export function getRandomArbitrary(min, max): number {
  return roundTwoDigits(Math.random() * (max - min) + min);
}

export function roundTwoDigits(value: number): number {
  return Math.round(value * 100) / 100;
}

export function getRandomPrice(bestValue): number {
  return getRandomArbitrary(bestValue * 0.95, bestValue * 1.05);
}
