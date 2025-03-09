export class CalculatorModel {
  constructor(
    public id: number,
    public name: string,
    public symbol: string,
    public operation: (a: number, b: number) => number
  ) {}

  calculate(a: number, b: number): number {
    return this.operation(a, b);
  }
}
