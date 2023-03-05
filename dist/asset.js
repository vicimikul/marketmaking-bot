"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
class Asset {
    constructor(value, symbol) {
        this.value = value;
        this.symbol = symbol;
    }
    getValue() {
        return this.value;
    }
    getSymbol() {
        return this.symbol;
    }
    updateValue(newValue) {
        this.value = newValue;
    }
}
exports.Asset = Asset;
//# sourceMappingURL=asset.js.map