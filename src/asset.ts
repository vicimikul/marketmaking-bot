export class Asset {
  private value: number;
  private symbol: string;

  public constructor(value: number, symbol: string) {
    this.value = value;
    this.symbol = symbol;
  }

  public getValue(): number {
    return this.value;
  }

  public getSymbol(): string {
    return this.symbol;
  }

  public updateValue(newValue): void {
    this.value = newValue;
  }
}
