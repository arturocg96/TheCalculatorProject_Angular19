import { Injectable } from '@angular/core';
import { CalculatorModel } from '../models/calculator.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  #calculators: CalculatorModel[] = [
    new CalculatorModel(1, 'Suma', '+', (a, b) => a + b),
    new CalculatorModel(2, 'Resta', '−', (a, b) => a - b),
  ];

  getCalculators(): CalculatorModel[] {
    return this.#calculators;
  }

  getCalculator(id: number): CalculatorModel | undefined {
    return this.#calculators.find((calc) => calc.id === id);
  }

  
}
