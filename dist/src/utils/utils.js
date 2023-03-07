"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomPrice = exports.roundTwoDigits = exports.getRandomArbitrary = exports.makeRequest = exports.getBestBidAsk = exports.printOverview = void 0;
// PRINT ASSETS BALACES
function printOverview(asset1, asset2) {
    console.log(asset1.getSymbol() +
        ": " +
        asset1.getValue().toString() +
        " " +
        asset2.getSymbol() +
        ": " +
        asset2.getValue().toString());
}
exports.printOverview = printOverview;
// RETRIEVE MARKET DATA
function getBestBidAsk() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield makeRequest().then((data) => {
            return data;
        });
        return [res[0][0], res[25][0]];
    });
}
exports.getBestBidAsk = getBestBidAsk;
function makeRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch("https://api.rhino.fi/bfx/v2/book/tETHUSD/P0", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((response) => {
            return response;
        });
    });
}
exports.makeRequest = makeRequest;
// RANDOM NUMBERS
function getRandomArbitrary(min, max) {
    return roundTwoDigits(Math.random() * (max - min) + min);
}
exports.getRandomArbitrary = getRandomArbitrary;
function roundTwoDigits(value) {
    return Math.round(value * 100) / 100;
}
exports.roundTwoDigits = roundTwoDigits;
function getRandomPrice(bestValue) {
    return getRandomArbitrary(bestValue * 0.95, bestValue * 1.05);
}
exports.getRandomPrice = getRandomPrice;
//# sourceMappingURL=utils.js.map