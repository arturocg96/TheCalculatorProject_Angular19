import { Component, inject, Inject } from '@angular/core';
import { CalculatorModel } from '../../models/calculator.model';
import { CalculatorService } from '../../services/calculator.service';
import { CalculatorCardComponent } from '../calculator-card/calculator-card.component';

@Component({
  selector: 'app-calculator-list',
  imports: [CalculatorCardComponent],
  templateUrl: './calculator-list.component.html',
  styleUrl: './calculator-list.component.css'
})
export class CalculatorListComponent {

  calculators: CalculatorModel[] = [];

  calculatorService = inject(CalculatorService);

  ngOnInit() {

    try {
      const response = this.calculatorService.getCalculators();
      this.calculators = response;
    } catch (error) {
      console.error(error);
    }

  }

}
